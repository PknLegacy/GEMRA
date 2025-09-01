#What is this Projekt?
---
projekt_ordner/
├── index.html
├── README.md
├── config.json
├── LICENSE.txt
├── assets/
│   └── json/
│       ├── data_1.json
│       ├── data_2.json
│       ├── data_3.json
│       ├── data_4.json
│       ├── data_5.json
│       ├── data_6.json
│       ├── data_7.json
│       ├── data_8.json
│       ├── data_9.json
│       ├── data_10.json
│       ├── data_11.json
│       ├── data_12.json
│       ├── data_13.json
│       ├── data_14.json
│       └── data_15.json
├── downlouds/
├── css/
│   ├── style.css
│   └── theme.css
└── js/
    ├── app.js
    ├── router.js
    └── utils.js
---
##WHat about the codes in here?
# 📂 Projekt Struktur – Erklärung

Dieses Projekt ist als **Basis-Template** gedacht.  
Alle Dateien und Ordner sind leer, damit du sie mit deinem eigenen Inhalt füllen kannst.  
Hier die Erklärung, was wohin gehört:

---

## Hauptdateien

- **index.html**  
  Startseite deiner Anwendung.  
  Hier wird das Grundgerüst in HTML definiert.  
  Beispiel-Inhalt:
  ```html
  <!DOCTYPE html>
  <html lang="de">
  <head>
    <meta charset="UTF-8">
    <title>Mein Projekt</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1>Willkommen</h1>
    <script src="js/app.js"></script>
  </body>
  </html>
README.md
Diese Datei, erklärt die Projektstruktur.

config.json
Konfigurationsdatei für Einstellungen.
Beispiel-Inhalt:
{
  "language": "de",
  "theme": "dark",
  "version": "1.0.0"
}

LICENSE.txt
Lizenzinformation (z. B. MIT, Apache 2.0, GPL).
Falls du dein Projekt veröffentlichst, kommt hier der Lizenztext hinein.

📂 assets/

Enthält zusätzliche Projektdateien wie Bilder, Videos, Sounds oder JSON-Daten.

assets/json/
Enthält alle Daten im JSON-Format (z. B. für deine App).
Beispiele:

// data_1.json
{
  "id": 1,
  "name": "Beispiel-Datensatz",
  "description": "Dieser Text kommt aus der Datenbank."
}

Du kannst die 15 leeren Dateien für verschiedene Zwecke nutzen:

users.json → Liste von Benutzern

settings.json → App-Einstellungen

messages.json → Chat-Nachrichten

products.json → Marketplace-Items

📂 downlouds/

Hier landen Dateien, die man herunterladen kann.
Zum Beispiel:

PDF-Dokumente

ZIP-Archive

MP3/MP4-Dateien

Beispiel: manual.pdf, darknet_tool.zip

📂 css/

Stylesheets (Design deiner Webseite).

style.css → Hauptdesign deiner Seite (Farben, Layout).

theme.css → Extra-Themes (z. B. Darkmode, Retro-Look).

Beispiel (style.css):

body {
  background: black;
  color: lime;
  font-family: monospace;
}

body {
  background: black;
  color: lime;
  font-family: monospace;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("App gestartet!");
});

✅ Zusammenfassung

index.html → Startseite

assets/ → Dateien & Daten

downlouds/ → Downloads für Nutzer

css/ → Stylesheets (Design)

js/ → JavaScript (Funktionalität)

config.json → Einstellungen

LICENSE.txt → Lizenz

README.md → Erklärung

So kannst du dein Projekt nach und nach mit Inhalt füllen.


---
#Information


#Was soll in der Website drinnen sein?:
---
Ordner Struktur:

projekt_ordner/
├── index.html
├── README.md
├── config.json
├── LICENSE.txt
├── assets/
│   └── json/
│       ├── data_1.json
│       ├── data_2.json
│       ├── data_3.json
│       ├── data_4.json
│       ├── data_5.json
│       ├── data_6.json
│       ├── data_7.json
│       ├── data_8.json
│       ├── data_9.json
│       ├── data_10.json
│       ├── data_11.json
│       ├── data_12.json
│       ├── data_13.json
│       ├── data_14.json
│       └── data_15.json
├── downlouds/
├── css/
│   ├── style.css
│   └── theme.css
└── js/
    ├── app.js
    ├── router.js
    └── utils.js

---

Nach dem öffnen des Links: HompePage artiges Design, mit CSS Animation. Informationen werden im HTML verfügbar sein.(Text usw.)
Wo es Bilder gespeichert sind die ebenfalls dort angezeigt werden sollen: 
├── assets/
│   └── pictures/
und dann der jeweiloge name der Datei. (muss neu erstellt werden.)
---
Zu beachten, beim starten der Website werden nach cookies gefragt, diese muss man akzeptieren. werden diese akzeptiert wird folgendes akzeptiert: Sehen aus wechen Land die website genutzt wird. BrowserDaten zum sammeln von Informationen usw.
---
##Was ist auf der HomePage?
Auf der HomePage soll eine headline sein, dort wird ein JPG Foto angezeigt (muss unter assets unter den Ordner pictures noch erweitert werden.):
├── assets/
│   └── pictures/
        ├── ***.jpg
                        |Oben wird ein Bild angezeigt, mit passender Animation beim Sliden usw. es bleibt immer oben. Darüber in der Headline gibt es folgende Kategorien zum auswählen; Home; zeigt das Homepage Menü mit den passenden Informationen wie beim start an. SocialMedia; zeigt Informationen zu SocialMedia Acounts an. Werden mit Link zu weiter leitung geführt, inkl. CSS Animationen und guten style. (Links, siehe Tabelle unten(Tabelle=LinksV1.21.1)) Search; fort kann man verschiednene sachen suchen. (Link suche, und mehr.) Wird standartmäßig sotiert, erweiterung der Ordner Struktur nötig. Credits; Allgeimeiner Credit Inhalt mit stylischen CSS Animationen und ervorhebungen.
Tabelle=LinksV1.21.1:

# 📌 Link-Sammlung

| Plattform | Kanal/Name        | Link |
|-----------|-------------------|------|
| YouTube   | PknLegacy         | [@PknLegacy](https://www.youtube.com/@PknLegacy) |
| YouTube   | WinterEnterich    | [@WinterEnterich](https://www.youtube.com/@WinterEnterich22) |
| Twitch    | PknLegacy         | [Link öffnen](https://twitch.tv/PknLegacy) |
| Twitch    | Winterente        | [Link öffnen](https://twitch.tv/winterente20001) |
| Discord   | Foundation512     | [Discord beitreten](https://discord.gg/6RRNXUGRAk) |

---

Unter dem HomeMenü ebenso eine Liste der Live Streams die immer von den Streamern auftauchen wenn einer Live ist, soll sich von selbst aktualiseiren, ebenso wird immer das neuste Videos bei credits oben angezeigt, soll sich auch automatisch aktualisieren.
Search soll erweitert werden, es soll eine Kategorie von Videos geben, öffnet man das komm teine passende YT Animation die zu YouTubern oder Twitch Streamern passt (CSS erweiterung). Dort werden alle Videos usw vom jeweilgen Kanal unter der richtigen kategorie angeziegt, z.B.: klickt man auf Videos, dann werden die neusten Videos von den YouTube Kanaälen angezeigt von PknLegacy und WinterEnterich, dies soll sich ebenso automatisch alle 24h aktualisieren.
---
Erweiterung HomeMenü;

Generall: Verifizierung, leitet zu diesem Link weiter wenn man sich die Verifizierung anscheuen möchte. (PknLegacy Version(Link: https://pknlegacy.github.io/ ))
Updates: Autoamtsich Fullscreen nach 5sec, nach dem ersten klick.
Speerung: Speerung des Rechtsklick, Mackireung mit der Maustaste und das Untersuchen der Datei
Vollbild entspeeren: Speerung kann nur beim Creedit bereich aufgehoben werden. (extra Button hinzufügen)
Datein von Search: alle aus Json.
Weitere links: weitere links sind ebenfalls im credit bereich die zu Github Links führen, alles stylisch und mit annimierten buttons (CSS): 

https://pknlegacy.github.io/SCP-Foundation512_HomePage/
https://pknlegacy.github.io/SCP_Archiev512/
https://pknlegacy.github.io/Darknet_Acces-V542-.51.32/
https://pknlegacy.github.io/SCP-Terminal512/
https://pknlegacy.github.io/SecureSCP_Link-OF-Status-/

---
#Style erw.

Der Style usw soll per CSS deutlich verbessert werden.
Erweitung nötig von: 

projekt_ordner/
├── index.html
├── README.md
├── config.json
├── LICENSE.txt
├── assets/
│   └── json/
│       ├── data_1.json
│       ├── data_2.json
│       ├── data_3.json
│       ├── data_4.json
│       ├── data_5.json
│       ├── data_6.json
│       ├── data_7.json
│       ├── data_8.json
│       ├── data_9.json
│       ├── data_10.json
│       ├── data_11.json
│       ├── data_12.json
│       ├── data_13.json
│       ├── data_14.json
│       └── data_15.json
├── downlouds/
├── css/
│   ├── style.css
│   └── theme.css
└── js/
    ├── app.js
    ├── router.js
    └── utils.js

---
#Version V.1.21.2
More Information coming soon.



