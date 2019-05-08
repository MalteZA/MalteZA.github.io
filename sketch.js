let i       = 0;
let j       = 0;
let iUp     = {bool: true};
let jUp     = {bool: true};
let cHeight = 600;
let cWidth  = 800;
let s       = "Hello!"

function setup() {
  createCanvas(cWidth, cHeight);
}

function draw() {
  background(0, 255, 255);

  fill(255);
  ellipse(i + 40, j + 40, 85, 85);

  fill(0);
  textSize(26);
  text(s, i + 2, j + 35, i + 60, j);

  i = incrementer(i, iUp, cWidth);
  j = incrementer(j, jUp, cHeight);

}

function incrementer(a, obj, limit) {
  if (obj.bool) {
    if (a <= (limit - 80)) {
      return a + 1;
    } else {
      obj.bool = false;
      return a - 1;
    }
  } else {
    if (a >= 0) {
      return a - 1;
    } else {
      obj.bool = true;
      return a + 1;
    }
  }
}
