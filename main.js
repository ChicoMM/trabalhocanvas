'use strict'

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

var botao = {
    x: 50,
    y: 170,
    width: 130,
    height: 50,
  };
var botao2 = {
    x: 1140,
    y: 170,
    width: 130,
    height: 50,
};
var botao3 = {
    x: 50,
    y: 80,
    width: 130,
    height: 50,
};
var botao4 = {
    x: 1140,
    y: 80,
    width: 130,
    height: 50,
};

function isInside1(pos, rect) {
    return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}
function isInside2(pos, rect) {
    return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}
function isInside3(pos, rect) {
    return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}
function isInside4(pos, rect) {
    return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}

canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    const ctx = canvas.getContext('2d');
    if (isInside1(mousePos, botao) && vez==1) {
        if (ordemBalas[balaDaVez] == 0){
            ctx.font = "40px sans serif";
            ctx.clearRect(650,500,700,120);
            ctx.fillText("O cartucho estava vazio!",50,620);
            ctx.clearRect(400,30,200,200);
            vez=2;
            ordemBalas.shift()
        }
        else{
            ctx.font = "40px sans serif";
            ctx.clearRect(650,500,700,120);
            ctx.fillText("O cartucho estava cheio!",50,620);
            vidasJog2=vidasJog2-1;
            var textoVidas2 = "Vidas:"+vidasJog2;
            //Limpar texto vida
            ctx.clearRect(1000,400,500,300);
            ctx.font = '20px sans serif';
            ctx.fillStyle = "black";
            ctx.fillText(textoVidas2,  1170, 430 );
            ctx.fill();
            ctx.clearRect(400,30,200,200);
            vez=2;
            ordemBalas.shift()
        }
    }
    if (isInside2(mousePos, botao2) && vez==2) {
        if (ordemBalas[balaDaVez] == 0){
            ctx.clearRect(50,500,500,120);
            ctx.font = "40px sans serif";
            ctx.fillText("O cartucho estava vazio!",850,620);
            ctx.clearRect(400,30,500,300);
            vez=1;
            ordemBalas.shift()
        }
        else{
            ctx.font = "40px sans serif";
            ctx.clearRect(50,500,700,120);
            ctx.fillText("O cartucho estava cheio!",850,620);
            vidasJog1=vidasJog1-1;
            var textoVidas1 = "Vidas:"+vidasJog1;
            ctx.clearRect(70,400,200,300);
            ctx.font = '20px sans serif';
            ctx.fillStyle = "black";
            ctx.fillText(textoVidas1, 70, 430 );
            ctx.fill();
            ctx.clearRect(400,30,200,200);
            vez=1;
            ordemBalas.shift()
        }
    }
    if (isInside3(mousePos, botao3) && vez==1) {
        if (ordemBalas[balaDaVez] == 0){
            ctx.clearRect(650,500,700,120);
            ctx.font = "40px sans serif";
            ctx.fillText("O cartucho estava vazio!",50,620);
            ctx.clearRect(400,30,500,300);
            vez=2;
            ordemBalas.shift()
        }
        else{
            ctx.font = "40px sans serif";
            ctx.clearRect(650,500,700,120);
            ctx.fillText("O cartucho estava cheio!",50,620);
            vidasJog1=vidasJog1-1;
            var textoVidas1 = "Vidas:"+vidasJog1;
            ctx.clearRect(70,400,200,100);
            ctx.font = '20px sans serif';
            ctx.fillStyle = "black";
            ctx.fillText(textoVidas1, 70, 430 );
            ctx.fill();
            ctx.clearRect(400,30,200,200);
            vez=2;
            ordemBalas.shift()
        }
    }
    if (isInside4(mousePos, botao4) && vez==2) {
        if (ordemBalas[balaDaVez] == 0){
            ctx.clearRect(50,500,500,120);
            ctx.font = "40px sans serif";
            ctx.fillText("O cartucho estava vazio!",850,620);
            ctx.clearRect(400,30,500,300);
            vez=1;
            ordemBalas.shift()
        }
        else{
            ctx.font = "40px sans serif";
            ctx.clearRect(50,500,500,120);
            ctx.fillText("O cartucho estava cheio!",850,620);
            vidasJog2=vidasJog2-1;
            var textoVidas2 = "Vidas:"+vidasJog2;
            ctx.clearRect(1000,400,500,100);
            ctx.font = '20px sans serif';
            ctx.fillStyle = "black";
            ctx.fillText(textoVidas2, 1170, 430 );
            ctx.fill();
            ctx.clearRect(400,30,200,200);
            vez=1;
            ordemBalas.shift()
        }
    }
},);
    

var vidasJog1 = 3
var vidasJog2 = 3



ctx.clearRect(1000,400,100,300);
ctx.font = '20px sans serif';
ctx.fillStyle = "black";
ctx.fillText("Vidas:3",  1170, 430 );
ctx.fill();

ctx.beginPath();
ctx.font = '20px sans serif';
ctx.fillStyle = "black";
ctx.fillText("Vidas:3",  70, 430 );
ctx.fill();


var balaDaVez = 0

var vez = 1

var ordemBalas = []

for (var i = 1; i < 10; i++){
    var bala = Math.floor(Math.random() * 2);;
    ordemBalas.push(bala);
}

function update(time) {
  
    
}


function draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.rect(200,75,900,500)
    ctx.fill();
    ctx.stroke();
 
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.arc(100, 325, 60, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.arc(1200, 325, 60, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "gray";
    ctx.fillStyle = "gray";
    ctx.rect(650,325,20,50);
    ctx.rect(670,325,70,20);
    ctx.rect(680,340,5,20);
    ctx.rect(665,353,20,5);
    ctx.fill();
    ctx.stroke();
    






    if (vez == 1){
        ctx.clearRect(botao2.x-1, botao2.y-1, botao2.width+2, botao2.height+2);
        ctx.clearRect(botao4.x-1, botao4.y-1, botao4.width+2, botao4.height+2);
        ctx.clearRect(400,30,400,40);
        ctx.font = "40px sans serif";
        ctx.fillText("Vez do jogador 1",500,60);
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.fillStyle = "gray";
        ctx.rect(botao.x, botao.y, botao.width, botao.height);
        ctx.rect(botao3.x, botao3.y, botao3.width, botao3.height);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.font = '20px sans serif';
        ctx.fillStyle = "black";
        ctx.fillText('Atirar no outro',  botao.x + 5 , botao.y + 30 );
        ctx.fill();

        ctx.beginPath();
        ctx.font = '20px sans serif';
        ctx.fillStyle = "black";
        ctx.fillText('Atirar em si',  botao3.x + 5 , botao3.y + 30 );
        ctx.fill();
    }
    else{
        ctx.clearRect(botao.x-1, botao.y-1, botao.width+2, botao.height+2);
        ctx.clearRect(botao3.x-1, botao3.y-1, botao3.width+2, botao3.height+2);
        ctx.clearRect(400,30,400,40);
        ctx.font = "40px sans serif";
        ctx.fillText("Vez do jogador 2",500,60);
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.fillStyle = "gray";
        ctx.rect(botao2.x, botao2.y, botao2.width, botao2.height);
        ctx.rect(botao4.x, botao4.y, botao4.width, botao4.height);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.font = '20px sans serif';
        ctx.fillStyle = "black";
        ctx.fillText('Atirar no outro',  botao2.x + 5 , botao2.y + 30 );
        ctx.fill();

        ctx.beginPath();
        ctx.font = '20px sans serif';
        ctx.fillStyle = "black";
        ctx.fillText('Atirar em si',  botao4.x + 5 , botao4.y + 30 );
        ctx.fill();
    }
}


function beginAnimation() {
    if (!canvas.getContext) {
        alert("Canvas não disponível!");
        return;
    }

    const ctx = canvas.getContext('2d');
    let lastFrameTime = 0;

    function onFrame(time) {
        //Não temos como calcular a diferença de tempo entre dois quadros no primeiro quadro
        //Por isso, se for ele (lastFrameTime === 0) pulamos ele sem desenhar
        if (lastFrameTime !== 0) {
            //Calculamos o tempo transcorrido, em segundos
            const elapsed = (time - lastFrameTime) / 1000;
            update(elapsed); //Atualizamos a lógica

            //Desenhamos
            ctx.save();
            draw(ctx);
            ctx.restore();
        }
        //Guardamos o tempo desse quadro para usar no próximo desenho
        lastFrameTime = time;
        //Solicitamos o próximo quadro
        window.requestAnimationFrame(onFrame);
    }

    //Solicita o primeiro quadro
    window.requestAnimationFrame(onFrame);
}

beginAnimation();