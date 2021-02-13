//Create variables here
var dog,dogImg;
var hDog,hDogImg;
var db;
var foodS;
var foodStock;

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  hDogImg = loadImage("images/dogImg1.png")

}

function setup() {
 //db = firebase.db();
	createCanvas(500,500);
  var dog = "images/dogImg.png";
  foodStock =db.ref("food");
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46, 139, 87);
  dog.display();

  
  //add styles here
if(keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(hDogImg);
}
drawSprites();
textSize(35);
Fill(white);
text("foodRemaining: "+ db ,width-300, 50)
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  db.ref("/").update({
    food:x
  })
}




