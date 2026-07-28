// =================================
// PRESENTE PARA RÔ ❤️🌸🌿
// Feh & Rô - 1 mês
// =================================



const screens = document.querySelectorAll(".screen");

let currentScreen = 0;




function showScreen(number){

    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    if(screens[number]){

        screens[number].classList.add("active");

    }

}





// =================================
// BOTÃO INICIAL
// =================================


document
.querySelector(".start")
.addEventListener("click",()=>{


    currentScreen = 1;

    showScreen(currentScreen);

    createGarden(20);


});








// =================================
// PRÓXIMAS TELAS
// =================================


document
.querySelectorAll(".next")
.forEach(button=>{


    button.addEventListener("click",()=>{


        currentScreen++;


        if(currentScreen < screens.length){

            showScreen(currentScreen);

            createGarden(8);

        }


    });


});








// =================================
// CARTA DIGITANDO
// =================================


const letter = `

Oi, minha Rô ❤️


Hoje completamos nosso primeiro mês.


Pode parecer pouco tempo,
mas foi tempo suficiente para você
se tornar alguém muito especial para mim.


Obrigado por cada conversa,
cada sorriso,
cada momento.


Eu espero que esse seja apenas
o começo de muitos capítulos
da nossa história.


Com carinho,

Seu Feh ❤️

`;



let letterIndex = 0;



function writeLetter(){


    const element =
    document.getElementById("letter");


    if(letterIndex < letter.length){


        element.innerHTML +=
        letter.charAt(letterIndex);


        letterIndex++;


        setTimeout(writeLetter,45);


    }


}



setTimeout(writeLetter,1200);








// =================================
// CORAÇÃO ❤️
// =================================


const heart =
document.getElementById("heart");


const heartText =
document.getElementById("heartText");



const messages = [

"Meu lugar favorito é perto de você ❤️",

"Obrigado por me fazer sorrir, Rô 🌸",

"Você é uma pessoa muito especial 💚",

"Eu amo quando você me chama de Feh 🥰",

"Nosso primeiro mês de muitos ❤️"

];



heart.addEventListener("click",()=>{


    heartText.innerHTML =
    messages[
        Math.floor(Math.random()*messages.length)
    ];


    floatingHeart();


});









// =================================
// ESTRELAS ⭐
// =================================


document
.querySelectorAll(".stars span")
.forEach(star=>{


    star.addEventListener("click",()=>{


        document
        .getElementById("starText")
        .innerHTML =
        "Você ilumina meus dias igual uma estrela ✨💚💗";


        createGarden(12);


    });


});








// =================================
// PRESENTE 🎁
// =================================



const gift =
document.getElementById("gift");


gift.addEventListener("click",()=>{


    gift.innerHTML="💖";


    document
    .getElementById("giftText")
    .innerHTML =
    "O maior presente foi ter encontrado você, Rô ❤️🌿";


    createGarden(30);


    for(let i=0;i<8;i++){

        floatingHeart();

    }


});








// =================================
// CONTADOR ⏳
// =================================



const beginning =
new Date("2026-06-30T00:00:00");



function counter(){


    const now =
    new Date();


    const time =
    now - beginning;



    const days =
    Math.floor(
    time/(1000*60*60*24)
    );


    const hours =
    Math.floor(
    time/(1000*60*60)%24
    );


    const minutes =
    Math.floor(
    time/(1000*60)%60
    );


    const seconds =
    Math.floor(
    time/1000%60
    );



    document.getElementById("days").innerHTML=days;

    document.getElementById("hours").innerHTML=hours;

    document.getElementById("minutes").innerHTML=minutes;

    document.getElementById("seconds").innerHTML=seconds;


}



setInterval(counter,1000);

counter();









// =================================
// JARDIM CAINDO 🌸🌿
// =================================


function createGarden(amount){


    const area =
    document.getElementById("effects");



    const elements = [

        "🌸",

        "🌿",

        "🍃",

        "🌷"

    ];



    for(let i=0;i<amount;i++){


        const item =
        document.createElement("div");


        item.className="petal";


        item.innerHTML =
        elements[
            Math.floor(Math.random()*elements.length)
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









// =================================
// CORAÇÕES FLUTUANDO ❤️
// =================================



function floatingHeart(){


    const area =
    document.getElementById("effects");



    const heart =
    document.createElement("div");


    heart.className =
    "floating-heart";


    heart.innerHTML="❤️";



    heart.style.left =
    Math.random()*100+"vw";



    heart.style.animationDuration =
    (3+Math.random()*4)+"s";



    area.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },7000);


}









// =================================
// RECOMEÇAR
// =================================



document
.querySelector(".restart")
.addEventListener("click",()=>{


    currentScreen=0;


    showScreen(0);


    letterIndex=0;


    document
    .getElementById("letter")
    .innerHTML="";


});
