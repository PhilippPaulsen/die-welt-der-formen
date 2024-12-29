import define1 from "./493851ae5989f70a@398.js";

function _1(md){return(
md`# Die Welt der Formen 

Get started with creative coding. Learn more in the [tutorial](https://observablehq.com/@tmcw/p5).`
)}

function _2(p5,width,ParticleSystem){return(
p5(sketch => {
  let system;
  sketch.setup = function() {
    sketch.createCanvas(width, 300);
    system = new ParticleSystem(sketch, sketch.createVector(sketch.width/2, 50));
  };
  sketch.draw = function() {
    sketch.background("#001b42");
    system.addParticle();
    system.run();
  }
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["p5","width","ParticleSystem"], _2);
  const child1 = runtime.module(define1);
  main.import("p5", child1);
  main.import("ParticleSystem", child1);
  return main;
}
