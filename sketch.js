function setup() {
  // put setup code here
  createCanvas(1000, 800);
  frameRate(60);


}

function flower(x, y, size){
  fill(255,255,128);
  noStroke();
  ellipse(x, y, size, size);
  fill(255, 100, 200, 100);
  var new_size = size/2;
  ellipse(x+new_size, y, new_size, new_size);
  ellipse(x-new_size, y, new_size, new_size);
  ellipse(x, y+new_size, new_size, new_size);
  ellipse(x, y-new_size, new_size, new_size);
}

function draw() {

/* This is the first spastic shapes layout I was playing with.
  for (var z = 0; z < 255; z += 255){
      background(random(255), random(255), random(255));
  }

  for (var y = 10; y < height; y += 54){
    for (var x = 10; x < width; x += 54){
      frameRate(3);
      fill(random(255), random(255), random(255));
      stroke(random(255));
      strokeWeight(random(12));
      ellipse (x, y, 40, 40);
    }
  }

  for (var y = 10; y < height; y += 54){
    for (var x = 10; x < width; x += 54){
      frameRate(7);
      fill(x, random(255), y);
      stroke(random(255));
      strokeWeight(random(3));
      triangle(x, y, (x+30), (y-15), (x+30), (y+15));
    }
  }
*/
flower(180, 200, 200);
flower(650, 200, 100);
flower(400, 300, 80);
flower(500, 400, 50);

for (var y = 10; y < height; y += 54){
  for (var x = 10; x < width; x += 54){
    frameRate(3);
    fill(random(255), random(255), random(255));
    stroke(random(255));
    strokeWeight(random(12));
    flower (x, y, 10, 10);
  }
}

}
