let increment = 0;
let canvasIds = ["canvas-one", "canvas-two", "canvas-three"]
let colors = {
    "canvas-one": {
        "primary": "#b0f7c7",
        "secondary": "#86f5ab"
    },
    "canvas-two": {
        "primary": "#87dede",
        "secondary": "#76cfcf"
    },
    "canvas-three": {
        "primary": "#b0f7c7",
        "secondary": "#86f5ab"
    }
}
let cancasInstances = initializeCanvas(canvasIds);

function animate() {
    // if window is resized, update canvas width
    window.onresize = function() {
        canvasInstance = initializeCanvas(canvasIds);
    }
    cancasInstances.forEach((canvasInstance) => {
        drawWave(canvasInstance);
    });
    window.requestAnimationFrame(animate); 
}

function initializeCanvas(canvasIds) {
    let canvasInstances = [];
    canvasIds.forEach((id) => {
        let canvas = document.getElementById(id);
        let ctx = canvas.getContext("2d");
        canvasInstances.push({
            id: id,
            isInitialized: false,
            canvas: document.getElementById(id),
            ctx: ctx,
            primaryColor: colors[id]["primary"],
            secondaryColor: colors[id]["secondary"]
        })
        canvas.height = 400;
        canvas.width = canvas.parentElement.offsetWidth;
        ctx.fillStyle = colors[id]["primary"];
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    })
    return canvasInstances;
}

function drawWave(waveProps) {
    let {id, canvas, ctx, primaryColor, secondaryColor} = waveProps;
    let count = 12;
    // let centerY = canvas.height/2;
    let centerY = 210;
    let previousX = -100;
    let frequency = .5*increment;
    let amplitude = 210 - (400/2);
    let countOffset = 40;
    ctx.lineWidth = 20;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = secondaryColor;
    for (let c = 0; c < count; c++) {
        let offsetY = (c*countOffset) - (count*countOffset/2) + (countOffset/2);
        ctx.beginPath();
        ctx.moveTo(-5, canvas.height / 2);
        for (let i = -36; i < (canvas.width + 20); i++) {
        if (i > previousX) {
        ctx.lineTo(i, (centerY - (offsetY) + Math.sin(i * 0.08 + frequency) * amplitude));
        }
        previousX = i;
        }
        ctx.stroke();
    }
    increment += .01;
}

animate();