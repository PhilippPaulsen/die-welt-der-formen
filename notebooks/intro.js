function _1(md){return(
  md`## Introduction`
  )}
  
  export default function define(runtime, observer) {
    const main = runtime.module();
    main.variable(observer()).define(["md"], _1);
    return main;
  }
  