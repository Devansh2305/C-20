var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(400, 200, 50, 50);
 movingRect=createSprite(200,150,50,40);
 fixedRect.shapeColor="black";
 movingRect.shapeColor="black";
 fixedRect.debug=true;
 movingRect.debug=true;
}

function draw() {
  background("green");
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
      movingRect.shapeColor="yellow";
      fixedRect.shapeColor="yellow";
    }  
    else{
      fixedRect.shapeColor="black";
      movingRect.shapeColor="black";
    }
  drawSprites();
}