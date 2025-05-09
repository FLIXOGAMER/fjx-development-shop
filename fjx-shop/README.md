# FJX Development Shop

Eine moderne, reaktionsschnelle E-Commerce-Webseite für FJX Development mit Tebex Checkout API-Integration. Die Seite bietet eine nahtlose Shop-Erfahrung für Kunden mit automatischer Produkt- und Kategoriesynchronisierung über die Tebex API.

![FJX Development Shop Screenshot](public/screenshot.png)

## Features

- **Modernes, minimalistisches Design** mit Apple-ähnlichen Farbübergängen und Hover-Effekten
- **Vollständig responsive** und für Mobile optimiert
- **Automatische Tebex-Synchronisierung** für Produkte und Kategorien
- **Nahtlose Checkout-Integration** über die Tebex-Plattform
- **Discord-Widget-Integration** für Community-Engagement
- **Sichere API-Kommunikation** über einen Proxy-Server

## Technologie-Stack

- **Frontend:**
  - React.js
  - React Router für Navigation
  - TailwindCSS für responsives Design
  - Lucide React für Icons
  - Axios für API-Anfragen

- **Backend (Proxy-Server):**
  - Node.js mit Express
  - Tebex API-Integration
  - Sichere Behandlung des API-Schlüssels
  - Webhook-Unterstützung

## Schnellstart

### Voraussetzungen

- Node.js (v14.x oder höher)
- npm (v6.x oder höher)
- Tebex-Konto mit API-Zugriff

### Installation

1. Repository klonen:
   ```bash
   git clone https://github.com/your-username/fjx-development-shop.git
   cd fjx-development-shop
   ```

2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```

3. Umgebungsvariablen konfigurieren (kopiere `.env.example` zu `.env` und fülle die erforderlichen Werte aus):
   ```bash
   cp .env.example .env
   ```

4. Entwicklungs-Server starten:
   ```bash
   npm run dev
   ```

5. Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

## Detaillierte Dokumentation

Für eine vollständige Anleitung zur Installation, Konfiguration und Anpassung siehe die [Setup-Anleitung](SETUP.md).

## Tebex API-Integration

Diese Anwendung nutzt die [Tebex API](https://docs.tebex.io/store/overview) für:

- Abrufen von Produkten und Kategorien
- Weiterleitung zum Tebex Checkout
- Empfangen von Webhook-Ereignissen (Zahlungen, Rückerstattungen, etc.)

Der Proxy-Server schützt deinen API-Schlüssel und transformiert die API-Antworten in ein für das Frontend geeignetes Format.

## Discord-Integration

Die Anwendung enthält eine vollständige Discord-Widget-Integration, um deine Community einzubinden und Support anzubieten.

## Anpassung

Du kannst das Design und die Funktionalität leicht an deine Bedürfnisse anpassen:

- Passe Farben und Design in `tailwind.config.js` an
- Ändere Komponentenstile in `src/styles/globals.css`
- Füge weitere Funktionen nach Bedarf hinzu

Siehe die [Setup-Anleitung](SETUP.md) für detaillierte Anpassungsoptionen.

## Deployment

Die Anwendung kann auf verschiedenen Plattformen bereitgestellt werden:

- **Frontend:** Netlify, Vercel, GitHub Pages, oder jeder andere statische Hosting-Dienst
- **Backend:** Netlify Functions, Vercel Functions, Heroku, oder jeder andere Node.js-Hosting-Dienst

Detaillierte Deployment-Anweisungen findest du in der [Setup-Anleitung](SETUP.md).

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die [LICENSE](LICENSE) Datei für Details.

## Support

Bei Fragen oder Problemen:

- Besuche unseren [Discord Server](https://discord.gg/fjx-development)
- Erstelle ein [GitHub Issue](https://github.com/your-username/fjx-development-shop/issues)
- Kontaktiere uns per E-Mail unter support@fjx-development.com