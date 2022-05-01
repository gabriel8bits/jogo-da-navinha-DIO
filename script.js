function start() {  // inicio função start
    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
    $("#fundoGame").append("<div id='inimigo1'class='anima2'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
} // fim função start


// Variaveis

var jogo = {};
var velocidade = 5;
var posicaoY = parseInt(Math.random()* 334);

var TECLA = {
    W: 87,
    S: 83,
    D: 68,
}


// Verifica se o usuário pressionou alguma tecla

jogo.pressionou = [];

$ (document).keydown(function(e) {
    jogo.pressionou[e.which] = true;
});


$ (document).keyup(function (e) {
    jogo.pressionou[e.which] = false;
});


// Game Loop

jogo.timer = setInterval(loop, 30);

function loop() {  // Inicio função loop
    moveFundo();
    moveJogador();
    moveInimigo1();
    moveInimigo2();
    moveAmigo();
} // Final função loop



function moveFundo() { // Inicio função loop
    esquerda = parseInt($('#fundoGame').css("background-position"));
    $("#fundoGame").css("background-position", esquerda-1);
} // Final função moveFundo

function moveJogador() { // Inicio função moveJogador

    if (jogo.pressionou[TECLA.W]) {
        var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top",topo-10);
        
        if(topo <= 1) {
            $("#jogador").css("top",topo+10);
        }
    }

    if (jogo.pressionou[TECLA.S]) {
        var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top",topo+10);

        if(topo >=434) {
            $("#jogador").css("top", topo-10);
        }
    }

    if (jogo.pressionou[TECLA.D]) {
        // função disparo
    }
} // fim função moveJogador

function moveInimigo1() { // Inicio função moveInimigo1
    posicaoX = parseInt($("#inimigo1").css("left"));
    $("#inimigo1").css("left", posicaoX-velocidade);
    $("#inimigo1").css("top", posicaoY);
        if(posicaoX <=0 ) {
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posicaoY);
        }
    

} // Fim função moveInimigo1

function moveInimigo2() {  // Inicio função moveInimigo2
    posicaoX = parseInt($("#inimigo2").css("left"));
    $("#inimigo2").css("left", posicaoX-3);

        if(posicaoX <= 0) {
            $("#inimigo2").css("left", 775);
        }
} // FIm função moveInimigo2

function moveAmigo() { // inicio função moveAmigo
    posicaoX = parseInt($("#amigo").css("left"));
    $("#amigo").css("left", posicaoX+1);

        if(posicaoX>906) {
            $("#amigo").css("left", 0);
        }
} // Fim função moveAmigo