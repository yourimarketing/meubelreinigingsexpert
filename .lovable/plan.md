

## Foto-upload toevoegen aan het offerteformulier

Klanten kunnen straks foto's van hun meubels bijvoegen bij de offerte-aanvraag. De foto's worden als bijlage meegestuurd in de admin-email zodat je direct kunt zien wat er gedaan moet worden.

---

### Hoe het werkt

1. Er komt een "Foto's toevoegen" veld onder het opmerkingen-veld in het formulier
2. Klanten kunnen maximaal 5 foto's uploaden (max 5MB per foto)
3. De foto's worden als base64 bijlagen meegestuurd via Resend
4. Jij ontvangt de foto's als bijlage in de admin-email
5. De klant krijgt een bevestiging dat de foto's zijn ontvangen

---

### Technische aanpak

**1. BookingSection.tsx - Foto-upload UI toevoegen**
- Nieuw state-veld voor geselecteerde bestanden (`File[]`)
- File input die alleen afbeeldingen accepteert (jpg, png, webp)
- Preview van geselecteerde foto's met mogelijkheid om te verwijderen
- Bij submit: bestanden converteren naar base64 en meesturen als array
- Maximaal 5 bestanden, max 5MB per stuk
- Formulier verstuurt via JSON met base64-encoded foto's

**2. Edge Function updaten - Bijlagen verwerken**
- Payload uitbreiden met optioneel `fotos` veld (array van `{ filename, content, content_type }`)
- Resend `attachments` parameter gebruiken om de foto's als bijlage mee te sturen in de admin-email
- Admin-email HTML uitbreiden met melding hoeveel foto's zijn bijgevoegd
- Klant-bevestiging vermelden dat foto's zijn ontvangen
- Validatie: max 5 bestanden, max 5MB per bestand

**3. Beperkingen en overwegingen**
- Edge functions hebben een payload-limiet van ~6MB, dus we beperken tot 5 foto's van max 5MB totaal
- Foto's worden niet opgeslagen in een database, alleen doorgestuurd via email
- Resend ondersteunt bijlagen tot 40MB per email

