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
  md`**The Specific Case**  
  The content of this portfolio concerns the lawful forms of reflected
  node lines within triangular meshes. The explanation of these terms
  arises from the origin of the presented patterns.  
  It is well known that the equilateral triangle, square, and hexagon are
  the only regular polygons that can completely fill a plane through
  adjacency. These, therefore, constitute the most lawful spatial
  divisions. Of course, there are numerous other coherent forms (cf. *The
  Harmony of Forms,* p. 68), but all of them are less regular.  
  Among these three regular spatial divisions, we focus primarily on those
  formed by triangles, as the simplest figures. They have the unique
  property of filling the plane not merely through translation, as squares
  and hexagons do, but by making each pair of adjacent triangles mirror
  images of each other, as can be immediately observed in Plate 1 of this
  portfolio. Such a mirror pair forms a rhombus, which then fills the
  plane solely through translation.  
  In triangular mesh No. 1, larger regular triangles can be formed by
  combining individual and sub-triangles. Doubling the side length creates
  a composite triangle containing 22=4 sub-triangles, which fill the plane
  in the same manner. Tripling the side length results in 32=9
  sub-triangles; in general, a side length of nn produces n2
  sub-triangles.  
  Within a single triangle, only its three vertices serve as distinguished
  points. The next composite triangle, containing 22 sub-triangles, has
  six such points or nodes; the third has 10, the fourth 15, and the fifth
  21 nodes, all formed by the vertices of their sub-triangles.  
  Now, let us draw a straight line between any two nodes within a
  composite triangle. This line is our "theme," and we ask what becomes
  of it when we apply the laws inherent in the regular triangle.  
  The triangle has three mirror lines, each running from a vertex to the
  midpoint of the opposite side. By activating these mirrors, the original
  line typically transforms into six lines, lawfully arranged within the
  triangle (in some cases, only three), all equal in length and
  symmetrically aligned with the vertices and sides. Together, these lines
  form the "shape," which, according to its origin, also possesses the
  three mirror lines.  
  We then imagine the entire plane filled with identical triangles, each
  containing the same shape. We remove the sides and nodes, leaving only
  the lines of the shape. By joining as many such triangles as desired, we
  create an unlimited "pattern," capable of filling any plane.  
  This work presents all patterns that can be created by connecting any
  nodes within the first to the fifth composite triangles (containing 1,
  4, 9, 16, and 25 sub-triangles and 3, 6, 10, 15, and 21 nodes,
  respectively). These patterns encompass everything lawful–and thus
  beautiful–that is possible under the given conditions, solving a
  problem that no one has previously dared to pose, let alone resolve.  
  It should be emphasized that the domain explored here represents only a
  small portion of the entire range of possibilities. However, using the
  same principles that enabled the exploration of this domain, other areas
  can also be conquered, and further methods for venturing into adjacent
  fields will be demonstrated in the future.  
  To immediately bring the general instructions given here to life, a
  single example will be worked through to illustrate the general
  procedure.  
  Figure 1 depicts a composite triangle made up of 16 sub-triangles,
  containing 15 nodes. From the left vertex, we draw a straight line to
  the uppermost internal node–this is the "theme." Through reflection
  in the three dashed mirror lines, the theme generates a total of six
  lines, which, upon further reflection, only transform into each other
  and produce no additional lines. Together, these lines form the shape
  shown in Figure 2. When this shape is repeated through the complete
  tiling of identical triangles, the result is the unlimited pattern
  depicted as a network of lines in Figure 3, whose simple yet rich beauty
  I never tire of contemplating.  
  We now ask *how many forms are possible*. Among nn points, 1/2n (n−1)
  connections are possible. Thus, the three nodes of the first triangle
  yield three connections, the six nodes of the second triangle yield 15,
  the ten nodes of the third triangle yield 45, and so on.`
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
  md`#### Third Triangle`
  )}
  
  function _35(md){return(
  md`<!-- -->
  - 9 subtriangles, 10 nodes, 8 patterns, Sheets 5 to 12.  
    **Sheet 5: The Net.**The mesh width is three times the length of the
    first triangle\\'s net.  
    **Sheet 6: The Segment.**At first glance, one might expect a denser
    net in the second position to follow the basic net on Sheet 5.
    However, examining the nodes of the main triangle shows that no nodes
    lie at the midpoints of the sides. Consequently, no node line can
    stand perpendicular to a side midpoint, a prerequisite for a
    second-position net. Such nets only form in triangles of even order,
    such as the 2nd, 4th, 6th, and so on.  
    Pattern 6 consists of the middle segments of the triangle sides, which
    lie between two nodes. It contains only lines that do not form closed
    shapes. For decorative purposes, these lines can either be emphasized
    with color or enriched through modifications or surrounding designs,
    creating a wealth of lawful beauty. It should be noted that each
    segment has a symmetry axis passing through its midpoint, requiring
    all modifications and adornments to consist of two mirror-symmetric
    halves.  
    These line patterns gain further significance when paired with other
    patterns, often creating closed shapes from open ones. We refer to
    such patterns, which do not enclose areas, as open patterns.  
    **Sheet 7: The Six-Star.**This is the first pattern to contain six
    lines in the triangle rather than three. Like Pattern 6, it consists
    of segments of the triangle sides, but these are located at the
    corners rather than in the middle. They do not intersect the symmetry
    axes and therefore do not meet the three-line condition. In each
    corner, six triangles converge, forming six-pointed stars with their
    centers at the net points.  
    Here and in subsequent patterns, we refer to open shapes formed by
    line intersections as \\"stars.\\" Closed star-like shapes, such as on
    Sheet 20, are called \\"spikes\\"; Sheet 20 features the six-pointed
    spike.  
    In designing this pattern, one should avoid lengthening or shortening
    the rays. The entire pattern features a single consistent length, both
    in the rays and in the distances between stars. This harmony should
    not be disrupted without reason.  
    **Sheet 8: The Hexagon.**This pattern consists of hexagons, whose
    formation becomes clear upon observing the motif. We refer to such
    shapes as island patterns, owing to their apparent similarity.  
    The size and spacing of the hexagons are governed by the simplest laws
    of order. When Sheet 8 is combined with Sheet 6, it produces a regular
    hexagonal net, composed entirely of identical, regular hexagons that
    fit together without gaps. (As is well known, triangles, squares, and
    hexagons are the only regular polygons that can tile a plane without
    gaps.) Altering the size or spacing of the hexagons would damage the
    harmony of the form.  
    **Sheet 9: The Rhombus.**This pattern features the well-known rhombus
    design with angles of 1/3 and 1/6. It consists of identical rhombuses,
    which are not parallel but rotated by 1/3 relative to each other,
    forming three groups of parallel rhombuses.  
    One can group three rhombuses into a hexagon or six into a six-pointed
    star. Larger hexagons formed from 12 rhombuses and even more extensive
    overall shapes are also present. The hexagons fit together seamlessly,
    or are \\"tight\\"; the six-pointed stars, however, leave rhombuses
    between them.  
    We call patterns like Sheet 9, which cover the entire plane, closed
    patterns. Nets 1, 2, 3, and 5 are also closed, as is the Trihex on
    Sheet 4. However, while the former consist entirely of identical
    subareas, the Trihex features two types of subareas: triangles and
    hexagons.  
    **Sheet 10: The Overlapping Triangle.**This intricate pattern can be
    broken down into triangles larger than the net triangle and in the
    second position. All lines are perpendicular to corresponding net
    lines and arrange in three sets at a 1/3 angle. The triangles overlap
    slightly, forming regular hexagons, rhombuses, and triangles, all with
    the same side length (except for large hexagons, which have double the
    side length). Since all lines are parallel to the symmetry axes of the
    net triangle, this pattern is highly lawful. Any greater or lesser
    overlap would make the form more complex and disrupt these
    symmetries.  
    **Sheet 11: The Overlapping Hexagon.**Just as Pattern 10 results from
    overlapping triangles, Pattern 11 emerges from overlapping hexagons.
    Here, their arrangement is the most lawful possible, with the sides of
    three hexagons meeting at a single point. All lines are parallel to
    the net lines.  
    This overlapping arrangement creates a regular six-pointed star within
    each hexagon. The entire pattern can be seen as composed of such
    six-pointed stars, with rhombuses remaining between them, as they do
    not fit tightly. This offers a second interpretation of the pattern.  
    A third interpretation arises if one considers three rhombuses meeting
    at a point as the primary form. The six-pointed stars then appear as
    incidental background shapes.  
    **Sheet 12: The Overlapping Tri-Star.**This is the first pattern to
    feature lines that are neither parallel nor perpendicular to the net
    lines. Such patterns with \\"foreign\\" angles (which are, of course,
    lawfully related to the net angles) will become increasingly common.  
    Pattern 12 can be entirely constructed from overlapping tri-stars,
    whose tips lie at three net points, while a fourth lies at the center
    of the tri-star. Careful examination will reveal that all lines in the
    pattern belong to such tri-stars. At each net point, six tri-stars
    converge.  
  `
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
    main.variable(observer()).define(["md"], _35);
    return main;
  }
  