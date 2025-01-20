function createMyPicture() {
    // Main white circle (base of the ball)
    let mainBall = new Circle();
    mainBall.position = [0.0, 0.0];
    mainBall.color = [1.0, 1.0, 1.0, 1.0]; // White
    mainBall.size = 60;
    g_shapesList.push(mainBall);

    // Pink pentagons - using smaller circles
    let pentagonPositions = [
        [0.0, 0.2],  // Top
        [-0.19, 0.06],  // Upper left
        [-0.12, -0.16], // Lower left
        [0.12, -0.16],  // Lower right
        [0.19, 0.06]   // Upper right
    ];

    for (let pos of pentagonPositions) {
        let pentagon = new Circle();
        pentagon.position = pos;
        pentagon.color = [1.0, 0.7, 0.85, 1.0]; // Pink
        pentagon.size = 20;
        g_shapesList.push(pentagon);
    }

    // Black connection points
    let pointPositions = [
        [0.0, 0.35],    // Top
        [-0.3, 0.2],    // Upper left
        [-0.3, -0.15],  // Lower left
        [0.0, -0.35],   // Bottom
        [0.3, -0.15],   // Lower right
        [0.3, 0.2]      // Upper right
    ];

    for (let pos of pointPositions) {
        let point = new Point();
        point.position = pos;
        point.color = [0.3, 0.3, 0.3, 1.0]; // Dark grey for visibility
        point.size = 8;
        g_shapesList.push(point);
    }
}