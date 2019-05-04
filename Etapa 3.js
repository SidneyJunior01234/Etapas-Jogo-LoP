/* 
    Equipe: 
        Sidney Alves dos Santos Junior - Subturma C (Líder) 
        Claudiano Leonardo da Silva - Subturma A 
        Etapa 3
*/

let x = 0;
let valor = 5;

function setup() 
{
  createCanvas(400, 400);
  x = 400;
}

function draw() 
{
  background(0);
  
  rect(x,150,50,50);
  
  if(x<-50)
  {
    x = 400;
    valor = random(1,10);
  }
  else
  {
    x -= valor;
  }
}
