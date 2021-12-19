function fromElement(element) {
    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let source = audioCtx.createMediaElementSource(element);
    let analyser = audioCtx.createAnalyser();
    analyser.fftsize = 32768;

    source.connect(analyser).connect(audioCtx.destination);
    
    let data = new Uint8Array(analyser.frequencyBinCount);
    (function renderLoop(){
        analyser.getByteFrequencyData(data);

        let event = new CustomEvent('audioData', {detail:data});
        window.dispatchEvent(event);

        requestAnimationFrame(renderLoop);
    })();
}