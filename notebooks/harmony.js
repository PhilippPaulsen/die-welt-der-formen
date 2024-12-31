function _1(md){return(
  md`## Wilhelm Ostwald: Die Harmonie der Formen`
  )}
  
  function _2(md){return(
  md`By Wilhelm Ostwald  
  With 106 Figures in the Text  
  Leipzig, 1922 Unesma  
  Translated and Edited by Philipp Paulsen  
  Leipzig, 2025 Spector Books`
  )}
  
  function _3(md){return(
  md`**In essence, nothing is more desirable than to organize a great mass.**  
  (Goethe to Schiller, August 14, 1799)`
  )}
  
  function _4(md){return(
  md`### Content
  
  - **Chapter 1.** [Space and the Fundamental Law of Spatial Harmony](#space-and-the-fundamental-law-of-spatial-harmony)
    - [Space](#space)
    - [Division of Space](#division-of-space)
    - [Uniformity of Space](#uniformity-of-space)
    - [Geometric and Drafting Lines and Points](#geometric-lines)
    - [The Fundamental Principle of Spatial Harmony](#fundamental-principle)
  
  - **Chapter 2.** [Lines](#lines)
    - [Types of Lines](#types-of-lines)
    - [Thickness of Lines](#thickness-of-lines)
    - [Edge or Contour](#edge-or-contour)
    - [Curved Lines](#curved-lines)
  
  - **Chapter 3.** [Braids](#braids)
    - [Straight Braids](#straight-braids)
    - [Fechner's Law](#fechners-law)
  
  <!-- Weitere Kapitel -->
  `
  )}
  
  function _5(md){return(
  md`#### First Chapter
  ### Space and the Fundamental Principle of Spatial Harmony`
  )}
  
  function _6(md){return(
  md`#### Space
  By *space*, we mean the way in which we experience the external world. If we disregard all specific contents that come to our consciousness in the form of colors, sounds, temperatures, pressure sensations, etc., and instead ask what all parts of the external world have in common, their *spatial nature* remains. Accordingly, every object has its own share of the total space in which we perceive the external world; we call this share its *shape* [Gestalt] or form, whereby such a form or shape may exhibit all degrees of determinacy or indeterminacy.`
  )}
  
  function _7(md){return(
  md`#### The Three Types of Space  
  Space is either *corporeal*, *planar*, or finitely *linear*. In the first case, it is *three-dimensional*, in the second *two*-dimensional, and in the last *one*-dimensional. If we wish to consider its manifestations, as is necessary when working on a new domain, in the sense of increasing complexity, we must begin with the simplest case, the linear *space*, and then proceed to examine the two-dimensional and three-dimensional spaces.  
  In geometry, the aforementioned determinations are carried out with the utmost rigor. Planes have no thickness, lines no width, and points no extension. The practical-aesthetic spatial theory that concerns us here does not allow for such extensive abstractions. Our lines will always have a distinct width, our planes a certain thickness or height, without letting these considerations disturb us. It is only required that the one-dimensionality in lines and the two-dimensionality in planes predominate so strongly that the existing deviations do not carry weight, i.e., do not significantly alter the phenomena under investigation.`
  )}
  
  export default function define(runtime, observer) {
    const main = runtime.module();
    main.variable(observer()).define(["md"], _1);
    main.variable(observer()).define(["md"], _2);
    main.variable(observer()).define(["md"], _3);
    main.variable(observer()).define(["md"], _4);
    main.variable(observer()).define(["md"], _5);
    main.variable(observer()).define(["md"], _6);
    main.variable(observer()).define(["md"], _7);
    return main;
  }
  