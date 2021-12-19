window.onload =()=>{
    let audio = document.querySelector("audio");
    let played = false;

    audio.addEventListener("play", ()=>{
        if(played) return;
        played = true;

        fromElement(document.querySelector("audio"));
    });

    setupCircle();
    window.addEventListener("audioData",(e)=>{
        drawCircle(e.detail);
    },false);
}