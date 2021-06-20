//playSound("sound://category_background/fantasy.mp3",false);
var player_score = 0;
var computer_score = 0;
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var goal1;
var goal2;
var striker;
var playerMallet;
var compMallet;
var gameState = 'serve';

function setup(){
  wall1 = createSprite(200, 10, 400, 5);
wall1.shapeColor = 'white';
  wall2 = createSprite(200, 390, 400, 5);
  wall2.shapeColor = 'white';
wall3 = createSprite(385, 200, 5, 400);
wall3.shapeColor = 'white';
wall4 = createSprite(15, 200, 5, 400);
wall4.shapeColor = 'white';
wall5 = createSprite(200, 130, 400, 5);
wall5.shapeColor = 'white'; 
wall6 = createSprite(200, 270, 400, 5);
wall6.shapeColor = 'white';
  
  goal1 = createSprite(200, 28, 100, 20);
goal1.shapeColor = 'yellow';
  goal2 = createSprite(200, 372, 100, 20);
goal2.shapeColor = 'yellow';
  
striker = createSprite(200, 200, 10, 10);
striker.shapeColor = 'white';
  
 playerMallet = createSprite(200, 50, 50, 10);
playerMallet.shapeColor = 'black'; 
  
compMallet = createSprite(200, 350, 50, 10);
compMallet.shapeColor = 'black'
  

  
}

function draw() 
{
  background("green");
  fill("black");
  
  textSize(24);
  text(player_score, 25, 151);
  text(computer_score, 25,241 );
  
  if (gameState === "serve") 
  {
    stroke("white");
    textSize(24);
    text("Press 'space' to serve", 100, 180);
  }
  
  createEdgeSprites();
  striker.bounceOff(wall1);
  striker.bounceOff(wall2);
  striker.bounceOff(wall3);
  striker.bounceOff(wall4);
  //striker.bounceOff(wall5);
 // striker.bounceOff(wall6);
  striker.bounceOff(playerMallet);
  striker.bounceOff(compMallet);
  
  if (keyDown("space") && gameState === "serve")
  {
    serve();
    gameState = "play";  
  }
  if(striker.isTouching(goal1) || striker.isTouching(goal2)) 
  {
  if (striker.isTouching(goal1)) 
  {
  computer_score = computer_score+1;     
  }
  if (striker.isTouching(goal2)) 
  {
  player_score = player_score+1;     
  }
  reset();
  gameState = 'serve';
  }
  
  if (keyDown("right") && (playerMallet.x<370)) 
  {
    playerMallet.x = playerMallet.x+10;  
  }
  
  if (keyDown("left") && (playerMallet.x>30)) 
  {
    playerMallet.x = playerMallet.x-10;  
  }
  
  if (keyDown("up")) 
  {
    if (playerMallet.y>25) 
    {
      playerMallet.y = playerMallet.y-10;  
    }
  }
  if (keyDown("down")) 
  {
    if (playerMallet.y<120) 
    {
      playerMallet.y = playerMallet.y+10;  
    }
  }
  
  compMallet.x = striker.x;
  
  striker.velocity;
  
  for (var i = 0; i < 400; i=i+20) 
  {
    line(i, 200, i+10, 200);
  }
  
  if (computer_score>4) {
    gameState = "end";
  }
   if (keyDown("r") && (gameState === "end")) 
  {
    gameState = "serve";
    computer_score = 0;
    player_score = 0;
  }
  
  if (gameState === "end") {
    fill("black");
    textSize(24);
    text("press 'r' to restart", 150, 150);
  }
  
  
 
   drawSprites();
}

function serve()
{
  striker.velocityX = 3;
  striker.velocityY = 5;
}
function reset()
{
  striker.x = 200;
  striker.y = 200;
  striker.velocityX = 0;
  striker.velocityY = 0; 
}






