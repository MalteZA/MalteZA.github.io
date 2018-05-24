let _rows = 5;
let _cols = 10;

let _width = 1280;
let _height = 720;

function setup() {
    createCanvas(_width, _height);
}

function draw() {
    background(200);
    translate((_width / _cols / 2), (_height / _rows / 2));


    // making roads
    translate(-2,-2);
    color(255);
    fill(255);
    for (let i = 0; i < _rows; i++) {
        rect(0, _height / _rows * i, _width - (_width / _cols), 4)
    }
    for (var i = 0; i < _cols; i++) {
        rect(_width / _cols * i, 0, 4, _height - (_height / _rows));
    }
    translate(2,2);

    // Making intersections
    translate(-10, -10);
    color(0,0,255);
    fill(0,0,255);
    for (let i = 0; i < _rows; i++) {
        for (let j = 0; j < _cols; j++) {
            let x = _width / _cols * j;
            let y = _height / _rows * i;
            rect(x, y, 20, 20)
        }
    }
    translate(10,10); // end of making intersections
}
