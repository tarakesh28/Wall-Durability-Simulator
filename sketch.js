var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(30,52);
  weight=random(223,321);

  thickness=random(22,83);

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);

  wall = createSprite(1200,200,thickness,400/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0);
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
   bullet.velocityX=0;
   var deformation = 0.5*weight*speed*speed/22500;
   if(deformation>10){
    wall.shapeColor=color(255,0,0);
   }

   if(deformation<10){
    wall.shapeColor=color(0,255,0);
   }
  }

  hasCollided(bullet,wall);

  drawSprites();
}

function hasCollided(bullet,wall){
   bulletRightEdge = bullet.x + bullet.width;
   wallLeftEdge = wall.x;

   if(bulletRightEdge>=wallLeftEdge){
    return true;
   }
  else{ return false;
  }
}
