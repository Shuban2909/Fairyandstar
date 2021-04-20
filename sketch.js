//creating variables
var starImg,bgImg;
var star, starBody;
var fairyImg;
var fairy,fairyBody;
var music;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	//loading images,sound and animation
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");

	music = loadSound("sound/JoyMusic.mp3");

	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	
}

function setup() {
	createCanvas(800, 750);

	//creating the star
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	//creating the fairy
	fairy = createSprite(50,550,20,20);
	fairy.addAnimation("flying",fairyImg);
	fairy.scale = 0.2;
	fairy.depth=star.depth-1;

    //creating the engine
	engine = Engine.create();
	//adding the enigine to the world of visual studio
	world = engine.world;

	//creating the star and adding it to the world
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	//creating the fairy and adding it to the world
	fairyBody = Bodies.rectangle(50,500,40,20,{isStatic:true});
	World.add(world,fairyBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  //playing the background sound
  music.play();

  //making the position of the star
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //making the position of the star
  fairy.x=fairyBody.position.x;
  fairy.y=fairyBody.position.y;

  //if the star touche sthe fairy's hand then it will stop
  if(star.y>470 && starBody.position.y>470){
	Matter.Body.setStatic(starBody,true); 
  
  }

  drawSprites();
  

}

function keyPressed() {

	//if the down arrow is pressed then the star will fall
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//if the left and right arrows are pressed then the fairy will move
	if (keyCode === LEFT_ARROW){
		fairyBody.position.x=fairyBody.position.x-100;
	}
	
	if (keyCode === RIGHT_ARROW){
	    fairyBody.position.x=fairyBody.position.x+100;
	}
}
