var bgImg;
var cat,mouse;
function preload() {
    //load the images here
    bgImg = loadImage("cat4.png")
catimg1 = loadAnimation("images/cat1.png")
mouseimg1 = loadAnimation("images/mouse1.png")
catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat =createSprite(100,200);
cat.addImage("cat3.png");
mouse = createSprite(50,100);
}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
mouse.addAnimation("mouseTeasing",mouseimg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay = 25;
}

if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
    }
    
}
