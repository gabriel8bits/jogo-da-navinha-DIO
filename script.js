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

// Verifica se o usuário pressionou alguma tecla	

jogo.pressionou = [];

$(document).keydown(function(e){
jogo.pressionou[e.which] = true;
});

$(document).keyup(function(e) {
jogo.pressionou[e.which] = false;
});

// Game Loop

jogo.timer = setInterval(loop, 30);

function loop() {  // Inicio função loop
    moveFundo();
} // Final função loop

function moveFundo() { // Inicio função loop
    esquerda = parseInt($('#fundoGame').css("background-position"));
    $("#fundoGame").css("background-position", esquerda-1);
} // Final função moveFundo