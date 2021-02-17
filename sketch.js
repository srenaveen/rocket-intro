var level, backgroundImage, grass, grassI, tower, towerI, rocket, atlas,fire,fireI;
function preload(){
  backgroundImage = loadImage("Back.png");
  grassI = loadImage("Grass.webp");
  towerI = loadImage("Tower.png");
  atlas = loadImage("Atlas.png");
  fireI = loadAnimation("f1.png","f2.png","f3.png","f4.png","f5.png","f6.png")
}
function setup() {
  
  createCanvas(800,600);
  grass = createSprite(300,500,1000,40);
  grass.addImage(grassI);
  tower = createSprite(200,330,100,500);
  tower.addImage(towerI);
  tower.scale = 2;
  rocket = createSprite(220,325,100,500);
  rocket.addImage(atlas);
  rocket.scale = 0.5;
  fire = createSprite(220,450,100,100);
  fire.addAnimation("fire",fireI);
  fire.scale = 1.5;
  fire.rotate;
  //fire.visible = false
}

function draw() {
  background(backgroundImage);  
  drawSprites();
  if(keyDown("space")){
    rocket.y = rocket.y-50;
  }
}