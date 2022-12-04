const Europa22 = 750.58;
const Europa12 = 740.34;
const Deutschland22 = 83.80;
const Deutschland12 = 80.84;
const Frankreich22 = 66.05;
const Frankreich12 = 63.73;
const Italien22 = 60.63;
const Italien12 = 59.73;
const Kroatien22 = 4.07;
const Kroatien12 = 4.30;
const gesamt = document.querySelector("#gesamt");
const gesamttext = document.querySelector("#gesamttext");
const relativ = document.querySelector("#relativ");
const relativtext = document.querySelector("#relativtext");
const wachstum = document.querySelector("#wachstum");
const wachstumtext = document.querySelector("#wachstumtext");
const wachstumgesamt = document.querySelector("#wachstumgesamt");
const wachstumgesamttext = document.querySelector("#wachstumgesamttext");
//Relativität//
const RelativDEzuEU = ((Deutschland22 / Europa22) * 100);
const RelativFRzuEU = ((Frankreich22 / Europa22) * 100);
const RelativITzuEU = ((Italien22 / Europa22) * 100);
const RelativKRzuEU = ((Kroatien22 / Europa22) * 100);
//Differenz//
const DifferenzDE = (Deutschland22 - Deutschland12);
const DifferenzFR = (Frankreich22 - Frankreich12);
const DifferenzIT = (Italien22 - Italien12);
const DifferenzKR = (Kroatien22 - Kroatien12);
const DifferenzEU = (Europa22 - Europa12);
//Wachstumsrate//
const WachstumsrateDE12 = ((DifferenzDE / Deutschland22) * 100);
const WachstumsrateFR12 = ((DifferenzFR / Frankreich22) * 100);
const WachstumsrateIT12 = ((DifferenzIT / Italien22) * 100);
const WachstumsrateKR12 = ((DifferenzKR / Kroatien22) * 100);
const WachstumsrateEU12 = ((DifferenzEU / Europa22) * 100);
document.querySelector("#dt").addEventListener("click", function () {
    changeTo(Deutschland22, Deutschland12, DifferenzDE, WachstumsrateDE12, "stylede");
});
document.querySelector("#fr").addEventListener("click", function () {
    changeTo(Frankreich22, Frankreich12, DifferenzFR, WachstumsrateFR12, "stylefr");
});
document.querySelector("#it").addEventListener("click", function () {
    changeTo(Italien22, Italien12, DifferenzIT, WachstumsrateIT12, "styleit");
});
document.querySelector("#cr").addEventListener("click", function () {
    changeTo(Kroatien22, Kroatien12, DifferenzKR, WachstumsrateKR12, "stylekr");
});
document.querySelector("#eu").addEventListener("click", function () {
    changeTo(Europa22, Europa12, DifferenzEU, WachstumsrateEU12, "styleeu");
});
function changeTo(population22, population12, Prozent, Wachstumsrate, style) {
    gesamt.innerHTML = population22.toString();
    gesamttext.innerHTML = "Gesamtzahl EinwohnerInnen in 2022 in Mio";
    relativ.innerHTML = population12.toString();
    relativtext.innerHTML = "Gesamtzahl EinwohnerInnen im Jahr 2012 in Mio";
    wachstum.innerHTML = Prozent.toFixed(2).toString();
    wachstumtext.innerHTML = "Wachstumsrate seit 2022 in Prozent";
    wachstumgesamt.innerHTML = Wachstumsrate.toFixed(2).toString();
    wachstumgesamttext.innerHTML = "Wachstumsrate gesamt zwischen 2012 und 2022 in Mio";
    document.getElementById("chart").className = style;
}
//# sourceMappingURL=script.js.map