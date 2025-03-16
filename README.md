# KI-Automatisierung Bremen Website

Eine moderne, responsive Website für "KI-Automatisierung Bremen", einen Service, der KI-Automatisierungslösungen für kleine Unternehmen und Solopreneure in Bremen anbietet.

## Technologie-Stack

- **Framework**: Next.js 14 mit App Router
- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Formularhandling**: React Hook Form
- **Terminbuchung**: Calendly-Integration
- **Deployment**: Vercel
- **SEO**: Next.js Metadata API

## Funktionen

- Responsive Design für alle Geräte
- Kontaktformular mit Validierung
- Calendly-Integration für Terminbuchungen
- SEO-Optimierung
- DSGVO-konforme Datenschutzerklärung und Impressum

## Seiten

1. **Homepage (/)**: Überblick über die Dienstleistungen, Vorteile und Preismodell
2. **Leistungen (/leistungen)**: Detaillierte Beschreibung der angebotenen KI-Automatisierungslösungen
3. **Kontakt (/kontakt)**: Kontaktformular und Terminbuchung via Calendly
4. **Impressum (/impressum)**: Rechtliche Informationen
5. **Datenschutz (/datenschutz)**: DSGVO-konforme Datenschutzerklärung

## Installation und lokale Entwicklung

### Voraussetzungen

- Node.js 18 oder höher
- npm oder yarn

### Installation

1. Repository klonen:
   ```bash
   git clone https://github.com/yourusername/ki-automatisierung-bremen.git
   cd ki-automatisierung-bremen
   ```

2. Abhängigkeiten installieren:
   ```bash
   npm install
   # oder
   yarn install
   ```

3. Entwicklungsserver starten:
   ```bash
   npm run dev
   # oder
   yarn dev
   ```

4. Öffne [http://localhost:3000](http://localhost:3000) im Browser, um die Website zu sehen.

### Build für Produktion

```bash
npm run build
# oder
yarn build
```

## Deployment

Die Website ist für das Deployment auf Vercel optimiert. Verbinde einfach dein GitHub-Repository mit Vercel und die Website wird automatisch bei jedem Push auf den main-Branch deployed.

## Anpassungen

### Calendly-Integration

Ändere die Calendly-URL in der Datei `src/components/contact/CalendlyEmbed.tsx` zu deiner eigenen Calendly-URL.

### Kontaktdaten

Aktualisiere die Kontaktdaten in folgenden Dateien:
- `src/components/layout/Footer.tsx`
- `src/app/kontakt/page.tsx`
- `src/app/impressum/page.tsx`
- `src/app/datenschutz/page.tsx`

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. 