function _1(md){return(
  md`**Wilhelm Ostwald** (1853–1932) war ein bedeutender Chemiker und Philosoph, der als einer der Begründer der physikalischen Chemie gilt. Er wurde in Riga geboren und studierte Chemie an der Universität Dorpat. Nach seiner Promotion lehrte er an verschiedenen Universitäten, darunter die Universität Leipzig, wo er von 1887 bis 1906 als Professor tätig war. Für seine Arbeiten über Katalyse, chemische Gleichgewichte und Reaktionsgeschwindigkeiten erhielt er 1909 den Nobelpreis für Chemie. 
  Neben seinen chemischen Forschungen widmete sich Ostwald intensiv der Farben- und Formenlehre. Ab 1914 betrieb er im Auftrag des Deutschen Werkbundes farbtheoretische Studien und entwickelte experimentelle Methoden zur messenden Farbenlehre. Seine Arbeiten führten zur Veröffentlichung des "Ostwaldschen Farbatlas" und der "Farbenfibel" in den Jahren 1917/18. In den 1920er-Jahren erweiterte Ostwald seine Forschungen auf die Formenlehre. 1922 veröffentlichte er "Die Harmonie der Formen", gefolgt von den Mappenwerken "Die Welt der Formen" bis 1928, in denen er seine Lehre weiter ausformulierte. Diese Arbeiten beeinflussten unter anderem den Deutschen Werkbund, das Bauhaus und die niederländische Kunstbewegung De Stijl.
  Ostwalds Bestreben, universale Ordnungsgesetze und Typisierungen in Farbe und Form zu erforschen, spiegelt sich in seinem interdisziplinären Ansatz wider, der Wissenschaft und Kunst miteinander verband. Seine Beiträge zur Farben- und Formenlehre sind ein bedeutender Teil seines wissenschaftlichen Erbes und zeigen seine Bemühungen, die materiellen Quellen der Kunst zu verstehen und methodisch zu erfassen.`
  )}
  
  function _2(md){return(
  md`**Wilhelm Ostwald** (1853–1932) was a prominent chemist and philosopher, regarded as one of the founders of
  physical chemistry. Born in Riga, he studied chemistry at the University of Dorpat. After earning his doctorate, he taught at various universities, including the University of Leipzig, where he served as a professor from 1887 to 1906. For his work on catalysis, chemical equilibria, and reaction kinetics, he was awarded the Nobel Prize in Chemistry in 1909.
  In addition to his chemical research, Ostwald dedicated himself to the study of color and form. Beginning in 1914, he conducted color-theoretical studies on behalf of the German Werkbund, developing experimental methods for measuring and understanding color theory. His work resulted in the publication of the "Ostwald Color Atlas" and the "Color Primer" in 1917/18.
  In the 1920s, Ostwald expanded his research into the theory of form. In 1922, he published The Harmony of Forms, followed by a series of portfolios titled The World of Forms up to 1928, where he further elaborated on his theories. These works influenced the German Werkbund, the Bauhaus, and the Dutch art movement De Stijl.
  Ostwald’s quest to explore universal laws of order and standardization in color and form reflects his interdisciplinary approach, bridging science and art. His contributions to the study of color and form are a significant part of his scientific legacy, demonstrating his efforts to understand and methodologically document the material sources of art.`
  )}
  
  function _3(html){return(
  html`
  <p>
    <strong><a href="https://www.phlip.site" target="_blank" style="text-decoration: none; color: inherit;">Philipp Paulsen</a></strong>
    ist Grafikdesigner, Forscher und Dozent mit einem Schwerpunkt auf Editorial-, Ausstellungs- und Systemdesign. Nach einem Studium der Kulturwissenschaften an der Humboldt-Universität zu Berlin absolvierte er ein Studium im Bereich Grafikdesign an der Hochschule für Grafik und Buchkunst Leipzig (HGB). Im Jahr 2006 gründete er gemeinsam mit einem Partner das Studio Bachmann-Paulsen, das mit einer Vielzahl kultureller und unabhängiger Institutionen zusammenarbeitet. Seine Arbeiten wurden ausgezeichnet und international ausgestellt, darunter bei Die schönsten deutschen Bücher (Deutschland), dem International Festival for Poster- and Graphic-Design in Chaumont (Frankreich) und Weltformat in Luzern (Schweiz). Von 2011 bis 2014 unterrichtete er Typografie an der HGB und war von 2014 bis 2024 als Dozent für Grafikdesign an der German University in Cairo tätig. Seit 2024 ist er Dozent an der International University (IU). Von 2018 bis 2023 war er Mitorganisator der zweiten und dritten Runde des Wettbewerbs 100/100 – Hundred Best Arabic Posters. Besonders interessiert er sich für das Wechselspiel zwischen regelbasiertem, generativem und intuitivem Design.
  </p>
  `
  )}
  
  function _4(html){return(
  html`
  <p>
    <strong><a href="https://www.phlip.site" target="_blank" style="text-decoration: none; color: inherit;">Philipp Paulsen</a></strong>
    is a graphic designer, researcher, and educator, focusing on editorial, exhibition, and system design. After Cultural Studies at Humboldt University Berlin, he graduated in Graphic Design at the Academy of Fine Arts Leipzig (HGB). In 2006 he co-founded Bachmann-Paulsen, collaborating with a variety of cultural and independent business institutions. His work received awards and was exhibited internationally, including The Most Beautiful German Books (DE), International Festival for Poster- and Graphic-Design, Chaumont (FR), and Weltformat, Luzern (CH). He served as an instructor in Typography at HGB 2011–14, and was teaching Graphic Design at the German University in Cairo 2014–24. Since 2024 he lectures at International University (IU). 2018–23 he co-organized 100/100 – Hundred Best Arabic Posters competition Round 2 and 3. He is especially interested in the interplay between rule-based, generative, and intuitive design.
  </p>
  `
  )}
  
  function _5(md){return(
  md`**Herzlichen Dank** an die Deutsche Bücherei Leipzig und das Wilhelm-Ostwald-Archiv Großbooten.`
  )}
  
  export default function define(runtime, observer) {
    const main = runtime.module();
    main.variable(observer()).define(["md"], _1);
    main.variable(observer()).define(["md"], _2);
    main.variable(observer()).define(["html"], _3);
    main.variable(observer()).define(["html"], _4);
    main.variable(observer()).define(["md"], _5);
    return main;
  }
  