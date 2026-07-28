// ================================
// PRESENTE PARA RÔ ❤️
// Feh & Rô - 1 mês
// ================================



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






// ================================
// BOTÃO INICIAL
// ================================


document
.getElementById("start")
.addEventListener("click",()=>{


    currentScreen = 1;

    showScreen(currentScreen);

    petals(15);


});







// ================================
// BOTÕES CONTINUAR
// ================================


document
.querySelectorAll(".next")
.forEach(button=>{


    button.addEventListener("click",()=>{


        currentScreen++;


        if(currentScreen < screens.length){

            showScreen(currentScreen);

            petals(8);

        }


    });


});








// ================================
// CARTA DIGITANDO
// ================================


const letterText = `

Oi, minha Rô ❤️


Hoje fazemos 1 mês.


Pode parecer pouco tempo,
mas foi tempo suficiente para você
se tornar alguém muito especial para mim.


Obrigado pelos momentos,
pelas conversas,
pelos sorrisos
e por ser essa pessoa incrível.


Espero que seja só o começo
da nossa história.


Com carinho,

Seu Feh ❤️

`;



let letterPosition = 0;



function typeLetter(){


    const letter = document.getElementById("letter");


    if(letterPosition < letterText.length){


        letter.innerHTML += letterText.charAt(letterPosition);


        letterPosition++;


        setTimeout(typeLetter,40);


    }


}



setTimeout(typeLetter,1000);








// ================================
// CORAÇÃO
// ================================



const heart =
document.getElementById("heart");


const heartText =
document.getElementById("heartText");



const heartMessages=[

"Você é meu lugar favorito ❤️",

"Obrigado por existir, Rô 💕",

"Seu sorriso melhora meu dia ✨",

"Eu adoro quando você me chama de Feh 🥰",

"Meu coração escolheu você ❤️"

];



heart.addEventListener("click",()=>{


    heartText.innerHTML =
    heartMessages[
        Math.floor(
            Math.random()*heartMessages.length
        )
    ];


    floatingHeart();


});








// ================================
// ESTRELAS
// ================================



const stars =
document.querySelectorAll(".stars span");


const starText =
document.getElementById("starText");



stars.forEach(star=>{


    star.addEventListener("click",()=>{


        starText.innerHTML =
        "Você ilumina minha vida igual uma estrela ✨❤️";


        petals(10);


    });


});









// ================================
// PRESENTE
// ================================



const gift =
document.getElementById("gift");


const giftText =
document.getElementById("giftText");



gift.addEventListener("click",()=>{


    gift.innerHTML="💖";


    giftText.innerHTML =
    "O melhor presente foi ter encontrado você, Rô ❤️";


    petals(25);


    for(let i=0;i<5;i++){

        floatingHeart();

    }


});









// ================================
// CONTADOR
// ================================



const startDate =
new Date("2026-06-30T00:00:00");



function updateCounter(){


    const now = new Date();


    const diff =
    now-startDate;



    const days =
    Math.floor(
    diff/(1000*60*60*24)
    );


    const hours =
    Math.floor(
    diff/(1000*60*60)%24
    );


    const minutes =
    Math.floor(
    diff/(1000*60)%60
    );


    const seconds =
    Math.floor(
    diff/1000%60
    );



    document.getElementById("days").innerHTML=days;

    document.getElementById("hours").innerHTML=hours;

    document.getElementById("minutes").innerHTML=minutes;

    document.getElementById("seconds").innerHTML=seconds;


}



setInterval(updateCounter,1000);

updateCounter();










// ================================
// PETALAS 🌸
// ================================



function petals(amount){



    const area =
    document.getElementById("effects");



    for(let i=0;i<amount;i++){


        const petal =
        document.createElement("div");


        petal.className="petal";


        petal.innerHTML="🌸";


        petal.style.left =
        Math.random()*100+"vw";


        petal.style.animationDuration =
        (3+Math.random()*5)+"s";



        area.appendChild(petal);



        setTimeout(()=>{

            petal.remove();

        },8000);



    }


}








// ================================
// CORAÇÕES FLUTUANTES
// ================================



function floatingHeart(){


    const area =
    document.getElementById("effects");



    const heart =
    document.createElement("div");



    heart.className="floating-heart";


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









// ================================
// RECOMEÇAR
// ================================



document
.getElementById("restart")
.addEventListener("click",()=>{


    currentScreen=0;


    showScreen(0);


    letterPosition=0;


    document.getElementById("letter").innerHTML="";


});
