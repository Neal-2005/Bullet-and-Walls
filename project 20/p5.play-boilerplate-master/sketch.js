var bullet,thickness,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(80,52);
  thickness=random(22,83);

  bullet1=createSprite(50, 200, 20, 10);
  bullet1.shapeColor=color("white");
  bullet2=createSprite(50, 50, 20, 10);
  bullet2.shapeColor=color("white");
  bullet3=createSprite(50, 350, 20, 10);
  bullet3.shapeColor=color("white");
  
  wall1=createSprite(500,200,thickness+27,50);
  wall1.shapeColor=color(80,80,80);
  wall2=createSprite(500,50,thickness+35,50);
  wall2.shapeColor=color(80,80,80);
  wall3=createSprite(500,350,thickness+40,50);
  wall3.shapeColor=color(80,80,80); 
  
 
  bullet1.velocityX = speed+70;
  
  bullet2.velocityX = speed+45;
   
  bullet3.velocityX = speed+37;


  
}
function draw() {
  background("black");  
  


  if (wall1.x-bullet1.x < (bullet1.width+ wall1.width)/2)
  {
    bullet1.velocityX=0;
    var damage=0.5* weight+65 * speed * speed / thickness * thickness * thickness;
    if (damage>10)
    {
      bullet1.shapeColor=color(255,0,0);
    }

    if (damage<10)
    {
      bullet1.shapeColor=color(0,255,0);
    }

    
  }


  if (wall2.x-bullet2.x < (bullet2.width+ wall2.width)/2)
  {
    var damage=0.5* weight * speed * speed / thickness * thickness * thickness;
    bullet2.velocityX=0;
    
    if (damage>10)
    {
      bullet2.shapeColor=color(255,0,0);
    }


    if (damage<10)
    {
      bullet2.shapeColor=color(0,255,0);
    }
  }


  if (wall3.x-bullet3.x < (bullet3.width+ wall3.width)/2)
  {
    bullet3.velocityX=0;
    var damage=0.5* weight * speed * speed / thickness * thickness * thickness;
  
    if (damage>10)
    {
      bullet3.shapeColor=color(255,0,0);
    }

    

    if (damage<10)
    {
      bullet3.shapeColor=color(0,255,0);
    }
  }
  drawSprites();

}
