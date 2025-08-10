
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingRequest {
  naam: string;
  postcode: string;
  woonplaats: string;
  meubeltype: string;
  aantal?: string;
  datum?: string;
  telefoon: string;
  email: string;
  opmerkingen?: string;
}

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const ADMIN_EMAIL = "info@meubelreinigingexpert.nl";
const FROM_PRIMARY = "Meubel Reiniging Expert <info@meubelreinigingexpert.nl>";
const FROM_FALLBACK = "Lovable <onboarding@resend.dev>";

const buildAdminHtml = (payload: BookingRequest) => `
  <h1>Nieuwe offerte-aanvraag via website</h1>
  <p>Er is zojuist een nieuwe aanvraag binnengekomen. Hieronder de details:</p>
  <table cellpadding="8" cellspacing="0" border="0" style="border-collapse:collapse;">
    <tr><td><strong>Naam</strong></td><td>${payload.naam}</td></tr>
    <tr><td><strong>E-mail</strong></td><td>${payload.email}</td></tr>
    <tr><td><strong>Telefoon</strong></td><td>${payload.telefoon}</td></tr>
    <tr><td><strong>Postcode</strong></td><td>${payload.postcode}</td></tr>
    <tr><td><strong>Woonplaats</strong></td><td>${payload.woonplaats}</td></tr>
    <tr><td><strong>Meubeltype</strong></td><td>${payload.meubeltype}</td></tr>
    <tr><td><strong>Aantal</strong></td><td>${payload.aantal ?? "-"}</td></tr>
    <tr><td><strong>Gewenste datum</strong></td><td>${payload.datum ?? "-"}</td></tr>
    <tr><td><strong>Opmerkingen</strong></td><td>${payload.opmerkingen ? payload.opmerkingen.replace(/\n/g, "<br/>") : "-"}</td></tr>
  </table>
  <p style="margin-top:16px;">Snel reageren? Bel: <a href="tel:${payload.telefoon}">${payload.telefoon}</a> of mail: <a href="mailto:${payload.email}">${payload.email}</a></p>
`;

const buildCustomerHtml = (payload: BookingRequest) => `
  <h1>Bevestiging van uw aanvraag</h1>
  <p>Beste ${payload.naam},</p>
  <p>Hartelijk dank voor uw offerte-aanvraag bij Meubel Reiniging Expert. We hebben uw bericht ontvangen en nemen binnen 24 uur contact met u op.</p>
  <p>Samenvatting van uw aanvraag:</p>
  <table cellpadding="8" cellspacing="0" border="0" style="border-collapse:collapse;">
    <tr><td><strong>Meubeltype</strong></td><td>${payload.meubeltype}</td></tr>
    <tr><td><strong>Aantal</strong></td><td>${payload.aantal ?? "-"}</td></tr>
    <tr><td><strong>Postcode</strong></td><td>${payload.postcode}</td></tr>
    <tr><td><strong>Woonplaats</strong></td><td>${payload.woonplaats}</td></tr>
    <tr><td><strong>Gewenste datum</strong></td><td>${payload.datum ?? "-"}</td></tr>
  </table>
  <p style="margin-top:16px;">Heeft u nog vragen? Antwoord gerust op deze e-mail of bel ons via <a href="tel:+31613003226">06 - 13 00 32 26</a>.</p>
  <p>Met vriendelijke groet,<br/>Meubel Reiniging Expert</p>
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload = (await req.json()) as BookingRequest;
    console.log("[send-booking-emails] Payload received:", payload);

    const required = ["naam", "email", "telefoon", "meubeltype", "postcode", "woonplaats"] as const;
    const missing = required.filter((k) => !payload[k] || String(payload[k]).trim() === "");
    if (missing.length) {
      console.warn("[send-booking-emails] Missing fields:", missing);
      return new Response(
        JSON.stringify({ error: `Ontbrekende velden: ${missing.join(", ")}` }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Try with the primary domain first
    try {
      const adminRes = await resend.emails.send({
        from: FROM_PRIMARY,
        to: [ADMIN_EMAIL],
        subject: "Nieuwe offerte-aanvraag via website",
        html: buildAdminHtml(payload),
        reply_to: payload.email,
      });
      console.log("[send-booking-emails] Admin email sent:", adminRes);

      const customerRes = await resend.emails.send({
        from: FROM_PRIMARY,
        to: [payload.email],
        subject: "Bevestiging: we hebben uw offerte-aanvraag ontvangen",
        html: buildCustomerHtml(payload),
      });
      console.log("[send-booking-emails] Customer email sent:", customerRes);
    } catch (primaryError) {
      console.warn("[send-booking-emails] Primary send failed, trying fallback sender:", primaryError);
      // Fallback to onboarding@resend.dev if domain not yet verified
      const adminFallbackRes = await resend.emails.send({
        from: FROM_FALLBACK,
        to: [ADMIN_EMAIL],
        subject: "Nieuwe offerte-aanvraag via website",
        html: buildAdminHtml(payload),
        reply_to: payload.email,
      });
      console.log("[send-booking-emails] Admin email sent (fallback):", adminFallbackRes);

      const customerFallbackRes = await resend.emails.send({
        from: FROM_FALLBACK,
        to: [payload.email],
        subject: "Bevestiging: we hebben uw offerte-aanvraag ontvangen",
        html: buildCustomerHtml(payload),
      });
      console.log("[send-booking-emails] Customer email sent (fallback):", customerFallbackRes);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("[send-booking-emails] Unhandled error:", error);
    return new Response(JSON.stringify({ error: error?.message || "Unknown error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
