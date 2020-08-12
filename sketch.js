//Create variables here
var dog,happyDog,database;
var dogImage,happyDogImage;
var foodStock,foodS;
var milk =20;

function preload()
{
  //load images here
  dogImage=loadImage("dogImg.png");
  dogImage.scale=0.05
  happyDogImage=loadImage("dogimg1.png");
}

function setup() {
  createCanvas(1600,800);
  dog=createSprite(700,370);
  dog.addImage(dogImage);
  database=firebase.database();

  foodStock=database.ref("Food");
  foodStock.on("value",readStock);

  
}


function draw() {  
  background(46,139,87);

  if(keyCode===UP_ARROW){
    writeStock(foodS);
    
    dog.addImage(happyDogImage);
    milk=19;
    

  }
  
  

  drawSprites();
  //add styles here
  textSize(30);
  fill("yellow");
  text("Note:Press UP_ARROW To Feed The Dog",10,25);
  text("Milk Bottle ="+milk,50,100);

  }

  function readStock(data){
    foodS=data.val();
  }

  function writeStock(x){

    if(x<=0){
      x=0;
    }else{
      x=x-1;
    }
    database.ref('/').update({
    Food:x
    })
  }



