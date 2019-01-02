var js2xmlparser = require("js2xmlparser");

var obj = {
  "Zgloszenie": {
    "@": {
      "CRN": ``,
      "Kontenery": ``,
      "KrajPrzeznaczenia": ``,
      "KrajWysylki": ``,
      "LiczbaOpakowan": ``,
      "LiczbaPozycji": ``,
      "MasaBrutto": ``,
      "P1a": `EU`,
      "Skladowanie": "0",
      "UCWyprowadzenia": ``,
      "UCWywozu": ``
    },
    "Nadawca": {
      "@": {
        "EORI": `PL586222190200000`,
        "KodPocztowy": ``,
        "Kraj": `PL`,
        "Miejscowosc": ``,
        "Nazwa": ``,
        "TIN": ``,
        "UlicaNumer": ``
      },
      "Odbiorca": {
        "@": {
          "KodPocztowy": ``,
          "Kraj": ``,
          "Miejscowosc": ``,
          "Nazwa": ``,
          "UlicaNumer": ``
        }
      },
      "ZglaszajacyPrzedstawiciel": {
        "@": {
          "EORI": `PL586222190200000`,
          "KodPocztowy": ``,
          "Kraj": ``,
          "Miejscowosc": ``,
          "Nazwa": ``,
          "Przedstawicielstwo": `1`,
          "TIN": `PL5862221902`,
          "UlicaNumer": ``,
          "Wskaznik": ``
        }
      },
      "TransportNaGranicy": {
        "@": {
          "Rodzaj": `5`
        }
      },
      "Lokalizacja": {
        "@": {
          "UC": `PL441010`
        }
      },
      "WarunkiDostawy": {
        "@": {
          "Kod": `CPT`,
          "Miejsce": `Oslo`,
          "MiejsceKod": `3`
        }
      },
      "Transakcja": {
        "@": {
          "Kurs": ``,
          "Waluta": ``,
          "Wartosc": ``
        }
      },
      "Towar": [
        {
          "@": {
            "KodTaric": `00`,
          },
          "Opakowanie": {
            "@": {
              "LiczbaOpakowan": '1',
              "Rodzaj": `CT`,
              "Znaki": `p`
            }
          },
          "WartoscTowaru": {
            "@": {
              "WartoscStatystyczna": `11`
            }
          }
        },
      ],
      "MiejsceData": {
        "@": {
          "Data": `2016-12-28`,
          "Miejsce": `Gdynia`,
          "NazwiskoImie": `Ryszard Rzepa`,
          "Stanowisko": `1`,
          "Telefon": `004791911225`
        }
      }
    },
  }
};

console.log(js2xmlparser.parse("IE515", obj));
