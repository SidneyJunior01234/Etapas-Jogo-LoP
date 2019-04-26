/* 
    Equipe: 
        Sidney Alves dos Santos Junior - Subturma C (Líder) 
        Claudiano Leonardo da Silva - Subturma A 
        Etapa 2
*/

var posX = 0, posY = 0;
var velocidade = 5;

function mover_objeto()
{
  //Mover para cima e para baixo
  if(keyIsDown(UP_ARROW))
  {
    posY -= velocidade;
  }
  else if(keyIsDown(DOWN_ARROW))
  {
    posY += velocidade;
  }
  //Mover para a esquerda e para a direita
  if(keyIsDown(LEFT_ARROW))
  {
    posX -= velocidade;
  }
  else if(keyIsDown(RIGHT_ARROW))
  {
    posX += velocidade;
  }
}

function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background(0);
  rect(posX,posY,50,50);
  mover_objeto();
}
