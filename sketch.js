var catimg,catimg1,catimg2;
var groundimg;
var mouseimg;
function preload() {
 catimg = loadAnimation("images/cat2.png","images/cat3.png")
 catimg1 = loadImage("images/cat1.png")
 catimg2=loadImage("images/cat4.png");
groundimg = loadImage("images/garden.png")
mouseimg = loadImage("images/mouse1.png")

}

function setup(){
    createCanvas(800,600);
  cat=createSprite(700,470,40,40)
  cat.addAnimation("move",catimg1) 
  cat.scale=0.2
  mouse=createSprite(100,470,10,10);
  mouse.addImage(mouseimg)
  mouse.scale=0.1



}

function draw() {
background(groundimg)
text(mouseX+','+mouseY,10,45)
   

   
   
drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("cat",catimg);
    cat.changeAnimation("cat");
}

}
