import define1 from "./493851ae5989f70a@398.js";



function _generator(p5) {
    return (
        p5((s) => {
            let canvasSize = 640; // Default canvas size
            let squareSize = canvasSize / 5; // Central square size
            let nodes = [];
            let connections = [];
            let nodeCount = 4; // Default number of nodes
            let symmetryMode = "rotation_reflection"; // Default symmetry mode

            s.setup = () => {
                const container = document.createElement("div");
                container.style.display = "flex";
                container.style.flexDirection = "column";
                container.style.alignItems = "flex-start"; // Align to the left
                container.style.maxWidth = "320px"; // Consistent width
                s.canvas.parentElement.appendChild(container);

                s.createCanvas(canvasSize, canvasSize);
                container.appendChild(s.canvas);

                // Add Canvas Size slider
                const canvasSizeSlider = document.createElement("input");
                canvasSizeSlider.type = "range";
                canvasSizeSlider.min = 200; // Minimum canvas size
                canvasSizeSlider.max = 800; // Maximum canvas size
                canvasSizeSlider.value = canvasSize; // Default value
                canvasSizeSlider.style.width = "320px"; // Fixed width
                canvasSizeSlider.style.margin = "10px 0";
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
                nodeSlider.style.width = "320px"; // Fixed width
                nodeSlider.style.margin = "10px 0";
                nodeSlider.oninput = (e) => {
                    nodeCount = parseInt(e.target.value);
                    setupNodes(); // Recalculate nodes
                    s.redraw();
                };
                container.appendChild(nodeSlider);

                // Add Clear button
                const clearButton = document.createElement("button");
                clearButton.textContent = "Clear";
                clearButton.style.width = "320px"; // Fixed width
                clearButton.style.margin = "10px 0";
                clearButton.onclick = () => {
                    connections = [];
                    s.redraw();
                };
                container.appendChild(clearButton);

                // Add Undo button
                const undoButton = document.createElement("button");
                undoButton.textContent = "Undo";
                undoButton.style.width = "320px"; // Fixed width
                undoButton.style.margin = "10px 0";
                undoButton.onclick = () => {
                    if (connections.length > 0) {
                        connections.pop(); // Remove the last connection
                        s.redraw();
                    }
                };
                container.appendChild(undoButton);

                // Add Random button
                const randomButton = document.createElement("button");
                randomButton.textContent = "+ Random";
                randomButton.style.width = "320px"; // Fixed width
                randomButton.style.margin = "10px 0";
                randomButton.onclick = addRandomConnection;
                container.appendChild(randomButton);

                // Initialize nodes
                setupNodes();

                // Add 5 random connections on startup
                for (let i = 0; i < 5; i++) {
                    addRandomConnection();
                }

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

            function addRandomConnection() {
                if (nodes.length < 2) return; // Ensure at least two nodes
                const startId = Math.floor(Math.random() * nodes.length) + 1;
                let endId;
                do {
                    endId = Math.floor(Math.random() * nodes.length) + 1;
                } while (endId === startId); // Ensure the connection is not to the same node
                connections.push([startId, endId]);
                s.redraw();
            }

            function handleNodeClick(nodeId) {
                if (connections.length && connections[connections.length - 1].length === 1) {
                    connections[connections.length - 1].push(nodeId);
                } else {
                    connections.push([nodeId]);
                }
                s.redraw();
            }
        })
    )
}



export default function define(runtime, observer) {
    const main = runtime.module();
    const child1 = runtime.module(define1);
    main.import("p5", child1);
    main.variable(observer("viewof generator")).define("viewof generator", ["p5"], _generator);
    main.variable(observer("generator")).define("generator", ["Generators", "viewof generator"], (G, _) => G.input(_));
    return main;
}
