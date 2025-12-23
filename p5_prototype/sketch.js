export default function sketch(s) {
    let canvasSize = 640; // Default canvas size
    let squareSize = canvasSize / 5; // Central square size
    let nodes = [];
    let connections = [];
    let nodeCount = 4; // Default number of nodes
    let symmetryMode = "rotation_reflection"; // Default symmetry mode

    s.setup = () => {
        // Create Canvas and attach to specific container
        const c = s.createCanvas(canvasSize, canvasSize);
        c.parent("canvas-target");

        // Bind Canvas Size slider
        const canvasSizeSlider = document.getElementById("canvasSize");
        if (canvasSizeSlider) {
            canvasSizeSlider.value = canvasSize; // Sync initial value
            canvasSizeSlider.oninput = (e) => {
                canvasSize = parseInt(e.target.value);
                squareSize = canvasSize / 5; // Update square size
                s.resizeCanvas(canvasSize, canvasSize);
                setupNodes(); // Recalculate nodes
                s.redraw();
            };
        }

        // Bind Node Count slider
        const nodeSlider = document.getElementById("nodeCount");
        if (nodeSlider) {
            nodeSlider.value = nodeCount; // Sync initial value
            nodeSlider.oninput = (e) => {
                nodeCount = parseInt(e.target.value);
                setupNodes(); // Recalculate nodes
                s.redraw();
            };
        }

        // Bind Clear button
        const clearButton = document.getElementById("btnClear");
        if (clearButton) {
            clearButton.onclick = () => {
                connections = [];
                s.redraw();
            };
        }

        // Bind Undo button
        const undoButton = document.getElementById("btnUndo");
        if (undoButton) {
            undoButton.onclick = () => {
                if (connections.length > 0) {
                    connections.pop(); // Remove the last connection
                    s.redraw();
                }
            };
        }

        // Bind Random button
        const randomButton = document.getElementById("btnRandom");
        if (randomButton) {
            randomButton.onclick = addRandomConnection;
        }

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
        // Prevent interaction if click is outside canvas
        if (s.mouseX < 0 || s.mouseX > s.width || s.mouseY < 0 || s.mouseY > s.height) return;

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
}
