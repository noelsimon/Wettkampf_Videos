/* =====================================================================
   Videoliste – NUR DIESE DATEI MUSS ANGEPASST WERDEN
   ---------------------------------------------------------------------
   Pro Qualiroute ein Eintrag. Felder:
     klasse  Wertungsklasse ("U9", "U11", "U13", "U15")
     quali   Nummer der Qualiroute innerhalb der Klasse (1, 2, 3 …)
     modus   "Toprope" oder "Vorstieg" (optional)
     src     Videodatei im Ordner videos/, benannt wie "U13_Quali1.mp4",
             ODER vollständige URL (direkte .mp4 oder YouTube-Link).
             Leer lassen ("") → Karte zeigt „Video folgt“.
     notiz   optional: kurzer Hinweis für die Athlet*innen
   ===================================================================== */
window.WETTKAMPF = {
  titel: "4. Offener Sächsischer Kidscup",
  ort:   "Kletterhalle Quacke Zittau",
  datum: "Samstag, 26.09.2026",
};

window.VIDEOS = [
  { klasse: "U9",  quali: 1, modus: "Toprope",  src: "", notiz: "" },
  { klasse: "U9",  quali: 2, modus: "Toprope",  src: "", notiz: "" },
  { klasse: "U9",  quali: 3, modus: "Toprope",  src: "", notiz: "" },

  { klasse: "U11", quali: 1, modus: "Toprope",  src: "", notiz: "" },
  { klasse: "U11", quali: 2, modus: "Toprope",  src: "", notiz: "" },

  { klasse: "U13", quali: 1, modus: "Toprope",  src: "videos/U13_Quali1.mp4", notiz: "" },
  { klasse: "U13", quali: 2, modus: "Toprope",  src: "videos/U13_Quali2.mp4", notiz: "" },

  { klasse: "U15", quali: 1, modus: "Vorstieg", src: "videos/U15_Quali1.mp4", notiz: "" },
  { klasse: "U15", quali: 2, modus: "Vorstieg", src: "videos/U15_Quali2.mp4", notiz: "" },
];
