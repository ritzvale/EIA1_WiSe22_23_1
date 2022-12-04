window.addEventListener("load", addClickListenerDrumpad);

var beat: string[] = [
    "./DrumPadSounds/DrumPad_kick.mp3",
    "./DrumPadSounds/DrumPad_snare.mp3",
    "./DrumPadSounds/DrumPad_hihat.mp3"
];

var zaehler: number = 0;

function playBeat(): void {
    setInterval(function (): void {
        playSample (beat[zaehler]);
        zaehler ++;
        if (zaehler === 3) {
            zaehler = 0;
        }
    }, 500);
}

function playSample(soundQuelle: string): void {

    var sound: HTMLAudioElement = new Audio(soundQuelle);
    sound.play();
}

function addClickListenerDrumpad(): void {

document.querySelector(".pad1").addEventListener("click", function (): void { playSample("./DrumPadSounds/DrumPad_A.mp3"); });
document.querySelector(".pad2").addEventListener("click", function (): void { playSample("./DrumPadSounds/DrumPad_C.mp3"); });
document.querySelector(".pad3").addEventListener("click", function (): void { playSample("./DrumPadSounds/DrumPad_F.mp3"); });
document.querySelector(".pad4").addEventListener("click", function (): void { playSample("./DrumPadSounds/DrumPad_G.mp3"); });
document.querySelector(".pad5").addEventListener("click", function (): void { playSample("./DrumPadSounds/DrumPad_hihat.mp3"); });
document.querySelector(".pad6").addEventListener("click", function (): void { playSample("./DrumPadSounds/DrumPad_kick.mp3"); });
document.querySelector(".pad7").addEventListener("click", function (): void { playSample("./DrumPadSounds/DrumPad_snare.mp3"); });
document.querySelector(".pad8").addEventListener("click", function (): void { playSample("./DrumPadSounds/DrumPad_laugh-1.mp3"); });
document.querySelector(".pad9").addEventListener("click", function (): void { playSample("./DrumPadSounds/DrumPad_laugh-2.mp3"); });
document.querySelector(".play").addEventListener("click", function (): void { playBeat(); });

}
