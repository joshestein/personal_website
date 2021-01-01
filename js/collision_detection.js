// based on https://observablehq.com/@d3/collision-detection/2

const n = 4;
const color = d3.scaleOrdinal(d3.range(n), ["transparent"].concat(d3.schemeTableau10))
const height = 300;
const width = 800;

const k = height / 200;
const r = d3.randomUniform(k, k * 6);
const data = Array.from({length: 200}, (_, i) => ({r: r(), group: i && (i % n + 1)}));
const nodes = data.map(Object.create);

var canvas = d3.select("#name-bubbles").append("canvas")
        .attr("width", width)
        .attr("height", height);

var context = canvas.node().getContext("2d");

const simulation = d3.forceSimulation(nodes)
    .alphaTarget(0.2) // stay hot
    .velocityDecay(0.1) // low friction
    .force("x", d3.forceX().strength(0.01))
    .force("y", d3.forceY().strength(0.01))
    .force("collide", d3.forceCollide().radius(d => d.r + 1).iterations(3))
    .force("charge", d3.forceManyBody().strength((d, i) => i ? 0 : -width * 1 / 3))
    .on("tick", ticked);

d3.select(context.canvas)
    .on("touchmove", event => event.preventDefault())
    .on("pointermove", pointed);

function pointed(event) {
    const [x, y] = d3.pointer(event);
    nodes[0].fx = x - width / 2;
    nodes[0].fy = y - height / 2;
}

function ticked() {
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    for (const d of nodes) {
        context.beginPath();
        context.moveTo(d.x + d.r, d.y);
        context.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
        context.fillStyle = color(d.group);
        context.fill();
    }
    context.restore();
    context.font = "3rem monospace";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText("Josh Stein", width/2, height/2);
    context.globalCompositeOperation = 'destination-over';
}
