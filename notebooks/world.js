function _1(md){return(
  md`## The World of Forms`
  )}
  
  function _2(md){return(
  md`#### Development and Organization of Lawful and Beautiful Structures  `
  )}
  
  function _3(md){return(
  md`Drawn and Described by Wilhelm Ostwald, With 5 Figures in the Text and Plates, Leipzig, Unesma 1922–28.
  Edited by Philipp Paulsen, Leipzig, Spector Books 2025.`
  )}
  
  function _4(html)
  {
    const scaleFactor = 0.5; // 50% der Originalgröße
    const images = document.querySelectorAll("img");
  
    images.forEach((img) => {
      img.onload = () => {
        const originalWidth = img.naturalWidth;
        const originalHeight = img.naturalHeight;
  
        img.style.width = `${originalWidth * scaleFactor}px`;
        img.style.height = `${originalHeight * scaleFactor}px`;
      };
    });
  
    return html`<p></p>`;
  }
  
  
  function _5(md){return(
  md`## First Portfolio`
  )}
  
  function _6(md){return(
  md`#### The Reflected Node Lines of the First to Fifth Triangles
  ## Introduction`
  )}
  
  function _7(md){return(
  md`#### The General Task
  In my recently published work, *The Harmony of Forms,* I presented the
  general doctrine of lawful forms. Based on Goethe's principle that
  lawfulness is a prerequisite for beauty, this work provided an overview
  of the entirety of conceivable and possible beautiful forms, that is,
  those whose beauty lies in the form itself and not in what they
  represent. The purpose and structure of that work necessitated
  significant restraint in elaborating on details to ensure the primary
  objective was not lost. References were made to subsequent works in
  which such specialized investigations would be presented. One of these
  studies is presented here; others, which have already been developed,
  will follow.  
  The task I have set myself in this overall work–namely, to create and
  demonstrate all lawful forms–is, in its entirety, an insurmountable
  challenge, even for a sustained cooperative effort in which departing
  contributors are replaced by new ones. It is even more so for an
  individual, particularly as advancing age will inevitably prevent any
  one person from continuing such work indefinitely. Nevertheless, the
  execution must begin. As the benefits of such investigations for the
  general public become apparent, collaborators will emerge and form the
  free cooperative effort necessary to cultivate this aspect of the
  science of art.  
  Everything, therefore, depends on making a useful start, and I hope that
  the present work will prove to be just that.  `
  )}
  
  function _8(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/WdF.svg" alt="Figure 1-3" style="width: auto; height: auto;">`
  )}
  
  function _9(md){return(
  md`### The Specific Case
  
  The contents of this portfolio comprise the lawful forms of the mirrored node lines within a triangular grid. The explanation of these terms is derived from the generation of the shared patterns.
  
  As is well-known, the equilateral triangle, square, and hexagon are the only regular polygons that can completely fill a plane through adjacency. These thus constitute the most lawful divisions of space. There are, of course, numerous other consistent forms (see *Harmonie der Formen*, p. 68), but they are all less regular.
  
  Among these three regular space divisions, we primarily examine those formed by triangles, as the simplest figures. These have the particularity that they do not fill the plane solely by translation, as squares and hexagons do, but that every two adjacent triangles are mutual mirror images, as can be readily observed in Sheet 1 of the portfolio. Such a mirrored pair, forming a rhombus, can then fill the plane through translation alone.
  
  In the triangular grid (No. 1), larger regular triangles can be formed by combining the individual sub-triangles. Doubling the side length yields a composite triangle containing \\(2^2 = 4\\) sub-triangles, which fill the plane in exactly the same manner. A tripling of the side length results in \\(3^2 = 9\\) sub-triangles, and, in general, \\(n\\)-times the side length yields \\(n^2\\) sub-triangles.
  
  In a single triangle, only the three vertices are distinguished points. The next composite triangle, with \\(2^2\\) sub-triangles, has six such points or *nodes*; the third has ten, the fourth fifteen, and the fifth twenty-one nodes, all formed by the vertices of its sub-triangles.
  
  We now draw a straight line between any two nodes of a composite triangle. This is our "theme," and we ask what becomes of it when we apply the laws inherent in the regular triangle to it.
  
  The triangle first possesses three axes of symmetry, each passing from one vertex to the midpoint of the opposite side. Applying these axes transforms the initial line into, generally, six lines that are lawfully arranged within the triangle (in certain cases, only three), all of which are of equal length and correspond consistently to the vertices and edges. These lines form the "shape," which, by its generation, also possesses the three axes of symmetry.
  
  Now we imagine the entire plane filled with identical triangles, each containing this shape. We let the sides and nodes disappear, leaving only the lines of the shape. As many such triangles are joined together, an infinite "pattern" arises, which can fill any arbitrary plane.
  
  In the present work, all patterns are depicted that can be generated by the straight-line connection of any nodes within the first to fifth composite triangles (containing \\(1, 4, 9, 16, 25\\) sub-triangles and \\(3, 6, 10, 15, 21\\) nodes, respectively). Thus, they encompass everything that is lawful and therefore beautiful under the stated conditions, thereby solving a problem that no one had previously dared to pose, let alone solve.
  
  It must immediately be emphasized that the area explored here represents only a very small portion of the total possibilities. However, by the same principles used to address this area, any other domain can be conquered, and the means for venturing into neighboring domains will continue to be demonstrated.
  
  To bring the above general instructions vividly to life, a specific example is worked through to make the general procedure clear.
  
  In **Fig. 1**, a composite triangle consisting of 16 sub-triangles is shown, containing 15 nodes. From the left vertex, we draw a straight line to the topmost interior node—this is the "theme." Reflecting this line across the three dashed symmetry axes generates six lines in total, which transform into one another through further reflections without yielding any new lines. Together, they form the shape in **Fig. 2**. Repeating this shape through the seamless alignment of identical triangles creates the infinite pattern in the form of a lattice of lines, **Fig. 3**, whose simple yet rich beauty I have never tired of observing.
  
  We now ask about the *number of possible shapes.* Between \\(n\\) points, there are \\( \\frac{1}{2} n (n - 1) \\) possible connections. Consequently, the three nodes of the first triangle yield three connections, the six nodes of the second yield fifteen, the ten nodes of the third yield forty-five cases or shapes, and so on.
  
  However, many of these cases are equivalent. Each of the six lines in **Fig. 2** produces the same shape, even though different nodes are connected each time. If each theme generated six equivalent lines, the number of distinct patterns would not be \\( \\frac{1}{2} n (n - 1) \\), but one-sixth of that, namely \\( \\frac{1}{12} n (n - 1) \\).
  `
  )}
  
  function _10(md){return(
  md`However, many of these cases are equivalent. Each of the six lines in
  Figure 2 produces the same shape, even though different nodes are
  connected in each case. If each theme line generated six equivalent
  lines, the number of distinct patterns would not be 1/2n (n−1), but
  one-sixth of that value: 1/12n (n−1).  
  Some theme lines, when bisected by one of the mirror lines into two
  symmetric halves, produce only three lines instead of six in the
  pattern. If such lines terminate at a node on the mirror line, the
  half-line generates the same pattern as the whole. These factors
  increase or decrease the number of distinct cases, causing deviations
  from the formula 1/2n (n−1). Since a theoretical treatment of these
  deviations would be too complex, I have relied on empirical methods to
  identify the existing forms, resulting in the following summary:
  
  |                   |       |             |             |
  |-------------------|-------|-------------|-------------|
  | **Sub-Triangles** | **Nodes** | **1/12n (n−1)** | **Forms Found** |
  | 1                 | 3     | 1/2         | 1           |
  | 4                 | 6     | 2 1/2       | 3           |
  | 9                 | 10    | 7 1/2       | 8           |
  | 16                | 13    | 17 1/2      | 18          |
  | 25                | 21    | 35          | 33          |
  | 36                | 28    | 63          | 57          |
  
    
  While the number of discovered forms slightly exceeds the calculated
  ones up to the 4th triangle, it increasingly lags behind thereafter.
  Since the numbers in the last column were determined empirically, they
  cannot be considered entirely reliable. Although I have diligently and
  methodically searched for all conceivable cases, I cannot guarantee that
  I have not overlooked a hidden possibility.  
  Nevertheless, the numbers found are not overwhelmingly large, such that
  one would be deterred from tackling the task. The clear organization
  revealed by the emerging forms rather provides a satisfying sense of
  intellectual mastery over this otherwise boundless world of forms.  
  This is followed by numerous *additional tasks*. In the present
  section, only the 62 patterns of the first to the fifth triangles are
  depicted. It is worthwhile to examine the sixth triangle, which brings
  another 57 patterns, and perhaps even the seventh, with approximately
  100 patterns. Furthermore, four- and six-sided forms should also be
  investigated and presented.  
  In the netnet, not only aligned triangles, etc., can be developed
  between adjacent nodes, but also those of a second order, whose sides do
  not connect the nearest nodes but rather the more distant ones. These
  comprehensive forms arrange the nodes differently, resulting in new
  patterns. Additionally, only reflection has been considered so far.
  However, the triangle is also a trifold rotational figure. We can
  dispense with reflection and consider only rotation. The node lines then
  yield rotations of the most diverse kinds, which are almost entirely
  unknown and open up a new world of captivating beauty.  
  All of this, and much more, which is only briefly hinted at in my
  *Harmony of Forms*, yields numerous further creations. A portion of
  these has already been worked on, and the many hundreds of drawn
  patterns have only increased my enjoyment of the work. I therefore plan
  to issue new portfolios at short intervals and to continue as long as my
  strength and the interest of my contemporaries allow.  `
  )}
  
  function _11(md){return(
  md`#### Order and Application
  For important reasons detailed below, the patterns are not printed on
  ordinary white paper but on transparent sheets. It is therefore
  advisable to have some sheets of white paper ready to place underneath
  the transparent ones for clearer visibility of the drawings. When using
  the patterns as working templates, it is practical to cover them with a
  slightly larger glass plate (edges filed smooth!), effectively
  protecting them from ink stains and mechanical damage.  
  Each sheet contains the serial number at the top left corner. This
  numbering will continue across all subsequent publications, ensuring
  that each pattern permanently retains its unique number.  
  In the same corner, the overall triangle is identified by its nodes. On
  sheet 1, it is identical to the subtriangle. However, sheet 2 already
  depicts the second overall triangle consisting of 4 subtriangles with
  its 6 nodes, among which 3 different straight lines are possible, whose
  patterns are shown on sheets 2, 3, and 4. With plate 5, the group of the
  third triangle begins, consisting of 9 subtriangles with 10 nodes, which
  yield 8 patterns, and so forth. Each group begins with the \\"net,\\" the
  simple division into the overall triangles, with the used node lines
  forming the triangle sides.  
  Of the 6 or 3 lines present in the overall triangle designated by the
  nodes in the top left corner, each individual line can be considered the
  "theme" of the respective pattern, as each generates the others
  through the three reflection lines.  
  The remaining space is filled with the systematic repetitions of the
  pattern derived from the overall triangle. Even for the largest
  triangles, the number of these repetitions is sufficient to illustrate
  the overall effect of the infinite pattern.  `
  )}
  
  function _12(md){return(
  md`**Instructions for Using the Patterns**  
  Each purchaser of this work acquires, through purchase, the right to use
  the patterns for commercial, artisanal, and artistic purposes. Only
  reproduction for literary and educational works is excluded under the
  law protecting intellectual property; however, the reproduction of
  individual patterns as examples may be permitted.  
  If one wishes to use a pattern in the former sense, one must first
  establish a triangular point net corresponding to the nodes of the
  chosen triangle across the entire area to be decorated, selecting the
  spacing appropriately. This is then divided into the net of the overall
  triangles, for which each group\\'s first sheet provides instructions. I
  limit myself to lightly marking the corner points of the overall
  triangles with small rings around the corresponding nodes. The lines of
  the pattern are then drawn in one of these triangles according to the
  template, and this can easily be extended over the adjacent triangles
  until the entire surface is covered.  
  Since, by definition, all lines run between two nodes, no further
  constructions are necessary. The initially drawn triangular net and a
  straightedge suffice for the entire task.  
  It is advisable to first sketch the pattern by hand using light pencil
  or chalk strokes to ensure it is error-free before finalizing it. The
  final execution can then be done in ink, paint, etc. Both the net and
  the sketch must be made with easily removable materials so they can be
  entirely erased afterward, leaving the pattern clean and clear.  
  Among the familiar patterns, this collection already contains several
  rarer examples and even many that are entirely new. The creative
  imagination of all artists combined was far from sufficient to
  exhaustively discover all cases possible under the given conditions.
  Scientific processing of the task, on the other hand, has the power to
  fully explore the abundance of possibilities.  
  However, the forms presented here do not exhaust the possibilities that
  can be generated from the existing material. Only shapes with a single
  straight line as a theme have been depicted. By allowing a second
  straight line, which also meets the condition of connecting two nodes,
  one obtains a significantly greater number of new patterns. For example,
  in a specific overall triangle, if there are *n* distinct patterns each
  based on a single line, the number of two-line patterns is 1/2n (n−1).
  Thus, from the 33 single-line patterns of the fifth triangle, 526
  two-line patterns are generated. The number of three-line patterns
  approaches 6000, according to the formula 1/6n (n−1) (n−2). The total
  number of all patterns is 2n−1.  
  To visualize these numerous new creations, the patterns are printed on
  transparent paper. If one wishes to view a pattern resulting from two
  different lines, the corresponding sheets are overlaid on a white
  background so that the points of the overall triangle at the top left
  align precisely. The sheets are designed such that their edges also
  align. Placing a glass plate on top provides a convenient view of the
  desired combined form. Similarly, three simple patterns can be combined,
  and so forth.  
  If the underlying lines become insufficiently visible, the entire stack
  can be held between two glass plates and placed against the light, or
  laid on a desk illuminated from below by a mirror, as photographers use
  for processing negatives.  
  To methodically exhaust all possible pairs, proceed as follows: Take the
  first sheet of the group to be processed and pair it with all subsequent
  sheets. Then set it aside, take the second sheet, pair it with all
  remaining ones, and set it aside as well. Continue this process with the
  third, fourth, etc., until all sheets of the group have been exhausted,
  i.e., set aside. The initial order of the sheets is arbitrary.  
  All possible triples can be viewed by first pairing sheets 1 and 2 and
  then overlaying sheets 3, 4, 5, etc., in sequence. Repeat this with 1
  and 3; 1 and 4, and so on, until all triples containing sheet 1 have
  been reviewed. Then set sheet 1 aside and repeat the process with the
  pair 2 and 3, then 2 and 4, etc., until the last sheets are set aside.  
  Since even the best memory fails with such abundance, it is helpful to
  have a sheet of paper to note the numbers of the sheets whose
  combinations are particularly pleasing. These combinations should be
  prioritized when the need for such patterns arises.  
  Even without such necessity, one can spend many enjoyable hours simply
  admiring this abundance of beauty and charm.  
  The straight-line patterns in this work represent only the simplest form
  of the underlying concept, which lies in the ordered connection of the
  nodes. Instead of straight lines, arbitrarily shaped curves can be used.
  The lawfulness necessary for beauty is preserved by selecting a specific
  curve and maintaining it throughout the entire pattern. Since each
  pattern is composed entirely of equal-length straight lines, this
  substitution is always possible. Care must be taken to ensure that the
  substitution corresponds to the symmetry conditions. Between two points,
  a given curve can generally have four different orientations, of which
  only one is the mirror-symmetric repetition of the theme and therefore
  the correct one.  
  For technical execution, a template for the chosen curve can be cut from
  cardboard and used to draft the pattern in pencil. The final drawing is
  best executed freehand. Since the structure of the drawing is secured by
  the geometrically correct nodes, the small errors associated with
  freehand execution are not displeasing but rather pleasant, as they
  resemble the slight deviations of organic forms (e.g., leaves on a tree,
  parts of a flower).  
  Although the number of curves that can be drawn between two given points
  is infinitely large, an overview of the possibilities can still be
  obtained. To avoid overly obscuring the inherent lawfulness, the curves
  should not be entirely arbitrary but should generally follow a path
  close to the straight line. Additionally, they should initially be
  smooth, without kinks or abrupt changes.  
  Smooth curves with one, two, or three bends, etc., such as those in
  Figure 4, can be either symmetric about the midpoint or not; the
  curvature may lean to the right or left. This results in 18 distinct
  cases, which can be explored using a simple pattern\\* \\[\\*It is intended
  to publish a folder with corresponding examples later\\] to gain an
  understanding of the variations arising from substituting straight lines
  with curves. Here, too, the abundance of beautiful forms is
  overwhelming.  
  Once smooth curves have been explored, the straight lines in the
  original pattern can be replaced with compound lines consisting of two
  straight lines, a straight line and a curve, or two curves. These meet
  at an angle, which may face inward or outward relative to the forms. The
  ends may also be reversed. The diversity is of the same order as in the
  case of smooth curves.  
  These instructions show how to incrementally approach more complex
  cases. Experience reveals that simpler patterns are usually more
  effective, and these are preferred, particularly since they already
  provide such a wealth of significantly different patterns that the need
  for more is unlikely to arise.  
  Another derivation method involves adorning the straight lines of the
  patterns with freehand strokes, chosen geometrically or naturalistically
  depending on purpose and intention. One can then decide whether to
  retain or remove the straight lines in the final pattern. The latter
  offers the particular appeal of a \\"hidden law.\\"  
  For such applications, \\"open\\" patterns, consisting of exposed lines
  that do not form closed figures, are especially suitable.  
  I have found that even completely arbitrary lines, which are not
  repeated but differ between each pair of nodes, yield usable patterns,
  provided the nodes are precisely maintained. This residual lawfulness
  suffices to ensure an aesthetic effect, assuming the arbitrary choices
  are somehow justified.  `
  )}
  
  function _13(md){return(
  md`#### Description of the Patterns  
  Patterns 1 to 62 represent the shapes that arise in the net of an
  equilateral triangle from a single node line (connecting line between
  two nodes) when this line is subjected to reflection along the three
  axes of symmetry that extend from each corner of the triangle to the
  midpoint of the opposite side. In this process, each node line generates
  six lines within the triangle. If the node line intersects one of the
  symmetry axes perpendicularly or coincides with it, only three lines are
  produced.  
  The 62 patterns belong to the first through fifth triangles and are
  divided into the following groups:`
  )}
  
  function _14(md){return(
  md`**No. 1:** From the first triangle, 1 subtriangle.
  
  **Nos. 2 to 4:** From the second triangle, 4 subtriangles.
  
  **Nos. 5 to 12:** From the third triangle, 9 subtriangles.
  
  **Nos. 13 to 29:** From the fourth triangle, 16 subtriangles.
  
  **Nos. 30 to 62:** From the fifth triangle, 25 subtriangles.
    
  The 57 patterns of the sixth triangle have already been drawn. They
    include many new features compared to the earlier ones and will be
    published at a later date.  
    Each pattern displays its sequential number in the top left corner
    and, in the form of bold round dots, the nodes of the triangle in
    which it was created. Each of the six (or three) node lines within the
    designated triangle can be considered the "theme" of the pattern.  
    The first sheet of each group—specifically, sheets 1, 2, 5, 13, and
    30—shows the pattern that results from replicating the primary
    triangle when the triangle's sides (i.e., the connections between the
    nodes located at its corners) are used as the theme: the "net." The
    remaining patterns follow, arranged so that similar ones are grouped
    together.  
    The names assigned to each pattern, to which I devoted considerable
    effort, should not be regarded as trivial. The need to conceptually
    master the abundant world of forms presented itself after their
    creation, and I found no better way to address it than through such
    labels. I believe that my readers will share this sentiment. In
    particular, teachers are unlikely to succeed in instruction without
    these names.  `
  )}
  
  function _15(md){return(
  md`## First Triangle
  One subtriangle, 3 nodes, 1 pattern, Sheet 1.  `
  )}
  
  function _16(md){return(
  md`<!-- -->
  **Sheet 1: The Net**  
  Among the three nodes of the first triangle,
    only the triangle\\'s sides are possible as node lines. Consequently,
    there is only one pattern, namely the net.  `
  )}
  
  function _17(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/001.svg" alt="Folie 001" style="width: auto; height: auto;">`
  )}
  
  function _18(md){return(
  md`## Second Triangle
  Four subtriangles, 6 nodes, 3 patterns, Sheets 2, 3, 4.  `
  )}
  
  function _19(md){return(
  md`<!-- -->
  **Sheet 2: The Net.**  
  This net has mesh twice as wide as in Sheet 1
    but otherwise resembles it. `
  )}
  
  function _20(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/002.svg" alt="Folie 002" style="width: auto; height: auto;">`
  )}
  
  function _21(md){return(
  md`  **Sheet 3: The Net in Second Position.**  
    The theme lies along the
    symmetry axis, so the pattern contains only three lines, just like the
    net. These lines also form a triangular net, but their lines are
    perpendicular to those in Sheet 2, with smaller mesh size; the ratio
    of mesh size corresponds to the height of a triangle to its side. This
    is called the "second position" of the triangles.`
  )}
  
  function _22(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/003.svg" alt="Folie 003" style="width: auto; height: auto;">`
  )}
  
  function _23(md){return(
  md`**Sheet 4: The Trihex.**  
  The thematic line connects the midpoints of
    the triangle's sides, standing perpendicular to and intersecting the
    symmetry axis. Thus, the pattern again contains only three lines. Upon
    replication, these align to form continuous lines intersecting like
    the sides of the net in Sheet 1, but at an angle of 1/6. However,
    unlike the three sets of bare (parallel) lines in the net where three
    lines intersect at a point, these lines bypass one another, creating a
    lattice of regular triangles and hexagons. We call this the
    "Trihex."  
    This is the first pattern distinct from the net; it can be considered
    the simplest example of an infinite surface pattern extending beyond
    simple triangular division. It has been long discovered and widely
    applied, especially for tiles. Like the net, it features continuous
    lines and the angle 1/6, but it introduces the creation of two
    different surface elements: triangles and hexagons.  `
  )}
  
  function _24(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/004.svg" alt="Folie 004" style="width: auto; height: auto;">`
  )}
  
  function _25(md){return(
  md`#### Combinations of Two Patterns  
  There are three combinations of two patterns. Their number generally
    follows the formula 1/2n (n−1), where n is the number of basic
    patterns. For this case, 1/2 × 3 × 2 = 3.`
  )}
  
  function _26(md){return(
  md`<!-- -->
  **Combination of Sheets 2 and 3:** This produces a complex pattern
    that can be interpreted as consisting entirely of regular hexagons,
    each divided into 12 right-angled triangles by a twelve-pointed star.
    Alternatively, it can also appear as triangles divided by six-pointed
    stars or as rhombuses dissected by crosses. Additionally, small
    equilateral triangles halved by a straight line can be seen.These
    possibilities are not exhaustive. Six-pointed stars can be found, made
    of six rhombuses (each with a cross inside), as well as large
    triangles and hexagons of intricate composition.This variety of
    forms, which can be observed in a single pattern, is one of the most
    captivating aspects of these designs. While this approach requires
    some practice, once accustomed, one can derive extensive enjoyment
    from it. Moreover, this observation prepares for the coloration of
    these patterns, as color distribution can highlight each
    interpretation for the viewer.`
  )}
  
  function _27(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/002_003.svg" alt="Folie 002 + 003" style="width: auto; height: auto;">`
  )}
  
  function _28(md){return(
  md`**Combination of Sheets 2 and 4:** This creates a dense net similar
      to Sheet 1. This can be explained by examining the two patterns
      within the triangle: one provides the main triangles, while the
      other divides each into four subtriangles.`
  )}
  
  function _29(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/002_004.svg" alt="Folie 002 + 004" style="width: auto; height: auto;">`
  )}
  
  function _30(md){return(
  md`**Combination of Sheets 3 and 4:** This results in an intricate
      lattice where both the triangles and hexagons from Sheet 4 are
      divided into six smaller triangles by inserted six-pointed stars.`
  )}
  
  function _31(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/003_004.svg" alt="Folie 003 + 004" style="width: auto; height: auto;">`
  )}
  
  function _32(md){return(
  md`**Combination of Sheets 2, 3, and 4**: When attempting to combine all three patterns, the result
      essentially mirrors the pattern of Sheets 3 and 4. However, the
      stars within the hexagons become twelve-pointed.  `
  )}
  
  function _33(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/002_003_004.svg" alt="Folie 002 + 003 + 004" style="width: auto; height: auto;">`
  )}
  
  function _34(md){return(
  md`## …`
  )}
  
  export default function define(runtime, observer) {
    const main = runtime.module();
    main.variable(observer()).define(["md"], _1);
    main.variable(observer()).define(["md"], _2);
    main.variable(observer()).define(["md"], _3);
    main.variable(observer()).define(["html"], _4);
    main.variable(observer()).define(["md"], _5);
    main.variable(observer()).define(["md"], _6);
    main.variable(observer()).define(["md"], _7);
    main.variable(observer()).define(["htl"], _8);
    main.variable(observer()).define(["md"], _9);
    main.variable(observer()).define(["md"], _10);
    main.variable(observer()).define(["md"], _11);
    main.variable(observer()).define(["md"], _12);
    main.variable(observer()).define(["md"], _13);
    main.variable(observer()).define(["md"], _14);
    main.variable(observer()).define(["md"], _15);
    main.variable(observer()).define(["md"], _16);
    main.variable(observer()).define(["htl"], _17);
    main.variable(observer()).define(["md"], _18);
    main.variable(observer()).define(["md"], _19);
    main.variable(observer()).define(["htl"], _20);
    main.variable(observer()).define(["md"], _21);
    main.variable(observer()).define(["htl"], _22);
    main.variable(observer()).define(["md"], _23);
    main.variable(observer()).define(["htl"], _24);
    main.variable(observer()).define(["md"], _25);
    main.variable(observer()).define(["md"], _26);
    main.variable(observer()).define(["htl"], _27);
    main.variable(observer()).define(["md"], _28);
    main.variable(observer()).define(["htl"], _29);
    main.variable(observer()).define(["md"], _30);
    main.variable(observer()).define(["htl"], _31);
    main.variable(observer()).define(["md"], _32);
    main.variable(observer()).define(["htl"], _33);
    main.variable(observer()).define(["md"], _34);
    return main;
  }
  