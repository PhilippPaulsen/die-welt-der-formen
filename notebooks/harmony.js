function _1(md){return(
  md`## Wilhelm Ostwald: Die Harmonie der Formen`
  )}
  
  function _2(md){return(
  md`This notebook demonstrates the harmony of forms with interactive visualizations.`
  )}
  
  function _counter(html)
  {
    let value = 0;
    const button = html`<button>Click me!</button>`;
    const span = html`<span>${value}</span>`;
    button.onclick = () => span.textContent = ++value;
    return html`${button} ${span}`;
  }
  
  
  export default function define(runtime, observer) {
    const main = runtime.module();
    main.variable(observer()).define(["md"], _1);
    main.variable(observer()).define(["md"], _2);
    main.variable(observer("viewof counter")).define("viewof counter", ["html"], _counter);
    main.variable(observer("counter")).define("counter", ["Generators", "viewof counter"], (G, _) => G.input(_));
    return main;
  }
  