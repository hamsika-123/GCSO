var car, wall;
var speed,weight;
var Deformation;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1350,200,60,200);
  car.velocityX=speed;
}
function draw() {
  background(0);  
  wall.shapeColor=color(80,80,80);
  
  if(car.isTouching(wall)){
    car.velocityX=0;
    Deformation=0.5*weight*speed*speed/22500;
    if(Deformation>180){
      car.shapeColor="green";
    }
  else if(Deformation<180&&Deformation>100){
    car.shapeColor="yellow";
  }
  else if(Deformation<100){
    car.shapeColor="red";
  }
  }

  car.depth=wall.depth+1;
  drawSprites();
}