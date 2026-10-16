Bilder-Editor – Hintergrundentfernung (Entwicklungsstand)

Dateien:
- index.html: Editor mit lokaler Hintergrundentfernung
- sw.js: Service Worker mit aktualisierter Cache-Version

Einbau:
1. Diese beiden Dateien im GitHub-Repository im Hauptverzeichnis ersetzen.
2. Die übrigen Dateien (manifest.json und Icons) unverändert lassen.
3. Nach GitHub Pages Deployment die Seite neu laden. Eine installierte PWA kann einen Neustart benötigen.

Bedienung:
- Hintergrund freistellen: entfernt den Hintergrund des Hauptbildes.
- Foto freistellen: erscheint, wenn ein hinzugefügtes Foto ausgewählt ist.
- Original zurück: stellt den ursprünglichen Haupt-Hintergrund wieder her.
- Sichern bleibt ein einzelner Button. Ein transparenter Haupt-Hintergrund wird als PNG exportiert.

Datenschutz / Verbindung:
Die Bildverarbeitung wird im Browser ausgeführt; das Foto wird nicht an einen Hintergrundentfernungs-Dienst hochgeladen. Beim ersten Einsatz werden die JavaScript-Bibliothek und das KI-Modell aus dem Internet geladen. Deshalb ist die Freistellung beim ersten Start nicht offline verfügbar und kann auf älteren/leistungsschwächeren Geräten länger dauern.

Lizenzhinweis:
Die verwendete Bibliothek @imgly/background-removal ist unter AGPL-3.0 veröffentlicht. Vor einer öffentlichen oder kommerziellen Veröffentlichung muss geprüft werden, ob diese Lizenz zu den Lizenzbedingungen des Gesamtprojekts passt. Die Dateien sind daher als Entwicklungsfassung zu betrachten, nicht als abschließend lizenzgeprüfte Veröffentlichung.
