const Europa22: number = 750.58; 
const Europa12: number = 740.34;

const Deutschland22: number = 83.80; 
const Deutschland12: number = 80.84;

const Frankreich22: number = 66.05;
const Frankreich12: number = 63.73; 

const Italien22: number = 60.63;
const Italien12: number = 59.73;

const Kroatien22: number = 4.07;
const Kroatien12: number = 4.30; 

const gesamt = document.querySelector("#gesamt");
const gesamttext = document.querySelector("#gesamttext");
const relativ = document.querySelector("#relativ");
const relativtext = document.querySelector("#relativtext")
const wachstum = document.querySelector("#wachstum");
const wachstumtext = document.querySelector ("#wachstumtext");
const wachstumgesamt = document.querySelector("#wachstumgesamt");
const wachstumgesamttext = document.querySelector ("#wachstumgesamttext");

//Relativität//
const RelativDEzuEU: number = ((Deutschland22 / Europa22) * 100);
const RelativFRzuEU: number = ((Frankreich22 / Europa22) * 100);
const RelativITzuEU: number = ((Italien22 / Europa22) * 100);
const RelativKRzuEU: number = ((Kroatien22 / Europa22) * 100);

//Differenz//
const DifferenzDE: number = (Deutschland22 - Deutschland12);
const DifferenzFR: number = (Frankreich22 - Frankreich12);
const DifferenzIT: number = (Italien22 - Italien12);
const DifferenzKR: number = (Kroatien22 -Kroatien12);
const DifferenzEU: number = (Europa22 - Europa12);

//Wachstumsrate//
const WachstumsrateDE12: number = ((DifferenzDE / Deutschland22) * 100);
const WachstumsrateFR12: number = ((DifferenzFR / Frankreich22) * 100);
const WachstumsrateIT12: number = ((DifferenzIT / Italien22) *100);
const WachstumsrateKR12: number = ((DifferenzKR / Kroatien22) * 100);
const WachstumsrateEU12: number = ((DifferenzEU / Europa22) * 100);

document.querySelector("#dt").addEventListener("click", function(){
    changeTo(Deutschland22, Deutschland12, DifferenzDE, WachstumsrateDE12,"stylede")
});

document.querySelector("#fr").addEventListener("click", function(){
    changeTo(Frankreich22, Frankreich12, DifferenzFR, WachstumsrateFR12,"stylefr")
});

document.querySelector("#it").addEventListener("click", function(){
    changeTo(Italien22, Italien12, DifferenzIT, WachstumsrateIT12,"styleit")
});

document.querySelector("#cr").addEventListener("click", function(){
    changeTo(Kroatien22, Kroatien12, DifferenzKR, WachstumsrateKR12,"stylekr")
});

document.querySelector("#eu").addEventListener("click", function(){
    changeTo(Europa22, Europa12, DifferenzEU, WachstumsrateEU12,"styleeu")
});

function changeTo (population22,population12,Prozent,Wachstumsrate,style) {
    gesamt.innerHTML = population22.toString();
    gesamttext.innerHTML = "Gesamtzahl EinwohnerInnen in 2022 in Mio";
    relativ.innerHTML = population12.toString();
    relativtext.innerHTML = "Gesamtzahl EinwohnerInnen im Jahr 2012 in Mio";
    wachstum.innerHTML = Prozent.toFixed(2).toString();
    wachstumtext.innerHTML = "Wachstumsrate seit 2022 in Prozent";
    wachstumgesamt.innerHTML = Wachstumsrate.toFixed(2).toString();
    wachstumgesamttext.innerHTML = "Wachstumsrate gesamt zwischen 2012 und 2022 in Mio"
    document.getElementById("chart").className = style;
}