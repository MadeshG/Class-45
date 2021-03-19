var villan,villanImage
var superhero,superheroImage
var backgroundImg

function preload(){
villanImage=loadAnimation("E1.png","E2.png","E3.png","E4.png")
superheroImage=loadAnimation("1.png","2.png")
backgroundImg=loadImage("Background.jpg")
}

function setup() {
  createCanvas(1000,800);
 villan =createSprite(600, 600, 50, 50);
 villan.scale=2.5

 superhero = createSprite(200,600,50,50)
 villan.addAnimation("villan",villanImage)
 superhero.addAnimation("superhero", superheroImage)
}

function draw() {
  background(backgroundImg); 

  textSize(30) 
  fill ("white")
  text("Use arrow keys",400,200)
if(keyIsDown(UP_ARROW)){
  superhero.y=superhero.y-10
}
if(keyIsDown(RIGHT_ARROW)){
  superhero.x=superhero.x+10
}
if(keyIsDown(LEFT_ARROW)){
  superhero.x=superhero.x-10
}
if(keyIsDown(DOWN_ARROW)){
  superhero.y=superhero.y+10
}
function keyPressed(){


if(keyCode===87){
  villan.y=villan.y-10
}
if(keyCode=== 83){
  villan.y=villan.y+10
}
if(keyCode===65){
  villan.x=villan.x-10
}
if(keyCode===68){
  villan.x=villan.x+10
}
}
  drawSprites();
}
