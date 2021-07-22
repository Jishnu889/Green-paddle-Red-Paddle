var movingRectangle
var fixRectangle
var fixrect1
var fixrect2





function setup() {
  createCanvas(800,400);
  movingRectangle=createSprite(200,200,80,30);
  movingRectangle.shapeColor="green";
  fixRectangle=createSprite(300,300,30,80)
  fixRectangle.shapeColor="green"
  fixrect1=createSprite(200,200,30,80)
  fixrect1.shapeColor="green"
  fixrect2=createSprite(350,350,30,80)
  fixrect2.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  background("black");
  drawSprites();
  movingRectangle.y=mouseY;
  movingRectangle.x=mouseX;
  
  if(IsTouching(movingRectangle,fixrect2))
  {  
  
movingRectangle.shapeColor="red";
fixrect2.shapeColor="red";
  }
  else
  {
movingRectangle.shapeColor="green";
fixrect2.shapeColor="green";
  }
  

}
//creating a funct to check wether collision takes place or not
function IsTouching(object1,object2)
{
    if(object1.x-object2.x<object2.width/2+object1.width/2
      && object1.y-object2.y<object2.height/2+object1.height/2
      && object2.y-object1.y<object2.height/2+object1.height/2
      && object2.x-object1.x<object2.width/2+object1.width/2)
    {
return true;
    }
    else
    {
return false;
    }
}