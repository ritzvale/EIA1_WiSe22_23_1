const Europa22 = 447.7;
const Europa12 = 440.55;
const Deutschland22 = 83.80;
const Deutschland12 = 80.84;
const Frankreich22 = 65.79;
const Frankreich12 = 63.73;
const Italien22 = 60.59;
const Italien12 = 59.73;
const Kroatien22 = 4.08;
const Kroatien12 = 4.30;
const Text1 = "Gesamtzahl Einwohnerinnen und Einwohner in";
const Text2 = "in 2022";
const Text3 = "Deutschland";
const Text4 = "Kroatien";
const Text5 = "Frankreich";
const Text6 = "Italien";
const Text7 = "in der europäischen Union";
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
//Wachstunsrate//
const WachstumsrateDE12 = ((DifferenzDE / Deutschland22) * 100);
const WachstumsrateFR12 = ((DifferenzFR / Frankreich22) * 100);
const WachstumsrateIT12 = ((DifferenzIT / Italien22) * 100);
const WachstumsrateKR12 = ((DifferenzKR / Kroatien22) * 100);
const WachstumsrateEU12 = ((DifferenzEU / Europa22) * 100);
function Europa() {
    document.getElementById("gesamt").innerHTML = Europa22.toFixed(2) + " Mio";
    document.getElementById("relativ").innerHTML = "100%";
    document.getElementById("wachstumsrate").innerHTML = WachstumsrateEU12 + "%";
    document.getElementById("wachstumsrategesamt").innerHTML = DifferenzEU + " Mio";
    document.getElementById("Name").innerHTML = Text1 + " Europa " + Text2;
    document.querySelector("h1").innerHTML = "Einwohnerzahl in " + Text7;
    document.querySelector(".chart").setAttribute("style", "height:" + "100%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "1");
    document.querySelector("#dt").setAttribute("class", "wrapper");
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#cr").setAttribute("class", "wrapper");
}
window.addEventListener("load", function () {
    document.querySelector(".chartStarWrapper").addEventListener('click', Europa);
    document.querySelector(".germany").addEventListener('click', Deutschland);
    document.querySelector(".france").addEventListener('click', Frankreich);
    document.querySelector(".italy").addEventListener('click', Italien);
    document.querySelector(".croatia").addEventListener('click', Kroatien);
});
function Deutschland() {
    document.getElementById("gesamt").innerHTML = Deutschland22 + " Mio";
    document.getElementById("relativ").innerHTML = RelativDEzuEU + "%";
    document.getElementById("wachstumsrate").innerHTML = WachstumsrateDE12 + "%";
    document.getElementById("wachstumsrategesamt").innerHTML = DifferenzDE + " Mio";
    document.getElementById("Name").innerHTML = Text1 + " Deutschland " + Text2;
    document.querySelector("h1").innerHTML = "Einwohnerzahl in " + Text3;
    document.querySelector(".chart").setAttribute("style", "height:" + (Deutschland22 / Europa22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5");
    document.querySelector("#dt").setAttribute("class", "active");
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#cr").setAttribute("class", "wrapper");
}
function Frankreich() {
    document.getElementById("gesamt").innerHTML = Frankreich22 + " Mio";
    document.getElementById("relativ").innerHTML = RelativFRzuEU + "%";
    document.getElementById("wachstumsrate").innerHTML = WachstumsrateFR12 + "%";
    document.getElementById("wachstumsrategesamt").innerHTML = DifferenzFR + " Mio";
    document.getElementById("Name").innerHTML = Text1 + " Frankreich " + Text2;
    document.querySelector("h1").innerHTML = "Einwohnerzahl in " + Text5;
    document.querySelector(".chart").setAttribute("style", "height:" + (Frankreich22 / Europa22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5");
    document.querySelector("#dt").setAttribute("class", "wrapper");
    document.querySelector("#fr").setAttribute("class", "active");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#cr").setAttribute("class", "wrapper");
}
function Italien() {
    document.getElementById("gesamt").innerHTML = Italien22 + " Mio";
    document.getElementById("relativ").innerHTML = RelativITzuEU + "%";
    document.getElementById("wachstumsrate").innerHTML = WachstumsrateIT12 + "%";
    document.getElementById("wachstumsrategesamt").innerHTML = DifferenzIT + " Mio";
    document.getElementById("Name").innerHTML = Text1 + " Italien " + Text2;
    document.querySelector("h1").innerHTML = "Einwohnerzahl in " + Text6;
    document.querySelector(".chart").setAttribute("style", "height:" + (Italien22 / Europa22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5");
    document.querySelector("#dt").setAttribute("class", "wrapper");
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "active");
    document.querySelector("#cr").setAttribute("class", "wrapper");
}
function Kroatien() {
    document.getElementById("gesamt").innerHTML = Kroatien22 + " Mio";
    document.getElementById("relativ").innerHTML = RelativKRzuEU + "%";
    document.getElementById("wachstumsrate").innerHTML = WachstumsrateKR12 + "%";
    document.getElementById("wachstumsrategesamt").innerHTML = DifferenzKR + " Mio";
    document.getElementById("Name").innerHTML = Text1 + " Kroatien " + Text2;
    document.querySelector("h1").innerHTML = "Einwohnerzahl in " + Text4;
    document.querySelector(".chart").setAttribute("style", "height:" + (Kroatien22 / Europa22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5");
    document.querySelector("#dt").setAttribute("class", "wrapper");
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#cr").setAttribute("class", "active");
}
//# sourceMappingURL=script.js.map