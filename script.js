function start() {  // inicio função start
    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
    $("#fundoGame").append("<div id='inimigo1'class='anima2'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
} // fim função start


// Variaveis

var jogo = {};

var TECLA = {
    W: 87,
    S: 83,
    D: 68
}

jogo.pressionou = [];
// Verifica se o usuário pressionou alguma tecla	



$(document).keydown(function(e) {
    jogo.pressionou[e.which] = true;
});

$(document).keyup(function(e) {
    jogo.pressionou[e.which] = false;
});


// Game Loop

jogo.timer = setInterval(loop, 30);

function loop() {  // Inicio função loop
    moveFundo();
    moveJogador();
} // Final função loop



function moveFundo() { // Inicio função loop
    esquerda = parseInt($('#fundoGame').css("background-position"));
    $("#fundoGame").css("background-position", esquerda-1);
} // Final função moveFundo

function moveJogador() { // Inicio função moveJogador

    if (jogo.pressionou[TECLA.W]) {
        var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top",topo-10);
    }

    if (jogo.pressionou[TECLA.S]) {
        var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top",topo+10);
    }

    if (jogo.pressionou[TECLA.D]) {
        // função disparo
    }
} // fim função moveJogador