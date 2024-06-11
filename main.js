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

var vez = 0

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
var botaojogar = {
    x: 600,
    y: 170,
    width: 130,
    height: 50,
  };
var botaoinfo = {
    x: 600,
    y: 300,
    width: 130,
    height: 50,
};
var botaosair = {
    x: 600,
    y: 430,
    width: 130,
    height: 50,
  };
var botaovoltar = {
    x: 585,
    y: 500,
    width: 130,
    height: 50,
};

function isInside(pos, rect) {
    return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}

canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    const ctx = canvas.getContext('2d');
    if (isInside(mousePos, botaojogar) && vez==0) {
        vez=1;
        iniciarJogo(ordemBalas)
    }
    if (isInside(mousePos, botaoinfo) && vez==0) {
        telaSobre()
        vez=-1
    }
    if (isInside(mousePos, botaosair) && vez==0) {
        if (confirm("Tem certeza que deseja sair?") == true){
            location.href = 'https://www.google.com';
        }
    }
    if (isInside(mousePos, botaovoltar) && vez==-1) {
        vez=0;
        telaInicial()
    }
    },);

canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    const ctx = canvas.getContext('2d');
    if (isInside(mousePos, botao) && vez==1) {
        var audio1 = new Audio();
        audio1.src = "audio/tiro.mp3";
        audio1.play();
        if (ordemBalas[balaDaVez] == 0){
            atualizarVez(ordemBalas);
            ctx.font = "40px Helvetica";
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava vazio!",50,620);
            ctx.clearRect(0,0,1350,73);
            vez=2;
            ordemBalas.shift()
        }
        else{
            atualizarVez(ordemBalas);
            ctx.font = "40px Helvetica";
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava cheio!",50,620);
            vidasJog2=vidasJog2-1;
            atualizarVidas(vidasJog1,vidasJog2);
            vez=2;
            ordemBalas.shift()
        }
    }
    if (isInside(mousePos, botao2) && vez==2) {
        if (ordemBalas[balaDaVez] == 0){
            atualizarVez(ordemBalas);
            ctx.font = "40px Helvetica";
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava vazio!",850,620);
            ctx.clearRect(0,0,1350,73);
            vez=1;
            ordemBalas.shift()
        }
        else{
            atualizarVez(ordemBalas);
            ctx.font = "40px Helvetica";
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava cheio!",850,620);
            vidasJog1=vidasJog1-1;
            atualizarVidas(vidasJog1,vidasJog2);
            vez=1;
            ordemBalas.shift()
        }
    }
    if (isInside(mousePos, botao3) && vez==1) {
        if (ordemBalas[balaDaVez] == 0){
            atualizarVez(ordemBalas);
            ctx.font = "40px Helvetica";
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava vazio! É sua vez novamente!",50,620);
            ctx.clearRect(0,0,1350,73);
            vez=1;
            ordemBalas.shift()
        }
        else{
            atualizarVez(ordemBalas);
            ctx.font = "40px Helvetica";
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava cheio!",50,620);
            vidasJog1=vidasJog1-1;
            atualizarVidas(vidasJog1,vidasJog2);
            vez=2;
            ordemBalas.shift()
        }
    }
    if (isInside(mousePos, botao4) && vez==2) {
        if (ordemBalas[balaDaVez] == 0){
            atualizarVez(ordemBalas);
            ctx.font = "40px Helvetica";
            ctx.fillStyle = "black";
            ctx.fillText("O cartucho estava vazio! É sua vez novamente!",420,620);
            ctx.clearRect(0,0,1350,73);
            vez=2;
            ordemBalas.shift()
        }
        else{
            atualizarVez(ordemBalas);
            ctx.font = "40px Helvetica";
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


var ordemBalas = []
//balasSetadas(ordemBalas) //quantidade de cartcuhos cheios e vazios pré setada
 //quantidade aleatoria de cartuchos cheios e vazios

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
    let quantidadeBalas = 3;
    for (var i = 1; i < quantidadeBalas+1; i++){
        var bala = Math.floor(Math.random() * 2);;
        ordemBalas.push(bala);
    }
    return ordemBalas
}

function atualizarVez(ordemBalas){
    ctx.clearRect(0,577,1300,100);
    if (ordemBalas[0] == undefined){
        ctx.clearRect(250,100,800,100);
        ctx.clearRect(550,400,500,140);
        ordemBalas = balasAleatorias(ordemBalas)
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
    console.log(ordemBalas)
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

telaInicial()

function telaInicial(){
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";
    ctx.rect(0,0,1000,1000)
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.rect(botaojogar.x, botaojogar.y, botaojogar.width, botaojogar.height);
    ctx.rect(botaoinfo.x, botaoinfo.y, botaoinfo.width, botaoinfo.height);
    ctx.rect(botaosair.x, botaosair.y, botaosair.width, botaosair.height);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.font = '20px Helvetica';
    ctx.fillStyle = "black";
    ctx.fillText("Iniciar jogo",  botaojogar.x+15, botaojogar.y+30 );
    ctx.font = '20px Helvetica';
    ctx.fillStyle = "black";
    ctx.fillText("Sobre",  botaoinfo.x+35, botaoinfo.y+30 );
    ctx.font = '20px Helvetica';
    ctx.fillStyle = "black";
    ctx.fillText("Sair",  botaosair.x+43, botaosair.y+30 );
    ctx.fill();
    ctx.stroke();
}
function telaSobre(){
    ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
        ctx.rect(0,0,1000,1000)
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillText("Inspirado em Buckshot Challenge",500,100);
        ctx.fillText("Criadores:",600,200);
        ctx.fillText("Francisco Martins",570,250);
        ctx.fillText("Felipe Schneider",575,300);
        ctx.fillText("Theo Nicoleli",590,350);
        ctx.fillText("Pedro Dallanora",580,400);
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.fillStyle = "white";
        ctx.rect(botaovoltar.x, botaovoltar.y, botaovoltar.width, botaovoltar.height);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillText("Voltar",botaovoltar.x+40,botaovoltar.y+30);
}

function iniciarJogo(ordemBalas){
  balasAleatorias(ordemBalas)
console.log(ordemBalas)
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
        ctx.clearRect(900, 300, 160, 100);
        ctx.beginPath();
        ctx.strokeStyle = "gray";
        ctx.fillStyle = "gray";
        ctx.rect(250,325,20,50);
        ctx.rect(270,325,70,20);
        ctx.rect(280,340,5,20);
        ctx.rect(265,353,20,5);
        ctx.fill();
        ctx.stroke();


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
    else if (vez == 2){
        ctx.clearRect(230, 300, 160, 100);
        ctx.beginPath();
        ctx.strokeStyle = "gray";
        ctx.fillStyle = "gray";
        ctx.rect(1030,325,20,50);
        ctx.rect(970,325,70,20);
        ctx.rect(1010,340,5,20);
        ctx.rect(1015,353,20,5);
        ctx.fill();
        ctx.stroke();

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
            //Atualizamos a lógica

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
