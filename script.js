console.log("SCRIPT FUNCIONANDO");
// ===============================
// CONTROLE DAS TELAS
// ===============================

const screens = document.querySelectorAll(".screen");

let currentScreen = 0;


function showScreen(index) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    if (screens[index]) {
        screens[index].classList.add("active");
    }

}



// ===============================
// BOTÃO INICIAL
// ===============================

const openGift = document.getElementById("openGift");


if (openGift) {

    openGift.addEventListener("click", () => {

        currentScreen = 1;

        showScreen(currentScreen);

        setTimeout(startTyping, 800);

    });

}




// ===============================
// BOTÕES CONTINUAR
// ===============================

const nextButtons = document.querySelectorAll(".next-btn");


nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentScreen++;


        if (currentScreen < screens.length) {

            showScreen(currentScreen);

        }

    });

});




// ===============================
// CARTA DIGITANDO
// ===============================


const text = `Oi, minha Rô ❤️

Hoje completamos um mês de uma história que eu espero que dure muito.

Obrigado por cada conversa, cada sorriso e cada momento.

Você é uma pessoa incrível e eu sou muito feliz por ter você comigo.

Espero que esse seja só o primeiro capítulo de muitos.

Com muito carinho,

Seu Feh ❤️`;


let textIndex = 0;


function startTyping() {

    const letter = document.getElementById("typingText");


    if (!letter) return;


    letter.innerHTML = "";

    textIndex = 0;


    function write() {


        if (textIndex < text.length) {


            letter.innerHTML += text.charAt(textIndex);


            textIndex++;


            setTimeout(write, 40);


        }


    }


    write();

}





// ===============================
// CORAÇÃO
// ===============================


const heart = document.getElementById("heart");

const message = document.getElementById("message");


const messages = [

"Seu sorriso é meu lugar favorito ❤️",

"Eu amo quando você me chama de Feh 💕",

"Minha Rô é uma pessoa especial ✨",

"Obrigado por existir 🌹",

"Você deixa meus dias melhores ❤️"

];


if (heart) {


    heart.addEventListener("click", () => {


        const random = messages[
            Math.floor(Math.random() * messages.length)
        ];


        message.innerHTML = random;


        createHeart();


    });


}





// ===============================
// PRESENTE
// ===============================


const gift = document.getElementById("gift");

const giftMessage = document.getElementById("giftMessage");


if (gift) {


    gift.addEventListener("click", () => {


        gift.innerHTML = "💖";


        giftMessage.innerHTML =
        "O maior presente foi ter encontrado você, minha Rô ❤️";


        for(let i = 0; i < 10; i++){

            createHeart();

        }


    });


}






// ===============================
// CONTADOR
// ===============================


const startDate = new Date("2026-06-30T00:00:00");



function updateCounter(){


    const now = new Date();


    const difference = now - startDate;


    if(difference < 0) return;



    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        difference / (1000 * 60 * 60) % 24
    );


    const minutes = Math.floor(
        difference / (1000 * 60) % 60
    );


    const seconds = Math.floor(
        difference / 1000 % 60
    );



    const elements = {


        days,

        hours,

        minutes,

        seconds

    };



    for(let id in elements){

        const element = document.getElementById(id);

        if(element){

            element.innerHTML = elements[id];

        }

    }


}


setInterval(updateCounter,1000);

updateCounter();





// ===============================
// CORAÇÕES FLUTUANDO
// ===============================


function createHeart(){


    const heart = document.createElement("div");


    heart.innerHTML = "❤️";


    heart.className = "heart";


    heart.style.left =
    Math.random() * 100 + "vw";


    heart.style.fontSize =
    Math.random()*20+20+"px";



    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },6000);


}




// ===============================
// RECOMEÇAR
// ===============================


const restart = document.getElementById("restart");


if(restart){


    restart.addEventListener("click",()=>{


        currentScreen = 0;


        showScreen(0);


    });


}
