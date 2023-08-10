// Privat zugelassene Personenkraftwagen pro 1 000 Hauptwohnsitzpersonen.
// Source: https://www.mstatistik-muenchen.de/indikatorenatlas/atlas.html?indicator=i244&date=2021
const pkwProStadtbezirk =[
  {
    "Räumliche Gliederung": "01 Altstadt - Lehel",
    "Indikatorwert": 350.7
  },
  {
    "Räumliche Gliederung": "02 Ludwigsvorstadt - Isarvorstadt",
    "Indikatorwert": 260.4
  },
  {
    "Räumliche Gliederung": "03 Maxvorstadt",
    "Indikatorwert": 265.4
  },
  {
    "Räumliche Gliederung": "04 Schwabing - West",
    "Indikatorwert": 296.1
  },
  {
    "Räumliche Gliederung": "05 Au - Haidhausen",
    "Indikatorwert": 273.1
  },
  {
    "Räumliche Gliederung": "06 Sendling",
    "Indikatorwert": 298.4
  },
  {
    "Räumliche Gliederung": "07 Sendling - Westpark",
    "Indikatorwert": 328.3
  },
  {
    "Räumliche Gliederung": "08 Schwanthalerhöhe",
    "Indikatorwert": 266
  },
  {
    "Räumliche Gliederung": "09 Neuhausen - Nymphenburg",
    "Indikatorwert": 318.8
  },
  {
    "Räumliche Gliederung": "10 Moosach",
    "Indikatorwert": 348.4
  },
  {
    "Räumliche Gliederung": "11 Milbertshofen - Am Hart",
    "Indikatorwert": 281
  },
  {
    "Räumliche Gliederung": "12 Schwabing - Freimann",
    "Indikatorwert": 318.8
  },
  {
    "Räumliche Gliederung": "13 Bogenhausen",
    "Indikatorwert": 386.6
  },
  {
    "Räumliche Gliederung": "14 Berg am Laim",
    "Indikatorwert": 322.7
  },
  {
    "Räumliche Gliederung": "15 Trudering - Riem",
    "Indikatorwert": 410.8
  },
  {
    "Räumliche Gliederung": "16 Ramersdorf - Perlach",
    "Indikatorwert": 337
  },
  {
    "Räumliche Gliederung": "17 Obergiesing - Fasangarten",
    "Indikatorwert": 298.7
  },
  {
    "Räumliche Gliederung": "18 Untergiesing - Harlaching",
    "Indikatorwert": 356.4
  },
  {
    "Räumliche Gliederung": "19 Thalkirchen - Obersendling - Forstenried - Fürstenried - Solln",
    "Indikatorwert": 381.2
  },
  {
    "Räumliche Gliederung": "20 Hadern",
    "Indikatorwert": 366.1
  },
  {
    "Räumliche Gliederung": "21 Pasing - Obermenzing",
    "Indikatorwert": 383.9
  },
  {
    "Räumliche Gliederung": "22 Aubing - Lochhausen - Langwied",
    "Indikatorwert": 373.3
  },
  {
    "Räumliche Gliederung": "23 Allach - Untermenzing",
    "Indikatorwert": 434.2
  },
  {
    "Räumliche Gliederung": "24 Feldmoching - Hasenbergl",
    "Indikatorwert": 366.6
  },
  {
    "Räumliche Gliederung": "25 Laim",
    "Indikatorwert": 319.5
  }
 ]

const pkwProStadtbezirksTeil = [
    {
      "Räumliche Gliederung": "14.2 Josephsburg",
      "Indikatorwert": 337
    },
    {
      "Räumliche Gliederung": "01.4 Kreuzviertel",
      "Indikatorwert": 718.1
    },
    {
      "Räumliche Gliederung": "02.8 St. Paul",
      "Indikatorwert": 291.6
    },
    {
      "Räumliche Gliederung": "01.2 Angerviertel",
      "Indikatorwert": 260.7
    },
    {
      "Räumliche Gliederung": "02.4 Dreimühlen",
      "Indikatorwert": 274.1
    },
    {
      "Räumliche Gliederung": "02.5 Am alten südlichen Friedhof",
      "Indikatorwert": 263.6
    },
    {
      "Räumliche Gliederung": "02.6 Am Schlachthof",
      "Indikatorwert": 228.7
    },
    {
      "Räumliche Gliederung": "01.1 Graggenau",
      "Indikatorwert": 420.2
    },
    {
      "Räumliche Gliederung": "01.3 Hackenviertel",
      "Indikatorwert": 335.9
    },
    {
      "Räumliche Gliederung": "01.5 Lehel",
      "Indikatorwert": 338.9
    },
    {
      "Räumliche Gliederung": "01.6 Englischer Garten Süd",
      "Indikatorwert": 362.3
    },
    {
      "Räumliche Gliederung": "02.1 Gärtnerplatz",
      "Indikatorwert": 269.4
    },
    {
      "Räumliche Gliederung": "02.2 Deutsches Museum",
      "Indikatorwert": 236.3
    },
    {
      "Räumliche Gliederung": "02.3 Glockenbach",
      "Indikatorwert": 268.3
    },
    {
      "Räumliche Gliederung": "02.7 Ludwigsvorstadt-Kliniken",
      "Indikatorwert": 217.8
    },
    {
      "Räumliche Gliederung": "03.1 Königsplatz",
      "Indikatorwert": 583.6
    },
    {
      "Räumliche Gliederung": "03.2 Augustenstraße",
      "Indikatorwert": 232.4
    },
    {
      "Räumliche Gliederung": "03.3 St. Benno",
      "Indikatorwert": 277.3
    },
    {
      "Räumliche Gliederung": "03.4 Marsfeld",
      "Indikatorwert": 278.6
    },
    {
      "Räumliche Gliederung": "03.5 Josephsplatz",
      "Indikatorwert": 246
    },
    {
      "Räumliche Gliederung": "03.6 Am alten nördlichen Friedhof",
      "Indikatorwert": 269.1
    },
    {
      "Räumliche Gliederung": "03.7 Universität",
      "Indikatorwert": 274.7
    },
    {
      "Räumliche Gliederung": "03.8 Schönfeldvorstadt",
      "Indikatorwert": 322.2
    },
    {
      "Räumliche Gliederung": "03.9 Maßmannbergl",
      "Indikatorwert": 261.8
    },
    {
      "Räumliche Gliederung": "04.1 Neuschwabing",
      "Indikatorwert": 298.7
    },
    {
      "Räumliche Gliederung": "04.2 Am Luitpoldpark",
      "Indikatorwert": 292.9
    },
    {
      "Räumliche Gliederung": "04.3 Schwere-Reiter-Straße",
      "Indikatorwert": 298.3
    },
    {
      "Räumliche Gliederung": "05.1 Maximilianeum",
      "Indikatorwert": 355.8
    },
    {
      "Räumliche Gliederung": "05.2 Steinhausen",
      "Indikatorwert": 301.8
    },
    {
      "Räumliche Gliederung": "05.3 Haidhausen - Nord",
      "Indikatorwert": 279.4
    },
    {
      "Räumliche Gliederung": "05.4 Haidhausen - Süd",
      "Indikatorwert": 259.8
    },
    {
      "Räumliche Gliederung": "05.5 Obere Au",
      "Indikatorwert": 255.3
    },
    {
      "Räumliche Gliederung": "05.6 Untere Au",
      "Indikatorwert": 271.6
    },
    {
      "Räumliche Gliederung": "06.1 Untersendling",
      "Indikatorwert": 313.9
    },
    {
      "Räumliche Gliederung": "06.2 Sendlinger Feld",
      "Indikatorwert": 289.8
    },
    {
      "Räumliche Gliederung": "07.1 Mittersendling",
      "Indikatorwert": 314.8
    },
    {
      "Räumliche Gliederung": "07.2 Land in Sonne",
      "Indikatorwert": 305
    },
    {
      "Räumliche Gliederung": "07.3 Am Waldfriedhof",
      "Indikatorwert": 371.2
    },
    {
      "Räumliche Gliederung": "08.1 Westend",
      "Indikatorwert": 266.4
    },
    {
      "Räumliche Gliederung": "08.2 Schwanthalerhöhe",
      "Indikatorwert": 265.4
    },
    {
      "Räumliche Gliederung": "09.1 Neuhausen",
      "Indikatorwert": 314.2
    },
    {
      "Räumliche Gliederung": "09.2 Nymphenburg",
      "Indikatorwert": 356.1
    },
    {
      "Räumliche Gliederung": "09.3 Oberwiesenfeld",
      "Indikatorwert": 341.3
    },
    {
      "Räumliche Gliederung": "09.4 St. Vinzenz",
      "Indikatorwert": 303.1
    },
    {
      "Räumliche Gliederung": "09.5 Alte Kaserne",
      "Indikatorwert": 288.4
    },
    {
      "Räumliche Gliederung": "09.6 Dom Pedro",
      "Indikatorwert": 296.2
    },
    {
      "Räumliche Gliederung": "10.1 Alt Moosach",
      "Indikatorwert": 344.2
    },
    {
      "Räumliche Gliederung": "10.2 Moosach-Bahnhof",
      "Indikatorwert": 354
    },
    {
      "Räumliche Gliederung": "11.1 Am Hart",
      "Indikatorwert": 300.8
    },
    {
      "Räumliche Gliederung": "11.2 Am Riesenfeld",
      "Indikatorwert": 250.3
    },
    {
      "Räumliche Gliederung": "11.3 Milbertshofen",
      "Indikatorwert": 294.7
    },
    {
      "Räumliche Gliederung": "12.1 Freimann",
      "Indikatorwert": 299.2
    },
    {
      "Räumliche Gliederung": "12.2 Obere Isarau",
      "Indikatorwert": 334.5
    },
    {
      "Räumliche Gliederung": "12.3 Alte Heide - Hirschau",
      "Indikatorwert": 302.8
    },
    {
      "Räumliche Gliederung": "12.4 Münchener Freiheit",
      "Indikatorwert": 337.6
    },
    {
      "Räumliche Gliederung": "12.5 Biederstein",
      "Indikatorwert": 363.2
    },
    {
      "Räumliche Gliederung": "12.6 Schwabing - Ost",
      "Indikatorwert": 362.1
    },
    {
      "Räumliche Gliederung": "12.7 Kleinhesselohe",
      "Indikatorwert": 164.7
    },
    {
      "Räumliche Gliederung": "12.8 Neufreimann",
      "Indikatorwert": 275.8
    },
    {
      "Räumliche Gliederung": "13.1 Oberföhring",
      "Indikatorwert": 334.3
    },
    {
      "Räumliche Gliederung": "13.2 Johanneskirchen",
      "Indikatorwert": 364.3
    },
    {
      "Räumliche Gliederung": "13.3 Herzogpark",
      "Indikatorwert": 491
    },
    {
      "Räumliche Gliederung": "13.4 Englschalking",
      "Indikatorwert": 406.5
    },
    {
      "Räumliche Gliederung": "13.5 Daglfing",
      "Indikatorwert": 445.5
    },
    {
      "Räumliche Gliederung": "13.6 Parkstadt",
      "Indikatorwert": 316.4
    },
    {
      "Räumliche Gliederung": "13.7 Altbogenhausen",
      "Indikatorwert": 401.9
    },
    {
      "Räumliche Gliederung": "14.1 Echarding",
      "Indikatorwert": 279.2
    },
    {
      "Räumliche Gliederung": "14.3 Berg am Laim Ost",
      "Indikatorwert": 449.8
    },
    {
      "Räumliche Gliederung": "15.1 Trudering - Riem",
      "Indikatorwert": 397.8
    },
    {
      "Räumliche Gliederung": "15.2 Messestadt Riem",
      "Indikatorwert": 250.7
    },
    {
      "Räumliche Gliederung": "15.3 Gartenstadt Trudering",
      "Indikatorwert": 445.2
    },
    {
      "Räumliche Gliederung": "16.1 Ramersdorf",
      "Indikatorwert": 310.6
    },
    {
      "Räumliche Gliederung": "15.4 Waldtrudering",
      "Indikatorwert": 495
    },
    {
      "Räumliche Gliederung": "16.2 Balanstraße-West",
      "Indikatorwert": 299.9
    },
    {
      "Räumliche Gliederung": "16.3 Altperlach",
      "Indikatorwert": 372.5
    },
    {
      "Räumliche Gliederung": "16.4 Neuperlach",
      "Indikatorwert": 320
    },
    {
      "Räumliche Gliederung": "16.5 Waldperlach",
      "Indikatorwert": 479.7
    },
    {
      "Räumliche Gliederung": "17.1 Obergiesing",
      "Indikatorwert": 275.2
    },
    {
      "Räumliche Gliederung": "17.2 Südgiesing",
      "Indikatorwert": 406.8
    },
    {
      "Räumliche Gliederung": "18.1 Untergiesing",
      "Indikatorwert": 281.3
    },
    {
      "Räumliche Gliederung": "18.2 Siebenbrunn",
      "Indikatorwert": 330.6
    },
    {
      "Räumliche Gliederung": "18.3 Giesing",
      "Indikatorwert": 311.5
    },
    {
      "Räumliche Gliederung": "18.4 Neuharlaching",
      "Indikatorwert": 344.2
    },
    {
      "Räumliche Gliederung": "18.5 Harlaching",
      "Indikatorwert": 476.5
    },
    {
      "Räumliche Gliederung": "19.1 Thalkirchen",
      "Indikatorwert": 355.6
    },
    {
      "Räumliche Gliederung": "19.2 Obersendling",
      "Indikatorwert": 314
    },
    {
      "Räumliche Gliederung": "19.3 Forstenried",
      "Indikatorwert": 386.5
    },
    {
      "Räumliche Gliederung": "19.4 Fürstenried-West",
      "Indikatorwert": 363.8
    },
    {
      "Räumliche Gliederung": "19.5 Solln",
      "Indikatorwert": 477.3
    },
    {
      "Räumliche Gliederung": "20.1 Blumenau",
      "Indikatorwert": 339.7
    },
    {
      "Räumliche Gliederung": "20.2 Neuhadern",
      "Indikatorwert": 371.1
    },
    {
      "Räumliche Gliederung": "20.3 Großhadern",
      "Indikatorwert": 387.8
    },
    {
      "Räumliche Gliederung": "21.1 Neupasing",
      "Indikatorwert": 326.2
    },
    {
      "Räumliche Gliederung": "21.2 Am Westbad",
      "Indikatorwert": 291.5
    },
    {
      "Räumliche Gliederung": "21.3 Pasing",
      "Indikatorwert": 353.5
    },
    {
      "Räumliche Gliederung": "21.4 Obermenzing",
      "Indikatorwert": 456
    },
    {
      "Räumliche Gliederung": "22.1 Altaubing",
      "Indikatorwert": 419.3
    },
    {
      "Räumliche Gliederung": "22.2 Aubing-Süd",
      "Indikatorwert": 362.7
    },
    {
      "Räumliche Gliederung": "22.3 Lochhausen",
      "Indikatorwert": 417.8
    },
    {
      "Räumliche Gliederung": "22.4 Freiham",
      "Indikatorwert": 211.2
    },
    {
      "Räumliche Gliederung": "23.1 Industriebezirk",
      "Indikatorwert": 427.8
    },
    {
      "Räumliche Gliederung": "23.2 Untermenzing-Allach",
      "Indikatorwert": 439.6
    },
    {
      "Räumliche Gliederung": "24.1 Feldmoching",
      "Indikatorwert": 424.1
    },
    {
      "Räumliche Gliederung": "24.2 Hasenbergl-Lerchenau Ost",
      "Indikatorwert": 337.2
    },
    {
      "Räumliche Gliederung": "24.3 Ludwigsfeld",
      "Indikatorwert": 338.1
    },
    {
      "Räumliche Gliederung": "24.4 Lerchenau West",
      "Indikatorwert": 398.6
    },
    {
      "Räumliche Gliederung": "25.1 Friedenheim",
      "Indikatorwert": 295.3
    },
    {
      "Räumliche Gliederung": "25.2 St. Ulrich",
      "Indikatorwert": 333.1
    }
   ];