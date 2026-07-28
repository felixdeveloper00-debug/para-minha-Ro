// ======================================
// PRESENTE PARA RÔ ❤️🌸🌿
// Feh & Rô
// ======================================


let telaAtual = 1;


const telas = document.querySelectorAll(".tela");



function mostrarTela(numero){

    telas.forEach(tela=>{

        tela.classList.remove("ativa");

    });


    const tela = document.getElementById("tela"+numero);


    if(tela){

        tela.classList.add("ativa");

    }

}







// ======================================
// NAVEGAÇÃO
// ======================================


function proximaTela(){

    if(telaAtual < 9){

        telaAtual++;

        mostrarTela(telaAtual);

        criarPetalas(8);

    }

}




document
.getElementById("botaoInicio")
.addEventListener("click",()=>{


    telaAtual = 2;

    mostrarTela(telaAtual);

    criarPetalas(20);

});





for(let i=2;i<=8;i++){


    document
    .getElementById("botao"+i)
    .addEventListener("click",proximaTela);


}









// ======================================
// CARTA DIGITANDO
// ======================================


const carta = `

Oi, minha Rô ❤️


Hoje completamos nosso primeiro mês.


Pode parecer pouco tempo,
mas foi tempo suficiente para você
se tornar alguém muito especial para mim.


Obrigado por cada conversa,
cada sorriso e cada momento.


Eu espero que esse seja só o começo
da nossa história.


Com carinho,

Seu Feh ❤️

`;



let letra = 0;



function escreverCarta(){


    const elemento =
    document.getElementById("textoCarta");


    if(letra < carta.length){


        elemento.innerHTML += carta[letra];


        letra++;


        setTimeout(
            escreverCarta,
            40
        );


    }


}



setTimeout(
    escreverCarta,
    1200
);








// ======================================
// CORAÇÃO ❤️
// ======================================


const mensagensCoracao=[


"Você deixa meus dias melhores ❤️",

"Obrigado por ser minha Rô 🌸",

"Eu adoro quando você me chama de Feh 🥰",

"Espero viver muitos momentos com você 💚",

"Meu coração escolheu você ❤️"


];



document
.getElementById("coracao")
.addEventListener("click",()=>{


    document
    .getElementById("mensagemCoracao")
    .innerHTML =
    mensagensCoracao[
        Math.floor(
            Math.random()*mensagensCoracao.length
        )
    ];

    criarPetalas(10);

});








// ======================================
// ESTRELAS ⭐
// ======================================


const estrelas =
document.querySelectorAll(".estrelas span");



estrelas.forEach(estrela=>{


    estrela.addEventListener("click",()=>{


        document
        .getElementById("mensagemEstrela")
        .innerHTML =
        "Você ilumina minha vida, Rô ✨💚💗";


        criarPetalas(12);


    });


});








// ======================================
// PRESENTE 🎁
// ======================================


document
.getElementById("presente")
.addEventListener("click",()=>{


    document
    .getElementById("presente")
    .innerHTML="💖";


    document
    .getElementById("mensagemPresente")
    .innerHTML =
    "O maior presente foi ter encontrado você, Rô ❤️🌿";


    criarPetalas(30);


});









// ======================================
// CONTADOR DESDE 30/06/2026
// ======================================


const inicio =
new Date("2026-06-30T00:00:00");



function atualizarTempo(){


    const agora =
    new Date();


    const diferenca =
    agora - inicio;



    const dias =
    Math.floor(
        diferenca /
        (1000*60*60*24)
    );


    const horas =
    Math.floor(
        diferenca /
        (1000*60*60)
    ) % 24;



    const minutos =
    Math.floor(
        diferenca /
        (1000*60)
    ) % 60;



    const segundos =
    Math.floor(
        diferenca /
        1000
    ) % 60;



    document.getElementById("dias").innerHTML=dias;

    document.getElementById("horas").innerHTML=horas;

    document.getElementById("minutos").innerHTML=minutos;

    document.getElementById("segundos").innerHTML=segundos;


}



setInterval(
    atualizarTempo,
    1000
);


atualizarTempo();









// ======================================
// PETALAS 🌸🌿
// ======================================


function criarPetalas(numero){


    const area =
    document.getElementById("efeitos");



    const flores=[

        "🌸",
        "🌿",
        "🍃",
        "🌷"

    ];



    for(let i=0;i<numero;i++){


        const item =
        document.createElement("div");



        item.className="petal";


        item.innerHTML =
        flores[
            Math.floor(
                Math.random()*flores.length
            )
        ];



        item.style.left =
        Math.random()*100+"vw";



        item.style.animationDuration =
        (3+Math.random()*5)+"s";



        area.appendChild(item);



        setTimeout(()=>{


            item.remove();


        },8000);


    }


}








// ======================================
// REINICIAR
// ======================================


document
.getElementById("reiniciar")
.addEventListener("click",()=>{


    telaAtual=1;


    mostrarTela(1);


    letra=0;


    document
    .getElementById("textoCarta")
    .innerHTML="";


});
