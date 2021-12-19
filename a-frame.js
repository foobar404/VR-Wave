function setupCircle() {
    const scene = document.querySelector("a-scene");
    const radius = 7;
    const points = 52;
    const cubeSize = .2;

    for (let i = 1; i <= points; i++) {
        let degrees = (360 / points) * i;
        let x = (radius + radius * Math.sin(degrees))
        let y = (radius + radius * Math.cos(degrees))
  
        let box = document.createElement("a-box")
        box.setAttribute("id", "a"+i);
        box.setAttribute("depth", cubeSize);
        box.setAttribute("height", cubeSize);
        box.setAttribute("width", cubeSize);
        box.setAttribute("position", `${y} 0 ${x}`);
        box.setAttribute("color", randomColor());
        scene.appendChild(box);  
    }
}

function drawCircle(data) {
    const minSize = .05;
    const scale = .005;
    const points = 52;

    data = organizeData(data).base;

    for(let i = 1;i <= points; i++){
        let elm = document.querySelector("#a"+i);
        let index = Math.floor(data.length / points) * i;
        let dataPoint = data[index];

        let height = minSize + (dataPoint * scale);
        elm.setAttribute("height", height);
    }
}

function randomColor(){
    const colors = ["#4b7332", "#799e51", "#f02259", 
        "#ff5c7c", "#f78fa5","#ffdae7"];
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function organizeData(data){
    let rtn = {};
    rtn.base = data.slice(60, 120);
    rtn.vocals = data.slice(120, 255);
    rtn.mids = data.slice(255, 2000);
    return rtn;
}