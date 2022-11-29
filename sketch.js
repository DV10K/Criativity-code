function setup() {
  createCanvas(1920, 1080);
 }
 function draw() {
  background(random(0,300),random(0,300),random(0,300));
  frameRate(20)
 
 beginShape();
 for (let i = 0; i <5; i++) {
   strokeWeight(2)
   stroke(random(0,200),random(0,200),random(0,200))
   fill ('yellow');
 vertex (random(width), random(height))
 endShape(CLOSE);
   stroke(random(0,200),random(0,200),random(0,200))
   fill('red')
   vertex (random(width), random(height))
   endShape(CLOSE);
   stroke(random(0,200),random(0,200),random(0,200))
    fill('blue')
   vertex (random(width), random(height))
   endShape(CLOSE);
   stroke(random(0,200),random(0,200),random(0,200))
    fill(0,255,0)
   vertex (random(width), random(height))
   endShape(CLOSE);
    stroke(random(0,200),random(0,200),random(0,200))
    fill('purple')
   vertex (random(width), random(height))
   endShape(CLOSE);
    
 }
  }
 function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
 }