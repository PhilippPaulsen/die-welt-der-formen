function _1(md){return(
  md`## Die Welt der Formen`
  )}
  
  function _2(md){return(
  md`#### Entwicklung und Ordnung der gesetzlich-schönen Gebilde`
  )}
  
  function _3(md){return(
  md`Gezeichnet und beschrieben von Wilhelm Ostwald, Leipzig, Unesma 1922.
  Herausgegeben von Philipp Paulsen, Leipzig, Spector Books 2025.`
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
  md`## Erste Mappe
  #### Die gespiegelten Knotenlinien des ersten bis fünften Dreiecks`
  )}
  
  function _6(md){return(
  md`## Einleitung`
  )}
  
  function _7(md){return(
  md`#### Die allgemeine Aufgabe
  In meinem vor kurzem erschienenen Werk „*Die
  Harmonie der Formen*" habe ich die allgemeine Lehre von den gesetzlichen
  Formen dargelegt. Auf Grund des* Goethe*schen Gesetzes, daß
  Gesetzlichkeit die Vorbedingung der Schönheit ist, wurde dadurch ein
  Überblick über die Gesamtheit der denkbaren und möglichen schönen Formen
  gewonnen, d.h. derjenigen, deren Schönheit in der Form selbst liegt und
  nicht etwa in dem, was sie darstellen. Zweck und Ordnung jenes Werkes
  bedingten eine weitgehende Zurückhaltung in der Ausarbeitung der
  Einzelheiten, damit die Hauptaufgabe nicht aus dem Auge verloren wurde,
  und es wurde dort auf nachfolgende Arbeiten verwiesen, in denen solche
  Sonderforschungen mitgeteilt werden sollten. Eine dieser Untersuchungen
  wird hier vorgelegt; weitere, die bereits bearbeitet sind, sollen
  folgen.  
  Die Aufgabe, welche ich mir in diesem Gesamtwerk gestellt habe, nämlich
  alle gesetzlichen Formen herzustellen und vorzuführen, wäre in ihrer
  Vollständigkeit unlösbar auch für eine dauernde Arbeitsgemeinschaft, in
  welcher die abgehenden Mitarbeiter durch neue ersetzt würden. Sie ist es
  um so mehr für den einzelnen, auch wenn diesem nicht das Alter in
  absehbarer Zeit Feder und Stift aus der Hand nehmen würde. Trotzdem muß
  die Ausführung begonnen werden. In dem Maße, wie der Gewinn für die
  Allgemeinheit aus solchen Untersuchungen erkennbar wird, werden sich
  auch Mitarbeiter einstellen und die freie Arbeitsgemeinschaft bilden,
  welche diesen Teil der Kunstwissenschaft pflegen wird. Es kommt also
  alles darauf an, daß ein brauchbarer Anfang gemacht wird, und ich hoffe,
  daß die vorliegende Arbeit sich als solcher erweisen wird.`
  )}
  
  function _8(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/WdF.svg" alt="Figure 1-3" style="width: auto; height: auto;">`
  )}
  
  function _9(md){return(
  md`#### Der besondere Fall
  Den Inhalt der vorliegenden Mappe bilden die
  gesetzlichen Formen der gespiegelten Knotenlinien im Dreiecksnetz. Die
  Erklärung dieser Worte ergibt sich aus der Entstehung der mitgeteilten
  Muster.  
  Bekanntlich sind das regelmäßige Dreieck, Viereck und Sechseck die
  einzigen regelmäßigen Vielecke, mit denen man die Ebene durch
  Nebeneinanderlegen restlos ausfüllen kann. Diese ergeben also die
  gesetzlichsten Raumteilungen. Es gibt freilich noch zahlreiche andere
  schlüssige Formen (vgl. Harmonie der Formen S. 68); sie sind aber alle
  weniger regelmäßig.  
  Von diesen drei regelmäßigen Raumteilungen untersuchen wir in erster
  Linie die aus Dreiecken, als den einfachsten Figuren gebildeten. Sie
  haben die Besonderheit, daß sie die Ebene nicht durch bloße Schiebung
  füllen wie das Quadrat und Sechseck, sondern daß je zwei angrenzende
  Dreiecke gegenseitig Spiegelbilder sind, wie dies die Betrachtung von
  Blatt 1 der Mappe alsbald erkennen läßt. Ein solches Spiegelpaar, das
  eine Raute bildet, füllt dann die Ebene durch Schiebung allein.  
  In dem Dreiecknetz Nr. 1 lassen sich nun größere regelmäßige Dreiecke
  durch Zusammenfassung der Einzel- und Teildreiecke bilden. Macht man die
  Seite doppelt so lang, so enthält das zugehörige Gesamtdreieck 2 2 = 4
  Teildreiecke, die in ganz derselben Weise die Ebene füllen. Die
  dreifache Seitenlänge ergibt 3 2 = 9 Teildreiecke, allgemein die n-fache
  Seitenlänge *n* 2 Teildreiecke.  
  In einem Einzeldreieck treten nur die 3 Eckpunkte als ausgezeichnete
  Orte auf. Das nächste Gesamtdreieck mit 2 2 Teildreiecken hat 6 solche
  Punkte oder* Knoten*, das dritte hat 10, das vierte 15, das fünfte 21
  Knoten, die alle von den Ecken ihrer Teildreiecke gebildet werden.  
  Wir ziehen nun zwischen irgendwelchen zwei Knoten eines Gesamtdreiecks
  eine Gerade. Diese ist unser „Thema" und wir fragen uns, was aus ihr
  wird, wenn wir die im regelmäßigen Dreieck vorhandenen Gesetze auf sie
  anwenden.  
  Nun hat das Dreieck zunächst drei Spiegellinien, welche von je einer
  Ecke zur Mitte der Gegenseite laufen. Durch deren Betätigung entstehen
  aus der angenommenen Linie im allgemeinen 6 gesetzlich im Dreieck
  angeordnete Linien (in gewissen Fällen nur 3), welche alle gleich lang
  sind und übereinstimmend zu den Ecken und Seiten liegen. Diese Linien
  bilden die „Form", welche gemäß ihrer Entstehung gleichfalls die drei
  Spiegellinien besitzt.  
  Wir denken uns nun die ganze Ebene mit gleichen Dreiecken ausgefüllt,
  die sämtlich die Form enthalten. Seiten und Knoten lassen wir
  verschwinden, so daß nur Linien der Form übrig bleiben. Indem beliebig
  viele solche Dreiecke aneinander gefügt werden, entsteht das unbegrenzte
  „Muster". Es kann jede beliebige Ebene ausfüllen.  
  In der vorliegenden Arbeit sind alle Muster dargestellt, welche durch
  die geradlinige Verbindung irgendwelcher Knoten entstehen können, die im
  ersten bis fünften Gesamtdreieck (enthaltend 1, 4, 9, 16, 25
  Teildreiecke und 3, 6, 10, 15, 21 Knoten) entstehen können. Sie
  enthalten also alles, was an Gesetzlichkeit und somit Schönheit unter
  den angegebenen Voraussetzungen überhaupt möglich ist und lösen damit
  eine Aufgabe, die bisher niemand zu stellen, geschweige zu lösen gewagt
  hat.  
  Es sei sofort betont, daß das hier erschlossenen Gebiet nur ein sehr
  kleiner Teil der gesamten Möglichkeiten ist. Aber nach den gleichen
  Grundsätzen, die zur Bewältigung dieses Gebietes geführt haben, kann man
  jedes andere Gebiet erobern und es werden die Mittel zum Eindringen in
  die Nachbargebiete weiterhin nachgewiesen werden.  
  Um die eben gegebenen allgemeinen Anweisungen alsbald mit anschaulichem
  Leben zu erfällen, werde ein einzelner Fall durchgearbeitet, an dem das
  allgemeine Verfahren deutlich wird.  
  In Fig. 1 ist ein Gesamtdreieck aus 16 Teildreiecken dargestellt, das 15
  Knoten enthält. Vom linken Eckpunkt ziehen wir zum obersten inneren
  Knoten eine Gerade ab, das „Thema". Durch Spiegelung in den punktiert
  dargestellten 3 Spiegellinien entstehen insgesamt 6 Linien aus dem
  Thema, die durch weitere Spiegelung nur ineinander übergehen, also keine
  Linie mehr ergeben. Sie bilden zusammen die Form Fig. 2. Wiederholt man
  diese durch restlose Reihung gleicher Dreiecke, so entsteht das
  unbegrenzte Muster in Gestalt eines Liniennetzes Fig. 3, dessen schlicht
  und doch reiche Schönheit ich noch immer nicht müde geworden bin zu
  betrachten.  
  Wir fragen nun nach der *Anzahl der möglichen Formen.* Zwischen *n*
  Punkten sind 1/2 *n* (*n *-- 1) Verbindungsgrade möglich. Folglich
  ergeben die 3 Knoten des ersten Dreiecks 3, die 6 Knoten des zweiten 15,
  die 10 Knoten des dritten 45 Fälle oder Formen usw.  
  Von diesen Fällen sind aber viele gleich. So ergibt jede der 6 Linien in
  Fig. 2 dieselbe Form, während doch jedesmal andere Knoten verbunden
  sind. Würden jedesmal aus einem Thema 6 gleichwertige Linien entstehen,
  so wäre die Anzahl der verschiedenen Muster nicht 1/2 *n* (*n *-- 1),
  sondern der sechste Teil davon, nämlich 1⁄12 *n* (*n *-- 1).`
  )}
  
  function _10(md){return(
  md`Nun ergeben solche Themalinien, welche durch eine der Spiegellinien in
  zwei spiegelgleiche Hälften zerschnitten werden, nur 3 Linien statt 6 im
  Muster. Treffen solche Linien auf einen Knoten in der Spiegelllinie, so
  gibt die halbe Linie dasselbe Muster wie die ganze. Hierdurch wird die
  Anzahl verschiedener Fälle teils vermehrt, teils vermindert, so daß
  Abweichungen von der oben gegebenen Formel 1/2 *n *(*n *-- 1) eintreten
  müssen. Da deren Theorie zu verwickelt ausfallen würde, habe ich mich
  begnügt, erfahrungsmäßig die vorhandenen Formen aufzusuchen, wobei sich
  folgende Übersicht ergeben hat.  
  
  |                   |       |             |             |
  |-------------------|-------|-------------|-------------|
  | **Teil-Dreiecke** | **Knoten** | **1/12n (n−1)** | **Formen gefunden** |
  | 1                 | 3     | 1/2         | 1           |
  | 4                 | 6     | 2 1/2       | 3           |
  | 9                 | 10    | 7 1/2       | 8           |
  | 16                | 13    | 17 1/2      | 18          |
  | 25                | 21    | 35          | 33          |
  | 36                | 28    | 63          | 57          |
  
  Während die Zahl der gefundenen Formen bis zum 4. Dreieck die der
  berechneten etwas übertrifft, bleibt sie darüber hinaus zunehmend
  zurück.  
  Da die Zahlen der letzten Spalte erfahrungsmäßig gefunden worden sind,
  so dürfen sie nicht als völlig gesichert angesehen werden. Ich habe
  allerdings sorgfältig und methodisch die denkbaren Fälle abgesucht, kann
  aber keine Gewähr leisten, daß ich nicht doch eine versteckte
  Möglichkeit übersehen habe.  
  Jedenfalls sind die gefundenen Zahlen nicht so überwältigend groß, daß
  man von der Durchführung der Aufgabe abgeschreckt würde. Die
  übersichtliche Ordnung, welche die entstehenden Formen erkennen lassen,
  gewährt vielmehr das befriedigende Gefühl geistiger Herrschaft über
  diese an sich unbegrenzte Formenwelt.  
  Hieran schließen sich zahlreiche *weitere Aufgaben.* In dem vorliegenden
  Teil sind die nur 62 Muster des ersten bis fünften Dreiecks dargestellt.
  Es lohnt sich, auch noch das sechste zu untersuchen, welches weitere 57
  Muster bringt und vielleicht auch das siebente mit rund 100 Mustern.
  Ferner wollen die vier- und sechseckigen Formen ebenso untersucht und
  dargestellt werden.  
  In den Netzen lassen sich nicht nur gleichgerichtete Dreiecke usw.
  zwischen den nächsten Knoten entwickeln, sondern auch solche zweiter
  Lage, deren Seiten nicht die nächstliegenden Knoten verbinden, sondern
  die ferner liegenden. Diese Gesamtformen enthalten die Knoten in anderer
  Ordnung und ergeben neue Muster. Ferner ist bisher nur die Spiegelung
  berücksichtigt worden. Das Dreieck ist aber auch ein dreizähliger
  Drehling. Wir können auf die Spiegelung verzichten und nur die Drehung
  betätigen. Die Knotenlinien ergeben dann Drehlinge mannigfaltigster Art,
  die fast völlig unbekannt sind und eine neue Welt reizvollster Schönheit
  erschließen.  
  Dies alles, und manches andere, was in meiner „Harmonie der Formen" nur
  kurz angedeutet ist, ergibt zahlreiche weitere Gebilde. Ein Teil davon
  ist schon bearbeitet und die vielen Hunderte gezeichneter Muster haben
  meine Lust daran nur gesteigert. Ich gedenke daher in kurzen Abständen
  neue Mappen herauszugeben, und damit fortzufahren, solange meine Kräfte
  und die Teilnahme meiner Zeitgenossen reichen werden.  `
  )}
  
  function _11(md){return(
  md`#### Ordnung und Anwendung
  Aus wichtigen Gründen, die weiter unten angegeben werden, sind die
  Muster nicht auf gewöhnliches weißes Papier gedruckt, sondern auf
  durchsichtiges. Man hält sich deshalb einige Blätter Papier bereit, um
  sie den zu betrachtenden Blättern unterzuschieben, worauf man die
  Zeichnung deutlichst sieht. Benutzt man die Muster zum Arbeiten danach,
  so bedeckt man sie zweckmäßig mit einer etwas größeren Glasplatte
  (Ränder abschleifen!); man schützt sie so wirksam gegen Tuscheflecken
  und mechanische Unbilden.  
  Jedes Blatt enthält oben links zunächst die laufende Nummer. Diese wird
  durch alle weiteren Veröffentlichungen fortgeführt, so daß jedes Muster
  dauernd seine eigene Nummer haben und behalten wird.  
  In der gleichen Ecke ist das Gesamtdreieck durch seine Knotenpunkte
  angegeben. Auf Bl. 1 ist es identisch mit dem Teildreieck. Bl. 2 zeigt
  aber bereits das aus 4 Teildreiecken bestehende zweite Gesamtdreieck mit
  seinen 6 Knoten, zwischen denen 3 verschiedene Gerade möglich sind,
  deren Muster auf Bl. 2, 3, 4 gezeigt werden. Mit Tafel 5 beginnt die
  Gruppe des dritten Dreiecks aus 9 Teildreiecken mit 10 Knoten, welches 8
  Muster gibt usw. Jede Gruppe beginnt mit dem „*Netz*", der einfachen
  Teilung in die Gesamtdreiecke, indem die benutzten Knotenlinien von den
  Dreieckseiten gebildet werden.  
  Von den 6 bzw. 3 Graden, die sich in dem durch die Knotenpunkte
  bezeichneten Gesamtdreieck links oben vorfinden, kann jede einzelne als
  „Thema" des vorliegenden Musters betrachtet werden, da jede die anderen
  vermöge der drei Spiegellinien erzeugt.  
  Der übrige Raum ist mit den gesetzlichen Wiederholungen des im
  Gesamtdreieck entstandenen Musters angefüllt. Deren Zahl ist auch bei
  dem größten Dreiecke ausreichend, um die Gesamtwirkung des unbegrenzten
  Musters zu zeigen.  `
  )}
  
  function _12(md){return(
  md`#### Benutzung der Muster 
  Für die Benutzung der Muster gilt folgendes: Jeder Käufer dieses
  Werkes erwirbt durch den Kauf das Recht, die vorhandenen Muster für
  gewerbliche, kunstgewerbliche und künstlerische Zwecke zu verwenden. Nur
  ein Kopieren für literarische und unterrichtliche Werke ist gemäß dem
  Gesetz zum Schutz des geistigen Eigentums ausgeschlossen; Wiedergabe*
  einzelner* Muster als Beispiele kann gestattet werden.  
  Will man ein Muster im ersten Sinne benutzen, so hat man zunächst ein
  Dreieckpunktnetz entsprechend den Knoten des benutzten Dreiecks über das
  ganze zu schmückende Gebiet anzulegen, wobei man den Abstand angemessen
  wählt. Diese teilt man in das Netz der Gesamtdreiecke ein, wozu jeweils
  das erste Blatt jeder Gruppe die Anleitung gibt. Ich begnüge mich, nur
  die Eckpunkte der Gesamtdreiecke durch leichte Ringel um die
  entsprechenden Knoten hervorzuheben. Man zieht nun in einem dieser
  Dreiecke die Linien des Musters gemäß der Vorlage aus und kann dies dann
  leicht über die benachbarten Dreiecke fortsetzen, bis die ganze Fläche
  bedeckt ist.  
  Da der Voraussetzung gemäß alle Linien zwischen je zwei Knoten
  verlaufen, so sind keine weiteren Konstruktionen nötig. das zu Anfang
  angelegte Dreiecknetz und ein Lineal genügen für die ganze Arbeit.  
  Zweckmäßig legt man das Muster zuerst aus freier Hand mit leichten
  Strichen in Bleistift oder Kreide an, damit man zuletzt sehen kann, ob
  es fehlerfrei entwickelt ist. Dann führt man es aus, wie es dauernd
  bleiben soll, in Tusche, Tünche usw. Sowohl das Netz wie die Skizze
  müssen mit leicht entfernbarem Material hergestellt werden, damit man
  dies hernach restlos fortnehmen kann, so daß das Muster allein reinlich
  und klar stehen bleibt.  
  Neben manchen wohlbekannten Mustern wird man schon in dieser Mappe eine
  Anzahl seltenere und endlich nicht wenige finden, die völlig neu sind.
  Die schaffende Phantasie aller Künstler zusammen war bei weitem nicht
  ausreichend, um restlos alle Fälle zu finden, welche unter den
  angenommenen Voraussetzungen möglich sind. Die wissenschaftliche
  Bearbeitung der Aufgabe hat dagegen die Kraft, daß sie die Fülle der
  Möglichkeiten endgültig ausschöpft.  
  Hiermit ist aber die Formenwelt noch keineswegs abgeschlossen, welche
  aus dem vorhandenen Material erzeugt werden kann. Es sind ja nur die
  Gebilde dargestellt worden, deren Thema eine einzige Gerade bildet. Läßt
  man eine zweite Gerade zu, die übrigens gleichfalls der Bedingung
  genügt, daß sie zwischen zwei Knoten verläuft, so gewinnt man eine
  vielfache Anzahl neuer Muster. Sind nämlich in einem bestimmten
  Gesamtdreieck *n* verschiedene Muster aus je einer Linie vorhanden, so
  ist die Anzahl der aus zwei Linien entstehenden Muster 1/2 *n*
  (*n* -- 1). Aus den 33 einlinigen Mustern des fünften Dreiecks entstehen
  so 526 zweilinige Muster. Die Zahl der dreilinigen ist fast 6000, gemäß
  der Formel 1⁄6 *n* (*n*-- 1) (*n* -- 2). Die Gesamtzahl aller Muster
  ist 2 *^n^*^--^1.  
  Um diese vielen neuen Gebilde anschaulich zu machen, sind die Muster auf
  durchsichtiges Papier gedruckt worden. Will man ein Muster sehen, das
  aus zwei verschiedenen Linien entsteht, so legt man die beiden
  entsprechenden Blätter auf weißer Unterlage so übereinander, daß sich
  die Punkte des Gesamtdreiecks links oben genau decken. Die Tafeln sind
  so gezeichnet, daß alsdann auch die Ränder zusammenfallen. Deckt man
  noch eine Glasplatte darüber, so hat man die gewünschte Gesamtform
  bequem vor sich.  
  Ebenso kann man je drei einfache Muster verbinden usw.  
  Werden hierbei die untersten Linien zu wenig deutlich, so hält man das
  ganze Paket zwischen zwei Glasplatten gegen das Licht, oder legt es auf
  ein von unten durch einen Spiegel beleuchtetes Pult, wie es die
  Photographen zum Bearbeiten der Negative brauchen.  
  Um methodisch alle möglichen Paare zu erschöpfen, verfährt man wie
  folgt: Man nimmt das erste Blatt der Gruppe, die man bearbeiten will,
  und paart es mit allen folgenden Blättern. Dann legt man es zur Seite,
  nimmt das zweite Blatt, paart es mit allen übrigen und legt es beiseite.
  Ebenso verfährt man mit dem dritten, vierten usw., bis alle Blätter der
  Gruppe erschöpft, d.h. beiseite gelegt sind. Die Ordnung, in welcher man
  die Blätter anfangs gelegt hat, ist willkürlich.  
  Sämtliche Dreier bekommt man zu Gesicht, wenn man zunächst die Blätter
  1, 2 paart und folgeweise 3, 4, 5 usw. darüber legt. So fährt man man
  mit 1, 3; 1, 4 usw. fort, bis man alle 1 enthaltenden Dreier gesehen
  hat. Dann wird 1 zur Seite gelegt und man wiederholt die Arbeit mit dem
  Paar 2, 3, später mit 2, 4 usw., bis die letzten Blätter beiseite gelegt
  werden.  
  Da das beste Gedächtnis gegenüber dieser Fülle versagt, so hält man sich
  ein Blatt Papier bereit, auf welchem man die Nummern jener Blätter
  anschreibt, deren Verbindung man als besonders wohlgefällig empfindet.
  An diese hält man sich in erster Reihe, wenn man in die Lage kommt,
  solche Muster zu brauchen.  
  Man wird aber auch ohne solche Notwendigkeit manche gute Stunde mit dem
  bloßen Anschauen dieser Fülle von Schönheit und Reiz zubringen.  
  Die geradlinigen Muster dieses Werks sind nur die einfachste
  Ausführungsform des Grundgedankens, der in der geordneten Verbindung der
  Knoten besteht. Statt der Geraden kann man beliebig gestaltete Krumme
  verwenden. Die Gesetzlichkeit, welche zur Schönheit notwendig ist, wird
  dadurch gewahrt, daß man *eine* bestimmte Krumme wählt und diese dann
  durch das ganze Muster beibehält. Da jedes Muster aus lauter
  gleichlangen Geraden gebildet ist, so ist dies immer möglich. Dabei muß
  man genau darauf achten, daß der Ersatz entsprechend den
  Spiegelverhältnissen erfolgt. Zwischen zwei Punkten kann eine gegebene
  Krumme im allgemeinen vier verschiedene Lagen haben, von denen nur eine
  die spiegelbildliche Wiederholung des Themas und daher die richtige
  ist.  
  Für die technische Ausführung schneidet man sich aus Karton eine Lehre
  (Schablone) für die gewählte Krumme und führt mit deren Hilfe die
  Zeichnung in Bleistift durch. Die endgültige Ausführung erfolgt am
  besten aus freier Hand. Weil nämlich durch die geometrisch richtigen
  Knotenpunkte das Gerüst der Zeichnung gesichert ist, machen die kleinen
  Fehler, die mit der Ausführung aus freier Hand verbunden sind, keinen
  unangenehmen Eindruck, sondern eher einen angenehmen, da sie an die
  kleinen Abweichungen organischer Gebilde (Blätter eines Baumes, Teile
  einer Blume) erinnern.  
  Obwohl die Anzahl der Krummen, die man zwischen zwei gegebenen Punkten
  ziehen kann, unendlich groß kann man doch eine Übersicht der hier
  vorhandenen Möglichkeiten gewinnen. Denn um die vorhandene
  Gesetzlichkeit nicht zu sehr zu verhüllen, wird man die Krummen nicht
  ganz willkürlich, sondern einigermaßen in der Nähe der Geraden verlaufen
  lassen. Außerdem wird man sie zunächst* stetig* ohne Knicke oder Stöße
  wählen.  
  Alsdann hat man Krumme mit ein-, zwei-, dreimaliger Krümmung usw., wie
  Fig. 4, die symmetrisch um die Mitte sein können oder nicht; die
  Krümmung kann nach rechts oder links liegen. Dies ergibt zunächst 18
  verschiedene Fälle, die man an einem recht einfachen Muster
  durcharbeitet (Es ist beabsichtigt, später eine Mappe mit
  entsprechenden Beispielen herauszugeben), um eine Vorstellung von den
  Abänderungen zu gewinnen, welche aus der geradlinigen Vorlage durch die
  Einführung der Krummen entstehen. Auch hier ist die Fülle schöner Formen
  überwältigend.  
  Hat man derart die stetigen Krummen bearbeitet, so kann man die Geraden
  des ursprünglichen Musters durch zusammengesetzte Linien ersetzen,
  welche in den einfachsten Fällen aus zwei Geraden, einer Geraden und
  einer Krummen oder zwei Krummen bestehen. Beide stoßen unter einem
  Winkel zusammen, der einwärts wie auswärts bezüglich der Formen liegen
  kann. Ebenso können die Enden verwechselt werden. Die Mannigfaltigkeit
  ist von der gleichen Ordnung wie im Falle stetiger Krummen.  
  Diese Anweisungen lassen erkennen, wie man stufenweise auch zu
  verickelteren Fällen aufsteigen kann. Man wird dabei die Erfahrung
  machen, daß die einfachen meist die wirksameren sind und diese
  vorziehen, zumal sie bereits eine solche Fülle wesentlich verschiedener
  Muster ergeben, daß ein Bedürfnis nach mehr nicht so leicht auftritt.  
  Eine andere Art der Ableitung besteht darin, daß man die Geraden der
  Muster mit freien Zügen umkleidet, die man je nach Absicht und Zweck
  geometrisch oder naturalistisch wählen kann. Dabei hat man die Wahl, ob
  man die Geraden in dem fertigen Muster beibehält oder verschwinden läßt.
  Letzteres hat den besonderen Reiz des „heimlichen Gesetzes".  
  Für solche Anwendungen eignen sich in erster Linie die „offenen" Muster,
  die aus freiliegenden Linien bestehen, die keine geschlossenen Figuren
  bilden.  
  Ich habe mich überzeugt, daß sogar ganz willkürlich gewählte Linien, die
  nicht wiederholt werden, sondern zwischen jedem Knotenpaar anders sind,
  brauchbare Muster ergeben,* wenn nur die Knotenpunkte genau festgehalten
  werden.* Dieser Rest von Gesetzlichkeit genügt, um eine schönheitliche
  Wirkung zu sichern, vorausgesetzt, daß die betätigte Willkür irgendwie
  begründet erscheint.`
  )}
  
  function _13(md){return(
  md`#### Beschreibung der Muster  
  Die Muster 1 bis 62 stellen die Formen dar, welche im Netz des
  regelmäßigen Dreiecks aus je einer Knotenlinie (Verbindungslinie zweier
  Knoten) entstehen, wenn diese Linie der Spiegelung in den drei
  Spiegellinien unterworfen wird, die von jeder Ecke des Dreiecks zur
  Mitte der Gegenseite gehen. Hierbei entstehen aus jeder Knotenlinie
  sechs Linien im Dreieck. Schneidet sich die Knotenlinie senkrecht mit
  einer Spiegellinie oder fällt sie in eine, so entstehen nur drei
  Linien.  
  Die 62 Muster gehören dem ersten bis fünften Dreieck an und bilden
  folgende Gruppen:  `
  )}
  
  function _14(md){return(
  md`  
  Nr. 1 vom 1. Dreieck aus 1 Teildreieck  
  Nr. 2 bis 4 vom 2. Dreieck aus 4 Teildreiecken  
  Nr. 5 bis 12 vom 3. Dreieck aus 9 Teildreiecken  
  Nr.  13 bis 29 vom 4. Dreieck aus 16 Teildreiecken  
  Nr.  30 bis 62 vom 5. Dreieck aus 25 Teildreiecken  
    
  Die 57 Muster des 6. Dreiecks sind bereits gezeichnet. Sie enthalten
  vielerlei Neues gegenüber den früheren und werden später veröffentlicht
  werden.  
  Jedes Muster zeigt links oben seine laufende Nummer und in Gestalt
  starker runder Punkte die Knoten des Dreiecks, in dem es entstanden ist.
  Jede von den sechst bzw. drei Knotenlinien innerhalb des so bezeichneten
  Dreiecks kann als „Thema" des Musters angesehen werden.  
  Das erste Blatt jeder Gruppe, also Blatt 1, 2, 5, 13, 30 zeigt das
  Muster, welches durch Vervielfältigung des Hauptdreiecks entsteht, wenn
  man als Thema die Dreieckseiten, d.h. die Verbindung der in den Ecken
  des Dreiecks liegenden Knoten (der Netzpunkte) anwendet: das *„Netz*".
  Es folgen dann die übrigen Muster derart, daß ähnliche zusammengefasst
  werden.  
  Die jedem Muster beigefügten Namen, auf deren Wahl ich große Mühe
  verwendet habe, betrachte man nicht als Spielerei. Das Bedürfnis, die
  vorhandene reiche Formenwelt gedanklich zu beherrschen, habe ich nach
  ihrer Herstellung nicht anders befriedigen können, als durch eine solche
  Kennzeichnung. Und ich glaube, daß auch meine Leser die gleiche
  Erfahrung machen werden. Insbesondere wird der Lehrer beim Unterricht
  kaum ohne solche Namen Erfolg haben.`
  )}
  
  function _15(md){return(
  md`## Erstes Dreieck
  Ein Teildreieck, 3 Knoten, 1 Muster, Blatt 1.`
  )}
  
  function _16(md){return(
  md`<!-- -->
  Bl. 1.* Das Netz*  
  Zwischen den 3 Knoten des ersten Dreiecks sind als
  Knotenlinien nur die Dreieckseiten möglich. Folglich gibt es nur ein
  Muster, nämlich das Netz.`
  )}
  
  function _17(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/001.svg" alt="Folie 001" style="width: auto; height: auto;">`
  )}
  
  function _18(md){return(
  md`## Zweites Dreieck
  4 Teildreiecke, 6 Knoten, 3 Muster, Blatt 2, 3, 4.`
  )}
  
  function _19(md){return(
  md`<!-- -->
  Bl. 2.* Das Netz*  
  Es hat doppelt so weite Maschen wie 1, ist sonst aber
  diesem ähnlich.`
  )}
  
  function _20(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/002.svg" alt="Folie 002" style="width: auto; height: auto;">`
  )}
  
  function _21(md){return(
  md`Bl. 3.* Das Netz in zweiter Lage*  
  Das Thema liegt in der Spiegellinie;
  das Muster enthält also ebenso wie das Netz nur drei Linien, die
  ihrerseits gleichfalls ein Dreiecknetz bilden. Dessen Linien stehen aber
  senkrecht auf denen von Bl. 2 und die Maschenweite ist geringer; sie
  verhält sich zu dieser wie die Höhe eines Dreiecks zu seiner Seite. Wir
  nennen dies die* zweite* *Lage* der Dreiecke.`
  )}
  
  function _22(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/003.svg" alt="Folie 003" style="width: auto; height: auto;">`
  )}
  
  function _23(md){return(
  md`Bl. 4.* Der Dreisechs*  
  Die Themalinie verbindet die Seitenmitten des
  Dreiecks, stehen also senkrecht auf der Spiegellinie, die sie schneidet.
  Folglich sind wieder nur drei Linien im Muster vorhanden. Diese lagern
  sich bei der Vervielfachung so aneinander, daß sie durchgehende Grade
  bilden, die sich wie die Seiten des Netzes unter 1⁄6 schneiden. Es gehen
  aber nicht von den drei Scharen barer (paralleler) Linien je drei durch
  einen Punkt, sondern sie gehen derart aneinander vorbei, daß ein Gewebe
  aus regelmäßigen Dreiecken und Sechsecken entsteht. Wir nennen es
  deshalb den Dreisechs.  
  Es ist dies das erste Muster, das von dem Netz verschieden ist; man darf
  in ihm den einfachsten Fall eines unbegrenzten Flächenmusters erblicken,
  der über die schlichte Dreieckteilung hinausgeht. Es ist längst entdeckt
  und hat vielfache Anwendung, namentlich für Fliesen gefunden. Mit dem
  Netz teilt es die durchgehenden Linien und den Winkel 1⁄6; neu ist die
  Bildung zweier verschiedener Flächenstücke, der Drei- und Sechsecke.`
  )}
  
  function _24(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/004.svg" alt="Folie 004" style="width: auto; height: auto;">`
  )}
  
  function _25(md){return(
  md`*Verbindungen*  
  Aus je zwei Mustern gibt es drei Verbindungen. Ihre Anzahl ist
  allgemein 1/2 *n* (*n *-- 1), wo *n* die Anzahl der einfachen Muster
  ist; im vorliegenden Falle ergibt die Formel 1/2 × 3 x 2 = 3.`
  )}
  
  function _26(md){return(
  md`<!-- -->
  Aus 2 und 3 entsteht ein bereits recht verwickeltes Muster, das man
  auffassen kann, als bestände es aus lauter regelmäßigen Sechsecken, von
  denen jedes durch einen zwölfstrahligen Stern in 12 rechtwinklige
  Dreiecke geteilt ist. Man kann darin aber auch lauter Dreiecke sehen,
  die durch einen sechsstrahligen Stern zerlegt sind. Ebenso erkennt man
  Rauten, die durch ein Kreuz zerlegt sind. Endlich gibt es kleine
  gleichseitige Dreiecke, die durch eine Gerade gehälftet sind.  
  Damit sind die Möglichkeiten nicht erschöpft. Es sind auch Sechsspitze
  vorhanden, die aus je 6 Rauten (mit einem Kreuz in jeder) gebildet
  werden, ferner große Dreiecke und Sechsecke von entsprechend
  verwickelter Zusammensetzung usw.  
  Diese Mannigfaltigkeit der Formen, welche sich aus einem und demselben
  Muster heraussehen lassen, ist einer der größten Reize dieser Gebilde.
  Es ist allerdings einige Übung zu einer derartigen Betrachtungsweise
  nötig; hat man sich aber einmal daran gewöhnt, so kann man ihr sehr
  ausgiebige Genüsse entnehmen. Auch liegt hierin eine zweckmäßige
  Vorbereitung auf die Ausgestaltung dieser Muster durch Farben, da man
  durch deren Verteilung jede der beschriebenen Betrachtungsweisen dem
  Beschauer nahelegen kann.`
  )}
  
  function _27(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/002_003.svg" alt="Folie 002 + 003" style="width: auto; height: auto;">`
  )}
  
  function _28(md){return(
  md`Aus 2 und 4 entsteht ein enges Netz wie Bl. 1. Man gibt sich davon
  Rechenschaft, wenn man die beiden Muster innerhalb des Dreiecks
  betrachtet. Das eine liefert die Hauptdreiecke, das andere teilt jedes
  in die 4 Teildreiecke.`
  )}
  
  function _29(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/002_004.svg" alt="Folie 002 + 004" style="width: auto; height: auto;">`
  )}
  
  function _30(md){return(
  md`Aus 3 und 4 entsteht ein zierliches Geflecht, indem sowohl die Dreiecke
  wie die Sechsecke von 4 durch eingelagerte Sechssterne in je 6 kleinere
  Dreiecke zerlegt werden.  `
  )}
  
  function _31(htl){return(
  htl.html`<img src="https://die-welt-der-formen.de/assets/003_004.svg" alt="Folie 003 + 004" style="width: auto; height: auto;">`
  )}
  
  function _32(md){return(
  md`Man kann schließlich fragen, was aus der Verbindung von 2, 3 und 4
  entsteht. Macht man den Versuch, so findet man im wesentlichen das
  Muster 3, 4 wieder; nur sind die Sterne in den Sechsecken zwölfstrahlig
  geworden.`
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
  