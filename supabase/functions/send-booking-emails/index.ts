
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
  <!doctype html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Nieuwe offerte-aanvraag</title>
    </head>
    <body style="margin:0; padding:0; background-color:#f6f9fc;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f6f9fc;">
        <tr>
          <td align="center" style="padding:24px;">
            <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background:#ffffff; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif; color:#111827;">
              <tr>
                <td style="background:hsl(214,100%,36%); padding:20px 24px;">
                  <div style="color:#ffffff; font-size:18px; font-weight:700;">Meubel Reiniging Expert</div>
                  <div style="color:#dbeafe; font-size:12px; margin-top:4px;">Nieuwe offerte-aanvraag via website</div>
                </td>
              </tr>
              <tr>
                <td style="padding:24px;">
                  <p style="margin:0 0 16px 0; font-size:16px;">Er is zojuist een nieuwe aanvraag binnengekomen. Hieronder de details:</p>
                  <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; margin-top:8px;">
                    <tr>
                      <td style="padding:10px 0; width:180px; color:#6b7280;">Naam</td>
                      <td style="padding:10px 0; font-weight:600;">${payload.naam}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0; width:180px; color:#6b7280;">E-mail</td>
                      <td style="padding:10px 0; font-weight:600;">${payload.email}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0; width:180px; color:#6b7280;">Telefoon</td>
                      <td style="padding:10px 0; font-weight:600;">${payload.telefoon}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0; width:180px; color:#6b7280;">Postcode</td>
                      <td style="padding:10px 0;">${payload.postcode}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0; width:180px; color:#6b7280;">Woonplaats</td>
                      <td style="padding:10px 0;">${payload.woonplaats}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0; width:180px; color:#6b7280;">Meubeltype</td>
                      <td style="padding:10px 0;">${payload.meubeltype}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0; width:180px; color:#6b7280;">Aantal</td>
                      <td style="padding:10px 0;">${payload.aantal ?? '-'}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0; width:180px; color:#6b7280;">Gewenste datum</td>
                      <td style="padding:10px 0;">${payload.datum ?? '-'}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0; width:180px; color:#6b7280; vertical-align:top;">Opmerkingen</td>
                      <td style="padding:10px 0;">${payload.opmerkingen ? payload.opmerkingen.replace(/\n/g, '<br/>') : '-'}</td>
                    </tr>
                  </table>

                  <div style="margin-top:20px;">
                    <a href="tel:${payload.telefoon}" style="display:inline-block; padding:10px 16px; background:hsl(214,100%,36%); color:#ffffff; text-decoration:none; border-radius:8px; font-weight:600;">Bel ${payload.telefoon}</a>
                    <a href="mailto:${payload.email}" style="display:inline-block; padding:10px 16px; margin-left:8px; background:#e5e7eb; color:#111827; text-decoration:none; border-radius:8px; font-weight:600;">E-mail klant</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 24px; background:#f9fafb; color:#6b7280; font-size:12px;">
                  Ontvangen via meubelreinigingexpert.nl • Reageer bij voorkeur binnen 24 uur.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;


const buildCustomerHtml = (payload: BookingRequest) => `
  <!doctype html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Bevestiging offerte-aanvraag</title>
    </head>
    <body style="margin:0; padding:0; background-color:#f6f9fc;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f6f9fc;">
        <tr>
          <td align="center" style="padding:24px;">
            <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background:#ffffff; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif; color:#111827;">
              <tr>
                <td style="background:hsl(214,100%,36%); padding:20px 24px;">
                  <div style="color:#ffffff; font-size:18px; font-weight:700;">Meubel Reiniging Expert</div>
                  <div style="color:#dbeafe; font-size:12px; margin-top:4px;">Bevestiging van uw aanvraag</div>
                </td>
              </tr>
              <tr>
                <td style="padding:24px;">
                  <p style="margin:0 0 12px 0; font-size:16px;">Beste ${payload.naam},</p>
                  <p style="margin:0 0 16px 0; color:#374151;">Hartelijk dank voor uw offerte-aanvraag bij Meubel Reiniging Expert. We hebben uw bericht ontvangen en nemen binnen 24 uur contact met u op.</p>

                  <div style="margin:16px 0; padding:12px 16px; background:#f3f4f6; border-radius:8px;">
                    <div style="font-weight:700; margin-bottom:8px;">Samenvatting van uw aanvraag</div>
                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                      <tr>
                        <td style="padding:8px 0; width:180px; color:#6b7280;">Meubeltype</td>
                        <td style="padding:8px 0; font-weight:600;">${payload.meubeltype}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0; width:180px; color:#6b7280;">Aantal</td>
                        <td style="padding:8px 0;">${payload.aantal ?? '-'}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0; width:180px; color:#6b7280;">Postcode</td>
                        <td style="padding:8px 0;">${payload.postcode}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0; width:180px; color:#6b7280;">Woonplaats</td>
                        <td style="padding:8px 0;">${payload.woonplaats}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0; width:180px; color:#6b7280;">Gewenste datum</td>
                        <td style="padding:8px 0;">${payload.datum ?? '-'}</td>
                      </tr>
                    </table>
                  </div>

                  <p style="margin:16px 0; color:#374151;">Heeft u nog vragen? Antwoord gerust op deze e-mail of bel ons via <a href="tel:+31613003226" style="color:hsl(214,100%,36%); text-decoration:underline;">06 - 13 00 32 26</a>.</p>

                  <div style="margin-top:12px;">
                    <a href="tel:+31613003226" style="display:inline-block; padding:12px 20px; background:hsl(214,100%,36%); color:#ffffff; text-decoration:none; border-radius:8px; font-weight:700;">Bel direct</a>
                  </div>

                  <p style="margin-top:20px;">Met vriendelijke groet,<br/>Meubel Reiniging Expert</p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 24px; background:#f9fafb; color:#6b7280; font-size:12px;">
                  Dit is een automatische bevestiging. U ontvangt spoedig een persoonlijk bericht.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
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
