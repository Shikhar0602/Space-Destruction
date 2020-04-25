var angle = 0;
var angleSpeed = 0.5;
var starX, starXImg;
var pegasus, pegasusImg;
var cygnus, cygnusImg;
var atlas, atlasImg;
var hercules, herculesImg;
var bgImg;

function preload()
{
   starXImg = loadImage("starX.jpg");
   pegasusImg = loadImage("pegasus.jpg");
   cygnusImg = loadImage("cygnus.jpg");
   atlasImg = loadImage("atlas.png");
   herculesImg = loadImage("hercules.jpg");
   bgImg = loadImage("space.jpg");
}

function setup()
{
    var canvas = createCanvas(2500,2500);

    starX = createSprite(0,0);
    starX.addImage("starimage", starXImg);
    starX.scale = 0.9;
    starX.debug = true;
    starX.setCollider("circle");

    pegasus = createSprite(-250,0);
    pegasus.addImage("pegimage", pegasusImg);
    pegasus.scale = 0.25;
    pegasus.debug = true;
    pegasus.setCollider("circle");

    cygnus = createSprite(500,0);
    cygnus.addImage("cygimage", cygnusImg);
    cygnus.scale = 0.1;
    cygnus.debug = true;
    cygnus.setCollider("circle");

    atlas = createSprite(-750,0);
    atlas.addImage("atimage", atlasImg);
    atlas.scale = 0.25;
    atlas.debug = true;
    atlas.setCollider("circle");


    hercules = createSprite(1000,0);
    hercules.addImage("hercimage", herculesImg);
    hercules.scale = 0.1;
    hercules.debug = true;
    hercules.setCollider("circle");

}

function draw() 
{
    background(bgImg);
    fill("white");
  
   
    textSize(50);
    text("StarX",1200,1450);
    text("PEGASUS",850,1250);
    text("CYGNUS",1650,1250);
    text("ATLAS",425,1250);
    

    translate(width/2, height/2);

   

    if(starX.isTouching(pegasus))
    {

        pegasus.destroy();
    }

    if(starX.isTouching(cygnus))
    {

        cygnus.destroy();
    }

    if(starX.isTouching(atlas))
    {

        atlas.destroy();
    }
    if(starX.isTouching(hercules))
    {

        hercules.visible = false; 
        textSize(75);
        text("ALL PLANETS DESTROYED. CLICK F5 TO REFRESH.",-1200,-1150)
        
    }else {

        if(frameCount % 1 === 0)
        {
            starX.scale = starX.scale + 0.0025;
        }
        fill(255);
        textSize(75);
        text("Welcome to the divine solar system of StarX in the galaxy of Luna6299",-1200,-1150);
        textSize(50);
        text("HERCULES",850,0);
    }
  
    
   
    angleMode(DEGREES);
    angle = angle + angleSpeed;
    rotate(angle);

    


   stroke(255,255,255);
   strokeWeight(2.5);
   noFill();
   ellipse(0,0,500,500);
   ellipse(0,0,1000,1000);
   ellipse(0,0,1500,1500);
   ellipse(0,0,2000,2000);

   drawSprites();
}
