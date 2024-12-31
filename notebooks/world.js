function _1(md){return(
  md`## Wilhelm Ostwald: The World of Forms`
  )}
  
  export default function define(runtime, observer) {
    const main = runtime.module();
    main.variable(observer()).define(["md"], _1);
    return main;
  }
  