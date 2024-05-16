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
            ctx.font = "40px Helvetica";
            limparEmbaixo();
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava vazio!",50,620);
            ctx.clearRect(0,0,1350,73);
            vez=2;
            ordemBalas.shift()
        }
        else{
            ctx.font = "40px Helvetica";
            limparEmbaixo();
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava cheio!",50,620);
            vidasJog2=vidasJog2-1;
            atualizarVidas(vidasJog1,vidasJog2);
            vez=2;
            ordemBalas.shift()
        }
    }
    if (isInside2(mousePos, botao2) && vez==2) {
        if (ordemBalas[balaDaVez] == 0){
            limparEmbaixo();
            ctx.font = "40px Helvetica";
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava vazio!",850,620);
            ctx.clearRect(0,0,1350,73);
            vez=1;
            ordemBalas.shift()
        }
        else{
            ctx.font = "40px Helvetica";
            limparEmbaixo();
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava cheio!",850,620);
            vidasJog1=vidasJog1-1;
            atualizarVidas(vidasJog1,vidasJog2);
            vez=1;
            ordemBalas.shift()
        }
    }
    if (isInside3(mousePos, botao3) && vez==1) {
        if (ordemBalas[balaDaVez] == 0){
            limparEmbaixo();
            ctx.font = "40px Helvetica";
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava vazio! É sua vez novamente!",50,620);
            ctx.clearRect(0,0,1350,73);
            vez=1;
            ordemBalas.shift()
        }
        else{
            ctx.font = "40px Helvetica";
            limparEmbaixo();
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava cheio!",50,620);
            vidasJog1=vidasJog1-1;
            atualizarVidas(vidasJog1,vidasJog2);
            vez=2;
            ordemBalas.shift()
        }
    }
    if (isInside4(mousePos, botao4) && vez==2) {
        if (ordemBalas[balaDaVez] == 0){
            limparEmbaixo();
            ctx.font = "40px Helvetica";
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava vazio! É sua vez novamente!",420,620);
            ctx.clearRect(0,0,1350,73);
            vez=2;
            ordemBalas.shift()
        }
        else{
            ctx.font = "40px Helvetica";
            limparEmbaixo();
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava cheio!",850,620);
            vidasJog2=vidasJog2-1;
            atualizarVidas(vidasJog1,vidasJog2);
            vez=1;
            ordemBalas.shift()
        }
    }
},);


var vidasJog1 = 3
var vidasJog2 = 3




var balaDaVez = 0

var vez = 1

var ordemBalas = []
balasSetadas(ordemBalas) //quantidade de cartcuhos cheios e vazios pré setada

//balasAleatorias(ordemBalas) //quantidade aleatoria de cartuchos cheios e vazios

function balasSetadas(ordemBalas){

var quantidadeBalasCheio = 3

var quantidadeBalasVazio = 2

var quantidadeBalas = quantidadeBalasCheio + quantidadeBalasVazio

for (var i = 1; i < quantidadeBalasCheio+1; i++){
    ordemBalas.push(1);
}
for (var i = 1; i < quantidadeBalasVazio+1; i++){
    ordemBalas.push(0);   
}
var indice = quantidadeBalas

while (indice>0){
    let aleatorio = Math.floor(Math.random() * indice);
    indice--;
    [ordemBalas[indice], ordemBalas[aleatorio]] = 
    [ordemBalas[aleatorio], ordemBalas[indice]]
}
}

function balasAleatorias(ordemBalas){
    let quantidadeBalas = 5;
    for (var i = 1; i < quantidadeBalas+1; i++){
        var bala = Math.floor(Math.random() * 2);;
        ordemBalas.push(bala);
}
}

function limparEmbaixo(){
    ctx.clearRect(0,577,1300,100);
}
function atualizarVidas(vidas1,vidas2){
    ctx.beginPath();
    ctx.clearRect(70,400,100,50);
    ctx.font = '20px Helvetica';
    ctx.fillStyle = "black";
    var textoVidas1 = "Vidas:"+vidas1;
    ctx.fillText(textoVidas1, 70, 430 );
    ctx.fill();

    ctx.beginPath();
    ctx.clearRect(1150,400,200,100);
    ctx.font = '20px Helvetica';
    ctx.fillStyle = "black";
    var textoVidas2 = "Vidas:"+vidas2;
    ctx.fillText(textoVidas2, 1170, 430 );
    ctx.fill();
}

function update(time) {
}

desenhosIniciais(ordemBalas);

function desenhosIniciais(ordemBalas){
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

ctx.beginPath();
ctx.font = '20px Helvetica';
ctx.fillStyle = "black";
ctx.fillText("Vidas:3",  1170, 430 );
ctx.fill();

ctx.beginPath();
ctx.font = '20px Helvetica';
ctx.fillStyle = "black";
ctx.fillText("Vidas:3",  70, 430 );
ctx.fill();

var cheio = 0;
var vazio = 0;
for (var i = 0; i < ordemBalas.length; i++){
    if (ordemBalas[i]==0){
        vazio++;
    }else{
    cheio++;
    }
}
var mensagem = cheio + " cartuchos cheios e "+ vazio +" cartuchos vazios foram colocados em uma ordem aleatoria na arma"
ctx.font = '20px Helvetica';
ctx.fillStyle = "black";
ctx.fillText(mensagem,  250, 130 );

console.log(ordemBalas)
var xbala=550
for (var i = 0; i < cheio; i++){
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(xbala,405,20,50);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(xbala,400,20,10);
    ctx.fill();
    xbala=xbala+30;
}
var xbala=550
for (var i = 0; i < vazio; i++){
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.rect(xbala,465,20,50);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(xbala,460,20,10);
    ctx.fill();
    xbala=xbala+30;

    
}
}

function draw(ctx) {
    if (vez == 1){
        ctx.clearRect(botao2.x-1, botao2.y-1, botao2.width+2, botao2.height+2);
        ctx.clearRect(botao4.x-1, botao4.y-1, botao4.width+2, botao4.height+2);
        ctx.clearRect(0,0,1350,73);
        ctx.font = "40px Helvetica";
        ctx.fillStyle = "gray";
        ctx.fillText("Vez do jogador 1",500,60);
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.fillStyle = "gray";
        ctx.rect(botao.x, botao.y, botao.width, botao.height);
        ctx.rect(botao3.x, botao3.y, botao3.width, botao3.height);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.font = '20px Helvetica';
        ctx.fillStyle = "black";
        ctx.fillText('Atirar no outro',  botao.x + 5 , botao.y + 30 );
        ctx.fill();

        ctx.beginPath();
        ctx.font = '20px Helvetica';
        ctx.fillStyle = "black";
        ctx.fillText('Atirar em si',  botao3.x + 5 , botao3.y + 30 );
        ctx.fill();
    }
    else{
        ctx.clearRect(botao.x-1, botao.y-1, botao.width+2, botao.height+2);
        ctx.clearRect(botao3.x-1, botao3.y-1, botao3.width+2, botao3.height+2);
        ctx.clearRect(0,0,1350,73);
        ctx.font = "40px Helvetica";
        ctx.fillStyle = "black";
        ctx.fillText("Vez do jogador 2",500,60);
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.fillStyle = "gray";
        ctx.rect(botao2.x, botao2.y, botao2.width, botao2.height);
        ctx.rect(botao4.x, botao4.y, botao4.width, botao4.height);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.font = '20px Helvetica';
        ctx.fillStyle = "black";
        ctx.fillText('Atirar no outro',  botao2.x + 5 , botao2.y + 30 );
        ctx.fill();

        ctx.beginPath();
        ctx.font = '20px Helvetica';
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
