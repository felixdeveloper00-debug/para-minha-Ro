console.log("VERSÃO NOVA DO FEH");
// ======================================
// PRESENTE PARA RÔ ❤️🌸💚
// Feh & Rô
// ======================================


let telaAtual = 1;


const telas = document.querySelectorAll(".tela");




// TROCAR TELAS

function mostrarTela(numero){


    telas.forEach(tela=>{

        tela.classList.remove("ativa");

    });



    const novaTela =
    document.getElementById("tela"+numero);



    if(novaTela){

        novaTela.classList.add("ativa");

    }

}







// ======================================
// BOTÕES
// ======================================


document
.getElementById("abrir")
.addEventListener("click",()=>{


    telaAtual = 2;

    mostrarTela(telaAtual);


});





document
.querySelectorAll(".proximo")
.forEach(botao=>{


    botao.addEventListener("click",()=>{


        if(telaAtual < 9){

            telaAtual++;

            mostrarTela(telaAtual);

        }


    });


});









// ======================================
// CARTA DIGITANDO
// ======================================


const texto = `

Oi, minha Rô ❤️


Hoje fazemos 1 mês.


Talvez para algumas pessoas pareça pouco tempo,

mas para mim foi tempo suficiente para você se tornar alguém muito especial.


Obrigado pelos sorrisos,

pelas conversas,

e por todos os momentos que tivemos.


Espero que esse seja apenas o começo da nossa história.


Com carinho,

Seu Feh ❤️

`;



let posicao = 0;



function escrever(){


    const caixa =
    document.getElementById("carta");



    if(posicao < texto.length){


        caixa.innerHTML += texto[posicao];


        posicao++;


        setTimeout(escrever,45);


    }


}



setTimeout(escrever,1000);









// ======================================
// CORAÇÃO ❤️
// ======================================


const mensagens = [


"Você é uma das melhores partes do meu dia ❤️",

"Eu adoro quando você me chama de Feh 🥰",

"Obrigado por ser minha Rô 🌸",

"Que esse seja o primeiro de muitos meses 💚",

"Meu coração fica feliz com você ❤️"


];




document
.getElementById("coracao")
.addEventListener("click",()=>{


    document
    .getElementById("mensagemCoracao")
    .innerHTML =
    mensagens[
        Math.floor(
            Math.random()*mensagens.length
        )
    ];


});









// ======================================
// ESTRELAS ⭐
// ======================================


document
.querySelectorAll(".estrela")
.forEach(estrela=>{


    estrela.addEventListener("click",()=>{


        document
        .getElementById("mensagemEstrela")
        .innerHTML =
        "Você ilumina minha vida como uma estrela ✨❤️";


    });


});
document
.getElementById("caixaPresente")
.addEventListener("click",()=>{


    const caixa =
    document.getElementById("caixaPresente");


    caixa.classList.add("presente-aberto");



    setTimeout(()=>{


        document
        .getElementById("presente")
        .innerHTML = "💖✨";



        document
        .getElementById("mensagemPresente")
        .innerHTML =

        "O meu maior presente foi encontrar você, Rô ❤️";


    },900);



});











// ======================================
// CONTADOR
// ======================================


const inicio =
new Date("2026-06-30T00:00:00");



function atualizarContador(){


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
    atualizarContador,
    1000
);


atualizarContador();








// ======================================
// PEQUENOS BRILHOS ✨
// ======================================


function criarBrilhos(){


    const area =
    document.getElementById("brilhos");



    for(let i=0;i<35;i++){


        const brilho =
        document.createElement("div");



        brilho.className="brilho";


        brilho.style.left =
        Math.random()*100+"vw";



        brilho.style.top =
        Math.random()*100+"vh";



        brilho.style.animationDelay =
        Math.random()*3+"s";



        area.appendChild(brilho);


    }

}


criarBrilhos();








// ======================================
// REINICIAR
// ======================================


document
const botaoReiniciar = document.getElementById("reiniciar");

if (botaoReiniciar) {

    botaoReiniciar.onclick = function() {

        telaAtual = 1;

        mostrarTela(1);

        posicao = 0;

        document.getElementById("carta").innerHTML = "";

    };

}
