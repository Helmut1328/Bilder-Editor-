Bilder zusammenfügen – fertiges Update mit Nutzungszähler
===========================================================

INHALT
------
- index.html: deine bestehende App, ergänzt um den Nutzungszähler
- sw.js: Service Worker mit neuer Cache-Version und Counter-Datei im Cache
- usage-counter.js: sendet beim App-Start ein Zählereignis an Supabase
- private-statistik.html: Statistikseite, Admin-Schlüssel wird erst beim Abruf eingegeben
- manifest.json und App-Icons: aus deinen hochgeladenen Originaldateien

GITHUB PAGES EINBAU
-------------------
1. ZIP entpacken.
2. Alle enthaltenen Dateien in das Hauptverzeichnis deines GitHub-Repositorys hochladen
   und vorhandene Dateien mit gleichem Namen ersetzen.
3. Auf das GitHub-Pages-Deployment warten.
4. Die Seite neu laden. Bei einer installierten App die App ganz schließen und erneut öffnen.

SUPABASE
--------
Die Counter-Datei verwendet die bereits eingerichtete Funktion:
https://lqfplicjfqmtehffqhjw.supabase.co/functions/v1/bilder-zaehler

Die Funktion muss anonyme POST-Aufrufe für {"event":"app_start"} zulassen und beim GET
den Header x-admin-key serverseitig gegen das Secret BILDER_ADMIN_KEY prüfen.
CORS muss OPTIONS/POST/GET und die Header content-type sowie x-admin-key erlauben.
Den Admin-Schlüssel und den Supabase-Service-Role-Key niemals in index.html,
usage-counter.js oder andere öffentliche Dateien schreiben.

STATISTIK
---------
Nach dem Deployment ist die Statistikseite über ./private-statistik.html erreichbar.
Die Seite ist selbst öffentlich aufrufbar, aber die Zählerdaten dürfen nur von der
Supabase-Funktion nach Prüfung des Admin-Schlüssels ausgegeben werden.
Den Schlüssel nur auf einem vertrauenswürdigen Gerät eingeben.

WICHTIG ZUM ZÄHLEN
------------------
- Gezählt wird ein App-Start, wenn die App die Supabase-Funktion online erreicht.
- Offline bleibt der Editor nutzbar; Offline-Starts werden nicht nachträglich gezählt.
- Es werden keine Fotos oder Bildbearbeitungsdaten übertragen.
- Ein einfacher öffentlicher Web-Zähler kann durch automatisierte Aufrufe verfälscht werden.
- Prüfe die Datenschutzhinweise deiner Website passend zu diesem Zähler.

BESTEHENDE FUNKTIONEN
---------------------
Die vorhandene index.html wurde beibehalten; hinzugefügt wurde nur der Script-Verweis
auf usage-counter.js. Der Service Worker verwendet nun die Cache-Version v3.
