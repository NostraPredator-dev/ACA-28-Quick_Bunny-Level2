var rabbit;
var carrot;
var obs1;
var obs2;
var obs3;
var obs4;
var edges;

function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(1365,629);
  rabbit = createSprite(11,620,20,20);
  carrot = createSprite(1350,25,50,50);
  edges = createEdgeSprites();
  obs1 = createSprite(20,100,200,30);
  obs2 = createSprite(20,150,200,30);
  obs3 = createSprite(20,200,200,30);
  obs4 = createSprite(20,250,200,30);
  obs1.velocityX = 5;
  obs2.velocityX = 10;
  obs3.velocityX = 15;
  obs4.velocityX = 20;
  rabbit.shapeColor = "white";
  carrot.shapeColor = "orange"
  obs1.shapeColor = "red";
  obs2.shapeColor = "red";
  obs3.shapeColor = "red";
  obs4.shapeColor = "red";
  snakeGrp = new Group();
}

function draw() {
  background("green");
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  obs3.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]);
  obs4.bounceOff(edges[0]);
  obs4.bounceOff(edges[1]);
  rabbit.bounceOff(edges[0]);
  rabbit.bounceOff(edges[1]);
  rabbit.bounceOff(edges[2]);
  rabbit.bounceOff(edges[3]);
  if(keyDown("w"))
  {
    rabbit.y = rabbit.y-5;
  }
  if(keyDown("a"))
  {
    rabbit.x = rabbit.x-5;
  }
  if(keyDown("s"))
  {
    rabbit.y = rabbit.y+5;
  }
  if(keyDown("d"))
  {
    rabbit.x = rabbit.x+5;
  }
  if(rabbit.isTouching(carrot))
  {
    fill("black")
    text("YOU WIN!!",680,310)
  }
  if(rabbit.isTouching(obs1))
  {
    fill("black")
    text("YOU LOSE!!",680,310)
    rabbit.x = 11;
    rabbit.y = 620;
  }
  if(rabbit.isTouching(obs2))
  {
    fill("black")
    text("YOU LOSE!!",680,310)
    rabbit.x = 11;
    rabbit.y = 620;
  }
  if(rabbit.isTouching(obs3))
  {
    fill("black")
    text("YOU LOSE!!",680,310)
    rabbit.x = 11;
    rabbit.y = 620;
  }
  if(rabbit.isTouching(obs4))
  {
    fill("black")
    text("YOU LOSE!!",680,310)
    rabbit.x = 11;
    rabbit.y = 620;
  }
  genSnakes();
  for(var i = 0;i < snakeGrp.length;i++)
  {
    var temp = snakeGrp.get(i);
    if(rabbit.isTouching(temp))
    {
      temp.destroy();
      rabbit.x = 11;
      rabbit.y = 620;
    }
  }
  drawSprites();
}

function genSnakes()
{
  if (frameCount%40 == 0)
  {
    var snake = createSprite(1365,random(0,629),random(50,300),5);
    snake.shapeColor = "yellow";
    snake.velocityX = random (-10,-1);
    snakeGrp.add(snake);
  }
  console.log(frameCount);
}