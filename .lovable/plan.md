

## FROM-adres wijzigen naar noreply@

Kleine aanpassing in de Edge Function `send-booking-emails`:

### Wijziging

**`supabase/functions/send-booking-emails/index.ts`**
- `FROM_PRIMARY` wijzigen van `"Meubel Reiniging Expert <info@meubelreinigingexpert.nl>"` naar `"Meubel Reiniging Expert <noreply@meubelreinigingexpert.nl>"`
- `reply_to` blijft op het e-mailadres van de klant staan, zodat je gewoon kunt antwoorden

Dit voorkomt dat de mailserver het bericht blokkeert omdat afzender en ontvanger hetzelfde adres zijn.

