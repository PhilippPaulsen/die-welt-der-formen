function _1(md){return(
  md`## Die Welt der Formen  `
  )}
  
  function _2(md){return(
  md`#### Der Naturforscher und Nobelpreisträger Wilhelm Ostwald veröffentlichte 1922 seine Formenlehre *Die Harmonie der Formen*. Bis 1928 folgten vier Mappenwerke unter dem Titel *Die Welt der Formen*, in denen die Lehre methodisch ausformuliert wurde. Die 240 Serien von Formen, auf transparenten Blättern gedruckt, erlauben unzählige Kombinationsmöglichkeiten und stellen ein frühes Beispiel regelbasierter Programmierung im Bereich von Kunst und Design dar.
  #### Ostwalds Farben- und Formlehre beeinflussten nicht nur den Werkbund, sondern auch das Bauhaus und die niederländische Kunstbewegung De Stijl. Designer wie Moholy-Nagy, Herbert Bayer oder später Vertreter der Konkreten Kunst wie Max Bill, Karl Gerstner, und besonders Hans Hinterreiter, nahmen seine Ideen begeistert auf. Dennoch ist Ostwalds Formenlehre – im Gegensatz zu seiner Farbenlehre – heute weitgehend in Vergessenheit geraten.
  #### Dieses Forschungsprojekt möchte dazu beitragen, Ostwalds Formenlehre einer breiteren Öffentlichkeit zugänglich zu machen: Im Herbst 2025 erscheint eine kritische Neuauflage im Verlag Spector Books Leipzig, die auch bisher unveröffentlichte Manuskripte und Fragmente einschließt, sowie Ostwalds Arbeiten im Spannungsfeld von Wissenschaft und Kunst, Gesetzmäßigkeit und Intuition, Ornament und Figuration einordnet. Begleitend dazu lädt diese digitale Plattform (aktuell im Beta-Status) dazu ein, Ostwalds Texte, Formen und Gesetze mithilfe von interaktiven Grafiken zu entdecken.`
  )}
  
  function _3(md){return(
  md`## The World of Forms  
  #### The natural scientist and Nobel laureate Wilhelm Ostwald published his theory of form, *The Harmony of Forms*, in 1922. Between 1922 and 1928, he expanded on this work through four portfolios titled *The World of Forms*, where the doctrine was methodically developed. The 240 series of shapes, printed on transparent sheets, allow countless combinations and represent an early example of rule-based programming in the realm of art and design.
  #### Ostwald’s theories of color and form influenced not only the Werkbund but also the Bauhaus and the Dutch art movement De Stijl. Designers such as Moholy-Nagy, Herbert Bayer, and later representatives of Concrete Art like Max Bill, Karl Gerstner, and especially Hans Hinterreiter enthusiastically adopted his ideas. Despite this, Ostwald’s theory of form—unlike his color theory—has largely fallen into obscurity today.
  #### This research project aims to make Wilhelm Ostwald’s theory of form accessible to a wider audience. In the fall of 2025, a critical new edition will be published by Spector Books Leipzig, including previously unpublished manuscripts and fragments. This edition will contextualize Ostwald’s work within the intersections of science and art, lawfulness and intuition, ornament and figuration. Complementing the publication, this digital platform (currently in beta) invites users to explore Ostwald’s texts, shapes, and principles through interactive graphics.`
  )}
  
  export default function define(runtime, observer) {
    const main = runtime.module();
    main.variable(observer()).define(["md"], _1);
    main.variable(observer()).define(["md"], _2);
    main.variable(observer()).define(["md"], _3);
    return main;
  }
  