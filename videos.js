/* =====================================================================
   Videoliste – NUR DIESE DATEI MUSS ANGEPASST WERDEN
   ---------------------------------------------------------------------
   Pro Qualiroute ein Eintrag. Felder:
     route   Routennummer wie im Regieplan (z. B. "Q6")
     klasse  Wertungsklasse ("U11", "U13", "U15" …)
     gruppe  "gemischt", "männlich" oder "weiblich"
     modus   "Toprope" oder "Vorstieg"
     src     Pfad zur Videodatei im Ordner videos/ ODER vollständige URL
             (z. B. Link auf eine .mp4 in einer Cloud).
             YouTube-Links (youtube.com/watch?v=… oder youtu.be/…)
             werden automatisch eingebettet.
             Leer lassen ("") → Karte zeigt „Video folgt“.
     notiz   optional: kurzer Hinweis für die Athlet*innen
   ===================================================================== */
window.WETTKAMPF = {
  titel: "4. Offener Sächsischer Kidscup",
  ort:   "Kletterhalle Quacke Zittau",
  datum: "Samstag, 26.09.2026",
};

window.VIDEOS = [
  { route: "Q3",  klasse: "U11", gruppe: "gemischt", modus: "Toprope",  src: "videos/Q3.mp4",  notiz: "" },
  { route: "Q4",  klasse: "U11", gruppe: "männlich", modus: "Toprope",  src: "videos/Q4.mp4",  notiz: "" },
  { route: "Q5",  klasse: "U11", gruppe: "weiblich", modus: "Toprope",  src: "videos/Q5.mp4",  notiz: "" },
  { route: "Q6",  klasse: "U13", gruppe: "gemischt", modus: "Toprope",  src: "videos/Q6.mp4",  notiz: "" },
  { route: "Q7",  klasse: "U13", gruppe: "männlich", modus: "Toprope",  src: "videos/Q7.mp4",  notiz: "" },
  { route: "Q8",  klasse: "U13", gruppe: "weiblich", modus: "Toprope",  src: "videos/Q8.mp4",  notiz: "" },
  { route: "Q9",  klasse: "U15", gruppe: "gemischt", modus: "Vorstieg", src: "videos/Q9.mp4",  notiz: "" },
  { route: "Q10", klasse: "U15", gruppe: "männlich", modus: "Vorstieg", src: "videos/Q10.mp4", notiz: "" },
  { route: "Q11", klasse: "U15", gruppe: "weiblich", modus: "Vorstieg", src: "videos/Q11.mp4", notiz: "" },
];
