
  
var car, wall;
var speed,weight;
//var deformation;
function setup()
 {
  createCanvas(1000,400);
  speed=random(70,100);
  weight=random(400,1500);
  car=createSprite(100, 250, 50, 50);
  wall=createSprite(750, 250, 10, height/2);
  wall.shapeColor="black";
  car.shapeColor="red";
  car.velocityX=speed;
 }
function draw() {
  background(255,255,255); 
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
     car.velocityX=0;
     var deformation=0.5*weight*speed*speed/22509;
     
     if(deformation<180 && deformation>100)
     {
          car.shapeColor=color(225,0,0);
     }
     if(deformation<180 )
     {
      car.shapeColor=color(230,230,0);

     }
     if(deformation<100 )
     {
      car.shapeColor=color(0,225,0);

     }
  }
  drawSprites(); 
}
