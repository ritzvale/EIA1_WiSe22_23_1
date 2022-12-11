
var sounds: string[] = [
    ("./BilderSounds/DrumPad_A.mp3"), 
    ("./BilderSounds/DrumPad_C.mp3"), 
    ("./BilderSounds/DrumPad_F.mp3"), 
    ("./BilderSounds/DrumPad_G.mp3"), 
    ("./BilderSounds/DrumPad_hihat.mp3"), 
    ("./BilderSounds/DrumPad_kick.mp3"), 
    ("./BilderSounds/DrumPad_snare.mp3"), 
    ("./BilderSounds/DrumPad_laugh-1.mp3"), 
    ("./BilderSounds/DrumPad_laugh-2.mp3")]; 
    
    var beat: string [] = [sounds [4], sounds [5], sounds [6]];
    
    var zaehler: number = 0;
    var beatremix: number;
    var interval: number = 0;
    
    
    window.addEventListener("load", addClickListenerDrumpad);
    
    
    function playSample(soundQuelle: string): void {
    
        var sound: HTMLAudioElement = new Audio(soundQuelle);
        sound.play();
    }
    

    function Remix (): void {
    
    
        document.querySelector("#remix").addEventListener("click", function(): void {
    
                beatremix = setInterval(function (): void {
                playSample( beat [zaehler] );
                zaehler = Math.floor(Math.random () * 9);
                },
                300);
                });
        }
    
    
    
    
    function PlayBeat(): void {
    
    if (document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-stop");
        interval = setInterval(myBeat, 350);
    
    }
    else {
    document.getElementById("play").classList.remove("fa-stop");
    document.getElementById("play").classList.add("fa-play");
    clearInterval(interval);
    
    }
    
    function myBeat(): void {
        playSample(beat[zaehler]);
        zaehler += 1;
        if (zaehler > (beat.length - 1))
        zaehler = 0;
        
        }
    
    }
    
    function addClickListenerDrumpad(): void {
    
    document.querySelector(".pad-1").addEventListener("click", function (): void { playSample(sounds[0]); });
    document.querySelector(".pad-2").addEventListener("click", function (): void { playSample(sounds[1]); });
    document.querySelector(".pad-3").addEventListener("click", function (): void { playSample(sounds[2]); });
    document.querySelector(".pad-4").addEventListener("click", function (): void { playSample(sounds[3]); });
    document.querySelector(".pad-5").addEventListener("click", function (): void { playSample(sounds[4]); });
    document.querySelector(".pad-6").addEventListener("click", function (): void { playSample(sounds[5]); });
    document.querySelector(".pad-7").addEventListener("click", function (): void { playSample(sounds[6]); });
    document.querySelector(".pad-8").addEventListener("click", function (): void { playSample(sounds[7]); });
    document.querySelector(".pad-9").addEventListener("click", function (): void { playSample(sounds[8]); });
    
    
    document.querySelector("#play").addEventListener("click", PlayBeat);
    document.querySelector("#remix").addEventListener("click", function (): void {Remix(); });
    
    }