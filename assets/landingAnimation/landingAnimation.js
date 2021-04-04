const CANVAS_WIDTH = innerWidth;
const CANVAS_HEIGHT = innerHeight;

const SKETCH_WIDTH = CANVAS_WIDTH  + (CANVAS_WIDTH / 1.5);
const SKETCH_HEIGHT = CANVAS_HEIGHT + (CANVAS_HEIGHT / 1.5);

const SKETCH_SCALE = 40;
const SKETCH_COLS = Math.floor(SKETCH_WIDTH / SKETCH_SCALE)
const SKETCH_ROWS = Math.floor(SKETCH_HEIGHT / SKETCH_SCALE)

const TERRAIN_MAX = -100;
const TERRAIN_MIN = -400;

const TERRAIN_OFFSET_COUNT = 0.15;
const TERRAIN_SPEED = 0.075;

let terrainPoints = new Array(SKETCH_COLS);
for (let i = 0; i < terrainPoints.length; i++) {
    terrainPoints[i] = new Array(SKETCH_ROWS);
}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL);
}

let terrainMovementOffset = 0;
function draw() {
    frameRate(20)
    terrainMovementOffset -= TERRAIN_SPEED;
    let yOffset = terrainMovementOffset;
    for (let y = 0; y < SKETCH_ROWS; y++) {
        let xOffset = 0;
        for (let x = 0; x < SKETCH_COLS; x++) {
            terrainPoints[x][y] = map(noise(xOffset, yOffset), 0, 1, TERRAIN_MIN, TERRAIN_MAX);
            xOffset += TERRAIN_OFFSET_COUNT;
        }
        yOffset += TERRAIN_OFFSET_COUNT;
    }

    background('rgb(55,71,79)');
    
    noFill();
    rotateX(Math.PI/2.5);
    translate(-SKETCH_WIDTH  / 2, -SKETCH_HEIGHT / 2);

    
    for (let y = 0; y < SKETCH_ROWS - 1; y++) {
        let yTrans = map(y,0,SKETCH_COLS - 1 , 0, 1);
        stroke(`rgba(255,255,255,${yTrans})`)
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < SKETCH_COLS; x++) {
            vertex(x * SKETCH_SCALE, y * SKETCH_SCALE, terrainPoints[x][y]);
            vertex(x * SKETCH_SCALE, (y + 1) * SKETCH_SCALE, terrainPoints[x][y + 1]);
        }
        endShape();
    }
}