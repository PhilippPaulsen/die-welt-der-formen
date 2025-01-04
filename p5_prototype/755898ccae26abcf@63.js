import define1 from "./493851ae5989f70a@398.js";

function _1(md){return(
md`## Die Welt der Formen  `
)}

function _generator(p5){return(
p5((s) => {
    let canvasSize = 320; // Default canvas size
    let squareSize = canvasSize / 5; // Central square size
    let nodes = [];
    let connections = [];
    let nodeCount = 4; // Default number of nodes
    let symmetryMode = "rotation_reflection"; // Default symmetry mode

    s.setup = () => {
        // Create a container for the canvas and controls
        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";
        s.canvas.parentElement.appendChild(container);

        s.createCanvas(canvasSize, canvasSize);
        container.appendChild(s.canvas);

        // Add Canvas Size slider
        const canvasSizeSlider = document.createElement("input");
        canvasSizeSlider.type = "range";
        canvasSizeSlider.min = 200; // Minimum canvas size
        canvasSizeSlider.max = 800; // Maximum canvas size
        canvasSizeSlider.value = canvasSize; // Default value
        canvasSizeSlider.style.margin = "10px";
        canvasSizeSlider.oninput = (e) => {
            canvasSize = parseInt(e.target.value);
            squareSize = canvasSize / 5; // Update square size
            s.resizeCanvas(canvasSize, canvasSize);
            setupNodes(); // Recalculate nodes
            s.redraw();
        };
        container.appendChild(canvasSizeSlider);

        // Add Node Count slider
        const nodeSlider = document.createElement("input");
        nodeSlider.type = "range";
        nodeSlider.min = 3; // Minimum nodes
        nodeSlider.max = 10; // Maximum nodes
        nodeSlider.value = nodeCount; // Default value
        nodeSlider.style.margin = "10px";
        nodeSlider.oninput = (e) => {
            nodeCount = parseInt(e.target.value);
            setupNodes(); // Recalculate nodes
            s.redraw();
        };
        container.appendChild(nodeSlider);

        // Add Clear button
        const clearButton = document.createElement("button");
        clearButton.textContent = "Clear";
        clearButton.style.margin = "10px";
        clearButton.onclick = () => {
            connections = [];
            s.redraw();
        };
        container.appendChild(clearButton);

        // Add Undo button
        const undoButton = document.createElement("button");
        undoButton.textContent = "Undo";
        undoButton.style.margin = "10px";
        undoButton.onclick = () => {
            if (connections.length > 0) {
                connections.pop(); // Remove the last connection
                s.redraw();
            }
        };
        container.appendChild(undoButton);

        // Initialize nodes
        setupNodes();

        // No continuous redraw
        s.noLoop();
    };

    s.draw = () => {
        s.background(255);

        // Draw border around the canvas
        s.stroke(0);
        s.strokeWeight(2); // Match the connection stroke weight
        s.noFill();
        s.rect(0, 0, canvasSize, canvasSize);

        // Draw tessellation
        drawTessellation();

        // Draw nodes
        drawNodes();

        // Draw connections
        drawConnections();
    };

    s.mousePressed = () => {
        let clickedNode = null;

        nodes.forEach((node, index) => {
            if (s.dist(s.mouseX, s.mouseY, node.x, node.y) < 10) {
                clickedNode = index + 1;
            }
        });

        if (clickedNode) handleNodeClick(clickedNode);
    };

    function setupNodes() {
        nodes = [];
        const step = squareSize / (nodeCount - 1);
        for (let i = 0; i < nodeCount; i++) {
            for (let j = 0; j < nodeCount; j++) {
                nodes.push({
                    x: s.width / 2 - squareSize / 2 + i * step,
                    y: s.height / 2 - squareSize / 2 + j * step,
                });
            }
        }
    }

    function drawTessellation() {
        const tileCount = 2; // Fixed: 2 tiles around the center (5x5 grid total)
        const tileSize = squareSize;

        for (let i = -tileCount; i <= tileCount; i++) {
            for (let j = -tileCount; j <= tileCount; j++) {
                const offsetX = i * tileSize;
                const offsetY = j * tileSize;

                s.push();
                s.translate(offsetX, offsetY);
                drawConnections(); // Draw tessellated connections
                s.pop();
            }
        }
    }

    function drawNodes() {
        nodes.forEach((node) => {
            s.fill(0);
            s.noStroke();
            s.ellipse(node.x, node.y, 8, 8);
        });
    }

    function drawConnections() {
        connections.forEach(([startId, endId]) => {
            if (!startId || !endId) return;

            const startNode = nodes[startId - 1];
            const endNode = nodes[endId - 1];

            if (!startNode || !endNode) return;

            // Draw original connection
            s.stroke(0);
            s.strokeWeight(2);
            s.line(startNode.x, startNode.y, endNode.x, endNode.y);

            if (symmetryMode === "rotation_reflection") {
                // Reflect and rotate connections
                reflectAndRotateConnections(startNode, endNode);
            }

            if (symmetryMode === "rotation") {
                rotateConnections(startNode, endNode);
            }
        });
    }

    function reflectAndRotateConnections(startNode, endNode) {
        const hStart = getHorizontalMirrorNode(startNode);
        const hEnd = getHorizontalMirrorNode(endNode);
        s.line(hStart.x, hStart.y, hEnd.x, hEnd.y);

        const vStart = getVerticalMirrorNode(startNode);
        const vEnd = getVerticalMirrorNode(endNode);
        s.line(vStart.x, vStart.y, vEnd.x, vEnd.y);

        const pStart = getPointMirrorNode(startNode);
        const pEnd = getPointMirrorNode(endNode);
        s.line(pStart.x, pStart.y, pEnd.x, pEnd.y);

        [90, 180, 270].forEach((angle) => {
            drawRotatedConnection(startNode, endNode, angle);
            drawRotatedConnection(hStart, hEnd, angle);
            drawRotatedConnection(vStart, vEnd, angle);
            drawRotatedConnection(pStart, pEnd, angle);
        });
    }

    function rotateConnections(startNode, endNode) {
        [90, 180, 270].forEach((angle) => {
            drawRotatedConnection(startNode, endNode, angle);
        });
    }

    function drawRotatedConnection(startNode, endNode, angle) {
        const rotatedStart = getRotatedNode(startNode, angle);
        const rotatedEnd = getRotatedNode(endNode, angle);
        s.line(rotatedStart.x, rotatedStart.y, rotatedEnd.x, rotatedEnd.y);
    }

    function getHorizontalMirrorNode(node) {
        const centerY = s.height / 2;
        return { x: node.x, y: centerY - (node.y - centerY) };
    }

    function getVerticalMirrorNode(node) {
        const centerX = s.width / 2;
        return { x: centerX - (node.x - centerX), y: node.y };
    }

    function getPointMirrorNode(node) {
        const centerX = s.width / 2;
        const centerY = s.height / 2;
        return { x: centerX - (node.x - centerX), y: centerY - (node.y - centerY) };
    }

    function getRotatedNode(node, angle) {
        const centerX = s.width / 2;
        const centerY = s.height / 2;
        const rad = s.radians(angle);
        const dx = node.x - centerX;
        const dy = node.y - centerY;
        return {
            x: centerX + dx * Math.cos(rad) - dy * Math.sin(rad),
            y: centerY + dx * Math.sin(rad) + dy * Math.cos(rad),
        };
    }

    function handleNodeClick(nodeId) {
        if (connections.length && connections[connections.length - 1].length === 1) {
            connections[connections.length - 1].push(nodeId);
        } else {
            connections.push([nodeId]);
        }
    return s; // Return the p5 instance
    }
})
)}

function _4(md){return(
md`#### Der Naturforscher und Nobelpreisträger Wilhelm Ostwald veröffentlichte 1922 seine Formenlehre *Die Harmonie der Formen*. Bis 1928 folgten vier Mappenwerke unter dem Titel *Die Welt der Formen*, in denen die Lehre methodisch ausformuliert wurde. Die 240 Serien von Formen, auf transparenten Blättern gedruckt, erlauben unzählige Kombinationsmöglichkeiten und stellen ein frühes Beispiel regelbasierter Programmierung im Bereich von Kunst und Design dar.
#### Ostwalds Farben- und Formlehre beeinflussten nicht nur den Werkbund, sondern auch das Bauhaus und die niederländische Kunstbewegung De Stijl. Designer wie Moholy-Nagy, Herbert Bayer oder später Vertreter der Konkreten Kunst wie Max Bill, Karl Gerstner, und besonders Hans Hinterreiter, nahmen seine Ideen begeistert auf. Dennoch ist Ostwalds Formenlehre – im Gegensatz zu seiner Farbenlehre – heute weitgehend in Vergessenheit geraten.
#### Dieses Forschungsprojekt möchte dazu beitragen, Ostwalds Formenlehre einer breiteren Öffentlichkeit zugänglich zu machen: Im Herbst 2025 erscheint eine kritische Neuauflage im Verlag Spector Books Leipzig, die auch bisher unveröffentlichte Manuskripte und Fragmente einschließt, sowie Ostwalds Arbeiten im Spannungsfeld von Wissenschaft und Kunst, Gesetzmäßigkeit und Intuition, Ornament und Figuration einordnet. Begleitend dazu lädt diese digitale Plattform (aktuell im Beta-Status) dazu ein, Ostwalds Texte, Formen und Gesetze mithilfe von interaktiven Grafiken zu entdecken.`
)}

function _5(md){return(
md`## The World of Forms  
#### The natural scientist and Nobel laureate Wilhelm Ostwald published his theory of form, *The Harmony of Forms*, in 1922. Between 1922 and 1928, he expanded on this work through four portfolios titled *The World of Forms*, where the doctrine was methodically developed. The 240 series of shapes, printed on transparent sheets, allow countless combinations and represent an early example of rule-based programming in the realm of art and design.
#### Ostwald’s theories of color and form influenced not only the Werkbund but also the Bauhaus and the Dutch art movement De Stijl. Designers such as Moholy-Nagy, Herbert Bayer, and later representatives of Concrete Art like Max Bill, Karl Gerstner, and especially Hans Hinterreiter enthusiastically adopted his ideas. Despite this, Ostwald’s theory of form—unlike his color theory—has largely fallen into obscurity today.
#### This research project aims to make Wilhelm Ostwald’s theory of form accessible to a wider audience. In the fall of 2025, a critical new edition will be published by Spector Books Leipzig, including previously unpublished manuscripts and fragments. This edition will contextualize Ostwald’s work within the intersections of science and art, lawfulness and intuition, ornament and figuration. Complementing the publication, this digital platform (currently in beta) invites users to explore Ostwald’s texts, shapes, and principles through interactive graphics.`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  const child1 = runtime.module(define1);
  main.import("p5", child1);
  main.variable(observer("viewof generator")).define("viewof generator", ["p5"], _generator);
  main.variable(observer("generator")).define("generator", ["Generators", "viewof generator"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _5);
  return main;
}
