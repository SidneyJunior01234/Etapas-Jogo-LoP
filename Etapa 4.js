/* 
    Equipe: 
        Sidney Alves dos Santos Junior - Subturma C (Líder) 
        Claudiano Leonardo da Silva - Subturma A 
        Etapa 4
*/

let x = 200,
    y = 350,
    r = 30;

let xD = x,
    yD = y;

let estado = false;

function setup() 
{
  createCanvas(400, 400);
}

function draw()
{
  background(220);
  
  //personagem
  ellipse(x,y,r,r);
  //bala
  ellipse(xD,yD,3,3);
  
  mover(2);
  atirar(10);
}


function mover(v)
{
  
  if(keyIsDown(LEFT_ARROW))
  {
       x -= v;
  }
  else if(keyIsDown(RIGHT_ARROW))
  {
    x += v;
  }
  
}

function atirar(v)
{
  
  if(estado == false)
  {
    xD = x;
    yD = y;
  }
  
  if(keyIsDown(UP_ARROW) && estado == false)
  {
    estado = true;
  }
  
  if(yD>0 && estado == true) 
  {
    yD -= v;
  }
  else
  {
    estado = false;
  }
  
}
