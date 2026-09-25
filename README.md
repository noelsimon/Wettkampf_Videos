# Videos der Qualirouten – Kidscup Zittau 26.09.2026

Übersichtsseite, auf der die Athlet*innen die Videos der Qualirouten anschauen können –
sortiert nach Wertungsklasse, mit Zeitlupe (0.25× / 0.5×), ±5-s-Sprüngen und
Blättern zur nächsten Route. Optimiert fürs Handy.

**Adresse (nach Aktivierung von GitHub Pages):**
https://noelsimon.github.io/Wettkampf_Videos/
Direktlink auf eine Route: `…/Wettkampf_Videos/#U13_Quali1`

## Videos einfügen

1. Videos in den Ordner `videos/` legen, benannt nach Klasse und Route: `U9_Quali1.mp4`, `U11_Quali2.mp4` …
   (MP4/H.264, max. 100 MB pro Datei).
2. In `videos.js` beim passenden Eintrag `src` ausfüllen, z. B. `"videos/U9_Quali1.mp4"`.
   Statt einer Datei geht auch ein Link (direkte .mp4-URL oder YouTube, gern „nicht gelistet“).
3. Routen ohne Video zeigen automatisch „Video folgt“.
4. Vorschaubild: `posters/<Name>.jpg` (gleicher Name wie das Video). Fehlt es, bleibt die Karte ohne Bild.

**Wichtig:** Hochkant gefilmte Handyvideos müssen „fest gedreht“ sein, sonst zeigt Safari
nur ein schwarzes Bild (Ton läuft). Mit ffmpeg:
`ffmpeg -i in.mp4 -c:v libx264 -crf 18 -preset slow -pix_fmt yuv420p -c:a copy -movflags +faststart out.mp4`
(ffmpeg dreht dabei automatisch richtig herum.)


## GitHub Pages aktivieren (einmalig)

Repository → **Settings → Pages → Source: GitHub Actions**. Danach veröffentlicht
jeder Push auf `main` die Seite automatisch.
