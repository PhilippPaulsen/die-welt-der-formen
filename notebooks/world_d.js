function _1(md) {
  return (
    md`## Die Welt der Formen`
  )
}

function _2(md) {
  return (
    md`#### Entwicklung und Ordnung der gesetzlich-schönen Gebilde`
  )
}

function _3(md) {
  return (
    md`Gezeichnet und beschrieben von Wilhelm Ostwald, Leipzig, Unesma, 1922–28.
  Herausgegeben von Philipp Paulsen, Leipzig, Spector Books, 2027.`
  )
}

function _4(html) {
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

function _5(md) {
  return (
    md`## Erste Mappe
  #### Gespiegelte Knotenlinien der Dreiecke 1 bis 5
  Mit 5 Figuren im Text und den Tafeln 1–62. Leipzig, Unesma, 1922`
  )
}

function _6(md) {
  return (
    md`## Einleitung`
  )
}

function _7(md) {
  return (
    md`#### Die allgemeine Aufgabe
  In meinem vor kurzem erschienenen Werk „*Die Harmonie der Formen*“ habe ich die allgemeine Lehre von den gesetzlichen Formen dargelegt. Auf Grund des *Goethe*schen Gesetzes, dass Gesetzlichkeit die Vorbedingung der Schönheit ist, wurde dadurch ein Überblick über die Gesamtheit der denkbaren und möglichen schönen Formen gewonnen, d. h. derjenigen, deren Schönheit in der Form selbst liegt und nicht etwa in dem, was sie darstellen. Zweck und Ordnung jenes Werkes bedingten eine weitgehende Zurückhaltung in der Ausarbeitung der Einzelheiten, damit die Hauptaufgabe nicht aus dem Auge verloren wurde, und es wurde dort auf nachfolgende Arbeiten verwiesen, in denen solche Sonderforschungen mitgeteilt werden sollten. Eine dieser Untersuchungen wird hier vorgelegt; weitere, die bereits bearbeitet sind, sollen folgen.

  Die Aufgabe, welche ich mir in diesem Gesamtwerk gestellt habe, nämlich alle gesetzlichen Formen herzustellen und vorzuführen, wäre in ihrer Vollständigkeit unlösbar auch für eine dauernde Arbeitsgemeinschaft, in welcher die abgehenden Mitarbeiter durch neue ersetzt würden. Sie ist es umso mehr für den Einzelnen, auch wenn diesem nicht das Alter in absehbarer Zeit Feder und Stift aus der Hand nehmen würde. Trotzdem muss die Ausführung begonnen werden. In dem Maße, wie der Gewinn für die Allgemeinheit aus solchen Untersuchungen erkennbar wird, werden sich auch Mitarbeiter einstellen und die freie Arbeitsgemeinschaft bilden, welche diesen Teil der Kunstwissenschaft pflegen wird. Es kommt also alles darauf an, dass ein brauchbarer Anfang gemacht wird, und ich hoffe, dass die vorliegende Arbeit sich als solcher erweisen wird.`
  )
}

function _8(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/WdF.svg" alt="Figure 1-3" style="width: auto; height: auto;">`
  )
}

function _9(md) {
  return (
    md`#### Der besondere Fall
  Den Inhalt der vorliegenden Mappe bilden die gesetzlichen Formen der gespiegelten Knotenlinien im Dreiecksnetz. Die Erklärung dieser Worte ergibt sich aus der Entstehung der mitgeteilten Muster.

  Bekanntlich sind das regelmäßige Dreieck, Viereck und Sechseck die einzigen regelmäßigen Vielecke, mit denen man die Ebene durch Nebeneinanderlegen restlos ausfüllen kann. Diese ergeben also die gesetzlichsten Raumteilungen. Es gibt freilich noch zahlreiche andere schlüssige Formen (vgl. Harmonie der Formen [S. 68]); sie sind aber alle weniger regelmäßig.

  Von diesen drei regelmäßigen Raumteilungen untersuchen wir in erster Linie die aus Dreiecken, als den einfachsten Figuren gebildeten. Sie haben die Besonderheit, dass sie die Ebene nicht durch bloße Schiebung füllen wie das Quadrat und Sechseck, sondern dass je zwei angrenzende Dreiecke gegenseitig Spiegelbilder sind, wie dies die Betrachtung von Blatt 1 der Mappe alsbald erkennen lässt. Ein solches Spiegelpaar, das eine Raute bildet, füllt dann die Ebene durch Schiebung allein.

  In dem Dreiecknetz Nr. 1 lassen sich nun größere regelmäßige Dreiecke durch Zusammenfassung der Einzel- und Teildreiecke bilden. Macht man die Seite doppelt so lang, so enthält das zugehörige Gesamtdreieck 2² = 4 Teildreiecke, die in ganz derselben Weise die Ebene füllen. Die dreifache Seitenlänge ergibt 3² = 9 Teildreiecke, allgemein die *n*-fache Seitenlänge *n*² Teildreiecke.

  In einem Einzeldreieck treten nur die 3 Eckpunkte als ausgezeichnete Orte auf. Das nächste Gesamtdreieck mit 2² Teildreiecken hat 6 solche Punkte oder *Knoten*, das dritte hat 10, das vierte 15, das fünfte 21 Knoten, die alle von den Ecken ihrer Teildreiecke gebildet werden.

  Wir ziehen nun zwischen irgendwelchen zwei Knoten eines Gesamtdreiecks eine Gerade. Diese ist unser „Thema“ und wir fragen uns, was aus ihr wird, wenn wir die im regelmäßigen Dreieck vorhandenen Gesetze auf sie anwenden.

  Nun hat das Dreieck zunächst drei Spiegellinien, welche von je einer Ecke zur Mitte der Gegenseite laufen. Durch deren Betätigung entstehen aus der angenommenen Linie im Allgemeinen 6 gesetzlich im Dreieck angeordnete Linien (in gewissen Fällen nur 3), welche alle gleich lang sind und übereinstimmend zu den Ecken und Seiten liegen. Diese Linien bilden die „Form“, welche gemäß ihrer Entstehung gleichfalls die drei Spiegellinien besitzt.

  Wir denken uns nun die ganze Ebene mit gleichen Dreiecken ausgefüllt, die sämtlich die Form enthalten. Seiten und Knoten lassen wir verschwinden, sodass nur Linien der Form übrig bleiben. Indem beliebig viele solche Dreiecke aneinandergefügt werden, entsteht das unbegrenzte „Muster“. Es kann jede beliebige Ebene ausfüllen.

  In der vorliegenden Arbeit sind alle Muster dargestellt, welche durch die geradlinige Verbindung irgendwelcher Knoten entstehen können, die im ersten bis fünften Gesamtdreieck (enthaltend 1, 4, 9, 16, 25 Teildreiecke und 3, 6, 10, 15, 21 Knoten) vorhanden sind. Sie enthalten also alles, was an Gesetzlichkeit und somit Schönheit unter den angegebenen Voraussetzungen überhaupt möglich ist, und lösen damit eine Aufgabe, die bisher niemand zu stellen, geschweige zu lösen gewagt hat.

  Es sei sofort betont, dass das hier erschlossene Gebiet nur ein sehr kleiner Teil der gesamten Möglichkeiten ist. Aber nach den gleichen Grundsätzen, die zur Bewältigung dieses Gebietes geführt haben, kann man jedes andere Gebiet erobern, und es werden die Mittel zum Eindringen in die Nachbargebiete weiterhin nachgewiesen werden.

  Um die eben gegebenen allgemeinen Anweisungen alsbald mit anschaulichem Leben zu erfüllen, werde ein einzelner Fall durchgearbeitet, an dem das allgemeine Verfahren deutlich wird.

  In Fig. 1 ist ein Gesamtdreieck aus 16 Teildreiecken dargestellt, das 15 Knoten enthält. Vom linken Eckpunkt ziehen wir zum obersten inneren Knoten eine Gerade, das „Thema“. Durch Spiegelung in den punktiert dargestellten 3 Spiegellinien entstehen insgesamt 6 Linien aus dem Thema, die durch weitere Spiegelung nur ineinander übergehen, also keine Linie mehr ergeben. Sie bilden zusammen die Form Fig. 2. Wiederholt man diese durch restlose Reihung gleicher Dreiecke, so entsteht das unbegrenzte Muster in Gestalt eines Liniennetzes Fig. 3, dessen schlichte und doch reiche Schönheit ich noch immer nicht müde geworden bin zu betrachten.

  Wir fragen nun nach der *Anzahl der möglichen Formen.* Zwischen *n* Punkten sind ½ *n* (*n* – 1) Verbindungsgeraden möglich. Folglich ergeben die 3 Knoten des ersten Dreiecks 3, die 6 Knoten des zweiten 15, die 10 Knoten des dritten 45 Fälle oder Formen usw.

  Von diesen Fällen sind aber viele gleich. So ergibt jede der 6 Linien in Fig. 2 dieselbe Form, während doch jedesmal andere Knoten verbunden sind. Würden jedesmal aus einem Thema 6 gleichwertige Linien entstehen, so wäre die Anzahl der verschiedenen Muster nicht ½ *n* (*n* – 1), sondern der sechste Teil davon, nämlich 1⁄12 *n* (*n* – 1).`
  )
}

function _10(md) {
  return (
    md`Nun ergeben solche Themalinien, welche durch eine der Spiegellinien in zwei spiegelgleiche Hälften zerschnitten werden, nur 3 Linien statt 6 im Muster. Treffen solche Linien auf einen Knoten in der Spiegellinie, so gibt die halbe Linie dasselbe Muster wie die ganze. Hierdurch wird die Anzahl verschiedener Fälle teils vermehrt, teils vermindert, sodass Abweichungen von der oben gegebenen Formel ½ *n* (*n* – 1) eintreten müssen. Da deren Theorie zu verwickelt ausfallen würde, habe ich mich begnügt, erfahrungsmäßig die vorhandenen Formen aufzusuchen, wobei sich folgende Übersicht ergeben hat.

  | **Teil-Dreiecke** | **Knoten** | **1⁄12 n (n−1)** | **Formen gefunden** |
  |---|---|---|---|
  | 1 | 3 | ½ | 1 |
  | 4 | 6 | 2 ½ | 3 |
  | 9 | 10 | 7 ½ | 8 |
  | 16 | 15 | 17 ½ | 17 |
  | 25 | 21 | 35 | 33 |
  | 36 | 28 | 63 | 57 |

  Während die Zahl der gefundenen Formen bis zum vierten Dreieck die der berechneten etwas übertrifft, bleibt sie darüber hinaus zunehmend zurück.

  Da die Zahlen der letzten Spalte erfahrungsmäßig gefunden worden sind, dürfen sie nicht als völlig gesichert angesehen werden. Ich habe allerdings sorgfältig und methodisch die denkbaren Fälle abgesucht, kann aber keine Gewähr leisten, dass ich nicht doch eine versteckte Möglichkeit übersehen habe.

  Jedenfalls sind die gefundenen Zahlen nicht so überwältigend groß, dass man von der Durchführung der Aufgabe abgeschreckt würde. Die übersichtliche Ordnung, welche die entstehenden Formen erkennen lassen, gewährt vielmehr das befriedigende Gefühl geistiger Herrschaft über diese an sich unbegrenzte Formenwelt.

  Hieran schließen sich zahlreiche *weitere Aufgaben.* In dem vorliegenden Teil sind nur die 62 Muster des ersten bis fünften Dreiecks dargestellt. Es lohnt sich, auch noch das sechste zu untersuchen, welches weitere 57 Muster bringt, und vielleicht auch das siebente mit rund 100 Mustern. Ferner wollen die vier- und sechseckigen Formen ebenso untersucht und dargestellt werden.

  In den Netzen lassen sich nicht nur gleichgerichtete Dreiecke usw. zwischen den nächsten Knoten entwickeln, sondern auch solche zweiter Lage, deren Seiten nicht die nächstliegenden Knoten verbinden, sondern die ferner liegenden. Diese Gesamtformen enthalten die Knoten in anderer Ordnung und ergeben neue Muster. Ferner ist bisher nur die Spiegelung berücksichtigt worden. Das Dreieck ist aber auch ein dreizähliger Drehling. Wir können auf die Spiegelung verzichten und nur die Drehung betätigen. Die Knotenlinien ergeben dann Drehlinge mannigfaltigster Art, die fast völlig unbekannt sind und eine neue Welt reizvollster Schönheit erschließen.

  Dies alles, und manches andere, was in meiner „Harmonie der Formen“ nur kurz angedeutet ist, ergibt zahlreiche weitere Gebilde. Ein Teil davon ist schon bearbeitet, und die vielen Hunderte gezeichneter Muster haben meine Lust daran nur gesteigert. Ich gedenke daher, in kurzen Abständen neue Mappen herauszugeben und damit fortzufahren, solange meine Kräfte und die Teilnahme meiner Zeitgenossen reichen werden.`
  )
}

function _11(md) {
  return (
    md`#### Ordnung und Anwendung
  Aus wichtigen Gründen, die weiter unten angegeben werden, sind die Muster nicht auf gewöhnliches weißes Papier gedruckt, sondern auf durchsichtiges. Man hält sich deshalb einige Blätter Papier bereit, um sie den zu betrachtenden Blättern unterzuschieben, worauf man die Zeichnung deutlichst sieht. Benutzt man die Muster zum Arbeiten danach, so bedeckt man sie zweckmäßig mit einer etwas größeren Glasplatte (Ränder abschleifen!); man schützt sie so wirksam gegen Tuscheflecken und mechanische Unbilden.

  Jedes Blatt enthält oben links zunächst die laufende Nummer. Diese wird durch alle weiteren Veröffentlichungen fortgeführt, sodass jedes Muster dauernd seine eigene Nummer haben und behalten wird.

  In der gleichen Ecke ist das Gesamtdreieck durch seine Knotenpunkte angegeben. Auf Bl. 1 ist es identisch mit dem Teildreieck. Bl. 2 zeigt aber bereits das aus 4 Teildreiecken bestehende zweite Gesamtdreieck mit seinen 6 Knoten, zwischen denen 3 verschiedene Gerade möglich sind, deren Muster auf Bl. 2, 3, 4 gezeigt werden. Mit Tafel 5 beginnt die Gruppe des dritten Dreiecks aus 9 Teildreiecken mit 10 Knoten, welches 8 Muster gibt, usw. Jede Gruppe beginnt mit dem „*Netz*“, der einfachen Teilung in die Gesamtdreiecke, indem die benutzten Knotenlinien von den Dreieckseiten gebildet werden.

  Von den 6 bzw. 3 Geraden, die sich in dem durch die Knotenpunkte bezeichneten Gesamtdreieck links oben vorfinden, kann jede einzelne als „Thema“ des vorliegenden Musters betrachtet werden, da jede die anderen vermöge der drei Spiegellinien erzeugt.

  Der übrige Raum ist mit den gesetzlichen Wiederholungen des im Gesamtdreieck entstandenen Musters angefüllt. Deren Zahl ist auch bei dem größten Dreiecke ausreichend, um die Gesamtwirkung des unbegrenzten Musters zu zeigen.`
  )
}

function _12(md) {
  return (
    md`#### Benutzung der Muster
  Für die Benutzung der Muster gilt folgendes: Jeder Käufer dieses Werkes erwirbt durch den Kauf das Recht, die vorhandenen Muster für gewerbliche, kunstgewerbliche und künstlerische Zwecke zu verwenden. Nur ein Kopieren für literarische und unterrichtliche Werke ist gemäß dem Gesetz zum Schutz des geistigen Eigentums ausgeschlossen; Wiedergabe *einzelner* Muster als Beispiele kann gestattet werden.

  Will man ein Muster im ersten Sinne benutzen, so hat man zunächst ein Dreieckpunktnetz entsprechend den Knoten des benutzten Dreiecks über das ganze zu schmückende Gebiet anzulegen, wobei man den Abstand angemessen wählt. Diese teilt man in das Netz der Gesamtdreiecke ein, wozu jeweils das erste Blatt jeder Gruppe die Anleitung gibt. Ich begnüge mich, nur die Eckpunkte der Gesamtdreiecke durch leichte Ringel um die entsprechenden Knoten hervorzuheben. Man zieht nun in einem dieser Dreiecke die Linien des Musters gemäß der Vorlage aus und kann dies dann leicht über die benachbarten Dreiecke fortsetzen, bis die ganze Fläche bedeckt ist.

  Da der Voraussetzung gemäß alle Linien zwischen je zwei Knoten verlaufen, sind keine weiteren Konstruktionen nötig. Das zu Anfang angelegte Dreiecknetz und ein Lineal genügen für die ganze Arbeit.

  Zweckmäßig legt man das Muster zuerst aus freier Hand mit leichten Strichen in Bleistift oder Kreide an, damit man zuletzt sehen kann, ob es fehlerfrei entwickelt ist. Dann führt man es aus, wie es dauernd bleiben soll, in Tusche, Tünche usw. Sowohl das Netz wie die Skizze müssen mit leicht entfernbarem Material hergestellt werden, damit man dies hernach restlos fortnehmen kann, sodass das Muster allein reinlich und klar stehen bleibt.

  Neben manchen wohlbekannten Mustern wird man schon in dieser Mappe eine Anzahl seltenere und endlich nicht wenige finden, die völlig neu sind. Die schaffende Phantasie aller Künstler zusammen war bei weitem nicht ausreichend, um restlos alle Fälle zu finden, welche unter den angenommenen Voraussetzungen möglich sind. Die wissenschaftliche Bearbeitung der Aufgabe hat dagegen die Kraft, dass sie die Fülle der Möglichkeiten endgültig ausschöpft.

  Hiermit ist aber die Formenwelt noch keineswegs abgeschlossen, welche aus dem vorhandenen Material erzeugt werden kann. Es sind ja nur die Gebilde dargestellt worden, deren Thema eine einzige Gerade bildet. Lässt man eine zweite Gerade zu, die übrigens gleichfalls der Bedingung genügt, dass sie zwischen zwei Knoten verläuft, so gewinnt man eine vielfache Anzahl neuer Muster. Sind nämlich in einem bestimmten Gesamtdreieck *n* verschiedene Muster aus je einer Linie vorhanden, so ist die Anzahl der aus zwei Linien entstehenden Muster ½ *n* (*n* – 1). Aus den 33 einlinigen Mustern des fünften Dreiecks entstehen so 528 zweilinige Muster. Die Zahl der dreilinigen ist fast 6000, gemäß der Formel 1⁄6 *n* (*n* – 1) (*n* – 2). Die Gesamtzahl aller Muster ist 2ⁿ – 1.

  Um diese vielen neuen Gebilde anschaulich zu machen, sind die Muster auf durchsichtiges Papier gedruckt worden. Will man ein Muster sehen, das aus zwei verschiedenen Linien entsteht, so legt man die beiden entsprechenden Blätter auf weißer Unterlage so übereinander, dass sich die Punkte des Gesamtdreiecks links oben genau decken. Die Tafeln sind so gezeichnet, dass alsdann auch die Ränder zusammenfallen. Deckt man noch eine Glasplatte darüber, so hat man die gewünschte Gesamtform bequem vor sich.

  Ebenso kann man je drei einfache Muster verbinden usw.

  Werden hierbei die untersten Linien zu wenig deutlich, so hält man das ganze Paket zwischen zwei Glasplatten gegen das Licht, oder legt es auf ein von unten durch einen Spiegel beleuchtetes Pult, wie es die Fotografen zum Bearbeiten der Negative brauchen.

  Um methodisch alle möglichen Paare zu erschöpfen, verfährt man wie folgt: Man nimmt das erste Blatt der Gruppe, die man bearbeiten will, und paart es mit allen folgenden Blättern. Dann legt man es zur Seite, nimmt das zweite Blatt, paart es mit allen übrigen und legt es beiseite. Ebenso verfährt man mit dem dritten, vierten usw., bis alle Blätter der Gruppe erschöpft, d. h. beiseite gelegt sind. Die Ordnung, in welcher man die Blätter anfangs gelegt hat, ist willkürlich.

  Sämtliche Dreier bekommt man zu Gesicht, wenn man zunächst die Blätter 1, 2 paart und folgeweise 3, 4, 5 usw. darüberlegt. So fährt man mit 1, 3; 1, 4 usw. fort, bis man alle 1 enthaltenden Dreier gesehen hat. Dann wird 1 zur Seite gelegt, und man wiederholt die Arbeit mit dem Paar 2, 3, später mit 2, 4 usw., bis die letzten Blätter beiseitegelegt werden.

  Da das beste Gedächtnis gegenüber dieser Fülle versagt, hält man sich ein Blatt Papier bereit, auf welchem man die Nummern jener Blätter anschreibt, deren Verbindung man als besonders wohlgefällig empfindet. An diese hält man sich in erster Reihe, wenn man in die Lage kommt, solche Muster zu brauchen.

  Man wird aber auch ohne solche Notwendigkeit manche gute Stunde mit dem bloßen Anschauen dieser Fülle von Schönheit und Reiz zubringen.

  Die geradlinigen Muster dieses Werks sind nur die einfachste Ausführungsform des Grundgedankens, der in der geordneten Verbindung der Knoten besteht. Statt der Geraden kann man beliebig gestaltete Krumme verwenden. Die Gesetzlichkeit, welche zur Schönheit notwendig ist, wird dadurch gewahrt, dass man *eine* bestimmte Krumme wählt und diese dann durch das ganze Muster beibehält. Da jedes Muster aus lauter gleichlangen Geraden gebildet ist, ist dies immer möglich. Dabei muss man genau darauf achten, dass der Ersatz entsprechend den Spiegelverhältnissen erfolgt. Zwischen zwei Punkten kann eine gegebene Krumme im Allgemeinen vier verschiedene Lagen haben, von denen nur eine die spiegelbildliche Wiederholung des Themas und daher die richtige ist.`
  )
}

function _13(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/WdF_4.svg" alt="Figure 4" style="width: 50%; height: auto;">`
  )
}

function _14(md) {
  return (
    md`Für die technische Ausführung schneidet man sich aus Karton eine Lehre (Schablone) für die gewählte Krumme und führt mit deren Hilfe die Zeichnung in Bleistift durch. Die endgültige Ausführung erfolgt am besten aus freier Hand. Weil nämlich durch die geometrisch richtigen Knotenpunkte das Gerüst der Zeichnung gesichert ist, machen die kleinen Fehler, die mit der Ausführung aus freier Hand verbunden sind, keinen unangenehmen Eindruck, sondern eher einen angenehmen, da sie an die kleinen Abweichungen organischer Gebilde (Blätter eines Baumes, Teile einer Blume) erinnern.

  Obwohl die Anzahl der Krummen, die man zwischen zwei gegebenen Punkten ziehen kann, unendlich groß ist, kann man doch eine Übersicht der hier vorhandenen Möglichkeiten gewinnen. Denn um die vorhandene Gesetzlichkeit nicht zu sehr zu verhüllen, wird man die Krummen nicht ganz willkürlich, sondern einigermaßen in der Nähe der Geraden verlaufen lassen. Außerdem wird man sie zunächst *stetig* ohne Knicke oder Stöße wählen.

  Alsdann hat man Krumme mit ein-, zwei-, dreimaliger Krümmung usw., wie Fig. 4, die symmetrisch um die Mitte sein können oder nicht; die Krümmung kann nach rechts oder links liegen. Dies ergibt zunächst 18 verschiedene Fälle, die man an einem recht einfachen Muster durcharbeitet (es ist beabsichtigt, später eine Mappe mit entsprechenden Beispielen herauszugeben), um eine Vorstellung von den Abänderungen zu gewinnen, welche aus der geradlinigen Vorlage durch die Einführung der Krummen entstehen. Auch hier ist die Fülle schöner Formen überwältigend.

  Hat man derart die stetigen Krummen bearbeitet, so kann man die Geraden des ursprünglichen Musters durch zusammengesetzte Linien ersetzen, welche in den einfachsten Fällen aus zwei Geraden, einer Geraden und einer Krummen oder zwei Krummen bestehen. Beide stoßen unter einem Winkel zusammen, der einwärts wie auswärts bezüglich der Formen liegen kann. Ebenso können die Enden verwechselt werden. Die Mannigfaltigkeit ist von der gleichen Ordnung wie im Falle stetiger Krummen.

  Diese Anweisungen lassen erkennen, wie man stufenweise auch zu verwickelteren Fällen aufsteigen kann. Man wird dabei die Erfahrung machen, dass die einfachen meist die wirksameren sind und diese vorziehen, zumal sie bereits eine solche Fülle wesentlich verschiedener Muster ergeben, dass ein Bedürfnis nach mehr nicht so leicht auftritt.

  Eine andere Art der Ableitung besteht darin, dass man die Geraden der Muster mit freien Zügen umkleidet, die man je nach Absicht und Zweck geometrisch oder naturalistisch wählen kann. Dabei hat man die Wahl, ob man die Geraden in dem fertigen Muster beibehält oder verschwinden lässt. Letzteres hat den besonderen Reiz des „heimlichen Gesetzes“.

  Für solche Anwendungen eignen sich in erster Linie die „offenen“ Muster, die aus freiliegenden Linien bestehen, die keine geschlossenen Figuren bilden.

  Ich habe mich überzeugt, dass sogar ganz willkürlich gewählte Linien, die nicht wiederholt werden, sondern zwischen jedem Knotenpaar anders sind, brauchbare Muster ergeben, *wenn nur die Knotenpunkte genau festgehalten werden.* Dieser Rest von Gesetzlichkeit genügt, um eine schönheitliche Wirkung zu sichern, vorausgesetzt, dass die betätigte Willkür irgendwie begründet erscheint.`
  )
}

function _15(md) {
  return (
    md`#### Beschreibung der Muster
  Die Muster 1 bis 62 stellen die Formen dar, welche im Netz des regelmäßigen Dreiecks aus je einer Knotenlinie (Verbindungslinie zweier Knoten) entstehen, wenn diese Linie der Spiegelung in den drei Spiegellinien unterworfen wird, die von jeder Ecke des Dreiecks zur Mitte der Gegenseite gehen. Hierbei entstehen aus jeder Knotenlinie sechs Linien im Dreieck. Schneidet sich die Knotenlinie senkrecht mit einer Spiegellinie oder fällt sie in eine, so entstehen nur drei Linien.

  Die 62 Muster gehören dem ersten bis fünften Dreieck an und bilden folgende Gruppen:`
  )
}

function _16(md) {
  return (
    md`Nr. 1 vom 1. Dreieck aus 1 Teildreieck
  Nr. 2 bis 4 vom 2. Dreieck aus 4 Teildreiecken
  Nr. 5 bis 12 vom 3. Dreieck aus 9 Teildreiecken
  Nr. 13 bis 29 vom 4. Dreieck aus 16 Teildreiecken
  Nr. 30 bis 62 vom 5. Dreieck aus 25 Teildreiecken

  Die 57 Muster des 6. Dreiecks sind bereits gezeichnet. Sie enthalten vielerlei Neues gegenüber den früheren und werden später veröffentlicht werden.

  Jedes Muster zeigt links oben seine laufende Nummer und in Gestalt starker runder Punkte die Knoten des Dreiecks, in dem es entstanden ist. Jede von den sechs bzw. drei Knotenlinien innerhalb des so bezeichneten Dreiecks kann als „Thema“ des Musters angesehen werden.

  Das erste Blatt jeder Gruppe, also Blatt 1, 2, 5, 13, 30, zeigt das Muster, welches durch Vervielfältigung des Hauptdreiecks entsteht, wenn man als Thema die Dreieckseiten, d. h. die Verbindung der in den Ecken des Dreiecks liegenden Knoten (der Netzpunkte), anwendet: das „*Netz*“. Es folgen dann die übrigen Muster derart, dass ähnliche zusammengefasst werden.

  Die jedem Muster beigefügten Namen, auf deren Wahl ich große Mühe verwendet habe, betrachte man nicht als Spielerei. Das Bedürfnis, die vorhandene reiche Formenwelt gedanklich zu beherrschen, habe ich nach ihrer Herstellung nicht anders befriedigen können als durch eine solche Kennzeichnung. Und ich glaube, dass auch meine Leser die gleiche Erfahrung machen werden. Insbesondere wird der Lehrer beim Unterricht kaum ohne solche Namen Erfolg haben.`
  )
}

function _17(md) {
  return (
    md`## Erstes Dreieck
  Ein Teildreieck, 3 Knoten, 1 Muster, Blatt 1.`
  )
}

function _18(md) {
  return (
    md`#### Bl. 1. *Das Netz*
  Zwischen den 3 Knoten des ersten Dreiecks sind als Knotenlinien nur die Dreieckseiten möglich. Folglich gibt es nur ein Muster, nämlich das Netz.`
  )
}

function _19(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/001.svg" alt="Folie 001" style="width: auto; height: auto;">`
  )
}

function _20(md) {
  return (
    md`## Zweites Dreieck
  4 Teildreiecke, 6 Knoten, 3 Muster, Blatt 2, 3, 4.`
  )
}

function _21(md) {
  return (
    md`#### Bl. 2. *Das Netz*
  Es hat doppelt so weite Maschen wie 1, ist sonst aber diesem ähnlich.`
  )
}

function _22(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/002.svg" alt="Folie 002" style="width: auto; height: auto;">`
  )
}

function _23(md) {
  return (
    md`#### Bl. 3. *Das Netz in zweiter Lage*
  Das Thema liegt in der Spiegellinie; das Muster enthält also ebenso wie das Netz nur drei Linien, die ihrerseits gleichfalls ein Dreiecknetz bilden. Dessen Linien stehen aber senkrecht auf denen von Bl. 2, und die Maschenweite ist geringer; sie verhält sich zu dieser wie die Höhe eines Dreiecks zu seiner Seite. Wir nennen dies die *zweite Lage* der Dreiecke.`
  )
}

function _24(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/003.svg" alt="Folie 003" style="width: auto; height: auto;">`
  )
}

function _25(md) {
  return (
    md`#### Bl. 4. *Der Dreisechs*
  Die Themalinie verbindet die Seitenmitten des Dreiecks, steht also senkrecht auf der Spiegellinie, die sie schneidet. Folglich sind wieder nur drei Linien im Muster vorhanden. Diese lagern sich bei der Vervielfachung so aneinander, dass sie durchgehende Geraden bilden, die sich wie die Seiten des Netzes unter 1⁄6 schneiden. Es gehen aber nicht von den drei Scharen barer (paralleler) Linien je drei durch einen Punkt, sondern sie gehen derart aneinander vorbei, dass ein Gewebe aus regelmäßigen Dreiecken und Sechsecken entsteht. Wir nennen es deshalb den Dreisechs.

  Es ist dies das erste Muster, das von dem Netz verschieden ist; man darf in ihm den einfachsten Fall eines unbegrenzten Flächenmusters erblicken, der über die schlichte Dreieckteilung hinausgeht. Es ist längst entdeckt und hat vielfache Anwendung, namentlich für Fliesen, gefunden. Mit dem Netz teilt es die durchgehenden Linien und den Winkel 1⁄6; neu ist die Bildung zweier verschiedener Flächenstücke, der Drei- und Sechsecke.`
  )
}

function _26(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/004.svg" alt="Folie 004" style="width: auto; height: auto;">`
  )
}

function _27(md) {
  return (
    md`#### *Verbindungen*
  Aus je zwei Mustern gibt es drei Verbindungen. Ihre Anzahl ist allgemein ½ *n* (*n* – 1), wo *n* die Anzahl der einfachen Muster ist; im vorliegenden Falle ergibt die Formel ½ × 3 × 2 = 3.`
  )
}

function _28(md) {
  return (
    md`Aus 2 und 3 entsteht ein bereits recht verwickeltes Muster, das man auffassen kann, als bestände es aus lauter regelmäßigen Sechsecken, von denen jedes durch einen zwölfstrahligen Stern in 12 rechtwinklige Dreiecke geteilt ist. Man kann darin aber auch lauter Dreiecke sehen, die durch einen sechsstrahligen Stern zerlegt sind. Ebenso erkennt man Rauten, die durch ein Kreuz zerlegt sind. Endlich gibt es kleine gleichseitige Dreiecke, die durch eine Gerade gehälftet sind.

  Damit sind die Möglichkeiten nicht erschöpft. Es sind auch Sechsspitze vorhanden, die aus je 6 Rauten (mit einem Kreuz in jeder) gebildet werden, ferner große Dreiecke und Sechsecke von entsprechend verwickelter Zusammensetzung usw.

  Diese Mannigfaltigkeit der Formen, welche sich aus einem und demselben Muster heraussehen lassen, ist einer der größten Reize dieser Gebilde. Es ist allerdings einige Übung zu einer derartigen Betrachtungsweise nötig; hat man sich aber einmal daran gewöhnt, so kann man ihr sehr ausgiebige Genüsse entnehmen. Auch liegt hierin eine zweckmäßige Vorbereitung auf die Ausgestaltung dieser Muster durch Farben, da man durch deren Verteilung jede der beschriebenen Betrachtungsweisen dem Beschauer nahelegen kann.`
  )
}

function _29(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/002_003.svg" alt="Folie 002 + 003" style="width: auto; height: auto;">`
  )
}

function _30(md) {
  return (
    md`Aus 2 und 4 entsteht ein enges Netz wie Bl. 1. Man gibt sich davon Rechenschaft, wenn man die beiden Muster innerhalb des Dreiecks betrachtet. Das eine liefert die Hauptdreiecke, das andere teilt jedes in die 4 Teildreiecke.`
  )
}

function _31(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/002_004.svg" alt="Folie 002 + 004" style="width: auto; height: auto;">`
  )
}

function _32(md) {
  return (
    md`Aus 3 und 4 entsteht ein zierliches Geflecht, indem sowohl die Dreiecke wie die Sechsecke von 4 durch eingelagerte Sechssterne in je 6 kleinere Dreiecke zerlegt werden.`
  )
}

function _33(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/003_004.svg" alt="Folie 003 + 004" style="width: auto; height: auto;">`
  )
}

function _34(md) {
  return (
    md`Man kann schließlich fragen, was aus der Verbindung von 2, 3 und 4 entsteht. Macht man den Versuch, so findet man im Wesentlichen das Muster 3, 4 wieder; nur sind die Sterne in den Sechsecken zwölfstrahlig geworden.`
  )
}

function _35(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/002_003_004.svg" alt="Folie 002 + 003 + 004" style="width: auto; height: auto;">`
  )
}

function _36(md) {
  return (
    md`## Drittes Dreieck
  9 Teildreiecke, 10 Knoten, 8 Muster, Blatt 5 bis 12.`
  )
}

function _37(md) {
  return (
    md`#### Bl. 5. *Das Netz*
  Maschenweite von dreifacher Länge.`
  )
}

function _38(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/005.svg" alt="Folie 005" style="width: auto; height: auto;">`
  )
}

function _39(md) {
  return (
    md`#### Bl. 6. *Der Teilstrich*
  Man könnte im ersten Augenblick erwarten, dass ein engeres Netz in zweiter Lage auf das Grundnetz Bl. 5 folgen sollte. Betrachtet man aber die Knoten im Hauptdreieck, so sieht man, dass in den Seitenmitten kein Knoten liegt. Es kann also auch keine Knotenlinie senkrecht auf der Seitenmitte stehen, was ja die Bedingung dafür ist, dass ein Netz in zweiter Lage entsteht. Solche bilden sich also nur in Dreiecken von paarer Ordnungszahl, dem 2., 4., 6. usw.

  Das Muster 6 besteht aus den Mittelstücken der Dreiecksseiten, die zwischen je zwei Knoten liegen. Es enthält nur Linien, die sich nicht zu geschlossenen Formen verbinden. Bei der Verwertung für Schmuckzwecke kann man entweder die Linien durch Farbe zur Geltung bringen oder sie durch Abwandlung, Umgebung usw. reicher gestalten, wodurch man eine Fülle gesetzlicher Schönheit gewinnen kann. Hierbei ist zu beachten, dass durch die Mitte jedes Striches eine Spiegellinie geht; es ist also nötig, alle Aus- und Umgestaltungen der Linie so zu wählen, dass sie aus zwei spiegelgleichen Hälften besteht.

  Eine weitere Bedeutung haben solche Linienmuster dadurch, dass sie bei der Paarung mit anderen Mustern Verbindungen herstellen, wodurch häufig geschlossene Formen aus offenen entstehen.

  Wir nennen allgemein solche Muster aus Linien, welche keine Flächenstücke umschließen, *offene* Muster.`
  )
}

function _40(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/006.svg" alt="Folie 006" style="width: auto; height: auto;">`
  )
}

function _41(md) {
  return (
    md`#### Bl. 7. *Der Sechsstern*
  Dies ist das erste Muster, das 6, nicht 3 Linien im Dreieck enthält. Es besteht wie 6 aus Stücken der Dreiecksseiten; nur liegen sie an den Ecken und nicht in der Mitte. Sie schneiden also nicht die Spiegellinien und fallen also nicht unter die Dreier-Bedingung ([S. 8]). Dadurch, dass in jeder Ecke 6 Dreiecke zusammentreten, ordnen sich die Linien zu sechsstrahligen Sternen, deren Mittelpunkte in den Netzpunkten liegen.

  Wir nennen hier und in der Folge *Sterne* solche offenen Gebilde, die aus der Durchkreuzung von Linien entstehen. Sternartige geschlossene Gebilde, wie Bl. 20, werden wir *Spitze* nennen; Bl. 20 zeigt den Sechsspitz.

  Bei der Ausgestaltung dieses Musters wird man vermeiden, die Strahlen etwa zu verlängern oder zu verkürzen. Denn das ganze Muster zeigt nur eine Längengröße, sowohl in den Strahlen wie in den Abständen zweier Sterne. Eine solche Harmonie soll nicht unbegründet zerstört werden.`
  )
}

function _42(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/007.svg" alt="Folie 007" style="width: auto; height: auto;">`
  )
}

function _43(md) {
  return (
    md`#### Bl. 8. *Das Sechseck*
  Das Muster besteht aus Sechsecken, deren Entstehung durch einen Blick auf das Motiv klar wird. Wir nennen solche Gebilde nach einer naheliegenden Ähnlichkeit *Inselmuster*.

  Größe und Abstand der Sechsecke sind durch die einfachste Gesetzlichkeit geregelt, die sich angeben lässt. Verbindet man nämlich 8 mit 6, so entsteht das regelmäßige Sechsecknetz, das aus lauter gleichen, regelmäßigen Sechsecken besteht, die sich ohne Rest aneinanderschließen. (Bekanntlich sind das Drei-, Vier- und Sechseck die einzigen regelmäßigen Vielecke, mit denen man die Ebene restlos bedecken kann.) Man würde also die Harmonie der Form schädigen, wenn man Größe oder Abstand der Sechsecke einzeln veränderte.`
  )
}

function _44(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/008.svg" alt="Folie 008" style="width: auto; height: auto;">`
  )
}

function _45(md) {
  return (
    md`#### Bl. 9. *Die Raute*
  Wir treffen hier das sehr bekannte Rautenmuster mit den Winkeln 1⁄3 und 1⁄6 an. Es besteht aus lauter deckgleichen Rauten, die aber nicht bar zueinander liegen, sondern gegeneinander um 1⁄3 gedreht sind und so in 3 Gruppen barer Rauten zerfallen.

  Man kann nach Belieben 3 Rauten zu einem Sechseck oder 6 Rauten zu einem Sechsspitz zusammenfassen. Auch sind größere Sechsecke aus 12 Rauten und noch ausgedehntere Gesamtformen vorhanden. Die Sechsecke schließen ohne Rest oder sind *„schlüssig“*; die Sechsspitze lassen dagegen Rauten zwischen sich.

  Wir nennen solche Muster wie 9, welche die ganze Ebene bedecken, *geschlossene Muster*. Die Netze 1, 2, 3, 5 sind geschlossen, ebenso das Dreisechs 4. Während aber die ersten aus lauter gleichen Teilflächen bestehen, gibt es in 4 zwei Arten Teilflächen, nämlich Drei- und Sechsecke.`
  )
}

function _46(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/009.svg" alt="Folie 009" style="width: auto; height: auto;">`
  )
}

function _47(md) {
  return (
    md`#### Bl. 10. *Das überschobene Dreieck*
  Das bereits recht reich aussehende Muster lässt sich in lauter Dreiecke auflösen, welche größer sind als das Netzdreieck und zudem in der zweiten Lage stehen. Deshalb stehen alle Linien senkrecht auf entsprechenden Netzlinien und ordnen sich in drei Scharen mit dem Winkel 1⁄3. Die Dreiecke liegen nicht wie im Netz schlicht nebeneinander, sondern überlagern sich teilweise. Dadurch bilden sich die regelmäßigen Sechsecke, Rauten und Dreiecke, alle mit gleicher Seitenlänge (mit Ausnahme der großen Sechsecke mit doppelter Seitenlänge), die das Muster zusammensetzen. Deshalb, und weil alle Linien den Spiegellinien des Netzdreiecks bar sind, darf das Muster als sehr gesetzlich angesehen werden. Jede stärkere oder schwächere Überschiebung würde die Form wesentlich verwickelter machen und jene Gleichheiten aufheben.`
  )
}

function _48(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/010.svg" alt="Folie 010" style="width: auto; height: auto;">`
  )
}

function _49(md) {
  return (
    md`#### Bl. 11. *Das überschobene Sechseck*
  Ebenso wie 10 aus überschobenen Dreiecken, entsteht 11 aus überschobenen Sechsecken. Auch hier ist deren Lage die denkbar gesetzlichste, indem die Seiten je dreier Sechsecke durch denselben Punkt gehen. Alle Linien sind den Netzlinien bar.

  Durch diese Art der Überschiebung entsteht innerhalb jedes Sechsecks ein regelmäßiger Sechsspitz ([S. 23]). Man kann sich das ganze Muster aus solchen Sechsspitzen zusammensetzen, zwischen denen Rauten bleiben, da sie nicht schlüssig sind. Dies ist eine zweite Art, das Muster aufzufassen.

  Eine dritte ergibt sich, wenn man je drei Rauten, deren Spitzen in einem Punkt liegen, als Hauptform ansieht. Die Sechsspitze erscheinen dann als mehr zufällige Hintergrundformen.`
  )
}

function _50(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/011.svg" alt="Folie 011" style="width: auto; height: auto;">`
  )
}

function _51(md) {
  return (
    md`#### Bl. 12. *Der überschobene Dreispitz*
  Hier liegen zum ersten Male Linien vor, die zu den Netzlinien weder bar noch senkrecht stehen. Solche Muster mit fremden Winkeln (die natürlich mit den Netzwinkeln gesetzlich verbunden sind) werden später zunehmend reichlicher auftreten.

  Man kann 12 ganz aus überschobenen Dreispitzen aufbauen, deren Spitzen in drei Netzpunkten liegen, während ein vierter sich im Mittelpunkt des Dreispitzes befindet. Es wirkt sehr aufklärend, wenn man sich die Mühe macht, nachzusehen, dass wirklich sämtliche vorhandenen Linien solchen Dreispitzen zugeordnet werden können. In jedem Netzpunkt treffen 6 Dreispitze zusammen.

  Für den, der sich einen Dreispitz noch nicht vorgestellt hat, ist nachfolgend ([Fig. 5]) einer gezeichnet:`
  )
}

function _52(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/012.svg" alt="Folie 012" style="width: auto; height: auto;">`
  )
}

function _53(md) {
  return (
    md`#### Verbindungen
  Die 8 Formen des dritten Dreiecks ergeben 28 Zweierverbindungen. Von diesen sind aber einige gleich, nämlich solche, deren Thema aus kürzeren oder längeren Teilen derselben Linie (insbesondere der Dreiecksseite) besteht.

  Die Anzahl der Verbindungen überhaupt beträgt nach der Formel 2ⁿ – 1 insgesamt 255. Auch unter diesen kommen einige übereinstimmende vor.

  Es ist nach diesen Zahlen bereits hier nicht möglich, jede einzelne Verbindung besonders zu besprechen, wie dies beim dritten Dreieck geschah. Es sei daher an das geregelte Verfahren ([S. 14]) erinnert, nach welchem man alle möglichen Paare und Dreier zu Gesicht bekommt. Wie man sich bei den Vierern usw. zu verhalten hat, kann man aus der Beschreibung bei den Dreiern leicht ableiten.

  Ich hatte bei der Durchsicht der Zweier usw. begonnen, die Verbindungen aufzuschreiben, die mir besonders gefielen. Als ich aber das Verzeichnis durchsah, waren es etwa 20 von den 28 vorhandenen. Es gibt tatsächlich nur einige, bei denen man vielleicht zweifelhaft sein könnte. Drei Paare, nämlich 5, 6; 5, 7; 6, 7, ergeben gleiche Formen, nämlich das Netz. Aus 6, 8 entsteht ein Sechsecknetz, aus 7, 11 ein Rautennetz, die beide also nichts Neues bringen. Die anderen Paare sind alle hübsch, die meisten sehr gut. Wenn ich einige hervorheben soll, so wären es 9, 11 und 7, 12.

  Ganz Ähnliches lässt sich über die 56 Dreier sagen. Sie weisen zum Teil so verwickelte Linienspiele auf, dass sie die berühmten maurischen Muster in harmonischer Mannigfaltigkeit übertreffen, abgesehen von der reineren Gesetzlichkeit, die sie zum Ausdruck bringen. Noch mehr gilt dies für die 70 Vierer usw.`
  )
}

function _54(md) {
  return (
    md`## Viertes Dreieck
  16 Teildreiecke, 15 Knoten, 17 Muster, Blatt 13 bis 29.`
  )
}

function _55(md) {
  return (
    md`#### Bl. 13. *Das Netz*
  Besondere Bemerkungen sind nicht zu machen.`
  )
}

function _56(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/013.svg" alt="Folie 013" style="width: auto; height: auto;">`
  )
}

function _57(md) {
  return (
    md`#### Bl. 14. *Das Netz in zweiter Lage*
  Da es sich um ein paarzahliges Dreieck handelt, ist ein kleineres Netz zweiter Lage vorhanden ([S. 22]).`
  )
}

function _58(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/014.svg" alt="Folie 014" style="width: auto; height: auto;">`
  )
}

function _59(md) {
  return (
    md`#### Bl. 15. *Der Teilstrich*
  Eine Form wie 6, nur mit anderem Verhältnis (2 : 1) zwischen Strichlänge und Abstand. Man beachte die eigentümlichen hellen Kreise, die sich als optische „Täuschung" an den leeren Netzpunkten einstellen.`
  )
}

function _60(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/015.svg" alt="Folie 015" style="width: auto; height: auto;">`
  )
}

function _61(md) {
  return (
    md`#### Bl. 16 und 17. *Der Sechsstern*
  Beide Blätter bringen sechsstrahlige Sterne; 16 in erster und 17 in zweiter Lage und mit längeren Armen.

  Die Blätter 15, 16, 17 enthalten offene Muster.`
  )
}

function _62(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/016.svg" alt="Folie 016" style="width: auto; height: auto;">`
  )
}

function _63(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/017.svg" alt="Folie 017" style="width: auto; height: auto;">`
  )
}

function _64(htl) {
  return (
    htl.html`<imga src="https://die-welt-der-formen.de/assets/017.svg" alt="Folie 017" style="width: auto; height: auto;">`
  )
}

function _65(md) {
  return (
    md`#### Bl. 18. *Das Dreieck*
  Die Inselmuster dieser Gruppe sind naturgemäß mannigfaltiger als die der vorigen. Während dort nur Sechsecke vorhanden waren, liegen hier in Bl. 18 das Dreieck, in Bl. 19 das Sechseck, in Bl. 20 der Sechsspitz vor.`
  )
}

function _66(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/018.svg" alt="Folie 018" style="width: auto; height: auto;">`
  )
}

function _67(md) {
  return (
    md`#### Bl. 19. *Das Sechseck*`
  )
}

function _68(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/019.svg" alt="Folie 019" style="width: auto; height: auto;">`
  )
}

function _69(md) {
  return (
    md`#### Bl. 20. *Der Sechsspitz*`
  )
}

function _70(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/020.svg" alt="Folie 020" style="width: auto; height: auto;">`
  )
}

function _71(md) {
  return (
    md`#### Bl. 21. *Das gestachelte Sechseck*
  Eine neue Formart tritt in 21 auf. Die Haupterscheinung ist die Teilung der Ebene in regelmäßige Sechsecke. Deren Seitenlinien enden aber nicht, wie man am Hauptdreieck sehen kann, wo sie sich begegnen, sondern setzen sich noch etwas fort. Diese Verlängerung der Seiten erinnert an Stacheln; daher nennen wir solche Formen (die später häufig vorkommen) *gestachelte*.

  Mit 21 beginnen die geschlossenen Formen, die bis 29 vorhanden sind.`
  )
}

function _72(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/021.svg" alt="Folie 021" style="width: auto; height: auto;">`
  )
}

function _73(md) {
  return (
    md`#### Bl. 22 und 23. *Der Dreisechs*
  Da man das vierte Dreieck als bestehend aus vier zweiten Dreiecken auffassen kann, so sind die drei Formen des zweiten Dreiecks hier in doppelter Größe zu erwarten. Zwei von ihnen (das Netz in erster und zweiter Lage) haben wir unter 13 und 14 kennengelernt; hier liegt in 22 der Dreisechs entsprechend 4 vor.

  Außer diesem ist aber noch ein kleinerer Dreisechs in zweiter Lage, Bl. 23, vorhanden, über dessen Entstehungsweise die Betrachtung des Hauptdreiecks Auskunft gibt.

  Das dritte Dreieck hatte bemerkenswerterweise keinen Dreisechs ergeben. Auch das fünfte hat keinen; der Dreisechs kommt nur bei paarzahligen Dreiecken vor.`
  )
}

function _74(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/022.svg" alt="Folie 022" style="width: auto; height: auto;">`
  )
}

function _75(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/023.svg" alt="Folie 023" style="width: auto; height: auto;">`
  )
}

function _76(md) {
  return (
    md`#### Bl. 24. *Das überschobene Sechseck*
  Von der ähnlichen Form 11 unterscheidet sich 24 dadurch, dass die Überschiebung weitergeht, sodass die drei Seiten sich nicht wie dort in einem Punkt schneiden, sondern ein Dreieck bilden. Dadurch gehen die Rauten von 11 in regelmäßige Sechsecke über, die neben den regelmäßigen Dreiecken und den Sechsspitzen die Formbestandteile des Musters bilden.`
  )
}

function _77(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/024.svg" alt="Folie 024" style="width: auto; height: auto;">`
  )
}

function _78(md) {
  return (
    md`#### Bl. 25. *Der überschobene Sechsspitz*
  Das eigenartige Muster 25 entsteht durch Überschiebung regelmäßiger oder gerader Sechsspitze.

  Hier enden die Muster, deren Linien bar oder senkrecht zu den Netzlinien stehen, oder die Muster in der Netzrichtung.`
  )
}

function _79(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/025.svg" alt="Folie 025" style="width: auto; height: auto;">`
  )
}

function _80(md) {
  return (
    md`#### Bl. 26. *Die Nelke*
  Dies besonders schöne und m. W. neue Muster soll die Nelke heißen.<sup>•</sup> Die Betrachtung des Hauptdreiecks zeigt, dass es durch Zusammensetzung von Dreispitzen entstanden ist, deren Seiten bis zur gegenseitigen Begegnung im Inneren verlängert sind. Auf dem durchgeführten Muster tritt aber die aus 6 keilförmigen Blättern bestehende Blumenkrone als Hauptform so unwiderstehlich in den Vordergrund, dass im Hinblick auf diese der kurze Name Nelke erlaubt sein mag.

  * Ich weiß, dass die Nelke fünf Blätter hat. Wir treffen aber später das Nelkenmuster auch mit vier und drei Blättern an, sodass dieser Punkt lässlich behandelt werden kann.`
  )
}

function _81(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/026.svg" alt="Folie 026" style="width: auto; height: auto;">`
  )
}

function _82(md) {
  return (
    md`#### Bl. 27 und 28. *Der überschobene Dreispitz*
  Auf 27 enden die Spitzen der Dreispitze in den einspringenden Winkeln, auf 28 in den Mittelpunkten anderer Dreispitze. Ein Blick auf das Thema lässt beiderseits erkennen, wie dies zustande kommt.`
  )
}

function _83(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/027.svg" alt="Folie 027" style="width: auto; height: auto;">`
  )
}

function _84(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/028.svg" alt="Folie 028" style="width: auto; height: auto;">`
  )
}

function _85(md) {
  return (
    md`#### Bl. 29. *Der Rautenkranz*
  Das sehr eigenartige, bisher ganz unbekannte Muster weist u. a. 6 im Kreise geordnete Rauten auf, nach denen es benannt worden ist. Seine Reize entfaltet diese etwas spröde Form deutlicher bei der Verbindung mit anderen Mustern, namentlich solchen, welche die leeren Innenräume der Sechsspitze ausfüllen.`
  )
}

function _86(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/029.svg" alt="Folie 029" style="width: auto; height: auto;">`
  )
}

function _87(md) {
  return (
    md`#### Verbindungen
  Die 17 Muster des vierten Dreiecks ergeben bereits 136 Zweier, 680 Dreier, 2380 Vierer usw. Die Gesamtzahl aller Gebilde bis zur 17. Ordnung ist 131 071. Das sind bereits Zahlen, welche über das beste Gedächtnis weit hinausgehen. Es ist daher auch nicht möglich, eine noch so kurze Beschreibung der Verbindungen durchzuführen; sie würde den Rahmen dieses Werkes sprengen. So kann der Leser nur dringendst ersucht werden, zunächst nach der Anleitung [S. 14] die Zweier zu studieren, um die allgemeine Beschaffenheit derart entstehender Muster kennenzulernen; die Durchsichtigkeit der Blätter macht diese Arbeit leicht und genussreich. Dann wird er auch Neigung empfinden, sich die Dreier anzusehen. Am häufigsten erhält man interessante neue Muster, wenn man solche verbindet, deren Themen einen Endpunkt gemeinsam haben, die also unter irgendeinem Winkel aneinanderstoßen.`
  )
}

function _88(md) {
  return (
    md`## Fünftes Dreieck
  25 Teildreiecke, 21 Knoten, 33 Muster, Blatt 30 bis 62.`
  )
}

function _89(md) {
  return (
    md`#### Bl. 30. *Das Netz*`
  )
}

function _90(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/030.svg" alt="Folie 030" style="width: auto; height: auto;">`
  )
}

function _91(md) {
  return (
    md`#### Bl. 31. *Der kurze Teilstrich*`
  )
}

function _92(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/031.svg" alt="Folie 031" style="width: auto; height: auto;">`
  )
}

function _93(md) {
  return (
    md`#### Bl. 32. *Der lange Teilstrich*`
  )
}

function _94(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/032.svg" alt="Folie 032" style="width: auto; height: auto;">`
  )
}

function _95(md) {
  return (
    md`#### Bl. 33. *Der doppelte Teilstrich*
  Die Formen 31 bis 33 sind alle Bruchteile des Netzes 30. Statt des einfachen derartigen Falles 15 im vierten Dreieck haben wir hier drei Fälle, entsprechend der größeren Anzahl der Knotenpunkte in der Dreiecksseite. Das ist ein allgemeines Verhalten: Jeder Einzelfall in einem niederen Dreieck ist der Stammvater einer Familie in den späteren. Wir sehen dies alsbald bei der folgenden Gruppe.`
  )
}

function _96(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/033.svg" alt="Folie 033" style="width: auto; height: auto;">`
  )
}

function _97(md) {
  return (
    md`#### Bl. 34. *Der sechsstrahlige Stern, klein*`
  )
}

function _98(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/034.svg" alt="Folie 034" style="width: auto; height: auto;">`
  )
}

function _99(md) {
  return (
    md`#### Bl. 35. *Der sechsstrahlige Stern, groß*`
  )
}

function _100(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/035.svg" alt="Folie 035" style="width: auto; height: auto;">`
  )
}

function _101(md) {
  return (
    md`#### Bl. 36. *Der sechsstrahlige Stern in zweiter Lage*`
  )
}

function _102(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/036.svg" alt="Folie 036" style="width: auto; height: auto;">`
  )
}

function _103(md) {
  return (
    md`#### Bl. 37. *Der sechsstrahlige Stern, ungleichstrahlig*
  In 34 bis 37 haben wir die Familie der sechsstrahligen Sterne, die sich bereits auf vier Glieder vermehrt hat. Die Abwandlungen nach der Länge, Lage und Gleichheit der Strahlen kennzeichnen die Sonderfälle, deren Verschiedenheit sich noch deutlicher in ihren Verbindungen mit anderen Mustern bestätigt.`
  )
}

function _104(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/037.svg" alt="Folie 037" style="width: auto; height: auto;">`
  )
}

function _105(md) {
  return (
    md`Die Blätter 31 bis 37 umfassen die offenen Formen des fünften Dreiecks. Es folgen die Inselformen und dann die geschlossenen.`
  )
}

function _106(md) {
  return (
    md`#### Bl. 38. *Das Dreieck, klein*`
  )
}

function _107(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/038.svg" alt="Folie 038" style="width: auto; height: auto;">`
  )
}

function _108(md) {
  return (
    md`#### Bl. 39. *Das Dreieck, groß*`
  )
}

function _109(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/039.svg" alt="Folie 039" style="width: auto; height: auto;">`
  )
}

function _110(md) {
  return (
    md`#### Bl. 40. *Die Raute, klein*`
  )
}

function _111(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/040.svg" alt="Folie 040" style="width: auto; height: auto;">`
  )
}

function _112(md) {
  return (
    md`#### Bl. 41. *Die Raute, groß*`
  )
}

function _113(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/041.svg" alt="Folie 041" style="width: auto; height: auto;">`
  )
}

function _114(md) {
  return (
    md`#### Bl. 42. *Das Sechseck, klein*`
  )
}

function _115(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/042.svg" alt="Folie 042" style="width: auto; height: auto;">`
  )
}

function _116(md) {
  return (
    md`#### Bl. 43. *Das Sechseck, groß*`
  )
}

function _117(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/043.svg" alt="Folie 043" style="width: auto; height: auto;">`
  )
}

function _118(md) {
  return (
    md`#### Bl. 44. *Der Sechsspitz*`
  )
}

function _119(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/044.svg" alt="Folie 044" style="width: auto; height: auto;">`
  )
}

function _120(md) {
  return (
    md`#### Bl. 45. *Der Weinspitz*
  Die Inselformen 38 bis 45 zeigen wieder die Abwandlungen vermöge der größeren Knotenzahl. An Stelle der einzelnen Vertreter von Dreieck, Sechseck, Sechsspitz, die das vierte Dreieck in 18 bis 20 aufwies, sind hier je zwei verschieden große Vertreter dieser drei Formen vorhanden. Neu kommt hinzu die Raute, gleichfalls mit zwei Vertretern 40 und 41, und der Sechsspitz sowohl einfach 44, wie mit durchgezogenen Seitenlinien 45. Diese Form gilt seit undenklichen Zeiten in Weinländern als Zeichen für den Ausschank des Getränkes; es sei daher gestattet, diese häufig wiederkehrende Form 45 den Weinspitz zu nennen. Sie kann bekanntlich aufgefasst werden als bestehend aus zwei gleichseitigen Dreiecken in Gegenlage.`
  )
}

function _121(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/045.svg" alt="Folie 045" style="width: auto; height: auto;">`
  )
}

function _122(md) {
  return (
    md`Hiermit sind die Inselformen erschöpft, und es folgen die geschlossenen Formen.`
  )
}

function _123(md) {
  return (
    md`#### Bl. 46. *Die gestachelte Raute*
  Aus dem einfachen Rautenmuster 9 ist hier durch Verlängerung der Seiten die gestachelte Raute geworden. Es ist zu beachten, dass die stumpfen Rautenecken, wo die Stacheln sitzen, nicht in einem Knotenpunkt liegen.

  Vorgreifend sei schon hier bemerkt, dass die gestachelte Raute 46 besonders viele schöne Verbindungen mit anderen Mustern liefert. Hiermit sind die Inselformen erschöpft, und es folgen die geschlossenen Formen.`
  )
}

function _124(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/046.svg" alt="Folie 046" style="width: auto; height: auto;">`
  )
}

function _125(md) {
  return (
    md`#### Bl. 47. *Das überschobene Dreieck*
  Da die Spiegelverhältnisse des Hauptdreiecks bewirken, dass zu jedem Dreieck dieser Form eines mit gleichem Mittelpunkt in der Gegenlage gehört, so kann man als Grundform von 47 auch einen großen Weinspitz ansehen.`
  )
}

function _126(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/047.svg" alt="Folie 047" style="width: auto; height: auto;">`
  )
}

function _127(md) {
  return (
    md`#### Bl. 48. *Das überschobene Sechseck, klein*`
  )
}

function _128(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/048.svg" alt="Folie 048" style="width: auto; height: auto;">`
  )
}

function _129(md) {
  return (
    md`#### Bl. 49. *Das überschobene Sechseck, mittel, zweite Lage*`
  )
}

function _130(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/049.svg" alt="Folie 049" style="width: auto; height: auto;">`
  )
}

function _131(md) {
  return (
    md`#### Bl. 50. *Das überschobene Sechseck, groß*
  Die Muster 48, 49, 50 sind sämtlich von Sechsecken gebildet, deren Mittelpunkte in den Netzpunkten liegen. Zufolge ihrer zunehmenden Größe überlagern sie sich aber verschiedenartig und ergeben demgemäß verschiedene Muster. Bei 48 kommen sie eben dazu und bilden kleine Rauten, während ungedeckte Gebiete in Gestalt von Dreiecken dazwischen übrigbleiben.

  Die Sechsecke in 49 erscheinen in der zweiten Lage und überschieben sich nicht mit den Ecken, sondern mit den Seiten. Dadurch entsteht der Rahmen mit den hübschen Sechsecken in den Winkeln.

  Die Sechsecke von 50 sind wieder in erster Lage, überschieben sich aber so stark, dass sie zwischen sich nur einen kleinen Sechsspitz lassen. Hier ist die Flächenverteilung am gleichförmigsten, und die Form wirkt wie ein entwickelter Dreisechs.`
  )
}

function _132(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/050.svg" alt="Folie 050" style="width: auto; height: auto;">`
  )
}

function _133(md) {
  return (
    md`Hiermit enden die mit Netzrichtung behafteten geschlossenen Muster.`
  )
}

function _134(md) {
  return (
    md`#### Bl. 51. *Der Dreispitz, einfach*
  Die Form besteht, wie ein Blick auf das Hauptdreieck lehrt, aus lauter Dreispitzen, die ohne Überschiebung die Spitzen gemeinsam in den Netzpunkten haben. Im Muster tritt aber diese Auffassung zurück, und das Auge fasst sechs solche Dreispitze zu Rautensternen zusammen, deren Rauten gemeinsam sind.

  Dies ist eine allgemeine Eigenschaft der Dreispitzmuster. Sieht man 51 bis 56 an, denen sämtlich der Dreispitz zugrunde liegt, so hat man Mühe, diese Form herauszufinden, während das sternartige Gebilde sich sofort darstellt.`
  )
}

function _135(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/051.svg" alt="Folie 051" style="width: auto; height: auto;">`
  )
}

function _136(md) {
  return (
    md`#### Bl. 52. *Die Nelke*
  Das Muster 52 wiederholt in größerem Maßstabe die Form 26, welche dort Nelke genannt wurde. Vergleicht man 52 mit 51, so wird man gewahr, dass beide übereinstimmen, nur dass in 52 die Seiten des Dreispitzes innerhalb der einspringenden Winkel bis zur Begegnung verlängert sind. Auch der Rautenstern, der bei 51 so auffällig ist, findet sich in 52 wieder. Er tritt hier aber ganz zurück, während die dazwischenliegende Nelkenform sich der Aufmerksamkeit in erster Linie aufdrängt. Durch das Übergreifen der Blätter gewinnt diese einen besonderen Reiz. Doch ist dieser Zusammenhang nicht stark genug, um den Dreispitz als Hauptform erscheinen zu lassen.`
  )
}

function _137(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/052.svg" alt="Folie 052" style="width: auto; height: auto;">`
  )
}

function _138(md) {
  return (
    md`#### Bl. 53. *Der überschobene Dreispitz, klein*`
  )
}

function _139(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/053.svg" alt="Folie 053" style="width: auto; height: auto;">`
  )
}

function _140(md) {
  return (
    md`#### Bl. 54. *Der überschobene Dreispitz, mittel*`
  )
}

function _141(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/054.svg" alt="Folie 054" style="width: auto; height: auto;">`
  )
}

function _142(md) {
  return (
    md`#### Bl. 55. *Der überschobene Dreispitz, groß*`
  )
}

function _143(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/055.svg" alt="Folie 055" style="width: auto; height: auto;">`
  )
}

function _144(md) {
  return (
    md`#### Bl. 56. *Der überschobene Dreispitz, stumpf*
  Die Formen 53 bis 56 sind sämtlich aus Dreispitzen gebildet, die sich zunehmend überschieben. In 53 sind es nur die äußersten Spitzen, die kleine Rauten bilden. Auf 54 dringen die Spitzen bis zu den einspringenden Winkeln vor, auf 55 bis zu den Netzpunkten. Wiewohl diese Beziehung keineswegs auf den ersten Blick erkennbar ist, bewirkt sie doch eine allgemeine Verwandtschaft der Muster, die namentlich bei 54 und 55 deutlich empfunden wird.

  Bei 56 endlich ist gleichfalls ein bis zu den Netzpunkten reichender Dreispitz vorhanden; der einspringende Winkel ist aber von ½ so wenig verschieden, dass die dazwischenliegenden langen Rauten viel stärker als Form für sich empfunden werden; sie bilden einen Rautenstern mit sehr langen Strahlen.`
  )
}

function _145(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/056.svg" alt="Folie 056" style="width: auto; height: auto;">`
  )
}

function _146(md) {
  return (
    md`#### Bl. 57. *Der überschobene Sechsspitz, gerade*`
  )
}

function _147(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/057.svg" alt="Folie 057" style="width: auto; height: auto;">`
  )
}

function _148(md) {
  return (
    md`#### Bl. 58. *Der überschobene Sechsspitz, geneigt*
  Die Muster 57 und 58 sind aus Sechsspitzen gebildet. In 57 überschieben sich die Spitzen nur wenig und bilden kleine Rauten. In 58 ist die Überschiebung stärker; gleichzeitig sind die Gegenseiten im Sechsspitz nicht bar wie bei 57, sondern stehen im Winkel. Deshalb steht auch 57 in der Netzrichtung, 58 nicht.

  Mit der Nelke 52 hat 58 gleichfalls einige Ähnlichkeit. Der Vergleich zeigt, dass die Blattseiten von 52 in den Netzpunkten zusammentreffen, die von 58 dagegen nicht.`
  )
}

function _149(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/058.svg" alt="Folie 058" style="width: auto; height: auto;">`
  )
}

function _150(md) {
  return (
    md`#### Bl. 59 *Der Rautenkranz*`
  )
}

function _151(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/059.svg" alt="Folie 059" style="width: auto; height: auto;">`
  )
}

function _152(md) {
  return (
    md`#### Bl. 60. *Der Rautenkranz*
  Aus dem einzelnen Rautenkranz 29 des vierten Dreiecks sind hier zwei geworden. Bei 59 greifen die Spitzen der Sechsspitze, welche in 29 in einem Punkt zusammentreffen, etwas übereinander und bilden den kleinen, durchgezogenen Dreispitz, der für dieses Muster kennzeichnend ist. Bei 60 sind sie zu kurz, um sich zu treffen; die Verlängerungen der Seiten bilden aber schmale Rauten innerhalb der breiten. Eine Besonderheit dieses Musters liegt darin, dass die in der Mitte des Hauptdreiecks sich kreuzenden Linien nicht durch denselben Punkt, sondern etwas aneinander vorbeigehen; sie bilden dort einen kleinen, durchgezogenen Dreispitz. Dies nimmt dem Muster die unmittelbare Wirkung, wird aber vielleicht künftig einen besonderen Reiz ausmachen.`
  )
}

function _153(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/060.svg" alt="Folie 060" style="width: auto; height: auto;">`
  )
}

function _154(md) {
  return (
    md`#### Bl. 61. *Der Brillant*
  Die Betrachtung des Hauptdreiecks lehrt, dass die Form aus zwei kleineren, gleichseitigen Dreiecken besteht, die um den Mittelpunkt gegeneinander verdreht sind. Im Muster tritt dies gegen die großen, leeren Zwölfecke zurück, die durch die Aneinanderreihung der Form entstehen. Das Ganze macht den Eindruck geschliffener Edelsteine und mag deshalb der Brillant heißen.`
  )
}

function _155(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/061.svg" alt="Folie 061" style="width: auto; height: auto;">`
  )
}

function _156(md) {
  return (
    md`#### Bl. 62. *Der Fisch*
  Auch in 62 wird der Anblick durch die Anordnung der langen, fischähnlichen Rauten zu einem sechsseitigen Gebilde gekennzeichnet. An den Ecken treten durchgezogene Sechsspitze auf, die einen besonderen Reiz des Musters ausmachen.

  Die Muster 61 und 62 sind einzeln und neu. Abkömmlinge von ihnen sind bei den höheren Dreiecken zu erwarten.`
  )
}

function _157(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/062.svg" alt="Folie 062" style="width: auto; height: auto;">`
  )
}

function _158(md) {
  return (
    md`#### Verbindungen
  Die 33 Muster des fünften Dreiecks ergeben 528 Zweier und 5456 Dreier. Die Gesamtzahl der Verbindungen aller Stufen beträgt 8 589 934 591, also 8 ½ Milliarden. Während die letzte Zahl hoffnungslos ist, kann man sich ganz wohl die Zweier nicht nur einmal, sondern wiederholt ansehen, nachdem ihre Herstellung durch Übereinanderlegen der durchsichtigen Blätter so leicht gemacht worden ist. Selbst ein Durcharbeiten der 5456 Dreier liegt nicht außerhalb der erreichbaren Grenzen und erweist sich als vielfach lohnend. Man wird nicht versäumen, besonders hübsche Verbindungen, die man dabei findet, durch Aufschreiben der laufenden Nummern ihrer Bestandteile sich in Erinnerung zu halten.

  Weiter sei darauf hingewiesen, dass man hier wie bei den früheren Dreiecken eine überaus große Anzahl ganz neuer Muster von verminderter Gesetzlichkeit, also größerer Freiheit, erhalten kann, wenn man wie folgt verfährt. Man legt erst zwei Blätter, wie beschrieben, aufeinander. Dann verschiebt man das obere Blatt waagerecht so auf dem unteren, dass der Abstand genau eine Maschenweite beträgt. Dann fallen wieder Knotenpunkte zusammen, aber nicht alle, denn die beiden Dreiecke sind nun um eine Maschenweite gegeneinander verschoben. Es entsteht ein gesetzliches Muster, dem aber die Spiegellinien der „reinen" Muster fehlen; seine größere Freiheit ist sein Reiz. Ein neues Muster entsteht, wenn man die Verschiebung um eine zweite Maschenweite fortsetzte und so fort. Hat man das Bedürfnis nach freieren Mustern, so kann man es auf die beschriebene Weise mit dem geringsten Verlust an Gesetzmäßigkeit befriedigen.

  Solche Verschiebungen können von jedem Knotenpunkt zu jedem anderen erfolgen. Die Mannigfaltigkeit der dabei entstehenden Formen ist gewaltig groß, doch treten sie alle geordnet in Erscheinung.

  Zuletzt sei bemerkt, dass zufolge der vielen Übertragungen bei der Herstellung der Blätter auf ein mathematisch genaues Passen jedes Musters zu jedem anderen verzichtet werden musste. Da die Gebilde mit Hilfe der Netze ohne Weiteres genau gezeichnet werden können, ein unmittelbares Kopieren also nicht infrage kommt, so bedeuten diese kleinen Abweichungen (die weiterhin noch geringer werden) keinen wesentlichen Nachteil.`
  )
}

function _159(md) {
  return (
    md`## Zweite Mappe
  #### Gespiegelte Knotenlinien der Quadrate 1 bis 4
  Mit den Tafeln 63–120. Leipzig, Unesma, 1922`
  )
}

function _160(md) {
  return (
    md`#### Allgemeines
  Die vorliegende zweite Mappe der „Welt der Formen“ schließt sich unmittelbar der ersten an. Es wird daher die Kenntnis der dort in der Einleitung dargelegten Betrachtungen über die vorliegende Aufgabe und den Weg zu ihrer Lösung hier vorausgesetzt.

  Obwohl das Dreieck die einfachste der drei regelmäßigen, raumschlüssigen Figuren ist, bedingt doch der Umstand, dass es durch Schiebung allein die Ebene nicht ausfüllt, sondern dazu der Drehung bedarf, eine kleine Verwicklung, die bei den Quadraten nicht vorhanden ist. Die in dieser Mappe vorzuführenden Muster, die aus Knotenlinien des Quadratnetzes entstehen, sind daher in solchem Sinne einfacher, dass sie den Zusammenhang des einzelnen Quadrats mit dem unbegrenzten Muster in der Ebene leichter übersehen lassen als beim Dreiecknetz.

  Trotz dieser wesentlichen Verschiedenheit und trotz des Mangels an unmittelbarer geometrischer Verwandtschaft zwischen Dreieck und Quadrat macht sich in den Mustern dieser Mappe nicht selten eine überraschende Ähnlichkeit mit denen der ersten Mappe geltend. Es liegen hier Ausgestaltungen gemeinsamer, räumlicher Gesetze vor, welche sogar diese Verschiedenheiten überwinden. Ihre Herausarbeitung wird eine wichtige Aufgabe der künftigen allgemeinen Formenlehre sein, zu der die vorliegenden Untersuchungen das grundlegende Material liefern.`
  )
}

function _161(md) {
  return (
    md`Die Ordnung der Muster ist ganz wie bei den Dreieckmustern durchgeführt. Es sind auch hier 1, 4, 9, 16, allgemein *n²* Teilquadrate zu einem Gesamtquadrat erster, zweiter, dritter, vierter, allgemein *n*-ter Ordnung zusammengefasst. Die Anzahl der Teilquadrate, ihrer Knoten und der verschiedenen Muster lässt sich in folgender Zusammenstellung erkennen:

  | Ordnung | Teilquadrate | Knoten | Muster |
  |---|---|---|---|
  | 1 | 1 | 4 | 2 |
  | 2 | 4 | 9 | 5 |
  | 3 | 9 | 16 | 16 |
  | 4 | 16 | 25 | 34 |
  | 5 | 25 | 36 | 57 |

  Die Anzahl der Muster ist annähernd 1⁄16 *n* (*n* – 1), wo *n* die Zahl der Knoten ist.

  Die Gesetzlichkeiten im Quadrat sind folgende: Das Quadrat ist ein vierzähliger Drehling und enthält vier Spiegellinien, die paarweise senkrecht aufeinanderstehen. Alle gehen durch den Mittelpunkt; das eine Paar ist bar zu den Seiten, das andere wird von den beiden Queren (Diagonalen) gebildet. [Jede Themalinie wird durch Betätigung der vier Spiegellinien zu einer vierzähligen Rose entwickelt] (wegen genauerer Erörterung dieser Begriffe sehe man nach: Ostwald, *Die Harmonie der Formen*, Leipzig, Verlag Unesma 1922). Jedes Motiv entwickelt sich im Allgemeinen zu einer Form aus 8, zuweilen 4 Linien.

  Die Muster dieser Mappe beruhen auf dem Spiegelgesetz des Quadrats, bestehen also sämtlich aus vierzähligen Rosen, die durch zwei senkrechte Schiebungen je gleich einer Quadratseite vervielfältigt worden sind.

  Die quadratischen Drehlinge sind einer späteren Mappe vorbehalten.`
  )
}

function _162(md) {
  return (
    md`## Erstes Quadrat
  1 Teilquadrat, 4 Knoten, 2 Muster, Blatt 63, 64.`
  )
}

function _163(md) {
  return (
    md`#### Bl. 63. *Das Netz*
  Im Gegensatz zum Dreiecknetz lässt sich das Quadratnetz durch zwei reine Schiebungen der Grundform bar ihren Seiten erzeugen. Insofern zeigt es einfachere Verhältnisse als jenes.`
  )
}

function _164(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/063.svg" alt="Folie 063" style="width: auto; height: auto;">`
  )
}

function _165(md) {
  return (
    md`#### Bl. 64. *Das Netz in zweiter Lage*
  Da das Grundquadrat 4 Knoten enthält, ermöglicht es zwei verschiedene Knotenlinien: in den Seiten und in den Queren. Aus der zweiten entsteht durch Vervielfältigung zum Muster ein anderes Quadratnetz, das gegen das erste um 1⁄8 gedreht ist und kleinere Abstände im Verhältnis 1 : √½, rund 10 : 7, hat. Wir bezeichnen diese Richtung der Netzlinien als die *zweite Lage*.`
  )
}

function _166(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/064.svg" alt="Folie 064" style="width: auto; height: auto;">`
  )
}

function _167(md) {
  return (
    md`#### Verbindungen
  Die Verbindung beider Netze ergibt ein Muster, in welchem jedes Netzquadrat in 4 rechtwinklige Dreiecke zerlegt ist. Diese sind teils deckgleich, teils spiegelgleich und verlangen z. T. eine Drehung nebst der Schiebung, um sie zur Deckung zu bringen.

  Dieses Paar ist die einzige Verbindung, welche aus den zwei einfachen Mustern gebildet werden kann. Die Formel für die Zweier ½ *n* (*n* – 1) ergibt 1 für *n* = 2, die für die Gesamtzahl 2ⁿ – 1 ergibt 3, nämlich zwei einfache Muster und ein zusammengesetztes.`
  )
}

function _168(md) {
  return (
    md`## Zweites Quadrat
  4 Teilquadrate, 9 Knoten, 5 Muster, Blatt 65 bis 69.`
  )
}

function _169(md) {
  return (
    md`#### Bl. 65. *Das Netz*`
  )
}

function _170(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/065.svg" alt="Folie 065" style="width: auto; height: auto;">`
  )
}

function _171(md) {
  return (
    md`#### Bl. 66. *Das Netz*
  Als paarzahliges Quadrat hat das zweite einen Knoten im Mittelpunkt, den die unpaarzahligen nicht haben. Durch diesen gehen Bare zu den Seiten, die ein gleiches Netz wie 65 bilden, nur dass es um die halbe Seitenlänge verschoben ist.`
  )
}

function _172(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/066.svg" alt="Folie 066" style="width: auto; height: auto;">`
  )
}

function _173(md) {
  return (
    md`#### Bl. 67. *Das Netz in zweiter Lage*
  Dies Netz steht zu 65 in ganz demselben Verhältnis wie 64 zu 63.`
  )
}

function _174(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/067.svg" alt="Folie 067" style="width: auto; height: auto;">`
  )
}

function _175(md) {
  return (
    md`#### Bl. 68. *Das Netz in zweiter Lage*
  Auch dieses Netz kommt zum zweiten Male vor, verschoben um eine halbe Masche.

  Wiewohl 67 und 68 ebenso wie 65 und 66 ganz gleiche Muster ergeben, muss man dennoch beide beibehalten. Denn sie führen zu verschiedenen zusammengesetzten Mustern, da die Lage der Linien im Hauptquadrat verschieden ist.`
  )
}

function _176(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/068.svg" alt="Folie 068" style="width: auto; height: auto;">`
  )
}

function _177(md) {
  return (
    md`#### Bl. 69. *Das maurische Netz*
  Das erste nicht quadratische Muster, das in dieser Reihe entsteht, erweist sich alsbald als recht verwickelt, denn es ist nicht leicht, seine Gesetzlichkeit anschaulich zu erfassen. Am besten geht man von den Netzpunkten aus, zwischen denen man sich die Netzlinien gezogen denkt. Dann liegt in jeder Masche derselbe Achtspitz, den man im Hauptquadrat erblickt, und diese Achtspitze berühren sich mit allen Spitzen.

  Außer dieser Zusammenfassung sind aber eine Anzahl andere möglich, deren Entwirrung einen großen Reiz hat.

  Eine Anzahl der von den Mauren erfundenen geometrischen Muster beruht auf der Anwendung dieses Netzes; daher der gewählte Name.`
  )
}

function _178(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/069.svg" alt="Folie 069" style="width: auto; height: auto;">`
  )
}

function _179(md) {
  return (
    md`#### Verbindungen
  Die Netze 65 und 66 geben zusammen das halb so große Netz 63. Aus 65, 67 entsteht dasselbe wie aus 63, 64 in doppelter Größe, aus 65, 68 dagegen ein neues, aus Dreiecken und Quadraten bestehendes Muster. Dies ist das erste Beispiel für die unterschiedliche Wirkung der nur durch Barverschiebung verschiedenen Muster 67 und 68. Das verwickelte maurische Netz 69 wird durch 65 viel übersichtlicher gemacht, obwohl es linienreicher geworden ist.

  Aus 66, 67 entsteht dasselbe wie aus 65, 66; aus 66, 68 dasselbe wie aus 65, 68. Dagegen wirkt 66, 69 neu.

  67, 68 ergeben das Netz 63; 67, 69 ein neues, sehr linienreiches Muster, ebenso 68, 69. Damit sind die 10 Zweier erschöpft.

  Auch die Dreier und höheren Verbindungen geben wesentlich Neues nur, wenn 69 dabei ist. Die Gesamtzahl aller Verbindungen ist 31.`
  )
}

function _180(md) {
  return (
    md`## Drittes Quadrat
  9 Teilquadrate, 16 Knoten, 16 Muster, Blatt 70 bis 85.`
  )
}

function _181(md) {
  return (
    md`#### Bl. 70. *Das Netz*`
  )
}

function _182(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/070.svg" alt="Folie 070" style="width: auto; height: auto;">`
  )
}

function _183(md) {
  return (
    md`#### Bl. 71. *Das Netz in zweiter Lage*
  Wegen der unpaaren Ordnungszahl des Hauptquadrats sind beide Muster nur einmal vorhanden.`
  )
}

function _184(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/071.svg" alt="Folie 071" style="width: auto; height: auto;">`
  )
}

function _185(md) {
  return (
    md`#### Bl. 72. *Der Teilstrich*`
  )
}

function _186(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/072.svg" alt="Folie 072" style="width: auto; height: auto;">`
  )
}

function _187(md) {
  return (
    md`#### Bl. 73. *Das stehende Kreuz*
  An die Stelle der Sechssterne, welche im Dreiecknetz als offene Muster auftraten, erscheinen hier Kreuze. Das vorliegende ist stehend oder in erster Lage.`
  )
}

function _188(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/073.svg" alt="Folie 073" style="width: auto; height: auto;">`
  )
}

function _189(md) {
  return (
    md`#### Bl. 74. *Das liegende Kreuz, klein*`
  )
}

function _190(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/074.svg" alt="Folie 074" style="width: auto; height: auto;">`
  )
}

function _191(md) {
  return (
    md`#### Bl. 75. *Das liegende Kreuz, groß*
  Damit schließen die offenen Muster.`
  )
}

function _192(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/075.svg" alt="Folie 075" style="width: auto; height: auto;">`
  )
}

function _193(md) {
  return (
    md`#### Bl. 76. *Das kleine Quadrat*`
  )
}

function _194(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/076.svg" alt="Folie 076" style="width: auto; height: auto;">`
  )
}

function _195(md) {
  return (
    md`#### Bl. 77. *Das große Quadrat*`
  )
}

function _196(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/077.svg" alt="Folie 077" style="width: auto; height: auto;">`
  )
}

function _197(md) {
  return (
    md`#### Bl. 78. *Das Quadrat in zweiter Lage*
  Blätter 76 bis 78 bringen die Inselmuster, welche nur die Gestalt von Quadraten verschiedener Größe und Lage haben. Achtecke usw. treten erst später auf.`
  )
}

function _198(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/078.svg" alt="Folie 078" style="width: auto; height: auto;">`
  )
}

function _199(md) {
  return (
    md`#### Bl. 79. *Das Kreuzband*
  Das Muster zeigt gekreuzte Bänder, welche dazwischen Quadrate von doppelter Breite frei lassen; daher der Name. Man kann es auch auffassen als aus überschobenen Quadraten gebildet, von denen in den kleinen Quadraten vier Ecken übereinanderliegen. Damit ergibt sich eine Beziehung zu 80.`
  )
}

function _200(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/079.svg" alt="Folie 079" style="width: auto; height: auto;">`
  )
}

function _201(md) {
  return (
    md`#### Bl. 80. *Das überschobene Quadrat in zweiter Lage*
  Die Überschiebung geht nur bis zur Bildung kleiner Quadrate; dazwischen bleibt noch ungedeckter Grund übrig.

  Hiermit enden die Muster in der Netzrichtung und in der Quere, oder die *netzbaren* Muster. Die folgenden zeigen sämtlich andere Winkel.`
  )
}

function _202(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/080.svg" alt="Folie 080" style="width: auto; height: auto;">`
  )
}

function _203(md) {
  return (
    md`#### Bl. 81. *Der Vierspitz*
  Mit 81 beginnt eine Reihe von Mustern, die auf dem Vierspitz beruhen. Sie ergeben alsbald eine große Mannigfaltigkeit, ebenso wie die Dreispitz-Abkömmlinge im Dreiecknetz. In 81 berühren sich die Vierspitze gegenseitig mit den Spitzen, ohne dass Überschiebung eintritt; es liegt also die einfachste derartige Form vor.

  Die Form 81 hat aber noch einen anderen Zusammenhang; sie lässt sich als Stammform der Kreuzwelle 86 auffassen. Das Nähere hierüber wird unter 86 mitgeteilt.`
  )
}

function _204(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/081.svg" alt="Folie 081" style="width: auto; height: auto;">`
  )
}

function _205(md) {
  return (
    md`#### Bl. 82. *Der überschobene Vierspitz, klein*
  Hier sind die Vierspitze in zweiter Lage und etwas größer, und ihre Spitzen schieben sich so übereinander, dass sie dort neue kleine, durchgezogene Vierspitze bilden. Die Form ist dem Quadratnetz eigentümlich und hat keinen nahen Verwandten im Dreiecknetz. Ein etwas entfernter Verwandter ist 53.`
  )
}

function _206(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/082.svg" alt="Folie 082" style="width: auto; height: auto;">`
  )
}

function _207(md) {
  return (
    md`#### Bl. 83. *Die Nelke*
  Die Form erinnert an die gleichnamigen Muster 26 und 52 des Dreiecknetzes, doch ist sie schlichter. Sie ist gebildet aus Vierspitzen von doppelter Größe gegen 81, deren Spitzen bis zu den Mittelpunkten ihrer Nachbarn gehen; sie kann als überschobener Vierspitz mittlerer Größe aufgefasst werden.`
  )
}

function _208(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/083.svg" alt="Folie 083" style="width: auto; height: auto;">`
  )
}

function _209(md) {
  return (
    md`#### Bl. 84. *Der überschobene Vierspitz, groß*
  Die schlanken Vierspitze, aus denen 84 besteht, sind in zweiter Lage und reichen mit einer Spitze quer durch das ganze Hauptquadrat. So entsteht ein bereits recht verwickeltes Muster, in welchem eine große Mannigfaltigkeit verschiedener Auffassungen möglich ist.`
  )
}

function _210(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/084.svg" alt="Folie 084" style="width: auto; height: auto;">`
  )
}

function _211(md) {
  return (
    md`#### Bl. 85. *Der Brillant*
  Zwei Quadrate mit gleichem Mittelpunkt sind gegeneinander verdreht und bilden so das Muster 85, das seine Familienähnlichkeit mit dem Brillant 61 des Dreiecknetzes sofort erkennen lässt. Es hat deshalb den gleichen Namen erhalten.`
  )
}

function _212(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/085.svg" alt="Folie 085" style="width: auto; height: auto;">`
  )
}

function _213(md) {
  return (
    md`#### Bl. 86. *Die Kreuzwelle*
  Dies ist ein Muster, welches dem Quadratnetz eigentümlich ist. Man kann keine geschlossenen Formen darin finden, die durch Überschiebung das Muster ergeben; es ist vielmehr aus Scharen von Wellenzügen gebildet, die sich senkrecht durchkreuzen. Jeder Wellenzug besteht aus vier um eine Viertel-Wellenlänge verschobenen Einzelwellen. Wir nennen 86 deshalb die Kreuzwelle.

  In 86 haben wir offenbar nicht den einfachsten derartigen Fall, und es entsteht die Frage, wo denn dieser zu finden ist. Er liegt in 81 vor. Dort erkennen wir den gleichen Grundplan; nur sind die Wellen zwei-, nicht vierfach, und sie durchkreuzen sich in Abständen von einer halben, nicht wie dort einer Viertel-Wellenlänge. Diese Einfachheit hat aber bewirkt, dass sich die Linien zu geschlossenen Vierspitzen zusammenfassen lassen, was der Grund gewesen ist, dieses Muster an den Anfang jener Familie zu stellen. Es gehört ebenso an den Anfang der vorliegenden Familie, in welcher sich allerdings außerdem nur das eine Gebilde 85 befindet.`
  )
}

function _214(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/086.svg" alt="Folie 086" style="width: auto; height: auto;">`
  )
}

function _215(md) {
  return (
    md`#### Verbindungen
  Da die 16 einfachen Muster des dritten Quadrats bereits 120 Zweier und insgesamt 65 535 Verbindungen aller Stufen ergeben, lässt sich eine Einzelbeschreibung nicht durchführen. Die tatsächliche Mannigfaltigkeit ist indessen etwas geringer, weil manche Verbindungen, insbesondere der netzbaren ([S. 9]) Muster, auf Formen führen, die in den einfachen Mustern bereits vorhanden sind.

  In einem anderen Sinne gewährt dagegen die Untersuchung der Zweier und der höheren Verbindungen eine große Ausbeute. Gegenüber den Formen des Dreiecknetzes erscheinen viele einfache Muster des Quadratnetzes recht schlicht, ja nüchtern. Dies verschwindet, sobald man die Zweier betrachtet. Wer diese zum ersten Male kennenlernt, ist überwältigt von dem feinen und starken Reiz dieser größtenteils ganz neuen Muster, die zwischen einfacher Verständlichkeit und schwer übersehbarem Linienspiel eine glückliche Mitte halten. Und dieser Reiz verliert sich keineswegs bei genauerem Kennenlernen. Jede neue Betrachtung erschließt neue Schönheiten, die man anfangs übersehen hatte. Aus diesem Brunnen können Generationen schöpfen, ohne ihn zu leeren.`
  )
}

function _216(md) {
  return (
    md`## Viertes Quadrat
  16 Teilquadrate, 25 Knoten, 34 Muster, Blatt 87 bis 120.`
  )
}

function _217(md) {
  return (
    md`#### Bl. 87. *Das Netz*`
  )
}

function _218(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/087.svg" alt="Folie 087" style="width: auto; height: auto;">`
  )
}

function _219(md) {
  return (
    md`#### Bl. 88. *Das Netz, verschoben*
  Da wieder ein Quadrat von paarzahliger Ordnung vorliegt, erscheinen alle Netze in zwei baren Lagen, die um eine halbe Maschenweite verschoben sind.`
  )
}

function _220(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/088.svg" alt="Folie 088" style="width: auto; height: auto;">`
  )
}

function _221(md) {
  return (
    md`#### Bl. 89. *Das Netz, halbe Größe*
  Das Thema, welches in allen anderen Fällen ein Kreuzband gibt (vgl. 79), ergibt beim vierten Quadrat ein reguläres Netz von halber Größe, übereinstimmend mit 64. Ähnliches geschieht hernach erst beim achten Quadrat.`
  )
}

function _222(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/089.svg" alt="Folie 089" style="width: auto; height: auto;">`
  )
}

function _223(md) {
  return (
    md`#### Bl. 90. *Das Netz in zweiter Lage*`
  )
}

function _224(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/090.svg" alt="Folie 090" style="width: auto; height: auto;">`
  )
}

function _225(md) {
  return (
    md`#### Bl. 91. *Das Netz in zweiter Lage, verschoben*
  Vergl. 87 und 88.`
  )
}

function _226(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/091.svg" alt="Folie 091" style="width: auto; height: auto;">`
  )
}

function _227(md) {
  return (
    md`#### Bl. 92. *Der Teilstrich*`
  )
}

function _228(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/092.svg" alt="Folie 092" style="width: auto; height: auto;">`
  )
}

function _229(md) {
  return (
    md`#### Bl. 93. *Der Teilstrich, verschoben*
  Wegen der Spiegelverhältnisse kommt hier nur der lange Teilstrich zustande. Der kurze tritt im fünften Quadrat auf.`
  )
}

function _230(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/093.svg" alt="Folie 093" style="width: auto; height: auto;">`
  )
}

function _231(md) {
  return (
    md`#### Bl. 94. *Das stehende Kreuz*`
  )
}

function _232(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/094.svg" alt="Folie 094" style="width: auto; height: auto;">`
  )
}

function _233(md) {
  return (
    md`#### Bl. 95. *Das stehende Kreuz, verschoben*
  Aus gleichem Grunde wie bei 92 und 93 entsteht hier nur das kurzarmige Kreuz.`
  )
}

function _234(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/0102.svg" alt="Folie 095" style="width: auto; height: auto;">`
  )
}

function _235(md) {
  return (
    md`#### Bl. 96. *Das liegende Kreuz*`
  )
}

function _236(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/095.svg" alt="Folie 096" style="width: auto; height: auto;">`
  )
}

function _237(md) {
  return (
    md`#### Bl. 97. *Das liegende Kreuz, verschoben*
  Hiermit schließen die offenen Muster, welche von 92 bis 97 gehen.`
  )
}

function _238(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/096.svg" alt="Folie 097" style="width: auto; height: auto;">`
  )
}

function _239(md) {
  return (
    md`#### Bl. 98. *Das Quadrat*
  Mit 98 beginnen die Inselmuster.`
  )
}

function _240(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/099.svg" alt="Folie 098" style="width: auto; height: auto;">`
  )
}

function _241(md) {
  return (
    md`#### Bl. 99. *Das Quadrat, verschoben*`
  )
}

function _242(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/0100.svg" alt="Folie 099" style="width: auto; height: auto;">`
  )
}

function _243(md) {
  return (
    md`#### Bl. 100. *Das Quadrat, zweite Lage*`
  )
}

function _244(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/098.svg" alt="Folie 100" style="width: auto; height: auto;">`
  )
}

function _245(md) {
  return (
    md`#### Bl. 101. *Das Quadrat, zweite Lage, verschoben*`
  )
}

function _246(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/097.svg" alt="Folie 101" style="width: auto; height: auto;">`
  )
}

function _247(md) {
  return (
    md`#### Bl. 102. *Das Quadrat, zweite Lage, verschoben, verdoppelt*
  Das Muster 102 erweist sich übereinstimmend mit 78. Dies rührt aus dem gleichen Grund her wie die Gleichheit von 89 und 64.`
  )
}

function _248(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/0101.svg" alt="Folie 102" style="width: auto; height: auto;">`
  )
}

function _249(md) {
  return (
    md`#### Bl. 103. *Der quadratische Achtspitz*
  Mit einem großen Sprung schließt sich an die einfachste Inselform des Quadrats in seinen beiden Lagen die verhältnismäßig verwickelte Form 103. Sie erweist sich aber als völlig gleich dem ersten nicht quadratischen Muster, dem wir beim zweiten Quadrat begegneten, dem maurischen Netz 69. Nur schließen bei 69 die Achtspitze unmittelbar aneinander, wodurch sich die Linien unbegrenzt fortsetzen, während in 103 die Formen durch breite Zwischenräume getrennt sind. Dieser durchgezogene Achtspitz, der zudem ungleich lange Spitzen hat, ist also tatsächlich die nächste Figur nach dem Quadrat. Wir nennen ihn, da er in ein Quadrat eingezeichnet ist, den *quadratischen Achtspitz*.

  Hiermit schließen die Inselmuster.`
  )
}

function _250(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/0103.svg" alt="Folie 103" style="width: auto; height: auto;">`
  )
}

function _251(md) {
  return (
    md`#### Bl. 104. *Das maurische Netz*
  In 104 erscheint das maurische Netz des zweiten Quadrats in doppelter Größe, weil das vierte Quadrat aus vier Quadraten von doppelter Seitenlänge besteht, das zweite aus vier Quadraten von einfacher. Man erkennt im Hauptquadrat sofort den quadratischen Achtspitz wieder.`
  )
}

function _252(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/0104.svg" alt="Folie 104" style="width: auto; height: auto;">`
  )
}

function _253(md) {
  return (
    md`#### Bl. 105. *Das überschobene Quadrat*
  Diese Form erscheint hier nur in der zweiten Lage entsprechend 80. Die erste Lage, entsprechend Kreuzband 79, hatte das Netz 89 in halber Größe ergeben.`
  )
}

function _254(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/0105.svg" alt="Folie 105" style="width: auto; height: auto;">`
  )
}

function _255(md) {
  return (
    md`#### Bl. 106. *Der Vierspitz*`
  )
}

function _256(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/0106.svg" alt="Folie 106" style="width: auto; height: auto;">`
  )
}

function _257(md) {
  return (
    md`#### Bl. 107. *Der Vierspitz, verschoben*
  Auch diese bereits etwas verwickelte Figur erscheint in zwei Stellungen, die um eine halbe Quadratseite verschoben sind. Die Vierspitze berühren sich mit den Spitzen.

  Wie im Falle 81 und 86 können wir auch 106 und 107 als Stammform entsprechender Kreuzwellen ansehen, die weiter unten (119, 120) beschrieben werden.`
  )
}

function _258(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/107.svg" alt="Folie 107" style="width: auto; height: auto;">`
  )
}

function _259(md) {
  return (
    md`#### Bl. 108. *Der überschobene Vierspitz, erste Lage, klein*`
  )
}

function _260(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/108.svg" alt="Folie 108" style="width: auto; height: auto;">`
  )
}

function _261(md) {
  return (
    md`#### Bl. 109. *Der überschobene Vierspitz, erste Lage, groß*`
  )
}

function _262(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/109.svg" alt="Folie 109" style="width: auto; height: auto;">`
  )
}

function _263(md) {
  return (
    md`#### Bl. 110. *Der überschobene Vierspitz, zweite Lage, klein*`
  )
}

function _264(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/110.svg" alt="Folie 110" style="width: auto; height: auto;">`
  )
}

function _265(md) {
  return (
    md`#### Bl. 111. *Der überschobene Vierspitz, zweite Lage, groß*
  Die Formen 108 bis 111 zeigen eine gekreuzte Verwandtschaft. Während 108, 109 einerseits, 110, 111 andererseits in der Lage übereinstimmen, zeigen 108, 110 Vierspitze, die sich nur wenig überschieben, während bei 109, 111 die Spitzen bis in den Mittelpunkt der Nachbarn übergehen. Demgemäß haben 108, 110 kleinere, 109, 111 größere Vierspitze.`
  )
}

function _266(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/111.svg" alt="Folie 111" style="width: auto; height: auto;">`
  )
}

function _267(md) {
  return (
    md`#### Bl. 112. *Der Rautenkranz*
  Beim Vergleich dieser Form mit dem Rautenkranz 29 des Dreiecknetzes wird man die Ähnlichkeit nicht verkennen, obwohl hier nur vier Rauten, statt sechs, den Kranz bilden.`
  )
}

function _268(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/112.svg" alt="Folie 112" style="width: auto; height: auto;">`
  )
}

function _269(md) {
  return (
    md`#### Bl. 113. *Das maurische Netz, erste Lage*`
  )
}

function _270(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/113.svg" alt="Folie 113" style="width: auto; height: auto;">`
  )
}

function _271(md) {
  return (
    md`#### Bl. 114. *Das maurische Netz, zweite Lage*
  Die Muster 113, 114 lassen sich als Abwandlungen des maurischen Netzes 69 und 104 auffassen und haben daher den Namen erhalten. Während nämlich in 69 und 104 die Spitzen des Achtspitzes sämtlich in der Umfassung des Hauptquadrats liegen, wodurch dann lauter durchgehende Linien entstehen, haben hier nur je vier Spitzen der Achtspitze diese Lage; die anderen bleiben im Inneren des Quadrats. Der Anschluss ergibt daher endliche Linien an Stelle der durchgehenden.

  Der Name soll nicht besagen, dass die Mauren diese Formen gekannt und benutzt haben. Dies scheint vielmehr nicht der Fall zu sein.`
  )
}

function _272(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/114.svg" alt="Folie 114" style="width: auto; height: auto;">`
  )
}

function _273(md) {
  return (
    md`#### Bl. 115. *Der Brillant*
  Das Muster 115 ist eine vergrößerte Wiederholung von 85.`
  )
}

function _274(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/115.svg" alt="Folie 115" style="width: auto; height: auto;">`
  )
}

function _275(md) {
  return (
    md`#### Bl. 116. *Der Fisch*
  Das Muster 116 ist die quadratische Abwandlung von 62 aus dem Dreiecknetz und hat deshalb den gleichen Namen erhalten.`
  )
}

function _276(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/116.svg" alt="Folie 116" style="width: auto; height: auto;">`
  )
}

function _277(md) {
  return (
    md`#### Bl. 117. *Die einfache Kreuzwelle*`
  )
}

function _278(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/117.svg" alt="Folie 117" style="width: auto; height: auto;">`
  )
}

function _279(md) {
  return (
    md`#### Bl. 118. *Die einfache Kreuzwelle, verschoben*
  Ebenso wie 106, 107 kann man 117, 118 als Stammform der doppelten (eigentlich vierfachen) Kreuzwellen ansehen, die in 119, 120 dargestellt sind. Der Unterschied besteht nur darin, dass sich dort die Wellen im schmalsten, hier im breitesten Ort schneiden.`
  )
}

function _280(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/118.svg" alt="Folie 118" style="width: auto; height: auto;">`
  )
}

function _281(md) {
  return (
    md`#### Bl. 119. *Die doppelte Kreuzwelle*`
  )
}

function _282(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/119.svg" alt="Folie 119" style="width: auto; height: auto;">`
  )
}

function _283(md) {
  return (
    md`#### Bl. 120. *Die doppelte Kreuzwelle, verschoben*
  Der eben gekennzeichnete Unterschied besteht auch bei beiden Kreuzwellen. Die Form 119 stammt von 105 ab, die Form 120 von 116.`
  )
}

function _284(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/120.svg" alt="Folie 120" style="width: auto; height: auto;">`
  )
}

function _285(md) {
  return (
    md`#### Verbindungen
  Die 34 Muster des vierten Quadrats ergeben bereits rund 17 Milliarden insgesamt.

  Es liegt also ein unerschöpflicher Quell neuer Schönheitswerte zutage, aus dem jeder seinen Garten wässern kann, ohne seine Nachbarn zu beschränken, die mit der gleichen Arbeit beschäftigt sind.

  Ferner sei erinnert, dass eine sehr große Fülle von weniger gesetzlichen Verbindungen erzielt wird, wenn die Knotenpunkte nicht genau aufeinandergelegt werden, sondern um einen oder einige ganze Knotenabstände verschoben.`
  )
}

function _286(md) {
  return (
    md`## Dritte Mappe
  #### Gespiegelte Knotenlinien der Sechsecke 1 bis 3
  Mit den Tafeln 121–190. Leipzig, Unesma, 1923`
  )
}

function _287(md) {
  return (
    md`#### Allgemeines
  Das aus regelmäßigen Sechsecken durch restlose Bedeckung der Ebene gebildete Netz unterscheidet sich in mehrfacher Beziehung wesentlich von dem Drei- und Vierecknetz. Die auffälligste Verschiedenheit besteht darin, dass die gleichlaufenden Seiten der Sechsecke nicht mehr wie bisher sich zu durchgehenden Geraden zusammenschließen, sondern durch regelmäßige Lücken unterbrochen sind. Damit hängt zusammen, dass auch nicht wie bisher je 4, 9, 16 … allgemein *n²* Elementarsechsecke sich zu größeren Sechsecken von 2-, 3-, 4-, … *n*-facher Seitenlänge zusammenlegen lassen. Vielmehr lässt sich auf keine Weise ein größeres Sechseck aus irgendeiner Anzahl kleinerer zusammensetzen. Weiter besteht die Besonderheit, dass die Knoten des Sechsecknetzes zusammenfallen mit den Knoten des Dreiecknetzes, das aus den je sechs Dreiecken entsteht, in die man das Sechseck zerlegen kann. Nur fällt jedesmal der Knoten des Dreiecknetzes fort, welcher im Mittelpunkte jedes Sechsecks liegt.

  Dieses Dreiecknetz gibt auch die Möglichkeit, gleichliegende Sechsecknetze von 2-, 3-, … *n*-facher Seitenlänge herzustellen, wie in den beiden ersten Fällen. Da die hierbei entstehenden Muster mit den früheren eine deutliche Verwandtschaft aufweisen, so habe ich sie in der vorliegenden Mappe mitgeteilt. Doch sei schon hier bemerkt, dass man auch aus den Knoten des einfachen Sechsecknetzes auf anderem Wege größere Sechsecke ableiten kann. Da die gleiche Art der Ableitung auch beim Drei- und Vierecknetz Neues ergibt, so werden diese Verhältnisse später besonders behandelt werden. Bezüglich der Entstehung der Muster aus dem Thema sei erinnert, dass das regelmäßige Sechseck sechs Spiegellinien hat, von denen drei je ein Paar gegenüberliegender Ecken, drei je ein Paar gegenüberliegender Seitenmitten verbinden. Dadurch ergibt jede Themalinie ein Muster aus zwölf Linien. Liegt das Thema selbst schon symmetrisch zu einer Spiegellinie, so hat das Muster nur sechs Linien.`
  )
}

function _288(md) {
  return (
    md`Während das Dreiecknetz um jeden Maschenpunkt einen sechszähligen Drehling darstellt, das Vierecknetz einen vierzähligen, so gestattet das Sechsecknetz um jeden Maschenpunkt nur eine dreizählige Drehung, bei der es mit sich selbst zur Deckung kommt. Daher rührt die Dreizähligkeit der entsprechenden Muster, die sich häufig auffallend genug geltend macht. Methodisch ist noch zu erwähnen, dass eine kleine Anzahl der als Thema hier und früher benutzten Knotenlinien die Eigenschaft hat, dass sie durch einen oder einige zwischen den beiden Endknoten auf der gleichen Geraden liegende Knoten gehen. Sie zerfallen dadurch in Teilstücke, die man stets so klein wählen kann, dass sie keinen Knoten mehr enthalten. Diese Teilstücke kommen auch als Themen für sich vor. Daraus folgt, dass man die Muster jener längeren Linien zusammensetzen kann aus den Mustern der Teilstücke, sodass jene nicht als einfache, sondern als zusammengesetzte Muster erscheinen. Man darf daher, streng genommen, solche Linien nicht als einfache Knotenlinien ansehen (welche nach genauerer Definition Knoten nur in den Endpunkten enthalten sollen) und sollte ihre Muster ausschalten, da diese ohnedies aus den einfachen Mustern entstehen. Um die Gleichförmigkeit zu wahren, habe ich in dieser Mappe noch solche knotenhaltigen Themen beibehalten, werde sie aber von der vierten Mappe ab, mit welcher die neue Klasse der *Drehlinge* beginnen wird, nicht mehr aufnehmen.`
  )
}

function _289(md) {
  return (
    md`Solche mehrfachen Muster sind Nr. 5, 13, 14, 24, 30, 32, 35, 46, 47, 48, 50 in der ersten Mappe, Nr. 70, 71, 79, 87, 88, 89, 90, 105 in der zweiten, 130, 132, 139, 144, 147, 157, 163, 164, 165, 167, 168, 169 in der dritten. Wie man sieht, gehören alle höheren Grundnetze hierzu, da die Seitenlinien der regelmäßigen Vielecke notwendig mehrere Knotenpunkte enthalten. Da diese Netze jedenfalls auch künftig mitgeteilt werden müssen, so ist ein vollkommener Ausschluss aller mehrfachen Muster ohnehin nicht tunlich.

  Das Sechseck ist die dritte und letzte regelmäßige Form, welche die Ebene restlos füllt. Mit der Darstellung seiner Muster ist die Formenwelt der regelmäßigen Netze abgeschlossen, soweit es sich um die Spiegellinie handelt. Natürlich ist jede der drei Reihen für sich unbegrenzt, da man die Grundformen der Netze aus immer größeren Mengen der Elementarformen zusammensetzen kann. Bei den Dreiecken konnte das erste bis fünfte in dem Umfang einer Mappe von 62 Blättern dargestellt werden. Bei den Quadraten ergab das erste bis vierte 58 Blätter, und bei den Sechsecken reichten schon die drei ersten aus, um die Mappe mit 70 Blättern zu füllen. Dies liegt daran, dass die Anzahl der Knoten in der Urform wie in den Hauptformen mit der Anzahl der Ecken wächst; demgemäß nimmt auch die Anzahl der Knotenlinien und der aus ihnen gebildeten Formen vom Dreieck bis zum Sechseck schnell zu.

  Die Anzahl der Knoten in den Sechsecken ist 6, 18, 36, 60 usw., allgemein 6d, wo *d* die Dreieckszahl (1, 3, 6, 10, 15 …) von der zugehörigen Ordnung ist. Die große Zahl und schnelle Zunahme der Knoten bedingt eine entsprechende Mannigfaltigkeit der Formen. Während das erste Dreieck nur eine, das erste Quadrat zwei Formen hat, weist das erste Sechseck deren drei auf. Für das zweite gelten die Zahlen 3, 5 und 15, für das dritte 8, 16 und 52. Das vierte Sechseck würde allein drei Mappen vom Umfange der gegenwärtigen füllen.

  Im Übrigen betätigt sich das Gesetz der Urform auch in den entstehenden Mustern. Sechs- und Zwölfecke und -spitze kommen sehr häufig vor. Einige Muster sind denen der Dreiecke ähnlich, wie zu erwarten war, da sechs Dreiecke ein Sechseck geben. Doch sind die Spiegelverhältnisse einer solchen Gruppe verschieden von denen des Sechsecks selbst, wodurch auch bestimmte Unterschiede der ähnlich aussehenden Muster bedingt werden.

  Die früher erwähnte allgemeine Ähnlichkeit entsprechender Muster der Drei- und Vierecknetze wiederholt sich auch hier. Durch die Namengebung wird auf diese Ähnlichkeiten hingewiesen werden.`
  )
}

function _290(md) {
  return (
    md`## Erstes Sechseck
  6 Knoten, 3 Muster, Blatt 121 bis 123.`
  )
}

function _291(md) {
  return (
    md`#### Bl. 121. *Das Netz*
  Während bei den Netzen des Drei- und Vierecks die Netzlinien unbegrenzt durchgingen, ist dies beim Sechseck nicht der Fall. Es verlaufen zwar die Netzlinien in den Verlängerungen der Stücke, aber mit regelmäßigen Unterbrechungen, durch welche die Sechsecke entstehen. Zieht man die Linien durch, so entsteht das Dreiecknetz.

  Durch diese Eigenschaft gewinnt das Sechsecknetz eine Besonderheit und deshalb einen gesteigerten Schönheitswert gegenüber den Netzen mit durchgehenden Linien. Es wird deshalb gelegentlich ohne weitere Zutat als Schmuckform verwertet.`
  )
}

function _292(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/121.svg" alt="Folie 121" style="width: auto; height: auto;">`
  )
}

function _293(md) {
  return (
    md`#### Bl. 122. *Das Rautennetz*
  Dies Muster entstand in fast doppelter Größe (Bl. 9) aus dem dritten Dreieck durch den Dreistern, wie hier aus dem Sechseck durch den Sechsstern. Soll also der Zusammenhang mit der Fläche des Dreiecks betont werden, so gelten als Mittelpunkte die Stellen, wo je sechs Linien zusammenlaufen. Umgekehrt ist es mit den Ecken der Drei- und Sechsecke, die in den sechszähligen bzw. dreizähligen Orten liegen.

  Außerdem liegt das Rautennetz 122 anders als 9; die Richtung der Seiten bei dem einen ist die der Mittellinien oder Queren bei dem anderen. Es ist dies ein Verhältnis, das wir wie in anderen Fällen schon angetroffen und als erste und zweite Lage bezeichnet haben. Die Lage von 122 sei die zweite genannt; für 9 ist eine senkrechte, für 122 eine waagerechte Seitenrichtung kennzeichnend.`
  )
}

function _294(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/122.svg" alt="Folie 122" style="width: auto; height: auto;">`
  )
}

function _295(md) {
  return (
    md`#### Bl. 123. *Das Bandnetz*
  Diese neue Form erinnert an 79 des dritten Vierecks, indem an Stelle der Netzlinien bandartige Doppellinien auftreten. Diese verlaufen hier indessen derart, dass das verkleinerte Sechseck, das sich zwischen ihnen bildet, nicht bar zu dem Sechseck des Netzes 121 liegt, sondern um 1⁄12 gedreht, also in *zweiter* Lage. Das findet bei 79 nicht statt, und insofern ist die Ähnlichkeit mehr äußerlich. Die genauer entsprechende tritt erst beim fünften Viereck auf und ergibt dort Bänder, die ebenso breit sind wie das Mittelfeld, d. h. im Quadratnetz von halber Größe der zweiten Lage.

  Auffallend ist die große Mannigfaltigkeit dieser Form, die bereits im ersten Sechseck erscheint. Das Muster besteht aus Dreiecken, Rauten und Sechsecken und gestattet verschiedene Zusammenstellungen. Dass es neu ist, wage ich nicht zu behaupten; mir war es neu, und in den mir zugänglichen Ornamentwerken habe ich es ohne Erfolg gesucht.

  Die innere Form dieses Musters ist übrigens der Weinspitz, den wir in 45 kennengelernt haben. Da seine Winkel sämtlich 1⁄6 und 1⁄3 sind, setzen sich die Spitzen so aneinander, dass die durchlaufenden Bänder entstehen. Es ist zu beachten, dass auch 23 aus (größeren) Weinspitzen gebildet ist. Doch ist die Zusammensetzung anders. Es entstehen zwar auch in 23 drei Scharen barer Linien, die sich unter 1⁄3 kreuzen. Sie fallen aber in 23 gleichabständig aus, in 123 nicht. Dies entspricht den Spiegelverhältnissen des Dreiecks und des Sechsecks.`
  )
}

function _296(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/123.svg" alt="Folie 123" style="width: auto; height: auto;">`
  )
}

function _297(md) {
  return (
    md`#### Verbindungen
  Aus 121 und 122 entsteht das kleine Dreieck 1, also keine neue Form.

  Dagegen erscheint das Muster 121 und 123 mit dem Reiz der Neuheit, bei aller Einfachheit und Übersichtlichkeit. Die Linien des Netzes spalten alle Rauten in je zwei gleichschenklige Dreiecke.

  Erheblich bunter und schwieriger erweist sich 122 + 123. Fügt man noch 121 dazu, so wird die Übersicht durch die Zusammenfassung der Sechsecke eher erleichtert.`
  )
}

function _298(md) {
  return (
    md`## Zweites Sechseck
  18 Knoten, 15 Muster, Blatt 124 bis 138.`
  )
}

function _299(md) {
  return (
    md`#### Bl. 124. *Das Netz*
  Es ist schon bemerkt worden, dass das zweite Sechseck nicht durch Zusammenfassung von vier Ursechsecken gebildet werden kann. Deshalb besteht auch kein geometrischer Zusammenhang zwischen dem Netz des ersten und dem des zweiten Sechsecks, und das kleine tritt nie unter den Mustern des größeren auf, wie dies bei den beiden anderen Vielecken die Regel war.

  Dagegen besteht folgender Zusammenhang. Die sechs inneren Knoten von 124 liegen völlig übereinstimmend mit den Knoten von 121 und haben dieselben Spiegellinien. Deshalb wiederholen sich die Formen 121, 122, 123 identisch im zweiten Sechseck, aber so, dass der äußere Rand von 124 leer bleibt. Obwohl also die Form dieselbe bleibt, ist doch das Muster ganz verschieden. 121 bis 123 sind zusammenhängende Muster, während ihre Wiederholung im zweiten Sechseck Inselmuster ergibt. Es wird an entsprechender Stelle auf solche Wiederholungen hingewiesen werden.`
  )
}

function _300(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/124.svg" alt="Folie 124" style="width: auto; height: auto;">`
  )
}

function _301(md) {
  return (
    md`#### Bl. 125. *Der Sechsstern*
  Auf den ersten Blick scheint dies Muster übereinstimmend mit dem gleichnamigen 16 zu sein. Der genauere Vergleich zeigt indessen, dass die verschiedenen Spiegelverhältnisse des Drei- und Sechsecks auch eine verschiedene Ordnung der Sterne gegeneinander bewirkt haben: auf 16 (und ebenso auf 17) schauen sie sich mit den Strahlen an, auf 125 mit den offenen Winkeln.

  Hier kann zum ersten Male auf die eben gemachte Bemerkung zu 124 Bezug genommen werden. Die Form 125 ist dieselbe wie 122, nur sind die Linien durch die leeren Ränder unterbrochen, und das entstehende Muster zeigt keine unmittelbar erkennbare Beziehung zu 122.`
  )
}

function _302(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/125.svg" alt="Folie 125" style="width: auto; height: auto;">`
  )
}

function _303(md) {
  return (
    md`#### Bl. 126. *Der Dreistern*
  Es ist sehr bemerkenswert, dass diese dreistrahlige Form erst beim fünften Dreieck auftritt, während sie hier bereits auf der zweiten Stufe erscheint. Der Zusammenschluss zum Muster lässt übrigens die Sechseckordnung alsbald zutage treten.`
  )
}

function _304(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/126.svg" alt="Folie 126" style="width: auto; height: auto;">`
  )
}

function _305(md) {
  return (
    md`#### Bl. 127. *Das Sechseck*
  Auch dieses Muster erweist sich beim Vergleich mit 19, welches die gleichen Sechsecke als Inselmuster bringt, als wesentlich verschieden durch die gegenseitige Ordnung der Sechsecke. Man sieht beim Vergleich die Verschiedenheit leichter, als sie zu beschreiben ist. Bei 127 drängen sich zwischen zwei auf derselben Waagerechten liegenden Sechsecken die oberen und unteren Nachbarn eng heran, während sie bei 19 sich weit entfernen.

  Unter Bezugnahme auf die Bemerkung zu 124 ist zu erwähnen, dass 127 von 121 abstammt. Auch hier muss man die Verwandtschaft erst aufsuchen, da sie keineswegs ins Auge fällt.`
  )
}

function _306(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/127.svg" alt="Folie 127" style="width: auto; height: auto;">`
  )
}

function _307(md) {
  return (
    md`#### Bl. 128. *Der Weinspitz*
  Die schon mehrfach erwähnte Besonderheit, dass Formen, die im Sechseck sehr früh und klein erscheinen, sich bei den Dreieckformen erst in den höheren Reihen finden, bewährt sich auch hier. Der Weinspitz trat erst im fünften Dreieck, Bl. 46, auf und hat dort die doppelte Größe wie hier.

  Zwischen der gegenseitigen Lage in beiden Fällen besteht derselbe Unterschied, wie er beim Sechsstern 125 gekennzeichnet wurde.`
  )
}

function _308(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/128.svg" alt="Folie 128" style="width: auto; height: auto;">`
  )
}

function _309(md) {
  return (
    md`#### Bl. 129. *Das Dreiecknetz*
  Die Knotenlinien, welche zwei gegenüberliegende Seitenmitten des Sechsecks verbinden, sind gleichzeitig Spiegellinien. Deshalb reduziert sich die Anzahl der Linien dieser Form auf drei. Dieser besonders weitgehenden Vereinfachung ist die Entstehung des Dreiecknetzes zu danken, das man bei dem Sechsecknetz nicht erwartet.

  Das Stück dieser Dreiecke, welches je einer Masche angehört, ist das Viereck, welches gebildet wird, wenn man von der Mitte des Dreiecks Senkrechte auf die Seiten fällt, wie dies die Betrachtung der Knotenpunkte von 129 ergibt; sechs solche Vierecke ergeben das Hauptsechseck oder die Masche.

  Experimentell kann man die Richtigkeit des Ergebnisses prüfen, wenn man 129 mit einem der früheren oder späteren Blätter des zweiten Sechsecks verbindet. Es entstehen jedesmal vollendet symmetrische Muster. Bl. 124 + 129 ergeben insbesondere die obenerwähnten Vierecke.`
  )
}

function _310(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/129.svg" alt="Folie 129" style="width: auto; height: auto;">`
  )
}

function _311(md) {
  return (
    md`#### Bl. 130. *Das Rautennetz*
  Dies Rautennetz entsteht auf dieselbe Weise wie 122 in dem ersten Sechseck, nämlich durch den inneren Sechsstern. Es ist deshalb doppelt so groß wie 122 und hat dieselbe Lage, nämlich die zweite.

  Auch alle übrigen dort gemachten Bemerkungen finden hier sachgemäße Anwendung.`
  )
}

function _312(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/130.svg" alt="Folie 130" style="width: auto; height: auto;">`
  )
}

function _313(md) {
  return (
    md`#### Bl. 131. *Der Dreisechs*
  Auch dies aus dem Dreieck bekannte und längst entdeckte Muster steht in zweiter Lage gegenüber Bl. 4 und den späteren, größeren Vorkommen. Nur ist hier die zweite Lage durch senkrechte, die erste durch waagerechte Linien gekennzeichnet.`
  )
}

function _314(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/131.svg" alt="Folie 131" style="width: auto; height: auto;">`
  )
}

function _315(md) {
  return (
    md`#### Bl. 132. *Der kleine Dreisechs*
  Hier stimmt das Muster vollständig mit 4 überein. Dies rührt daher, dass ein Sechstel der Form von 132 genau übereinstimmt mit der ganzen Form des Dreiecks von 4.`
  )
}

function _316(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/132.svg" alt="Folie 132" style="width: auto; height: auto;">`
  )
}

function _317(md) {
  return (
    md`#### Bl. 133. *Das Bandnetz*
  Dies ist eine doppelt so große Wiederholung von 123. Beim Vergleich beider Sechsecke erkennt man auch die völlige Übereinstimmung der Entstehungsweise.

  Wir können deshalb voraussehen, dass alle Muster des zweiten Sechsecks sich beim vierten und sechsten, und dass die des dritten sich beim sechsten und neunten vergrößert wiederholen werden. Da aber die Bearbeitung der über 200 Muster des vierten Sechsecks erst sehr spät erfolgen kann, so müssen die Formen der früheren Dreiecke an ihrer Stelle vollständig gebracht und erörtert werden.`
  )
}

function _318(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/133.svg" alt="Folie 133" style="width: auto; height: auto;">`
  )
}

function _319(md) {
  return (
    md`#### Bl. 134. *Der Eckspitz*
  Dies schöne, aus Sechsecken und Sechsspitzen gebildete Muster, dem wegen dieser Zusammensetzung der Name gegeben wurde, entsteht dadurch, dass drei aus schrägen Geraden (Winkel 1⁄3) gebildete Wellenzüge sich unter Winkeln von 1⁄3 durchkreuzen. Die Linien sind alle bar den Netzseiten, es ist also, wie auch alle vorangegangenen, ein netzbares Muster, das letzte im zweiten Sechseck. Unter den Mustern des Dreiecks kommt es nicht vor. Mit dem Dreisechs 132 ist es nahe verwandt, wie man beim Vergleich der Formen erkennt: die durchgehenden Linien von 132 sind hier unterbrochen, sodass das innere Sechseck von 132 bei 134 fortfällt.`
  )
}

function _320(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/134.svg" alt="Folie 134" style="width: auto; height: auto;">`
  )
}

function _321(md) {
  return (
    md`#### Bl. 135. *Die Nelke*
  Dieses neuartige Muster ist der Vertreter der Nelke 26 in der Dreieckreihe. In der Dreieckreihe besteht jede Nelke aus sechs Blättern, die sich zu dreien mit dem breiten Ende verschränken, Bl. 26. In der Viereckreihe, Bl. 83, ist jede Nelke von vier Blättern gebildet, die sich zu vieren verschränken. Hier endlich besteht jede Nelke aus drei Blättern, die sich zu sechsen verschränken. Die eigenartige Anmut, welche jene Muster auszeichnet, findet sich auch hier wieder.

  Man kann das Muster auch auffassen als gebildet durch Überschiebung halbregelmäßiger Sechsecke (Dreiecke mit ausspringendem stumpfen Winkel). Doch ist es nicht ganz leicht, die Form zu erfassen.`
  )
}

function _322(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/135.svg" alt="Folie 135" style="width: auto; height: auto;">`
  )
}

function _323(md) {
  return (
    md`#### Bl. 136. *Der sechsarmige Zwölfspitz*`
  )
}

function _324(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/136.svg" alt="Folie 136" style="width: auto; height: auto;">`
  )
}

function _325(md) {
  return (
    md`#### Bl. 137. *Der zwölfarmige Zwölfspitz*
  Die Formen 136 und 137 werden beide aus Zwölfspitzen gebildet, deren Spitzen sich berühren. Bei 136 sind es aber nur sechs Spitzen, während die sechs anderen frei enden. Bei 137 berühren sich dagegen alle zwölf Spitzen.

  Durch die Berührung entstehen jedesmal Verlängerungen der Linien. Diese ergeben in 136 drei Wellenzüge, die zu Flechten zusammentreten und sich unter 1⁄3 kreuzen. In 137 kann man sehr große Dreispitze erkennen, welche sich gegenseitig überlagern und durchdringen.

  Doch ist die Auffassung als Zwölfspitze vorzuziehen, da im dritten Sechseck die gleichen Formen getrennt auftreten und daher nur als Zwölfspitze aufgefasst werden können.`
  )
}

function _326(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/137.svg" alt="Folie 137" style="width: auto; height: auto;">`
  )
}

function _327(md) {
  return (
    md`#### Bl. 138. *Der Brillant*
  Mit diesem Namen sind Formen bezeichnet worden, welche durch gegenseitige Verdrehung regelmäßiger Vielecke mit gleichem Mittelpunkt entstehen. Hier sind es drei halbregelmäßige Rauten, welche auf solche Weise die Form erzeugen; dadurch fällt das Liniengeflecht etwas bunter aus, während der allgemeine Charakter gut gewahrt ist.

  Hiermit schließen die 15 Muster des zweiten Sechsecks ab.`
  )
}

function _328(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/138.svg" alt="Folie 138" style="width: auto; height: auto;">`
  )
}

function _329(md) {
  return (
    md`#### Verbindungen
  Aus den 15 Mustern des zweiten Sechsecks entstehen 105 Zweier, 455 Dreier usw. und insgesamt eine halbe Million Verbindungen aller Stufen. Man wird sich zunächst damit begnügen, die Zweier kennenzulernen; an angenehmen Überraschungen fehlt es dabei nicht.`
  )
}

function _330(md) {
  return (
    md`## Drittes Sechseck
  36 Knoten, 52 Muster, Blatt 139 bis 190.`
  )
}

function _331(md) {
  return (
    md`#### Bl. 139. *Das Netz*
  Es genügt, auf die Bemerkungen zu Bl. 121 und Bl. 123 zu verweisen.`
  )
}

function _332(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/139.svg" alt="Folie 139" style="width: auto; height: auto;">`
  )
}

function _333(md) {
  return (
    md`#### Bl. 140. *Der Seitenstrich*`
  )
}

function _334(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/140.svg" alt="Folie 140" style="width: auto; height: auto;">`
  )
}

function _335(md) {
  return (
    md`#### Bl. 141. *Der Sternstrich*
  Die beiden Muster 140 und 141 bestehen aus einzelnen Strichen, nämlich 140 aus den Mittelstücken der Sechseckseiten und 141 aus den Strichen des Dreisterns 126, die durch die Randbildung im größeren Sechseck voneinander getrennt wurden. Hierdurch kommt die Form einem Sechsstern näher als einem Dreistern, der auch vorhanden ist, dessen Bestandteile aber zu weit voneinander abgerückt sind.`
  )
}

function _336(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/141.svg" alt="Folie 141" style="width: auto; height: auto;">`
  )
}

function _337(md) {
  return (
    md`#### Bl. 142. *Der Dreistern*`
  )
}

function _338(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/142.svg" alt="Folie 142" style="width: auto; height: auto;">`
  )
}

function _339(md) {
  return (
    md`#### Bl. 143. *Der Dreistern in zweiter Lage*
  Auch diese Dreisterne entstehen wie 126 erst im Muster durch das Zusammenwirken der benachbarten Sechsecke. Dabei stimmt die Entstehungsweise von 142 mit der von 126 überein, nur dass die Sterne entsprechend dem größeren Sechseck weiter auseinanderliegen. Der Dreistern von 143 entsteht dagegen auf andere Weise und ist gegen jenen um 1⁄6 gedreht. Deshalb sieht das Muster auch wesentlich anders aus.`
  )
}

function _340(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/143.svg" alt="Folie 143" style="width: auto; height: auto;">`
  )
}

function _341(md) {
  return (
    md`#### Bl. 144. *Der große Dreistern*
  Die Form ist eine Erweiterung von 142, derzufolge die Strahlen die doppelte Länge erhalten. Es ist bemerkenswert, wie deutlich dadurch die Annäherung an das Rautennetz wird.

  Obwohl die Strichmuster 142 bis 144 trotz ihrer Einfachheit einen deutlichen Schönheitswert haben und daher für sich sehr wohl verwendet werden können, liegt ihre größere Bedeutung doch in den Verbindungen, die sie mit anderen eingehen.`
  )
}

function _342(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/144.svg" alt="Folie 144" style="width: auto; height: auto;">`
  )
}

function _343(md) {
  return (
    md`#### Bl. 145. *Der kleine Sechsstern*`
  )
}

function _344(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/145.svg" alt="Folie 145" style="width: auto; height: auto;">`
  )
}

function _345(md) {
  return (
    md`#### Bl. 146. *Der mittlere Sechsstern*`
  )
}

function _346(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/146.svg" alt="Folie 146" style="width: auto; height: auto;">`
  )
}

function _347(md) {
  return (
    md`#### Bl. 147. *Der große Sechsstern*
  Die Sechssterne haben abwechselnd die erste, zweite und wieder die erste Lage; die Strahlenlänge nimmt wie 1 : 2 zu.`
  )
}

function _348(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/147.svg" alt="Folie 147" style="width: auto; height: auto;">`
  )
}

function _349(md) {
  return (
    md`#### Bl. 148. *Das kleine Dreieck*`
  )
}

function _350(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/148.svg" alt="Folie 148" style="width: auto; height: auto;">`
  )
}

function _351(md) {
  return (
    md`#### Bl. 149. *Das große Dreieck*
  Beide Dreiecke entstehen nicht aus Linien zwischen benachbarten Knoten, sondern zwischen solchen des zweiten Abstandes; ihre Seitenlängen verhalten sich wie 1 : 2. Bei beiden Mustern ist die sechseckige Anordnung sehr deutlich; interessant ist, wie dasselbe Dreieck sich mehreren Sechsecken angehörig erweist, ohne dass diese Beziehungen einander stören.`
  )
}

function _352(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/149.svg" alt="Folie 149" style="width: auto; height: auto;">`
  )
}

function _353(md) {
  return (
    md`#### Bl. 150. *Die Raute*
  Es ist die gleiche kleine Raute, welche das Dreieckmuster 41 bildet, und auch die Abstände sind dieselben. Nur bilden in 41 die Rauten die Ecken des Sechsecks, während sie in 150 senkrecht auf den Seitenmitten stehen. In der Stellung sind sie daher näher verwandt mit der großen Raute 42 des fünften Dreiecks.`
  )
}

function _354(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/150.svg" alt="Folie 150" style="width: auto; height: auto;">`
  )
}

function _355(md) {
  return (
    md`#### Bl. 151. *Das kleine Sechseck, locker*`
  )
}

function _356(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/151.svg" alt="Folie 151" style="width: auto; height: auto;">`
  )
}

function _357(md) {
  return (
    md`#### Bl. 152. *Das kleine Sechseck, dicht*
  Bl. 151 ist die Wiederholung des Netzes 121 vom ersten Sechseck; durch den doppelten Rand sind die einzelnen Felder weit getrennt. Es ist daher vergleichbar 43, doch sehen sich hier die Sechsecke mit den Ecken an, auf 151 mit den Seiten.

  Dagegen entsteht das Muster 152 durch das Zusammenwirken der benachbarten Sechsecke, wodurch die Felder eine andere Ordnung (Fehlen des Mittelfeldes) erhalten.`
  )
}

function _358(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/152.svg" alt="Folie 152" style="width: auto; height: auto;">`
  )
}

function _359(md) {
  return (
    md`#### Bl. 153. *Das mittlere Sechseck*`
  )
}

function _360(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/153.svg" alt="Folie 153" style="width: auto; height: auto;">`
  )
}

function _361(md) {
  return (
    md`#### Bl. 154. *Das große Sechseck*
  Während die Sechsecke von 151 und 152 sich in erster Lage befinden, ist 153 in zweiter Lage und zeigt auch die Stellung Eck gegen Eck wie 43 sowie die gleiche Anordnung. Das Letzte gilt auch für das große Sechseck 154, welches durch die Zerlegung des Netzes vom zweiten Sechseck 124 entstanden ist und daher dieselbe Anordnung hat wie 151.`
  )
}

function _362(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/154.svg" alt="Folie 154" style="width: auto; height: auto;">`
  )
}

function _363(md) {
  return (
    md`#### Bl. 155. *Der Sechsspitz*
  Zwischen 155 und 45 besteht derselbe Unterschied wie zwischen 151 und 43.`
  )
}

function _364(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/155.svg" alt="Folie 155" style="width: auto; height: auto;">`
  )
}

function _365(md) {
  return (
    md`#### Bl. 156. *Der kleine Weinspitz*`
  )
}

function _366(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/156.svg" alt="Folie 156" style="width: auto; height: auto;">`
  )
}

function _367(md) {
  return (
    md`#### Bl. 157. *Der mittlere Weinspitz*`
  )
}

function _368(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/157.svg" alt="Folie 157" style="width: auto; height: auto;">`
  )
}

function _369(md) {
  return (
    md`#### Bl. 158. *Der große Weinspitz*
  Zwischen diesen drei Formen bestehen dieselben Beziehungen wie zwischen den Sechsecken 151, 153, 154. Es liegen nämlich 156 und 158 bar und in gleicher (zweiter) Lage wie das Dreieckmuster 46, während sich ihre Seiten wie 1 : 2 verhalten. Dagegen hat 157 die erste Lage, da die Knotenlinie im kürzesten Abstand liegt.`
  )
}

function _370(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/158.svg" alt="Folie 158" style="width: auto; height: auto;">`
  )
}

function _371(md) {
  return (
    md`#### Bl. 159. *Der Nelken-Zwölfspitz*`
  )
}

function _372(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/159.svg" alt="Folie 159" style="width: auto; height: auto;">`
  )
}

function _373(md) {
  return (
    md`#### Bl. 160. *Der sechsarmige Zwölfspitz*`
  )
}

function _374(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/160.svg" alt="Folie 160" style="width: auto; height: auto;">`
  )
}

function _375(md) {
  return (
    md`#### Bl. 161. *Der zwölfarmige Zwölfspitz*`
  )
}

function _376(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/161.svg" alt="Folie 161" style="width: auto; height: auto;">`
  )
}

function _377(md) {
  return (
    md`#### Bl. 162. *Der Brillanten-Zwölfspitz*
  Die zwölfspitzigen Inselformen 159 bis 162 rühren von den geschlossenen Mustern 135 bis 138 des zweiten Sechsecks her, welche durch die entstehenden leeren Ränder getrennt worden sind. Nach ihren dortigen Namen sind sie auch hier bezeichnet worden.

  Hiermit schließen die Inselmuster.`
  )
}

function _378(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/162.svg" alt="Folie 162" style="width: auto; height: auto;">`
  )
}

function _379(md) {
  return (
    md`#### Bl. 163. *Das Rautennetz*
  Es hat die dreifache Größe von 122, die anderthalbfache von 130 und eine übereinstimmende Lage.`
  )
}

function _380(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/163.svg" alt="Folie 163" style="width: auto; height: auto;">`
  )
}

function _381(md) {
  return (
    md`#### Bl. 164. *Das Bandnetz*
  Bl. 164 ist die vergrößerte Wiederholung von 133.`
  )
}

function _382(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/164.svg" alt="Folie 164" style="width: auto; height: auto;">`
  )
}

function _383(md) {
  return (
    md`#### Bl. 165. *Das schmale Bandnetz*
  Obwohl 165 ganz ähnlich wie 164 mittels Durchkreuzung dreier Bänder unter 1⁄3 entstanden ist, erweist sich das Ergebnis als weit verschieden. Statt von Sechsecken werden die großen Zwischenfelder von Dreiecken gebildet, und die Bänder selbst gestalten bei ihrer Begegnung einen Weinspitz. Dies weist auf den entscheidenden Unterschied hin. Auf 164 gehen die Bänder nebeneinander vorbei wie in einem Flechtwerk; auf 165 überlagern sie sich, und der Weinspitz kann nur erscheinen, wenn die Bänder durchsichtig sind.`
  )
}

function _384(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/165.svg" alt="Folie 165" style="width: auto; height: auto;">`
  )
}

function _385(md) {
  return (
    md`#### Bl. 166. *Das überschobene Dreieck*
  Die Dreiecke dieses besonders eindringlichen Musters entstehen erst beim Zusammentreten der Formen. Darin mag die Quelle des besonderen Reizes liegen, den ich hier sehr deutlich empfinde.`
  )
}

function _386(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/166.svg" alt="Folie 166" style="width: auto; height: auto;">`
  )
}

function _387(md) {
  return (
    md`#### Bl. 167. *Das überschobene Sechseck, klein*`
  )
}

function _388(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/167.svg" alt="Folie 167" style="width: auto; height: auto;">`
  )
}

function _389(md) {
  return (
    md`#### Bl. 168. *Das überschobene Sechseck, groß*`
  )
}

function _390(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/168.svg" alt="Folie 168" style="width: auto; height: auto;">`
  )
}

function _391(md) {
  return (
    md`#### Bl. 169. *Das überschobene Sechseck, mittel*`
  )
}

function _392(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/169.svg" alt="Folie 169" style="width: auto; height: auto;">`
  )
}

function _393(md) {
  return (
    md`#### Bl. 170. *Das überschobene Sechseck, zweite Lage*
  Die beiden Muster 167 und 168 sind fast identisch; sie unterscheiden sich nur dadurch, dass in 167 die Themalinie unterbrochen, in 168 durchgehend ist. Dies bewirkt aber, dass sich 167 aus kleinen, 168 aus sehr großen Sechsecken aufbaut, deren Seiten sich wie 2 : 5 verhalten.

  In 169 überschieben sich die Sechsecke mit den Seiten, nicht mit den Ecken, wie in 167 und 168. In 170 tritt wieder das erste ein; die Sechsecke selbst sind aber in zweiter Lage. Die Muster sind nahe verwandt mit den Dreieckmustern 131, 132.`
  )
}

function _394(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/170.svg" alt="Folie 170" style="width: auto; height: auto;">`
  )
}

function _395(md) {
  return (
    md`#### Bl. 171. *Die schlanke Nelke*`
  )
}

function _396(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/171.svg" alt="Folie 171" style="width: auto; height: auto;">`
  )
}

function _397(md) {
  return (
    md`#### Bl. 172. *Die breite Nelke*
  In 171 und 172 finden wir das Nelkenmuster wieder, wie es sich im dritten Sechseck gestaltet. Die Nelke tritt wieder dreiblättrig auf, in 171 mit schlanken, in 172 mit breiten Blättern. Beide Muster klingen auch an die Rautenkränze 59, 60 der Dreiecke an.`
  )
}

function _398(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/172.svg" alt="Folie 172" style="width: auto; height: auto;">`
  )
}

function _399(md) {
  return (
    md`#### Bl. 173. *Die einfache Kreuzwelle, schmal*`
  )
}

function _400(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/173.svg" alt="Folie 173" style="width: auto; height: auto;">`
  )
}

function _401(md) {
  return (
    md`#### Bl. 174. *Die einfache Kreuzwelle, breit*`
  )
}

function _402(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/174.svg" alt="Folie 174" style="width: auto; height: auto;">`
  )
}

function _403(md) {
  return (
    md`#### Bl. 175. *Die doppelte Kreuzwelle*
  Der Name Kreuzwelle wurde vom Quadratmuster 86 beibehalten, obwohl hier sich nicht zwei, sondern drei Wellenzüge überlagern, also keine Kreuze, sondern sechsstrahlige Sterne bilden. In 174 und 175 laufen zwei benachbarte Züge bar und wirken deshalb als doppelte Welle; in 173 sind die Wellen gegenläufig oder um eine halbe Länge verschoben.`
  )
}

function _404(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/175.svg" alt="Folie 175" style="width: auto; height: auto;">`
  )
}

function _405(md) {
  return (
    md`#### Bl. 176. *Der Dreispitz*`
  )
}

function _406(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/176.svg" alt="Folie 176" style="width: auto; height: auto;">`
  )
}

function _407(md) {
  return (
    md`#### Bl. 177. *Der überschobene Dreispitz, klein*`
  )
}

function _408(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/177.svg" alt="Folie 177" style="width: auto; height: auto;">`
  )
}

function _409(md) {
  return (
    md`#### Bl. 178. *Der überschobene Dreispitz, mittel*`
  )
}

function _410(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/178.svg" alt="Folie 178" style="width: auto; height: auto;">`
  )
}

function _411(md) {
  return (
    md`#### Bl. 179. *Der überschobene Dreispitz, groß*`
  )
}

function _412(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/179.svg" alt="Folie 179" style="width: auto; height: auto;">`
  )
}

function _413(md) {
  return (
    md`#### Bl. 180. *Der überschobene Dreispitz, stumpf, klein*`
  )
}

function _414(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/180.svg" alt="Folie 180" style="width: auto; height: auto;">`
  )
}

function _415(md) {
  return (
    md`#### Bl. 181. *Der überschobene Dreispitz, stumpf, groß*
  Die sechs Muster 176 bis 181 entstehen alle aus Dreispitzen. In 176 treten sie eben mit den Spitzen zusammen und bilden eine verhältnismäßig einfache Form. Die Spiegelverhältnisse des Sechsecks bewirken aber, dass die Spitzen der überschobenen Dreispitze nicht Sechsspitze bilden, sondern Zwölfspitze. Diese sind in 177 klein, in 178 größer und strecken sich in 179 bis zu gegenseitiger Berührung aus. Das Muster 180 ist mit 178 vergleichbar, nur dass die Dreispitze viel stumpfere Winkel haben. In gleichem Sinne sind 179 und 181 vergleichbar.`
  )
}

function _416(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/181.svg" alt="Folie 181" style="width: auto; height: auto;">`
  )
}

function _417(md) {
  return (
    md`#### Bl. 182. *Der überschobene Sechsspitz, mittel*`
  )
}

function _418(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/182.svg" alt="Folie 182" style="width: auto; height: auto;">`
  )
}

function _419(md) {
  return (
    md`#### Bl. 183. *Der überschobene Sechsspitz, groß*
  Beide Muster entstehen aus stumpfen Sechsspitzen von verschiedener Größe. Bl. 182 erinnert von fern an den Rautenkranz.`
  )
}

function _420(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/183.svg" alt="Folie 183" style="width: auto; height: auto;">`
  )
}

function _421(md) {
  return (
    md`#### Bl. 184. *Der überschobene Dreistumpf*
  Die Grundform dieses Musters ist ein Dreieck mit nach außen gebrochenen Seiten. Bei seinem viel größeren Reichtum erinnert es doch sehr an 182. Die Ursache wird klar, wenn man beachtet, wie nahe sich die Themen liegen.`
  )
}

function _422(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/184.svg" alt="Folie 184" style="width: auto; height: auto;">`
  )
}

function _423(md) {
  return (
    md`#### Bl. 185. *Der Rautenkranz*
  Diese Ähnlichkeit ist etwas stärker als in 183, obwohl die Rauten klein sind. Die Untersuchung der Linien ergibt, dass man das Muster auch den Kreuzwellen 173 bis 175 anreihen könnte, da es aus drei Wellenzügen mit rechteckigen Wellen besteht. Diese treten aber so wenig hervor, dass keinerlei anschauliche Ähnlichkeit mit jenen vorhanden ist, sodass es besser erschien, 185 besonders zu behandeln.`
  )
}

function _424(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/185.svg" alt="Folie 185" style="width: auto; height: auto;">`
  )
}

function _425(md) {
  return (
    md`#### Bl. 186. *Der Fisch, schmal*`
  )
}

function _426(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/186.svg" alt="Folie 186" style="width: auto; height: auto;">`
  )
}

function _427(md) {
  return (
    md`#### Bl. 187. *Der Fisch, breit*
  Beide Muster entstehen aus langgezogenen Rauten, welche früher (Bl. 62) Fische genannt wurden. Die von 186 sind sehr schlank und ergeben ein entsprechendes Muster; die von 187 sind bei gleicher Länge erheblich breiter. Eine genaue Betrachtung der Form lässt das Verhältnis klar erkennen.`
  )
}

function _428(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/187.svg" alt="Folie 187" style="width: auto; height: auto;">`
  )
}

function _429(md) {
  return (
    md`#### Bl. 188. *Der Brillant, schmal*`
  )
}

function _430(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/188.svg" alt="Folie 188" style="width: auto; height: auto;">`
  )
}

function _431(md) {
  return (
    md`#### Bl. 189. *Der Brillant, breit*`
  )
}

function _432(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/189.svg" alt="Folie 189" style="width: auto; height: auto;">`
  )
}

function _433(md) {
  return (
    md`#### Bl. 190. *Der Brillant, reich*
  Während 188 von zwei verdrehten regelmäßigen Sechsecken gebildet wird, enthält 189 zwei halbregelmäßige Sechsecke, die ein erheblich bunteres Linienspiel ergeben. Die Erzeuger von 190 sind endlich vier regelmäßige Dreiecke, welche die Form beinahe sprengen. Schon in 188 treten neben den Sechsecken Dreiecke auf, sodass das Gesamtmuster an den Dreisechs erinnert. In 190 sind die Dreiecke bei reichem Linienspiel bereits so groß geworden, dass sie den Sechsecken fast gleichwertig erscheinen und dadurch ein besonders interessantes Gesamtmuster ergeben. Es erscheint beim flüchtigen Hinblicken einfach, und erst die genaue Betrachtung lässt die reizvolle Mannigfaltigkeit erkennen.`
  )
}

function _434(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/190.svg" alt="Folie 190" style="width: auto; height: auto;">`
  )
}

function _435(md) {
  return (
    md`## Vierte Mappe
  #### Drehlinge der Dreiecke 3 bis 5
  Mit den Tafeln 191–240. Leipzig, Unesma, 1925`
  )
}

function _436(md) {
  return (
    md`#### Allgemeines
  Die regelmäßigen Vielecke besitzen außer ihren Spiegellinien noch einen Drehpunkt, der im Mittelpunkt des Vielecks liegt und um den eine sovielzählige Drehung besteht, als das Vieleck Ecken oder Seiten hat. Demgemäß ist zunächst das Dreieck ein dreizähliger Drehling.

  Man kann nun ebenso wie bisher in einem aus *n²* Teildreiecken zusammengesetzten Dreieck eine Knotenlinie als Thema wählen und sie zu einem Muster entwickeln, mit dem Unterschiede, dass man statt der Spiegelung die Drehung betätigt. Das Thema kommt dadurch in noch zwei Lagen, sodass eine Form aus drei Linien entsteht, die wie üblich wiederholt wird und so eine unbegrenzte Ebene mit ihrem Muster erfüllt.

  Diese drei Linien bilden einen Drehling. Im Allgemeinen entsteht die gleiche Form aus dem entsprechenden Spiegeling, wenn man in diesem jede zweite Linie von den sechsen, aus denen er besteht, fortlässt. Hat der Spiegeling wegen symmetrischer Lage des Themas nur drei Linien, so ist er vom Drehling nicht verschieden.

  Das Fortlassen jeder zweiten Linie kann auf zwei Arten erfolgen. Es entstehen dabei zwei Drehlinge, welche spiegelgleich sind. Man darf nicht glauben, dass man diese beiden Muster erhält, wenn man das Thema einmal rechtsherum und einmal linksherum dreht; auf solche Weise entstehen nur gleiche Formen. Vielmehr entsteht die zweite Form aus einer anderen Knotenlinie, welche der ersten spiegelgleich ist. Da aber beide Formen bis auf den Drehsinn gleich sind, sind sie nicht beide abgebildet, sondern nur eine von ihnen. Will man zu ihr die zweite, spiegelgleiche Form sehen, so braucht man das Blatt nur umzuwenden. Dadurch spart man fast die Hälfte der Zeichnungen. In dem Falle, wo das Thema selbst symmetrisch liegt, sodass der zugehörige Spiegeling nur drei Linien hat und dem entsprechenden Drehling gleich ist, zeigt dieser keinen Drehsinn. Dann gibt es auch keine gegenläufige Form, weil das Thema mit seinem Spiegelbild zusammenfällt.`
  )
}

function _437(md) {
  return (
    md`Bei der Paarung zweier Drehlinge zu einem zusammengesetzten Muster geben die beiden Drehlinge mit entgegengesetzter Drehung mit einem gegebenen zweiten Drehling zwei wesentlich verschiedene Muster, denen man ihre Entstehung aus so nahe verwandten Teilmustern nicht ansehen kann. Man muss also die zwei Blätter einmal wie gewöhnlich aufeinanderlegen und das andere Mal eines umwenden. Hierbei stimmen die seitlichen Grenzen des Blattes nicht mehr, und man muss durch waagerechte Verschiebungen die richtige Stelle suchen. Man merkt sich, wie die Knoten der Gesamtdreiecke im Muster liegen, lässt diese aufeinanderfallen und hat dann die richtige Lage. Nennt man *a₁ a₂* die beiden gegenläufigen Formen des ersten, *b₁ b₂* die des zweiten Musters, so sind die vier Paare *a₁b₁*, *a₁b₂*, *a₂b₁*, *a₂b₂* möglich. Von diesen sind zwei ganz verschieden, die beiden anderen sind ihre Spiegelbilder. Es genügt also meist, nur die zwei zu betrachten, die entstehen, wenn man eines der beiden Blätter bei unveränderter Lage des anderen Blattes recht und umgewendet betätigt.

  In der bisherigen Schmuckkunst finden sich Drehlinge viel seltener als Spiegelinge, und zwar nur solche einfachster Art. In noch viel höherem Maße, als dies bei den Spiegelingen der Fall war, treten hier neue, bisher nie gesehene Formen auf, die durch ihre ungewohnte Gesetzlichkeit hohe Schönheitswerte entwickeln. Hat man sich einige Zeit mit ihnen beschäftigt, so kostet es ein wenig Mühe, sich von ihnen zu den schlichteren Spiegelingen zurückzufinden.`
  )
}

function _438(md) {
  return (
    md`Bei der Paarung zweier Drehlinge zu einem zusammengesetzten Muster geben die beiden Drehlinge mit entgegengesetzter Drehung mit einem gegebenen zweiten Drehling zwei wesentlich verschiedene Muster, denen man ihre Entstehung aus so nahe verwandten Teilmustern nicht ansehen kann. Man muss also die zwei Blätter einmal wie gewöhnlich aufeinanderlegen und das andere Mal eines umwenden. Hierbei stimmen die seitlichen Grenzen des Blattes nicht mehr, und man muss durch waagerechte Verschiebungen die richtige Stelle suchen. Man merkt sich, wie die Knoten der Gesamtdreiecke im Muster liegen, lässt diese aufeinanderfallen und hat dann die richtige Lage. Nennt man *a₁ a₂* die beiden gegenläufigen Formen des ersten, *b₁ b₂* die des zweiten Musters, so sind die vier Paare *a₁b₁*, *a₁b₂*, *a₂b₁*, *a₂b₂* möglich. Von diesen sind zwei ganz verschieden, die beiden anderen sind ihre Spiegelbilder. Es genügt also meist, nur die zwei zu betrachten, die entstehen, wenn man eines der beiden Blätter bei unveränderter Lage des anderen Blattes recht und umgewendet betätigt.

  In der bisherigen Schmuckkunst finden sich Drehlinge viel seltener als Spiegelinge, und zwar nur solche einfachster Art. In noch viel höherem Maße, als dies bei den Spiegelingen der Fall war, treten hier neue, bisher nie gesehene Formen auf, die durch ihre ungewohnte Gesetzlichkeit hohe Schönheitswerte entwickeln. Hat man sich einige Zeit mit ihnen beschäftigt, so kostet es ein wenig Mühe, sich von ihnen zu den schlichteren Spiegelingen zurückzufinden.`
  )
}

function _439(md) {
  return (
    md`#### Beschreibung der Muster
  Die Drehlinge der beiden ersten Dreiecke sind von den Spiegelingen nicht verschieden, da alle Knotenlinien in ihnen symmetrisch liegen. Sie sind deshalb nicht nochmals abgebildet worden. Will man aus methodischen Gründen Vollständigkeit, so sind die Blätter Nr. 1 bis 4 hier zunächst einzuschalten. Auch die Knotenlinien des dritten Dreiecks sind noch vielfach symmetrisch; doch treten hier bereits unter den 8 Mustern drei selbständige Drehlinge auf. Da, wie eben erwähnt, diese eigentlich je zwei verschiedene Muster darstellen, ist die genaue Anzahl der Muster 11.`
  )
}

function _440(md) {
  return (
    md`## Drittes Dreieck`
  )
}

function _441(md) {
  return (
    md`#### Bl. 191. *Das Netz*`
  )
}

function _442(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/191.svg" alt="Folie 191" style="width: auto; height: auto;">`
  )
}

function _443(md) {
  return (
    md`#### Bl. 192. *Der Teilstrich*`
  )
}

function _444(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/192.svg" alt="Folie 192" style="width: auto; height: auto;">`
  )
}

function _445(md) {
  return (
    md`#### Bl. 193. *Der Sechsstern*`
  )
}

function _446(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/193.svg" alt="Folie 193" style="width: auto; height: auto;">`
  )
}

function _447(md) {
  return (
    md`#### Bl. 194. *Das Sechseck*`
  )
}

function _448(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/194.svg" alt="Folie 194" style="width: auto; height: auto;">`
  )
}

function _449(md) {
  return (
    md`#### Bl. 195. *Das Rautennetz*
  Die Muster 191 bis 195 sind von den Spiegelingen Nr. 5 bis 9 der ersten Mappe nicht verschieden; wegen der Beschreibung kann also auf das 1. Beiheft [S. 22–24], verwiesen werden. Sie wurden hier nochmals abgebildet, weil sie mit den folgenden echten Drehlingen neue zusammengesetzte Muster ergeben und daher besser unmittelbar zur Hand sind.`
  )
}

function _450(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/195.svg" alt="Folie 195" style="width: auto; height: auto;">`
  )
}

function _451(md) {
  return (
    md`#### Bl. 196. *Der Dreistern*
  Dieser Drehling stammt vom überschobenen Sechseck Nr. 11. Man achte darauf, wie sich je 6 Sterne zu einem sechszähligen Drehling ordnen, der mit seinen Nachbarn durch je zwei gemeinsame Sterne zusammenhängt.`
  )
}

function _452(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/196.svg" alt="Folie 196" style="width: auto; height: auto;">`
  )
}

function _453(md) {
  return (
    md`#### Bl. 197. *Das laufende Dreieck*
  Auch hier ist das Zusammengehen von je 6 in einem Kreise liegenden Dreiecken kennzeichnend. Das Muster stammt vom überschobenen Dreieck Nr. 10, indem je eines der beiden Dreiecke des Spiegelings verschwindet.`
  )
}

function _454(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/197.svg" alt="Folie 197" style="width: auto; height: auto;">`
  )
}

function _455(md) {
  return (
    md`#### Bl. 198. *Der verschränkte Sechsstern*
  Dieser bereits recht verwickelt aussehende Drehling löst sich in lauter Sechssterne mit langen Strahlen auf, die sich gegenseitig schneiden und so die gestachelten Dreiecke hervorbringen, die sich dem Auge aufdrängen.

  Nr. 196, 197, 198 sind ungewohnte, vermutlich ganz neue Muster.`
  )
}

function _456(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/198.svg" alt="Folie 198" style="width: auto; height: auto;">`
  )
}

function _457(md) {
  return (
    md`#### Verbindungen
  Die 11 einfachen Muster geben 55 Paare, 165 Dreier usw. und insgesamt über 2000 Verbindungen. Von diesen sind die aus Nr. 191 bis 195 gebildeten bereits aus der ersten Mappe bekannt. Neu sind die 3 × 8 = 24 Paare aus jenen mit Nr. 196 bis 198 sowie die 6 aus diesen und ihren Umkehrungen entstehenden Paare. Jeder dieser 30 zweifachen Drehlinge bringt beim Beschauen eine frohe Überraschung hervor.`
  )
}

function _458(md) {
  return (
    md`## Viertes Dreieck`
  )
}

function _459(md) {
  return (
    md`#### Bl. 199. *Das Netz*`
  )
}

function _460(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/199.svg" alt="Folie 199" style="width: auto; height: auto;">`
  )
}

function _461(md) {
  return (
    md`#### Bl. 200. *Der Teilstrich*
  Auf den ersten Blick erscheint es, als müsste der halb so lange Strich, der zwei benachbarte Knoten verbindet, ein einfacheres Muster ergeben. Tatsächlich stammt es auch von diesem kurzen Strich ab; durch die Wiederholung in den benachbarten Dreiecken setzt sich aber überall ein zweiter kurzer Strich daran, sodass das gezeichnete Muster entsteht.`
  )
}

function _462(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/200.svg" alt="Folie 200" style="width: auto; height: auto;">`
  )
}

function _463(md) {
  return (
    md`#### Bl. 201. *Der kleine Sechsstern*
  Für dies Muster gilt dieselbe Bemerkung mit den erforderlichen kleinen Änderungen.`
  )
}

function _464(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/201.svg" alt="Folie 201" style="width: auto; height: auto;">`
  )
}

function _465(md) {
  return (
    md`#### Bl. 202. *Der große Sechsstern*
  Die Arme sind hier in zweiter Lage.`
  )
}

function _466(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/202.svg" alt="Folie 202" style="width: auto; height: auto;">`
  )
}

function _467(md) {
  return (
    md`#### Bl. 203. *Das Sechseck*`
  )
}

function _468(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/203.svg" alt="Folie 203" style="width: auto; height: auto;">`
  )
}

function _469(md) {
  return (
    md`#### Bl. 204. *Das gestachelte Sechseck*`
  )
}

function _470(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/204.svg" alt="Folie 204" style="width: auto; height: auto;">`
  )
}

function _471(md) {
  return (
    md`#### Bl. 205. *Das Dreieck*
  Man achte auf den besonderen Reiz, den dies einfache Muster dadurch hat, dass sich überall die Dreiecke zu Sechsergruppen verbinden.

  Alle Muster von 199 bis 205 zeigen noch keinen Drehsinn.`
  )
}

function _472(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/205.svg" alt="Folie 205" style="width: auto; height: auto;">`
  )
}

function _473(md) {
  return (
    md`#### Bl. 206. *Das laufende Dreieck*
  Dies ist das erste Muster mit Drehsinn. Auch hier lassen sich überall je 6 Dreiecke zu Sechsergruppen zusammenschauen wie bei 205; diese erweisen sich aber gleichfalls als Drehlinge und ergeben dadurch ungewohntere Wirkungen.`
  )
}

function _474(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/206.svg" alt="Folie 206" style="width: auto; height: auto;">`
  )
}

function _475(md) {
  return (
    md`#### Bl. 207. *Das kleine Rad*
  Die kurzen Striche geben einerseits Sechsergruppen, die wie die Brenner eines Feuerrades geordnet sind, andererseits gegenläufige Dreiergruppen.`
  )
}

function _476(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/207.svg" alt="Folie 207" style="width: auto; height: auto;">`
  )
}

function _477(md) {
  return (
    md`#### Bl. 208. *Das mittlere Rad*
  Hier lassen sich die gleichen Ordnungen erkennen, nur sind die Speichen länger.`
  )
}

function _478(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/208.svg" alt="Folie 208" style="width: auto; height: auto;">`
  )
}

function _479(md) {
  return (
    md`#### Bl. 209. *Das große Rad*
  Ebenso.`
  )
}

function _480(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/209.svg" alt="Folie 209" style="width: auto; height: auto;">`
  )
}

function _481(md) {
  return (
    md`#### Bl. 210. *Das doppelte Rad*
  Der Name kennzeichnet die Besonderheit dieses Musters.`
  )
}

function _482(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/210.svg" alt="Folie 210" style="width: auto; height: auto;">`
  )
}

function _483(md) {
  return (
    md`#### Bl. 211. *Der schiefe Sechsstern, klein*
  Vermöge der Drehung sind die Strahlen in interessanter Weise verschränkt, ohne sich zu kreuzen.`
  )
}

function _484(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/211.svg" alt="Folie 211" style="width: auto; height: auto;">`
  )
}

function _485(md) {
  return (
    md`#### Bl. 212. *Der schiefe Sechsstern, groß*
  Auch dieses verwickeltere Muster besteht aus Sechssternen; hier kreuzen sich aber die Strahlen, sodass gestachelte Dreiecke entstehen.`
  )
}

function _486(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/212.svg" alt="Folie 212" style="width: auto; height: auto;">`
  )
}

function _487(md) {
  return (
    md`#### Bl. 213. *Das verschränkte Rad*
  Das Muster schließt sich an 207 bis 209, nur sind auch hier die Speichen so lang geworden, dass sie sich mehrfach kreuzen.`
  )
}

function _488(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/213.svg" alt="Folie 213" style="width: auto; height: auto;">`
  )
}

function _489(md) {
  return (
    md`#### Verbindungen
  Die Anzahl der Paare, Dreier usw. ist so groß, dass sie nicht einzeln erwähnt werden können. Man versäume nicht, bei jedem Paar, wo beide Blätter einen Drehsinn haben, die oben beschriebene Umkehrung eines der Blätter vorzunehmen. Es ist sehr überraschend, wie ungemein verschieden solche Verbindungen aus gleichen Elementen ausfallen.`
  )
}

function _490(md) {
  return (
    md`## Fünftes Dreieck`
  )
}

function _491(md) {
  return (
    md`#### Bl. 214. *Das Netz*`
  )
}

function _492(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/214.svg" alt="Folie 214" style="width: auto; height: auto;">`
  )
}

function _493(md) {
  return (
    md`#### Bl. 215. *Der mittlere Teilstrich*`
  )
}

function _494(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/215.svg" alt="Folie 215" style="width: auto; height: auto;">`
  )
}

function _495(md) {
  return (
    md`#### Bl. 216. *Der doppelte Teilstrich*`
  )
}

function _496(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/216.svg" alt="Folie 216" style="width: auto; height: auto;">`
  )
}

function _497(md) {
  return (
    md`#### Bl. 217. *Der kleine Sechsstern*`
  )
}

function _498(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/217.svg" alt="Folie 217" style="width: auto; height: auto;">`
  )
}

function _499(md) {
  return (
    md`#### Bl. 218. *Der große Sechsstern*`
  )
}

function _500(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/218.svg" alt="Folie 218" style="width: auto; height: auto;">`
  )
}

function _501(md) {
  return (
    md`#### Bl. 219. *Der ungleicharmige Sechsstern*`
  )
}

function _502(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/219.svg" alt="Folie 219" style="width: auto; height: auto;">`
  )
}

function _503(md) {
  return (
    md`#### Bl. 220. *Das Dreieck*`
  )
}

function _504(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/220.svg" alt="Folie 220" style="width: auto; height: auto;">`
  )
}

function _505(md) {
  return (
    md`#### Bl. 221. *Das Sechseck*
  Alle diese Muster 214 bis 221 zeigen keinen Drehsinn.`
  )
}

function _506(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/221.svg" alt="Folie 221" style="width: auto; height: auto;">`
  )
}

function _507(md) {
  return (
    md`#### Bl. 222. *Das kleine Rad*
  Hier fangen die Drehlinge an.`
  )
}

function _508(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/222.svg" alt="Folie 222" style="width: auto; height: auto;">`
  )
}

function _509(md) {
  return (
    md`#### Bl. 223. *Das kleine Rad in zweiter Lage*
  Die Radform ist etwas schwer zu erkennen, da sie sich als Sechseck mit halben Seiten darstellt.`
  )
}

function _510(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/223.svg" alt="Folie 223" style="width: auto; height: auto;">`
  )
}

function _511(md) {
  return (
    md`#### Bl. 224. *Das kleine Rad in dritter Lage*`
  )
}

function _512(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/224.svg" alt="Folie 224" style="width: auto; height: auto;">`
  )
}

function _513(md) {
  return (
    md`#### Bl. 225. *Das mittlere Rad in erster Lage*`
  )
}

function _514(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/225.svg" alt="Folie 225" style="width: auto; height: auto;">`
  )
}

function _515(md) {
  return (
    md`#### Bl. 226. *Das mittlere Rad in zweiter Lage*`
  )
}

function _516(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/226.svg" alt="Folie 226" style="width: auto; height: auto;">`
  )
}

function _517(md) {
  return (
    md`#### Bl. 227. *Das mittlere Rad in dritter Lage*`
  )
}

function _518(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/227.svg" alt="Folie 227" style="width: auto; height: auto;">`
  )
}

function _519(md) {
  return (
    md`#### Bl. 228. *Das große Rad*`
  )
}

function _520(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/228.svg" alt="Folie 228" style="width: auto; height: auto;">`
  )
}

function _521(md) {
  return (
    md`#### Bl. 229. *Das doppelte Rad, klein*`
  )
}

function _522(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/229.svg" alt="Folie 229" style="width: auto; height: auto;">`
  )
}

function _523(md) {
  return (
    md`#### Bl. 230. *Das doppelte Rad, groß*`
  )
}

function _524(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/230.svg" alt="Folie 230" style="width: auto; height: auto;">`
  )
}

function _525(md) {
  return (
    md`#### Bl. 231. *Das doppelte Rad, verschoben*`
  )
}

function _526(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/231.svg" alt="Folie 231" style="width: auto; height: auto;">`
  )
}

function _527(md) {
  return (
    md`#### Bl. 232. *Der kleine Sechsstern*`
  )
}

function _528(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/232.svg" alt="Folie 232" style="width: auto; height: auto;">`
  )
}

function _529(md) {
  return (
    md`#### Bl. 233. *Der mittlere Sechsstern*`
  )
}

function _530(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/233.svg" alt="Folie 233" style="width: auto; height: auto;">`
  )
}

function _531(md) {
  return (
    md`#### Bl. 234. *Der große Sechsstern, verschränkt*`
  )
}

function _532(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/234.svg" alt="Folie 234" style="width: auto; height: auto;">`
  )
}

function _533(md) {
  return (
    md`#### Bl. 235. *Der große Sechsstern, mehrfach verschränkt*`
  )
}

function _534(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/235.svg" alt="Folie 235" style="width: auto; height: auto;">`
  )
}

function _535(md) {
  return (
    md`#### Bl. 236. *Das laufende Dreieck, klein*`
  )
}

function _536(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/236.svg" alt="Folie 236" style="width: auto; height: auto;">`
  )
}

function _537(md) {
  return (
    md`#### Bl. 237. *Das laufende Dreieck, groß*`
  )
}

function _538(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/237.svg" alt="Folie 237" style="width: auto; height: auto;">`
  )
}

function _539(md) {
  return (
    md`#### Bl. 238. *Der kleine Drudenfuß*`
  )
}

function _540(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/238.svg" alt="Folie 238" style="width: auto; height: auto;">`
  )
}

function _541(md) {
  return (
    md`#### Bl. 239. *Der mittlere Drudenfuß*`
  )
}

function _542(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/239.svg" alt="Folie 239" style="width: auto; height: auto;">`
  )
}

function _543(md) {
  return (
    md`#### Bl. 240. *Der große Drudenfuß*`
  )
}

function _544(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/240.svg" alt="Folie 240" style="width: auto; height: auto;">`
  )
}

function _545(md) {
  return (
    md`#### Verbindungen
  Auch hier kann nur auf die große Mannigfaltigkeit und Neuheit der aus zwei, drei usw. einfachen Mustern entstehenden Verbindungen hingewiesen werden. Drehlinge im Dreiecknetz finden sich in der bisherigen Schmuckkunst nur ganz selten, sodass hier unerschöpfliche Neuheiten erzeugt werden können.`
  )
}

function _546(md) {
  return (
    md`## Fünfte Mappe
  #### Drehlinge der Quadrate 3 bis 4
  Mit den Tafeln 241–283. Leipzig, Unesma, 1925`
  )
}

function _547(md) {
  return (
    md`#### Allgemeines
  Für die quadratischen Drehlinge gelten die gleichen Betrachtungen, wie sie für die der Dreiecke im vorigen Heft dargelegt wurden. Wenn die Themalinie in sich ein Spiegeling ist, so ist das entsprechende Drehungsmuster von dem des Spiegelings nicht verschieden; im anderen Falle entstehen Drehlinge, und zwar jedesmal zwei, die spiegelbildlich verschieden sind. Hier wird immer nur je eines dargestellt, da man das andere zu sehen bekommt, wenn man das Blatt von der Rückseite betrachtet.

  Da das erste und zweite Quadrat keinen Drehling entstehen lässt, so sind die entsprechenden Blätter fortgefallen; sie sind von denen der zweiten Mappe nicht verschieden.

  Auch hier sind die meisten Formen, namentlich die zusammengesetzten, bisher unbekannt gewesen. Doch verdient erwähnt zu werden, dass das uralte *Hakenkreuz* in die Klasse der quadratischen Drehlinge gehört. Im Übrigen genügen die nachfolgenden, sorgsam gewählten Namen, um die Muster zu kennzeichnen.`
  )
}

function _548(md) {
  return (
    md`## Drittes Quadrat`
  )
}

function _549(md) {
  return (
    md`#### Bl. 241. *Das Netz*`
  )
}

function _550(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/241.svg" alt="Folie 241" style="width: auto; height: auto;">`
  )
}

function _551(md) {
  return (
    md`#### Bl. 242. *Der Teilstrich*`
  )
}

function _552(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/242.svg" alt="Folie 242" style="width: auto; height: auto;">`
  )
}

function _553(md) {
  return (
    md`#### Bl. 243. *Der kleine Vierstern, zweite Lage*`
  )
}

function _554(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/243.svg" alt="Folie 243" style="width: auto; height: auto;">`
  )
}

function _555(md) {
  return (
    md`#### Bl. 244. *Der große Vierstern, erste Lage*`
  )
}

function _556(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/244.svg" alt="Folie 244" style="width: auto; height: auto;">`
  )
}

function _557(md) {
  return (
    md`#### Bl. 245. *Der große Vierstern, zweite Lage*`
  )
}

function _558(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/245.svg" alt="Folie 245" style="width: auto; height: auto;">`
  )
}

function _559(md) {
  return (
    md`#### Bl. 246. *Das Quadrat, erste Lage*`
  )
}

function _560(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/246.svg" alt="Folie 246" style="width: auto; height: auto;">`
  )
}

function _561(md) {
  return (
    md`#### Bl. 247. *Das Quadrat, zweite Lage*`
  )
}

function _562(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/247.svg" alt="Folie 247" style="width: auto; height: auto;">`
  )
}

function _563(md) {
  return (
    md`#### Bl. 248. *Das laufende Quadrat*`
  )
}

function _564(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/248.svg" alt="Folie 248" style="width: auto; height: auto;">`
  )
}

function _565(md) {
  return (
    md`#### Bl. 249. *Das kleine Rad*`
  )
}

function _566(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/249.svg" alt="Folie 249" style="width: auto; height: auto;">`
  )
}

function _567(md) {
  return (
    md`#### Bl. 250. *Das doppelte Rad*`
  )
}

function _568(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/250.svg" alt="Folie 250" style="width: auto; height: auto;">`
  )
}

function _569(md) {
  return (
    md`#### Bl. 251. *Der schiefe Vierstern, klein*`
  )
}

function _570(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/251.svg" alt="Folie 251" style="width: auto; height: auto;">`
  )
}

function _571(md) {
  return (
    md`#### Bl. 252. *Der schiefe Vierstern, groß*`
  )
}

function _572(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/252.svg" alt="Folie 252" style="width: auto; height: auto;">`
  )
}

function _573(md) {
  return (
    md`#### Bl. 253. *Der verschränkte Vierstern, klein*`
  )
}

function _574(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/253.svg" alt="Folie 253" style="width: auto; height: auto;">`
  )
}

function _575(md) {
  return (
    md`#### Bl. 254. *Der verschränkte Vierstern, groß*`
  )
}

function _576(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/254.svg" alt="Folie 254" style="width: auto; height: auto;">`
  )
}

function _577(md) {
  return (
    md`#### Bl. 255. *Der Drudenfuß*`
  )
}

function _578(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/255.svg" alt="Folie 255" style="width: auto; height: auto;">`
  )
}

function _579(md) {
  return (
    md`## Viertes Quadrat`
  )
}

function _580(md) {
  return (
    md`#### Bl. 256. *Das Netz*`
  )
}

function _581(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/256.svg" alt="Folie 256" style="width: auto; height: auto;">`
  )
}

function _582(md) {
  return (
    md`#### Bl. 257. *Der Teilstrich*`
  )
}

function _583(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/257.svg" alt="Folie 257" style="width: auto; height: auto;">`
  )
}

function _584(md) {
  return (
    md`#### Bl. 258. *Der Teilstrich, zweite Stellung*
  Obwohl hier das Thema senkrecht zur Quadratseite steht und nicht in ihr liegt, wie bei 257, fällt doch das Muster ganz gleich aus, nur in anderer Stellung, und hat daher den gleichen Namen erhalten.`
  )
}

function _585(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/258.svg" alt="Folie 258" style="width: auto; height: auto;">`
  )
}

function _586(md) {
  return (
    md`#### Bl. 259. *Der kleine Vierstern, Mittelstellung*`
  )
}

function _587(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/259.svg" alt="Folie 259" style="width: auto; height: auto;">`
  )
}

function _588(md) {
  return (
    md`#### Bl. 260. *Der kleine Vierstern, Eckstellung*
  Diese beiden Muster sehen gleich aus und unterscheiden sich nur durch die Stelle, die sie im Quadrat einnehmen.`
  )
}

function _589(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/260.svg" alt="Folie 260" style="width: auto; height: auto;">`
  )
}

function _590(md) {
  return (
    md`#### Bl. 261. *Der kleine Vierstern, zweite Lage, Mittelstellung*`
  )
}

function _591(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/261.svg" alt="Folie 261" style="width: auto; height: auto;">`
  )
}

function _592(md) {
  return (
    md`#### Bl. 262. *Der kleine Vierstern, zweite Lage, Eckstellung*
  Es ist dasselbe Verhältnis wie bei 259, 260.`
  )
}

function _593(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/262.svg" alt="Folie 262" style="width: auto; height: auto;">`
  )
}

function _594(md) {
  return (
    md`#### Bl. 263. *Das Quadrat, Mittelstellung*`
  )
}

function _595(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/263.svg" alt="Folie 263" style="width: auto; height: auto;">`
  )
}

function _596(md) {
  return (
    md`#### Bl. 264. *Das Quadrat, Eckstellung*
  Wie 259, 260 und 261, 262. Hiermit enden die Spiegelinge.`
  )
}

function _597(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/264.svg" alt="Folie 264" style="width: auto; height: auto;">`
  )
}

function _598(md) {
  return (
    md`#### Bl. 265. *Das laufende Quadrat*`
  )
}

function _599(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/265.svg" alt="Folie 265" style="width: auto; height: auto;">`
  )
}

function _600(md) {
  return (
    md`#### Bl. 266. *Das kleine Rad, Mittelstellung*`
  )
}

function _601(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/266.svg" alt="Folie 266" style="width: auto; height: auto;">`
  )
}

function _602(md) {
  return (
    md`#### Bl. 267. *Das kleine Rad, Eckstellung*`
  )
}

function _603(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/267.svg" alt="Folie 267" style="width: auto; height: auto;">`
  )
}

function _604(md) {
  return (
    md`#### Bl. 268. *Das große Rad, Eckstellung*`
  )
}

function _605(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/268.svg" alt="Folie 268" style="width: auto; height: auto;">`
  )
}

function _606(md) {
  return (
    md`#### Bl. 269. *Das große Rad, Mittelstellung*`
  )
}

function _607(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/269.svg" alt="Folie 269" style="width: auto; height: auto;">`
  )
}

function _608(md) {
  return (
    md`#### Bl. 270. *Das doppelte Rad, klein*`
  )
}

function _609(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/270.svg" alt="Folie 270" style="width: auto; height: auto;">`
  )
}

function _610(md) {
  return (
    md`#### Bl. 271. *Das doppelte Rad, groß*`
  )
}

function _611(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/271.svg" alt="Folie 271" style="width: auto; height: auto;">`
  )
}

function _612(md) {
  return (
    md`#### Bl. 272. *Der schiefe Vierstern, klein, Mittelstellung*`
  )
}

function _613(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/272.svg" alt="Folie 272" style="width: auto; height: auto;">`
  )
}

function _614(md) {
  return (
    md`#### Bl. 273. *Der schiefe Vierstern, klein, Eckstellung*`
  )
}

function _615(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/273.svg" alt="Folie 273" style="width: auto; height: auto;">`
  )
}

function _616(md) {
  return (
    md`#### Bl. 274. *Der schiefe Vierstern, groß*`
  )
}

function _617(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/274.svg" alt="Folie 274" style="width: auto; height: auto;">`
  )
}

function _618(md) {
  return (
    md`#### Bl. 275. *Der verschränkte Vierstern, klein*`
  )
}

function _619(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/275.svg" alt="Folie 275" style="width: auto; height: auto;">`
  )
}

function _620(md) {
  return (
    md`#### Bl. 276. *Der verschränkte Vierstern, mittel*`
  )
}

function _621(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/276.svg" alt="Folie 276" style="width: auto; height: auto;">`
  )
}

function _622(md) {
  return (
    md`#### Bl. 277. *Der verschränkte Vierstern, groß*`
  )
}

function _623(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/277.svg" alt="Folie 277" style="width: auto; height: auto;">`
  )
}

function _624(md) {
  return (
    md`#### Bl. 278. *Der Drudenfuß, klein*`
  )
}

function _625(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/278.svg" alt="Folie 278" style="width: auto; height: auto;">`
  )
}

function _626(md) {
  return (
    md`#### Bl. 279. *Der Drudenfuß, mittel*`
  )
}

function _627(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/279.svg" alt="Folie 279" style="width: auto; height: auto;">`
  )
}

function _628(md) {
  return (
    md`#### Bl. 280. *Der Drudenfuß, groß*`
  )
}

function _629(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/280.svg" alt="Folie 280" style="width: auto; height: auto;">`
  )
}

function _630(md) {
  return (
    md`#### Bl. 281. *Der verschränkte Drudenfuß, klein*`
  )
}

function _631(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/281.svg" alt="Folie 281" style="width: auto; height: auto;">`
  )
}

function _632(md) {
  return (
    md`#### Bl. 282. *Der verschränkte Drudenfuß, mittel*`
  )
}

function _633(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/282.svg" alt="Folie 282" style="width: auto; height: auto;">`
  )
}

function _634(md) {
  return (
    md`#### Bl. 283. *Der verschränkte Drudenfuß, groß*`
  )
}

function _635(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/283.svg" alt="Folie 283" style="width: auto; height: auto;">`
  )
}

function _636(md) {
  return (
    md`## Sechste Mappe
  #### Drehlinge der Sechsecke 2 bis 3
  Mit den Tafeln 284–338. Leipzig, Unesma, 1925`
  )
}

function _637(md) {
  return (
    md`Von den drei Netzen der regelmäßigen Vielecke ist das des Sechsecks das verwickeltste und daher am wenigsten bekannte. Gilt Letzteres schon für den geläufigeren Fall der Spiegelinge, so macht es sich noch sehr viel mehr geltend bei den an sich selteneren und schwierigeren Drehlingen. So habe ich immer wieder feststellen können, dass Muster mit solchen schon in den einfachsten Fällen mit dem Reiz neuartiger Überraschung auf den Beschauer wirken. Die Formenwelt der Drehlinge des Sechsecknetzes wird daher zum allergrößten Teil hier zum ersten Male erschlossen, und ich war bisher der Einzige gewesen, dem ein vollständiger Einblick in diesen überreichen Garten der Schönheit gegönnt gewesen war. Nunmehr ist er der Allgemeinheit zugänglich gemacht.

  Wie schon bei den sechseckigen Spiegelingen festgestellt worden war, ist die Mannigfaltigkeit der Knotenlinien und damit die der Muster so groß, dass die Darstellung der Einzelfälle sich auf das zweite und dritte Sechseck hat beschränken müssen. Die des vierten würden allein eine Mappe überreichlich füllen. Es bedingt dies den Vorteil, dass das Einarbeiten in die neue Welt bis zu ihrer Beherrschung ganz erheblich erleichtert wird. Überlegt man, dass bereits beim dritten Sechseck bis zu sechs Abwandlungen einer typischen Grundform, z. B. des „Drudenfußes“, auftreten, von denen jede ihre besonderen Formeigenschaften hat, so erkennt man, dass man sich ohne genaue Kenntnis der einfacheren Gebiete in den höheren rettungslos verlieren müsste.

  In der nachfolgenden Einzelbeschreibung der Muster habe ich mich vielfach darauf beschränken können, den kennzeichnenden Namen anzugeben. Dieser ist stets so gewählt, dass er auf eine Haupteigenschaft des Musters hinweist; er kann natürlich keine erschöpfende Bezeichnung sein. Liegt doch der Reiz und Wert dieser Muster gerade in der Mannigfaltigkeit der anschaulichen Gesetze, die schon in den einfachen Mustern, viel mehr aber noch in den Verbindungen zur Geltung kommen.`
  )
}

function _638(md) {
  return (
    md`## Die Drehlinge des zweiten Sechsecks`
  )
}

function _639(md) {
  return (
    md`#### Bl. 284. *Das Netz*`
  )
}

function _640(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/284.svg" alt="Folie 284" style="width: auto; height: auto;">`
  )
}

function _641(md) {
  return (
    md`#### Bl. 285. *Das Dreiecknetz*`
  )
}

function _642(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/285.svg" alt="Folie 285" style="width: auto; height: auto;">`
  )
}

function _643(md) {
  return (
    md`#### Bl. 286. *Das Dreisechsnetz*`
  )
}

function _644(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/286.svg" alt="Folie 286" style="width: auto; height: auto;">`
  )
}

function _645(md) {
  return (
    md`#### Bl. 287. *Das Sechseck*`
  )
}

function _646(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/287.svg" alt="Folie 287" style="width: auto; height: auto;">`
  )
}

function _647(md) {
  return (
    md`#### Bl. 288. *Der Weinspitz*`
  )
}

function _648(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/288.svg" alt="Folie 288" style="width: auto; height: auto;">`
  )
}

function _649(md) {
  return (
    md`#### Bl. 289. *Der Sechsstern*`
  )
}

function _650(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/289.svg" alt="Folie 289" style="width: auto; height: auto;">`
  )
}

function _651(md) {
  return (
    md`#### Bl. 290. *Der Dreistern*
  Hiermit schließen die Spiegelformen ab.`
  )
}

function _652(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/290.svg" alt="Folie 290" style="width: auto; height: auto;">`
  )
}

function _653(md) {
  return (
    md`#### Bl. 291. *Das Rad*`
  )
}

function _654(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/291.svg" alt="Folie 291" style="width: auto; height: auto;">`
  )
}

function _655(md) {
  return (
    md`#### Bl. 292. *Der laufende Dreistern*
  Die Anordnung der Dreisterne in 290 ergibt einen Spiegeling, die in 292 dagegen einen Drehling. Dies ist im Namen zum Ausdruck gebracht.`
  )
}

function _656(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/292.svg" alt="Folie 292" style="width: auto; height: auto;">`
  )
}

function _657(md) {
  return (
    md`#### Bl. 293. *Der verschränkte Dreistern*`
  )
}

function _658(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/293.svg" alt="Folie 293" style="width: auto; height: auto;">`
  )
}

function _659(md) {
  return (
    md`#### Bl. 294. *Der verbundene Dreistern, klein*
  Das Muster besteht aus verschränkten Dreisternen, deren Strahlen in derselben Linie liegen, sodass sie sich gegenseitig verlängern.`
  )
}

function _660(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/294.svg" alt="Folie 294" style="width: auto; height: auto;">`
  )
}

function _661(md) {
  return (
    md`#### Bl. 295. *Der verbundene Dreistern, groß*`
  )
}

function _662(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/295.svg" alt="Folie 295" style="width: auto; height: auto;">`
  )
}

function _663(md) {
  return (
    md`#### Bl. 296. *Der verbundene Drudenfuß*
  Auch hier treffen sich die Linien der benachbarten Drudenfüße ohne Winkel, sodass sie ununterbrochene Gerade bilden.`
  )
}

function _664(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/296.svg" alt="Folie 296" style="width: auto; height: auto;">`
  )
}

function _665(md) {
  return (
    md`#### Verbindungen
  Die 13 Muster des zweiten Sechsecks ergeben zunächst 78 Zweier. Da aber 6 von ihnen Drehlinge sind, welche untereinander je zwei nicht nur im Drehsinn, sondern im Aufbau verschiedene Muster ergeben, so vermehrt sich die Anzahl um 15 auf 93.

  Unter den Verbindungen sind besonders wirksam die, bei welchen die Linien des einen Musters sich an die des anderen anschließen, d. h. die einen der beiden Knotenpunkte in gleicher Lage haben. Denn dieser Zusammenhang bezeugt eine engere Gesetzlichkeit und damit eine einleuchtende Schönheit.

  Der großen Anzahl der Zweier entspricht die noch viel größere der Dreier, zumal dieselben drei Drehlinge je nach ihrem Drehsinn vier wesentlich verschiedene Muster ergeben. Es muss daher auf eine Kennzeichnung im Einzelnen verzichtet werden. Die eigene Anschauung ist gegenüber diesen neuartigen Formen ebenso notwendig wie reizvoll.`
  )
}

function _666(md) {
  return (
    md`## Die Drehlinge des dritten Sechsecks`
  )
}

function _667(md) {
  return (
    md`#### Bl. 297. *Das Netz*`
  )
}

function _668(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/297.svg" alt="Folie 297" style="width: auto; height: auto;">`
  )
}

function _669(md) {
  return (
    md`#### Bl. 298. *Der Bindestrich*`
  )
}

function _670(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/298.svg" alt="Folie 298" style="width: auto; height: auto;">`
  )
}

function _671(md) {
  return (
    md`#### Bl. 299. *Der quere Bindestrich*`
  )
}

function _672(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/299.svg" alt="Folie 299" style="width: auto; height: auto;">`
  )
}

function _673(md) {
  return (
    md`#### Bl. 300. *Der Dreistern, erste Lage*`
  )
}

function _674(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/300.svg" alt="Folie 300" style="width: auto; height: auto;">`
  )
}

function _675(md) {
  return (
    md`#### Bl. 301. *Der Dreistern, zweite Lage*
  Es ist bemerkenswert zu sehen, wie die sehr ähnliche Form aus einer ganz anders liegenden Themalinie entsteht.`
  )
}

function _676(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/301.svg" alt="Folie 301" style="width: auto; height: auto;">`
  )
}

function _677(md) {
  return (
    md`#### Bl. 302. *Der Sechsstern, klein*`
  )
}

function _678(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/302.svg" alt="Folie 302" style="width: auto; height: auto;">`
  )
}

function _679(md) {
  return (
    md`#### Bl. 303. *Der Sechsstern, groß*`
  )
}

function _680(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/303.svg" alt="Folie 303" style="width: auto; height: auto;">`
  )
}

function _681(md) {
  return (
    md`#### Bl. 304. *Das Dreieck, klein*`
  )
}

function _682(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/304.svg" alt="Folie 304" style="width: auto; height: auto;">`
  )
}

function _683(md) {
  return (
    md`#### Bl. 305. *Das Dreieck, groß*`
  )
}

function _684(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/305.svg" alt="Folie 305" style="width: auto; height: auto;">`
  )
}

function _685(md) {
  return (
    md`#### Bl. 306. *Das Sechseck, klein*`
  )
}

function _686(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/306.svg" alt="Folie 306" style="width: auto; height: auto;">`
  )
}

function _687(md) {
  return (
    md`#### Bl. 307. *Das Sechseck, groß*`
  )
}

function _688(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/307.svg" alt="Folie 307" style="width: auto; height: auto;">`
  )
}

function _689(md) {
  return (
    md`#### Bl. 308. *Der Weinspitz*
  Hiermit schließen die Spiegelformen.`
  )
}

function _690(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/308.svg" alt="Folie 308" style="width: auto; height: auto;">`
  )
}

function _691(md) {
  return (
    md`#### Bl. 309. *Das laufende Sechseck*`
  )
}

function _692(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/309.svg" alt="Folie 309" style="width: auto; height: auto;">`
  )
}

function _693(md) {
  return (
    md`#### Bl. 310. *Der laufende Weinspitz*`
  )
}

function _694(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/310.svg" alt="Folie 310" style="width: auto; height: auto;">`
  )
}

function _695(md) {
  return (
    md`#### Bl. 311. *Das Rad, klein, eng*`
  )
}

function _696(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/311.svg" alt="Folie 311" style="width: auto; height: auto;">`
  )
}

function _697(md) {
  return (
    md`#### Bl. 312. *Das Rad, klein, mittel*`
  )
}

function _698(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/312.svg" alt="Folie 312" style="width: auto; height: auto;">`
  )
}

function _699(md) {
  return (
    md`#### Bl. 313. *Das Rad, klein, weit*`
  )
}

function _700(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/313.svg" alt="Folie 313" style="width: auto; height: auto;">`
  )
}

function _701(md) {
  return (
    md`#### Bl. 314. *Das Rad, mittel*`
  )
}

function _702(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/314.svg" alt="Folie 314" style="width: auto; height: auto;">`
  )
}

function _703(md) {
  return (
    md`#### Bl. 315. *Das Rad, groß, eng*`
  )
}

function _704(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/315.svg" alt="Folie 315" style="width: auto; height: auto;">`
  )
}

function _705(md) {
  return (
    md`#### Bl. 316. *Das Rad, groß, weit*`
  )
}

function _706(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/316.svg" alt="Folie 316" style="width: auto; height: auto;">`
  )
}

function _707(md) {
  return (
    md`#### Bl. 317. *Das Rad, doppelt, klein*`
  )
}

function _708(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/317.svg" alt="Folie 317" style="width: auto; height: auto;">`
  )
}

function _709(md) {
  return (
    md`#### Bl. 318. *Das Rad, doppelt, groß*`
  )
}

function _710(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/318.svg" alt="Folie 318" style="width: auto; height: auto;">`
  )
}

function _711(md) {
  return (
    md`#### Bl. 319. *Der laufende Dreistern, klein*`
  )
}

function _712(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/319.svg" alt="Folie 319" style="width: auto; height: auto;">`
  )
}

function _713(md) {
  return (
    md`#### Bl. 320. *Der laufende Dreistern, mittel*`
  )
}

function _714(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/320.svg" alt="Folie 320" style="width: auto; height: auto;">`
  )
}

function _715(md) {
  return (
    md`#### Bl. 321. *Der laufende Dreistern, groß*`
  )
}

function _716(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/321.svg" alt="Folie 321" style="width: auto; height: auto;">`
  )
}

function _717(md) {
  return (
    md`#### Bl. 322. *Der verschränkte Dreistern, erste Form*`
  )
}

function _718(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/322.svg" alt="Folie 322" style="width: auto; height: auto;">`
  )
}

function _719(md) {
  return (
    md`#### Bl. 323. *Der verschränkte Dreistern, zweite Form*`
  )
}

function _720(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/323.svg" alt="Folie 323" style="width: auto; height: auto;">`
  )
}

function _721(md) {
  return (
    md`#### Bl. 324. *Der verschränkte Dreistern, dritte Form*`
  )
}

function _722(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/324.svg" alt="Folie 324" style="width: auto; height: auto;">`
  )
}

function _723(md) {
  return (
    md`#### Bl. 325. *Der verschränkte Dreistern, vierte Form*`
  )
}

function _724(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/325.svg" alt="Folie 325" style="width: auto; height: auto;">`
  )
}

function _725(md) {
  return (
    md`#### Bl. 326. *Der verschränkte Dreistern, fünfte Form*`
  )
}

function _726(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/326.svg" alt="Folie 326" style="width: auto; height: auto;">`
  )
}

function _727(md) {
  return (
    md`#### Bl. 327. *Der verschränkte Dreistern, sechste Form*
  Alle Muster 322 bis 327 entstehen aus einer Themalinie, die von einer Ecke des Sechsecks nach einem der auf der anderen Seite liegenden Knotenpunkte führt.`
  )
}

function _728(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/327.svg" alt="Folie 327" style="width: auto; height: auto;">`
  )
}

function _729(md) {
  return (
    md`#### Bl. 328. *Der laufende Sechsstern*`
  )
}

function _730(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/328.svg" alt="Folie 328" style="width: auto; height: auto;">`
  )
}

function _731(md) {
  return (
    md`#### Bl. 329. *Das gestachelte Sechseck, erste Form*`
  )
}

function _732(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/329.svg" alt="Folie 329" style="width: auto; height: auto;">`
  )
}

function _733(md) {
  return (
    md`#### Bl. 330. *Das gestachelte Sechseck, zweite Form*`
  )
}

function _734(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/330.svg" alt="Folie 330" style="width: auto; height: auto;">`
  )
}

function _735(md) {
  return (
    md`#### Bl. 331. *Das gestachelte Sechseck, dritte Form*`
  )
}

function _736(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/331.svg" alt="Folie 331" style="width: auto; height: auto;">`
  )
}

function _737(md) {
  return (
    md`#### Bl. 332. *Das gestachelte Sechseck, vierte Form*`
  )
}

function _738(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/332.svg" alt="Folie 332" style="width: auto; height: auto;">`
  )
}

function _739(md) {
  return (
    md`#### Bl. 333. *Der Drudenfuß, erste Form*`
  )
}

function _740(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/333.svg" alt="Folie 333" style="width: auto; height: auto;">`
  )
}

function _741(md) {
  return (
    md`#### Bl. 334. *Der Drudenfuß, zweite Form*`
  )
}

function _742(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/334.svg" alt="Folie 334" style="width: auto; height: auto;">`
  )
}

function _743(md) {
  return (
    md`#### Bl. 335. *Der Drudenfuß, dritte Form*`
  )
}

function _744(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/335.svg" alt="Folie 335" style="width: auto; height: auto;">`
  )
}

function _745(md) {
  return (
    md`#### Bl. 336. *Der Drudenfuß, vierte Form*`
  )
}

function _746(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/336.svg" alt="Folie 336" style="width: auto; height: auto;">`
  )
}

function _747(md) {
  return (
    md`#### Bl. 337. *Der Drudenfuß, fünfte Form*`
  )
}

function _748(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/337.svg" alt="Folie 337" style="width: auto; height: auto;">`
  )
}

function _749(md) {
  return (
    md`#### Bl. 338. *Der Drudenfuß, sechste Form*`
  )
}

function _750(htl) {
  return (
    htl.html`<img src="https://die-welt-der-formen.de/assets/338.svg" alt="Folie 338" style="width: auto; height: auto;">`
  )
}

function _751(md) {
  return (
    md`#### Verbindungen
  Die Bemerkungen über die Zweier, Dreier usw. des zweiten Sechsecks gelten mit mehrfachem Gewicht für die des dritten. Die 42 Muster mit 30 Drehlingen ergeben 861 + 435 = 1296 Paare, die fast alle neu sind und daher anschaulich studiert werden müssen. Bei der systematischen Durchsicht arbeitet man die ersten 12, welche keinen Drehsinn haben, zunächst vollständig durch, weil man hier das Blatt nicht umzuwenden hat. Von Nr. 309 ab ergibt jedes Paar durch Umwenden eines der Blätter je zwei Muster.`
  )
}

function _752(md) {
  return (
    md`#### Schlussbemerkung
  Mit den Drehlingen des Sechsecks, die eine Fülle schönster Muster von absoluter Neuheit bringen, wird die Darstellung der einfachsten Formen abgeschlossen, die sich aus den drei regelmäßigen Netzen bilden. Es wurde schon erwähnt, dass durch Vergrößerung der Teilvielecke jede der sechs Reihen sich unbegrenzt erweitern lässt. Da das Grundsätzliche für die regelmäßige Erzeugung der entsprechenden Muster aber durch Beschreibung und Anschauung jedem zugänglich gemacht worden ist, macht es keine Schwierigkeit, die sechs Reihen bis zu jedem beliebigen Punkt weiterzuführen.

  Außer dem hier benutzten einfachsten Fall, die Teilvielecke aus den nächstliegenden Knotenpunkten elementar aufzubauen, gibt es aber noch eine allgemeinere Methode, solche Teilvielecke zu erzeugen und mit ihnen restlos die Ebene zu füllen. Sie besteht darin, dass man irgendwelche zwei Knoten des Netzes verbindet und diese Linie zu einem regelmäßigen Drei-, Vier- oder Sechseck ergänzt. Mit den so entstehenden Vielecken kann man jedesmal die Ebene restlos eindecken. Wenn man dann durch Verbindung irgendwelcher Knoten innerhalb des Vielecks sich eine Themalinie gibt und sie gesetzlich vervielfältigt, erhält man entsprechende Muster. Da diese Teilvielecke zwar sämtlich Drehungen, dagegen nur in verhältnismäßig wenigen Fällen Spiegelungen enthalten, bestehen die hier erzeugten Muster vorwiegend aus Drehlingen.`
  )
}

function _753(md) {
  return (
    md`Ich behalte mir vor, diesen Andeutungen gemäß eine geordnete Darstellung der so gekennzeichneten Fälle auszuarbeiten und werde sie seinerzeit der Öffentlichkeit bekanntgeben.

  Auch die Beschränkung, dass die Endpunkte der Themalinie *innerhalb* des Teilvielecks liegen sollen, kann man fallen lassen und erhält entsprechend neue Muster.

  Endlich sei noch folgender allgemeiner Hinweis gegeben. Jedes Muster, dem eines der drei regelmäßigen Netze zugrunde liegt, kann ohne Verlust an Schönheit, ja oft unter erheblichem Gewinn, auf andere, weniger regelmäßige Netze übertragen werden. Der anschaulichste Fall ist der, dass das neue Netz eine *perspektivische* Umgestaltung des gegebenen ist. Dann bleiben alle Geraden gerade, und nur die Längenverhältnisse erfahren Änderungen. Da uns perspektivische Verzerrungen aus täglicher Erfahrung geläufig sind, bleiben uns die umgestalteten Muster leicht verständlich. Es ist im höchsten Maße belehrend, sich die verschiedenen Stufen der Verzerrung je nach der gemachten Voraussetzung vorzuführen.`
  )
}

function _754(md) {
  return (
    md`Da bei dem ersten Fall das Muster in der Ebene bleibt, kann gefragt werden, wie man verfahren muss, um ein Muster auf eine räumliche Fläche, z. B. die Oberfläche eines Kruges, zu übertragen. Hier dient als allgemeiner Grundsatz, dass die Geraden des Musters sich in *kürzeste Linien* auf der Fläche umwandeln. Man gewinnt eine Anschauung hierfür, wenn man sich das Muster auf einem Gummituch ausgeführt und nun dieses Tuch faltenlos über die vorgelegte Form gespannt denkt.

  Da aber diese Betrachtung bereits in den dreifältigen Raum hinausführt, so muss es hier mit der Andeutung sein Bewenden haben.`
  )
}

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
  main.variable(observer()).define(["htl"], _13);
  main.variable(observer()).define(["md"], _14);
  main.variable(observer()).define(["md"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer()).define(["md"], _18);
  main.variable(observer()).define(["htl"], _19);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer()).define(["md"], _21);
  main.variable(observer()).define(["htl"], _22);
  main.variable(observer()).define(["md"], _23);
  main.variable(observer()).define(["htl"], _24);
  main.variable(observer()).define(["md"], _25);
  main.variable(observer()).define(["htl"], _26);
  main.variable(observer()).define(["md"], _27);
  main.variable(observer()).define(["md"], _28);
  main.variable(observer()).define(["htl"], _29);
  main.variable(observer()).define(["md"], _30);
  main.variable(observer()).define(["htl"], _31);
  main.variable(observer()).define(["md"], _32);
  main.variable(observer()).define(["htl"], _33);
  main.variable(observer()).define(["md"], _34);
  main.variable(observer()).define(["htl"], _35);
  main.variable(observer()).define(["md"], _36);
  main.variable(observer()).define(["md"], _37);
  main.variable(observer()).define(["htl"], _38);
  main.variable(observer()).define(["md"], _39);
  main.variable(observer()).define(["htl"], _40);
  main.variable(observer()).define(["md"], _41);
  main.variable(observer()).define(["htl"], _42);
  main.variable(observer()).define(["md"], _43);
  main.variable(observer()).define(["htl"], _44);
  main.variable(observer()).define(["md"], _45);
  main.variable(observer()).define(["htl"], _46);
  main.variable(observer()).define(["md"], _47);
  main.variable(observer()).define(["htl"], _48);
  main.variable(observer()).define(["md"], _49);
  main.variable(observer()).define(["htl"], _50);
  main.variable(observer()).define(["md"], _51);
  main.variable(observer()).define(["htl"], _52);
  main.variable(observer()).define(["md"], _53);
  main.variable(observer()).define(["md"], _54);
  main.variable(observer()).define(["md"], _55);
  main.variable(observer()).define(["htl"], _56);
  main.variable(observer()).define(["md"], _57);
  main.variable(observer()).define(["htl"], _58);
  main.variable(observer()).define(["md"], _59);
  main.variable(observer()).define(["htl"], _60);
  main.variable(observer()).define(["md"], _61);
  main.variable(observer()).define(["htl"], _62);
  main.variable(observer()).define(["htl"], _63);
  main.variable(observer()).define(["htl"], _64);
  main.variable(observer()).define(["md"], _65);
  main.variable(observer()).define(["htl"], _66);
  main.variable(observer()).define(["md"], _67);
  main.variable(observer()).define(["htl"], _68);
  main.variable(observer()).define(["md"], _69);
  main.variable(observer()).define(["htl"], _70);
  main.variable(observer()).define(["md"], _71);
  main.variable(observer()).define(["htl"], _72);
  main.variable(observer()).define(["md"], _73);
  main.variable(observer()).define(["htl"], _74);
  main.variable(observer()).define(["htl"], _75);
  main.variable(observer()).define(["md"], _76);
  main.variable(observer()).define(["htl"], _77);
  main.variable(observer()).define(["md"], _78);
  main.variable(observer()).define(["htl"], _79);
  main.variable(observer()).define(["md"], _80);
  main.variable(observer()).define(["htl"], _81);
  main.variable(observer()).define(["md"], _82);
  main.variable(observer()).define(["htl"], _83);
  main.variable(observer()).define(["htl"], _84);
  main.variable(observer()).define(["md"], _85);
  main.variable(observer()).define(["htl"], _86);
  main.variable(observer()).define(["md"], _87);
  main.variable(observer()).define(["md"], _88);
  main.variable(observer()).define(["md"], _89);
  main.variable(observer()).define(["htl"], _90);
  main.variable(observer()).define(["md"], _91);
  main.variable(observer()).define(["htl"], _92);
  main.variable(observer()).define(["md"], _93);
  main.variable(observer()).define(["htl"], _94);
  main.variable(observer()).define(["md"], _95);
  main.variable(observer()).define(["htl"], _96);
  main.variable(observer()).define(["md"], _97);
  main.variable(observer()).define(["htl"], _98);
  main.variable(observer()).define(["md"], _99);
  main.variable(observer()).define(["htl"], _100);
  main.variable(observer()).define(["md"], _101);
  main.variable(observer()).define(["htl"], _102);
  main.variable(observer()).define(["md"], _103);
  main.variable(observer()).define(["htl"], _104);
  main.variable(observer()).define(["md"], _105);
  main.variable(observer()).define(["md"], _106);
  main.variable(observer()).define(["htl"], _107);
  main.variable(observer()).define(["md"], _108);
  main.variable(observer()).define(["htl"], _109);
  main.variable(observer()).define(["md"], _110);
  main.variable(observer()).define(["htl"], _111);
  main.variable(observer()).define(["md"], _112);
  main.variable(observer()).define(["htl"], _113);
  main.variable(observer()).define(["md"], _114);
  main.variable(observer()).define(["htl"], _115);
  main.variable(observer()).define(["md"], _116);
  main.variable(observer()).define(["htl"], _117);
  main.variable(observer()).define(["md"], _118);
  main.variable(observer()).define(["htl"], _119);
  main.variable(observer()).define(["md"], _120);
  main.variable(observer()).define(["htl"], _121);
  main.variable(observer()).define(["md"], _122);
  main.variable(observer()).define(["md"], _123);
  main.variable(observer()).define(["htl"], _124);
  main.variable(observer()).define(["md"], _125);
  main.variable(observer()).define(["htl"], _126);
  main.variable(observer()).define(["md"], _127);
  main.variable(observer()).define(["htl"], _128);
  main.variable(observer()).define(["md"], _129);
  main.variable(observer()).define(["htl"], _130);
  main.variable(observer()).define(["md"], _131);
  main.variable(observer()).define(["htl"], _132);
  main.variable(observer()).define(["md"], _133);
  main.variable(observer()).define(["md"], _134);
  main.variable(observer()).define(["htl"], _135);
  main.variable(observer()).define(["md"], _136);
  main.variable(observer()).define(["htl"], _137);
  main.variable(observer()).define(["md"], _138);
  main.variable(observer()).define(["htl"], _139);
  main.variable(observer()).define(["md"], _140);
  main.variable(observer()).define(["htl"], _141);
  main.variable(observer()).define(["md"], _142);
  main.variable(observer()).define(["htl"], _143);
  main.variable(observer()).define(["md"], _144);
  main.variable(observer()).define(["htl"], _145);
  main.variable(observer()).define(["md"], _146);
  main.variable(observer()).define(["htl"], _147);
  main.variable(observer()).define(["md"], _148);
  main.variable(observer()).define(["htl"], _149);
  main.variable(observer()).define(["md"], _150);
  main.variable(observer()).define(["htl"], _151);
  main.variable(observer()).define(["md"], _152);
  main.variable(observer()).define(["htl"], _153);
  main.variable(observer()).define(["md"], _154);
  main.variable(observer()).define(["htl"], _155);
  main.variable(observer()).define(["md"], _156);
  main.variable(observer()).define(["htl"], _157);
  main.variable(observer()).define(["md"], _158);
  main.variable(observer()).define(["md"], _159);
  main.variable(observer()).define(["md"], _160);
  main.variable(observer()).define(["md"], _161);
  main.variable(observer()).define(["md"], _162);
  main.variable(observer()).define(["md"], _163);
  main.variable(observer()).define(["htl"], _164);
  main.variable(observer()).define(["md"], _165);
  main.variable(observer()).define(["htl"], _166);
  main.variable(observer()).define(["md"], _167);
  main.variable(observer()).define(["md"], _168);
  main.variable(observer()).define(["md"], _169);
  main.variable(observer()).define(["htl"], _170);
  main.variable(observer()).define(["md"], _171);
  main.variable(observer()).define(["htl"], _172);
  main.variable(observer()).define(["md"], _173);
  main.variable(observer()).define(["htl"], _174);
  main.variable(observer()).define(["md"], _175);
  main.variable(observer()).define(["htl"], _176);
  main.variable(observer()).define(["md"], _177);
  main.variable(observer()).define(["htl"], _178);
  main.variable(observer()).define(["md"], _179);
  main.variable(observer()).define(["md"], _180);
  main.variable(observer()).define(["md"], _181);
  main.variable(observer()).define(["htl"], _182);
  main.variable(observer()).define(["md"], _183);
  main.variable(observer()).define(["htl"], _184);
  main.variable(observer()).define(["md"], _185);
  main.variable(observer()).define(["htl"], _186);
  main.variable(observer()).define(["md"], _187);
  main.variable(observer()).define(["htl"], _188);
  main.variable(observer()).define(["md"], _189);
  main.variable(observer()).define(["htl"], _190);
  main.variable(observer()).define(["md"], _191);
  main.variable(observer()).define(["htl"], _192);
  main.variable(observer()).define(["md"], _193);
  main.variable(observer()).define(["htl"], _194);
  main.variable(observer()).define(["md"], _195);
  main.variable(observer()).define(["htl"], _196);
  main.variable(observer()).define(["md"], _197);
  main.variable(observer()).define(["htl"], _198);
  main.variable(observer()).define(["md"], _199);
  main.variable(observer()).define(["htl"], _200);
  main.variable(observer()).define(["md"], _201);
  main.variable(observer()).define(["htl"], _202);
  main.variable(observer()).define(["md"], _203);
  main.variable(observer()).define(["htl"], _204);
  main.variable(observer()).define(["md"], _205);
  main.variable(observer()).define(["htl"], _206);
  main.variable(observer()).define(["md"], _207);
  main.variable(observer()).define(["htl"], _208);
  main.variable(observer()).define(["md"], _209);
  main.variable(observer()).define(["htl"], _210);
  main.variable(observer()).define(["md"], _211);
  main.variable(observer()).define(["htl"], _212);
  main.variable(observer()).define(["md"], _213);
  main.variable(observer()).define(["htl"], _214);
  main.variable(observer()).define(["md"], _215);
  main.variable(observer()).define(["md"], _216);
  main.variable(observer()).define(["md"], _217);
  main.variable(observer()).define(["htl"], _218);
  main.variable(observer()).define(["md"], _219);
  main.variable(observer()).define(["htl"], _220);
  main.variable(observer()).define(["md"], _221);
  main.variable(observer()).define(["htl"], _222);
  main.variable(observer()).define(["md"], _223);
  main.variable(observer()).define(["htl"], _224);
  main.variable(observer()).define(["md"], _225);
  main.variable(observer()).define(["htl"], _226);
  main.variable(observer()).define(["md"], _227);
  main.variable(observer()).define(["htl"], _228);
  main.variable(observer()).define(["md"], _229);
  main.variable(observer()).define(["htl"], _230);
  main.variable(observer()).define(["md"], _231);
  main.variable(observer()).define(["htl"], _232);
  main.variable(observer()).define(["md"], _233);
  main.variable(observer()).define(["htl"], _234);
  main.variable(observer()).define(["md"], _235);
  main.variable(observer()).define(["htl"], _236);
  main.variable(observer()).define(["md"], _237);
  main.variable(observer()).define(["htl"], _238);
  main.variable(observer()).define(["md"], _239);
  main.variable(observer()).define(["htl"], _240);
  main.variable(observer()).define(["md"], _241);
  main.variable(observer()).define(["htl"], _242);
  main.variable(observer()).define(["md"], _243);
  main.variable(observer()).define(["htl"], _244);
  main.variable(observer()).define(["md"], _245);
  main.variable(observer()).define(["htl"], _246);
  main.variable(observer()).define(["md"], _247);
  main.variable(observer()).define(["htl"], _248);
  main.variable(observer()).define(["md"], _249);
  main.variable(observer()).define(["htl"], _250);
  main.variable(observer()).define(["md"], _251);
  main.variable(observer()).define(["htl"], _252);
  main.variable(observer()).define(["md"], _253);
  main.variable(observer()).define(["htl"], _254);
  main.variable(observer()).define(["md"], _255);
  main.variable(observer()).define(["htl"], _256);
  main.variable(observer()).define(["md"], _257);
  main.variable(observer()).define(["htl"], _258);
  main.variable(observer()).define(["md"], _259);
  main.variable(observer()).define(["htl"], _260);
  main.variable(observer()).define(["md"], _261);
  main.variable(observer()).define(["htl"], _262);
  main.variable(observer()).define(["md"], _263);
  main.variable(observer()).define(["htl"], _264);
  main.variable(observer()).define(["md"], _265);
  main.variable(observer()).define(["htl"], _266);
  main.variable(observer()).define(["md"], _267);
  main.variable(observer()).define(["htl"], _268);
  main.variable(observer()).define(["md"], _269);
  main.variable(observer()).define(["htl"], _270);
  main.variable(observer()).define(["md"], _271);
  main.variable(observer()).define(["htl"], _272);
  main.variable(observer()).define(["md"], _273);
  main.variable(observer()).define(["htl"], _274);
  main.variable(observer()).define(["md"], _275);
  main.variable(observer()).define(["htl"], _276);
  main.variable(observer()).define(["md"], _277);
  main.variable(observer()).define(["htl"], _278);
  main.variable(observer()).define(["md"], _279);
  main.variable(observer()).define(["htl"], _280);
  main.variable(observer()).define(["md"], _281);
  main.variable(observer()).define(["htl"], _282);
  main.variable(observer()).define(["md"], _283);
  main.variable(observer()).define(["htl"], _284);
  main.variable(observer()).define(["md"], _285);
  main.variable(observer()).define(["md"], _286);
  main.variable(observer()).define(["md"], _287);
  main.variable(observer()).define(["md"], _288);
  main.variable(observer()).define(["md"], _289);
  main.variable(observer()).define(["md"], _290);
  main.variable(observer()).define(["md"], _291);
  main.variable(observer()).define(["htl"], _292);
  main.variable(observer()).define(["md"], _293);
  main.variable(observer()).define(["htl"], _294);
  main.variable(observer()).define(["md"], _295);
  main.variable(observer()).define(["htl"], _296);
  main.variable(observer()).define(["md"], _297);
  main.variable(observer()).define(["md"], _298);
  main.variable(observer()).define(["md"], _299);
  main.variable(observer()).define(["htl"], _300);
  main.variable(observer()).define(["md"], _301);
  main.variable(observer()).define(["htl"], _302);
  main.variable(observer()).define(["md"], _303);
  main.variable(observer()).define(["htl"], _304);
  main.variable(observer()).define(["md"], _305);
  main.variable(observer()).define(["htl"], _306);
  main.variable(observer()).define(["md"], _307);
  main.variable(observer()).define(["htl"], _308);
  main.variable(observer()).define(["md"], _309);
  main.variable(observer()).define(["htl"], _310);
  main.variable(observer()).define(["md"], _311);
  main.variable(observer()).define(["htl"], _312);
  main.variable(observer()).define(["md"], _313);
  main.variable(observer()).define(["htl"], _314);
  main.variable(observer()).define(["md"], _315);
  main.variable(observer()).define(["htl"], _316);
  main.variable(observer()).define(["md"], _317);
  main.variable(observer()).define(["htl"], _318);
  main.variable(observer()).define(["md"], _319);
  main.variable(observer()).define(["htl"], _320);
  main.variable(observer()).define(["md"], _321);
  main.variable(observer()).define(["htl"], _322);
  main.variable(observer()).define(["md"], _323);
  main.variable(observer()).define(["htl"], _324);
  main.variable(observer()).define(["md"], _325);
  main.variable(observer()).define(["htl"], _326);
  main.variable(observer()).define(["md"], _327);
  main.variable(observer()).define(["htl"], _328);
  main.variable(observer()).define(["md"], _329);
  main.variable(observer()).define(["md"], _330);
  main.variable(observer()).define(["md"], _331);
  main.variable(observer()).define(["htl"], _332);
  main.variable(observer()).define(["md"], _333);
  main.variable(observer()).define(["htl"], _334);
  main.variable(observer()).define(["md"], _335);
  main.variable(observer()).define(["htl"], _336);
  main.variable(observer()).define(["md"], _337);
  main.variable(observer()).define(["htl"], _338);
  main.variable(observer()).define(["md"], _339);
  main.variable(observer()).define(["htl"], _340);
  main.variable(observer()).define(["md"], _341);
  main.variable(observer()).define(["htl"], _342);
  main.variable(observer()).define(["md"], _343);
  main.variable(observer()).define(["htl"], _344);
  main.variable(observer()).define(["md"], _345);
  main.variable(observer()).define(["htl"], _346);
  main.variable(observer()).define(["md"], _347);
  main.variable(observer()).define(["htl"], _348);
  main.variable(observer()).define(["md"], _349);
  main.variable(observer()).define(["htl"], _350);
  main.variable(observer()).define(["md"], _351);
  main.variable(observer()).define(["htl"], _352);
  main.variable(observer()).define(["md"], _353);
  main.variable(observer()).define(["htl"], _354);
  main.variable(observer()).define(["md"], _355);
  main.variable(observer()).define(["htl"], _356);
  main.variable(observer()).define(["md"], _357);
  main.variable(observer()).define(["htl"], _358);
  main.variable(observer()).define(["md"], _359);
  main.variable(observer()).define(["htl"], _360);
  main.variable(observer()).define(["md"], _361);
  main.variable(observer()).define(["htl"], _362);
  main.variable(observer()).define(["md"], _363);
  main.variable(observer()).define(["htl"], _364);
  main.variable(observer()).define(["md"], _365);
  main.variable(observer()).define(["htl"], _366);
  main.variable(observer()).define(["md"], _367);
  main.variable(observer()).define(["htl"], _368);
  main.variable(observer()).define(["md"], _369);
  main.variable(observer()).define(["htl"], _370);
  main.variable(observer()).define(["md"], _371);
  main.variable(observer()).define(["htl"], _372);
  main.variable(observer()).define(["md"], _373);
  main.variable(observer()).define(["htl"], _374);
  main.variable(observer()).define(["md"], _375);
  main.variable(observer()).define(["htl"], _376);
  main.variable(observer()).define(["md"], _377);
  main.variable(observer()).define(["htl"], _378);
  main.variable(observer()).define(["md"], _379);
  main.variable(observer()).define(["htl"], _380);
  main.variable(observer()).define(["md"], _381);
  main.variable(observer()).define(["htl"], _382);
  main.variable(observer()).define(["md"], _383);
  main.variable(observer()).define(["htl"], _384);
  main.variable(observer()).define(["md"], _385);
  main.variable(observer()).define(["htl"], _386);
  main.variable(observer()).define(["md"], _387);
  main.variable(observer()).define(["htl"], _388);
  main.variable(observer()).define(["md"], _389);
  main.variable(observer()).define(["htl"], _390);
  main.variable(observer()).define(["md"], _391);
  main.variable(observer()).define(["htl"], _392);
  main.variable(observer()).define(["md"], _393);
  main.variable(observer()).define(["htl"], _394);
  main.variable(observer()).define(["md"], _395);
  main.variable(observer()).define(["htl"], _396);
  main.variable(observer()).define(["md"], _397);
  main.variable(observer()).define(["htl"], _398);
  main.variable(observer()).define(["md"], _399);
  main.variable(observer()).define(["htl"], _400);
  main.variable(observer()).define(["md"], _401);
  main.variable(observer()).define(["htl"], _402);
  main.variable(observer()).define(["md"], _403);
  main.variable(observer()).define(["htl"], _404);
  main.variable(observer()).define(["md"], _405);
  main.variable(observer()).define(["htl"], _406);
  main.variable(observer()).define(["md"], _407);
  main.variable(observer()).define(["htl"], _408);
  main.variable(observer()).define(["md"], _409);
  main.variable(observer()).define(["htl"], _410);
  main.variable(observer()).define(["md"], _411);
  main.variable(observer()).define(["htl"], _412);
  main.variable(observer()).define(["md"], _413);
  main.variable(observer()).define(["htl"], _414);
  main.variable(observer()).define(["md"], _415);
  main.variable(observer()).define(["htl"], _416);
  main.variable(observer()).define(["md"], _417);
  main.variable(observer()).define(["htl"], _418);
  main.variable(observer()).define(["md"], _419);
  main.variable(observer()).define(["htl"], _420);
  main.variable(observer()).define(["md"], _421);
  main.variable(observer()).define(["htl"], _422);
  main.variable(observer()).define(["md"], _423);
  main.variable(observer()).define(["htl"], _424);
  main.variable(observer()).define(["md"], _425);
  main.variable(observer()).define(["htl"], _426);
  main.variable(observer()).define(["md"], _427);
  main.variable(observer()).define(["htl"], _428);
  main.variable(observer()).define(["md"], _429);
  main.variable(observer()).define(["htl"], _430);
  main.variable(observer()).define(["md"], _431);
  main.variable(observer()).define(["htl"], _432);
  main.variable(observer()).define(["md"], _433);
  main.variable(observer()).define(["htl"], _434);
  main.variable(observer()).define(["md"], _435);
  main.variable(observer()).define(["md"], _436);
  main.variable(observer()).define(["md"], _437);
  main.variable(observer()).define(["md"], _438);
  main.variable(observer()).define(["md"], _439);
  main.variable(observer()).define(["md"], _440);
  main.variable(observer()).define(["md"], _441);
  main.variable(observer()).define(["htl"], _442);
  main.variable(observer()).define(["md"], _443);
  main.variable(observer()).define(["htl"], _444);
  main.variable(observer()).define(["md"], _445);
  main.variable(observer()).define(["htl"], _446);
  main.variable(observer()).define(["md"], _447);
  main.variable(observer()).define(["htl"], _448);
  main.variable(observer()).define(["md"], _449);
  main.variable(observer()).define(["htl"], _450);
  main.variable(observer()).define(["md"], _451);
  main.variable(observer()).define(["htl"], _452);
  main.variable(observer()).define(["md"], _453);
  main.variable(observer()).define(["htl"], _454);
  main.variable(observer()).define(["md"], _455);
  main.variable(observer()).define(["htl"], _456);
  main.variable(observer()).define(["md"], _457);
  main.variable(observer()).define(["md"], _458);
  main.variable(observer()).define(["md"], _459);
  main.variable(observer()).define(["htl"], _460);
  main.variable(observer()).define(["md"], _461);
  main.variable(observer()).define(["htl"], _462);
  main.variable(observer()).define(["md"], _463);
  main.variable(observer()).define(["htl"], _464);
  main.variable(observer()).define(["md"], _465);
  main.variable(observer()).define(["htl"], _466);
  main.variable(observer()).define(["md"], _467);
  main.variable(observer()).define(["htl"], _468);
  main.variable(observer()).define(["md"], _469);
  main.variable(observer()).define(["htl"], _470);
  main.variable(observer()).define(["md"], _471);
  main.variable(observer()).define(["htl"], _472);
  main.variable(observer()).define(["md"], _473);
  main.variable(observer()).define(["htl"], _474);
  main.variable(observer()).define(["md"], _475);
  main.variable(observer()).define(["htl"], _476);
  main.variable(observer()).define(["md"], _477);
  main.variable(observer()).define(["htl"], _478);
  main.variable(observer()).define(["md"], _479);
  main.variable(observer()).define(["htl"], _480);
  main.variable(observer()).define(["md"], _481);
  main.variable(observer()).define(["htl"], _482);
  main.variable(observer()).define(["md"], _483);
  main.variable(observer()).define(["htl"], _484);
  main.variable(observer()).define(["md"], _485);
  main.variable(observer()).define(["htl"], _486);
  main.variable(observer()).define(["md"], _487);
  main.variable(observer()).define(["htl"], _488);
  main.variable(observer()).define(["md"], _489);
  main.variable(observer()).define(["md"], _490);
  main.variable(observer()).define(["md"], _491);
  main.variable(observer()).define(["htl"], _492);
  main.variable(observer()).define(["md"], _493);
  main.variable(observer()).define(["htl"], _494);
  main.variable(observer()).define(["md"], _495);
  main.variable(observer()).define(["htl"], _496);
  main.variable(observer()).define(["md"], _497);
  main.variable(observer()).define(["htl"], _498);
  main.variable(observer()).define(["md"], _499);
  main.variable(observer()).define(["htl"], _500);
  main.variable(observer()).define(["md"], _501);
  main.variable(observer()).define(["htl"], _502);
  main.variable(observer()).define(["md"], _503);
  main.variable(observer()).define(["htl"], _504);
  main.variable(observer()).define(["md"], _505);
  main.variable(observer()).define(["htl"], _506);
  main.variable(observer()).define(["md"], _507);
  main.variable(observer()).define(["htl"], _508);
  main.variable(observer()).define(["md"], _509);
  main.variable(observer()).define(["htl"], _510);
  main.variable(observer()).define(["md"], _511);
  main.variable(observer()).define(["htl"], _512);
  main.variable(observer()).define(["md"], _513);
  main.variable(observer()).define(["htl"], _514);
  main.variable(observer()).define(["md"], _515);
  main.variable(observer()).define(["htl"], _516);
  main.variable(observer()).define(["md"], _517);
  main.variable(observer()).define(["htl"], _518);
  main.variable(observer()).define(["md"], _519);
  main.variable(observer()).define(["htl"], _520);
  main.variable(observer()).define(["md"], _521);
  main.variable(observer()).define(["htl"], _522);
  main.variable(observer()).define(["md"], _523);
  main.variable(observer()).define(["htl"], _524);
  main.variable(observer()).define(["md"], _525);
  main.variable(observer()).define(["htl"], _526);
  main.variable(observer()).define(["md"], _527);
  main.variable(observer()).define(["htl"], _528);
  main.variable(observer()).define(["md"], _529);
  main.variable(observer()).define(["htl"], _530);
  main.variable(observer()).define(["md"], _531);
  main.variable(observer()).define(["htl"], _532);
  main.variable(observer()).define(["md"], _533);
  main.variable(observer()).define(["htl"], _534);
  main.variable(observer()).define(["md"], _535);
  main.variable(observer()).define(["htl"], _536);
  main.variable(observer()).define(["md"], _537);
  main.variable(observer()).define(["htl"], _538);
  main.variable(observer()).define(["md"], _539);
  main.variable(observer()).define(["htl"], _540);
  main.variable(observer()).define(["md"], _541);
  main.variable(observer()).define(["htl"], _542);
  main.variable(observer()).define(["md"], _543);
  main.variable(observer()).define(["htl"], _544);
  main.variable(observer()).define(["md"], _545);
  main.variable(observer()).define(["md"], _546);
  main.variable(observer()).define(["md"], _547);
  main.variable(observer()).define(["md"], _548);
  main.variable(observer()).define(["md"], _549);
  main.variable(observer()).define(["htl"], _550);
  main.variable(observer()).define(["md"], _551);
  main.variable(observer()).define(["htl"], _552);
  main.variable(observer()).define(["md"], _553);
  main.variable(observer()).define(["htl"], _554);
  main.variable(observer()).define(["md"], _555);
  main.variable(observer()).define(["htl"], _556);
  main.variable(observer()).define(["md"], _557);
  main.variable(observer()).define(["htl"], _558);
  main.variable(observer()).define(["md"], _559);
  main.variable(observer()).define(["htl"], _560);
  main.variable(observer()).define(["md"], _561);
  main.variable(observer()).define(["htl"], _562);
  main.variable(observer()).define(["md"], _563);
  main.variable(observer()).define(["htl"], _564);
  main.variable(observer()).define(["md"], _565);
  main.variable(observer()).define(["htl"], _566);
  main.variable(observer()).define(["md"], _567);
  main.variable(observer()).define(["htl"], _568);
  main.variable(observer()).define(["md"], _569);
  main.variable(observer()).define(["htl"], _570);
  main.variable(observer()).define(["md"], _571);
  main.variable(observer()).define(["htl"], _572);
  main.variable(observer()).define(["md"], _573);
  main.variable(observer()).define(["htl"], _574);
  main.variable(observer()).define(["md"], _575);
  main.variable(observer()).define(["htl"], _576);
  main.variable(observer()).define(["md"], _577);
  main.variable(observer()).define(["htl"], _578);
  main.variable(observer()).define(["md"], _579);
  main.variable(observer()).define(["md"], _580);
  main.variable(observer()).define(["htl"], _581);
  main.variable(observer()).define(["md"], _582);
  main.variable(observer()).define(["htl"], _583);
  main.variable(observer()).define(["md"], _584);
  main.variable(observer()).define(["htl"], _585);
  main.variable(observer()).define(["md"], _586);
  main.variable(observer()).define(["htl"], _587);
  main.variable(observer()).define(["md"], _588);
  main.variable(observer()).define(["htl"], _589);
  main.variable(observer()).define(["md"], _590);
  main.variable(observer()).define(["htl"], _591);
  main.variable(observer()).define(["md"], _592);
  main.variable(observer()).define(["htl"], _593);
  main.variable(observer()).define(["md"], _594);
  main.variable(observer()).define(["htl"], _595);
  main.variable(observer()).define(["md"], _596);
  main.variable(observer()).define(["htl"], _597);
  main.variable(observer()).define(["md"], _598);
  main.variable(observer()).define(["htl"], _599);
  main.variable(observer()).define(["md"], _600);
  main.variable(observer()).define(["htl"], _601);
  main.variable(observer()).define(["md"], _602);
  main.variable(observer()).define(["htl"], _603);
  main.variable(observer()).define(["md"], _604);
  main.variable(observer()).define(["htl"], _605);
  main.variable(observer()).define(["md"], _606);
  main.variable(observer()).define(["htl"], _607);
  main.variable(observer()).define(["md"], _608);
  main.variable(observer()).define(["htl"], _609);
  main.variable(observer()).define(["md"], _610);
  main.variable(observer()).define(["htl"], _611);
  main.variable(observer()).define(["md"], _612);
  main.variable(observer()).define(["htl"], _613);
  main.variable(observer()).define(["md"], _614);
  main.variable(observer()).define(["htl"], _615);
  main.variable(observer()).define(["md"], _616);
  main.variable(observer()).define(["htl"], _617);
  main.variable(observer()).define(["md"], _618);
  main.variable(observer()).define(["htl"], _619);
  main.variable(observer()).define(["md"], _620);
  main.variable(observer()).define(["htl"], _621);
  main.variable(observer()).define(["md"], _622);
  main.variable(observer()).define(["htl"], _623);
  main.variable(observer()).define(["md"], _624);
  main.variable(observer()).define(["htl"], _625);
  main.variable(observer()).define(["md"], _626);
  main.variable(observer()).define(["htl"], _627);
  main.variable(observer()).define(["md"], _628);
  main.variable(observer()).define(["htl"], _629);
  main.variable(observer()).define(["md"], _630);
  main.variable(observer()).define(["htl"], _631);
  main.variable(observer()).define(["md"], _632);
  main.variable(observer()).define(["htl"], _633);
  main.variable(observer()).define(["md"], _634);
  main.variable(observer()).define(["htl"], _635);
  main.variable(observer()).define(["md"], _636);
  main.variable(observer()).define(["md"], _637);
  main.variable(observer()).define(["md"], _638);
  main.variable(observer()).define(["md"], _639);
  main.variable(observer()).define(["htl"], _640);
  main.variable(observer()).define(["md"], _641);
  main.variable(observer()).define(["htl"], _642);
  main.variable(observer()).define(["md"], _643);
  main.variable(observer()).define(["htl"], _644);
  main.variable(observer()).define(["md"], _645);
  main.variable(observer()).define(["htl"], _646);
  main.variable(observer()).define(["md"], _647);
  main.variable(observer()).define(["htl"], _648);
  main.variable(observer()).define(["md"], _649);
  main.variable(observer()).define(["htl"], _650);
  main.variable(observer()).define(["md"], _651);
  main.variable(observer()).define(["htl"], _652);
  main.variable(observer()).define(["md"], _653);
  main.variable(observer()).define(["htl"], _654);
  main.variable(observer()).define(["md"], _655);
  main.variable(observer()).define(["htl"], _656);
  main.variable(observer()).define(["md"], _657);
  main.variable(observer()).define(["htl"], _658);
  main.variable(observer()).define(["md"], _659);
  main.variable(observer()).define(["htl"], _660);
  main.variable(observer()).define(["md"], _661);
  main.variable(observer()).define(["htl"], _662);
  main.variable(observer()).define(["md"], _663);
  main.variable(observer()).define(["htl"], _664);
  main.variable(observer()).define(["md"], _665);
  main.variable(observer()).define(["md"], _666);
  main.variable(observer()).define(["md"], _667);
  main.variable(observer()).define(["htl"], _668);
  main.variable(observer()).define(["md"], _669);
  main.variable(observer()).define(["htl"], _670);
  main.variable(observer()).define(["md"], _671);
  main.variable(observer()).define(["htl"], _672);
  main.variable(observer()).define(["md"], _673);
  main.variable(observer()).define(["htl"], _674);
  main.variable(observer()).define(["md"], _675);
  main.variable(observer()).define(["htl"], _676);
  main.variable(observer()).define(["md"], _677);
  main.variable(observer()).define(["htl"], _678);
  main.variable(observer()).define(["md"], _679);
  main.variable(observer()).define(["htl"], _680);
  main.variable(observer()).define(["md"], _681);
  main.variable(observer()).define(["htl"], _682);
  main.variable(observer()).define(["md"], _683);
  main.variable(observer()).define(["htl"], _684);
  main.variable(observer()).define(["md"], _685);
  main.variable(observer()).define(["htl"], _686);
  main.variable(observer()).define(["md"], _687);
  main.variable(observer()).define(["htl"], _688);
  main.variable(observer()).define(["md"], _689);
  main.variable(observer()).define(["htl"], _690);
  main.variable(observer()).define(["md"], _691);
  main.variable(observer()).define(["htl"], _692);
  main.variable(observer()).define(["md"], _693);
  main.variable(observer()).define(["htl"], _694);
  main.variable(observer()).define(["md"], _695);
  main.variable(observer()).define(["htl"], _696);
  main.variable(observer()).define(["md"], _697);
  main.variable(observer()).define(["htl"], _698);
  main.variable(observer()).define(["md"], _699);
  main.variable(observer()).define(["htl"], _700);
  main.variable(observer()).define(["md"], _701);
  main.variable(observer()).define(["htl"], _702);
  main.variable(observer()).define(["md"], _703);
  main.variable(observer()).define(["htl"], _704);
  main.variable(observer()).define(["md"], _705);
  main.variable(observer()).define(["htl"], _706);
  main.variable(observer()).define(["md"], _707);
  main.variable(observer()).define(["htl"], _708);
  main.variable(observer()).define(["md"], _709);
  main.variable(observer()).define(["htl"], _710);
  main.variable(observer()).define(["md"], _711);
  main.variable(observer()).define(["htl"], _712);
  main.variable(observer()).define(["md"], _713);
  main.variable(observer()).define(["htl"], _714);
  main.variable(observer()).define(["md"], _715);
  main.variable(observer()).define(["htl"], _716);
  main.variable(observer()).define(["md"], _717);
  main.variable(observer()).define(["htl"], _718);
  main.variable(observer()).define(["md"], _719);
  main.variable(observer()).define(["htl"], _720);
  main.variable(observer()).define(["md"], _721);
  main.variable(observer()).define(["htl"], _722);
  main.variable(observer()).define(["md"], _723);
  main.variable(observer()).define(["htl"], _724);
  main.variable(observer()).define(["md"], _725);
  main.variable(observer()).define(["htl"], _726);
  main.variable(observer()).define(["md"], _727);
  main.variable(observer()).define(["htl"], _728);
  main.variable(observer()).define(["md"], _729);
  main.variable(observer()).define(["htl"], _730);
  main.variable(observer()).define(["md"], _731);
  main.variable(observer()).define(["htl"], _732);
  main.variable(observer()).define(["md"], _733);
  main.variable(observer()).define(["htl"], _734);
  main.variable(observer()).define(["md"], _735);
  main.variable(observer()).define(["htl"], _736);
  main.variable(observer()).define(["md"], _737);
  main.variable(observer()).define(["htl"], _738);
  main.variable(observer()).define(["md"], _739);
  main.variable(observer()).define(["htl"], _740);
  main.variable(observer()).define(["md"], _741);
  main.variable(observer()).define(["htl"], _742);
  main.variable(observer()).define(["md"], _743);
  main.variable(observer()).define(["htl"], _744);
  main.variable(observer()).define(["md"], _745);
  main.variable(observer()).define(["htl"], _746);
  main.variable(observer()).define(["md"], _747);
  main.variable(observer()).define(["htl"], _748);
  main.variable(observer()).define(["md"], _749);
  main.variable(observer()).define(["htl"], _750);
  main.variable(observer()).define(["md"], _751);
  main.variable(observer()).define(["md"], _752);
  main.variable(observer()).define(["md"], _753);
  main.variable(observer()).define(["md"], _754);
  return main;
}