class Point {
    // private x: number;
    // private y: number;

    constructor(private x?: number, private y?: number) { //? is used for optional arguments
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log(`X: ${this.x}, Y: ${this.y}`)
    }
    getX() {
        return this.x;
    }
    setX(value) {
        if(value < 0) {
            throw new Error('Value cannor be less than 0.')
        }
        this.x = value;
    }
}

let point = new Point(1, 2); //tsc will infer that point is of type Point
let x = point.getX();
point.setX(10);
point.draw();
