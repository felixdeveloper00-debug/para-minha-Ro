// ===============================
// CONFIGURAÇÕES
// ===============================


const startDate = new Date("2026-06-30T00:00:00");



// ===============================
// TROCA DE TELAS
// ===============================


const screens = document.querySelectorAll(".screen");

let currentScreen = 0;



function showScreen(index){

    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    screens[index].classList.add("active");


}




// ===============================
// BOTÃO INICIAL
// ===============================


const openGift = document.getElementById("openGift");


openGift.addEventListener("click",()=>{


    showScreen(1);


});




// ===============================
// BOTÕES PRÓXIMO
// ===============================


const nextButtons = document.querySelectorAll(".next-btn");


nextButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        currentScreen++;


        if(currentScreen < screens.length){

            showScreen(currentScreen);

        }


    });


});





// ===============================
// CARTA DIGITANDO
// ===============================


const letter = `

Hoje faz um mês desde que nossa história começou.

Pode parecer pouco tempo para algumas pessoas...

Mas para mim foi tempo suficiente para perceber o quanto você é especial.

Obrigado por cada conversa, cada risada e cada momento.

Você chegou e deixou meus dias mais felizes.

Espero viver muitos capítulos ao seu lado.

Obrigado por existir, minha Rô ❤️


`;



let letterIndex = 0;


function typeLetter(){


    const element =
    document.getElementById("typingText");


    if(!element) return;



    if(letterIndex < letter.length){


        element.innerHTML += letter.charAt(letterIndex);


        letterIndex++;


        setTimeout(typeLetter,45);


    }


}



openGift.addEventListener("click",()=>{


    setTimeout(typeLetter,1000);


});






// ===============================
// CORAÇÃO COM FRASES
// ===============================


const messages=[


"Seu sorriso é meu lugar favorito ❤️",


"Eu amo seu jeitinho 💕",


"Obrigado por me fazer feliz 🌹",


"Você é meu presente favorito ✨",


"Eu amo quando você me chama de Feh ❤️",


"Minha Rô é incrível 💖"


];



const heartButton =
document.getElementById("heartButton");



const loveMessage =
document.getElementById("loveMessage");



if(heartButton){


heartButton.addEventListener("click",()=>{


    const random =
    messages[Math.floor(Math.random()*messages.length)];


    loveMessage.innerHTML=random;



    createHeart();



});


}






// ===============================
// ESTRELAS
// ===============================



const starMessages=[


"Nosso primeiro capítulo ✨",


"Ainda temos muitas histórias para viver ❤️",


"Você ilumina meus dias 🌙",


"Obrigado por estar comigo 💕"


];



const stars =
document.querySelectorAll(".click-star");



const starMessage =
document.getElementById("starMessage");



stars.forEach(star=>{


star.addEventListener("click",()=>{


    starMessage.innerHTML =

    starMessages[
        Math.floor(Math.random()*starMessages.length)
    ];



    createHeart();


});


});







// ===============================
// JARDIM
// ===============================


const garden =
document.getElementById("gardenArea");



if(garden){


garden.addEventListener("mousemove",()=>{


    createFlower();


});



garden.addEventListener("touchstart",()=>{


    createFlower();


});


}




function createFlower(){


    const flower =
    document.createElement("div");


    flower.className="flower";


    flower.innerHTML="🌸";



    flower.style.left =
    Math.random()*90+"%";


    flower.style.top =
    Math.random()*80+"%";


    garden.appendChild(flower);


}







// ===============================
// PRESENTE
// ===============================



const giftBox =
document.getElementById("giftBox");



const giftText =
document.getElementById("giftText");



if(giftBox){


giftBox.addEventListener("click",()=>{


    giftBox.classList.add("gift-open");


    giftText.innerHTML =

    "O melhor presente foi conhecer você, minha Rô ❤️";


    for(let i=0;i<20;i++){

        createHeart();

    }


});


}







// ===============================
// CONTADOR
// ===============================



function updateCounter(){


    const now = new Date();



    const difference =
    now - startDate;



    if(difference < 0) return;



    const days =
    Math.floor(
    difference /
    (1000*60*60*24)
    );



    const hours =
    Math.floor(
    difference /
    (1000*60*60)
    ) % 24;



    const minutes =
    Math.floor(
    difference /
    (1000*60)
    ) % 60;



    const seconds =
    Math.floor(
    difference /
    1000
    ) % 60;



    document.getElementById("days").innerHTML=days;

    document.getElementById("hours").innerHTML=hours;

    document.getElementById("minutes").innerHTML=minutes;

    document.getElementById("seconds").innerHTML=seconds;



}



setInterval(updateCounter,1000);

updateCounter();







// ===============================
// CORAÇÕES
// ===============================



function createHeart(){


    const heart =
    document.createElement("div");


    heart.className="heart";


    heart.innerHTML="❤️";



    heart.style.left =
    Math.random()*100+"vw";



    heart.style.fontSize =
    (Math.random()*20+20)+"px";



    document.body.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },6000);



}







// ===============================
// PÉTALAS
// ===============================



function createPetal(){


    const petal =
    document.createElement("div");



    petal.className="petal";


    petal.innerHTML="🌸";



    petal.style.left =
    Math.random()*100+"vw";


    petal.style.fontSize =
    (Math.random()*15+15)+"px";



    document.body.appendChild(petal);



    setTimeout(()=>{


        petal.remove();


    },10000);


}



setInterval(createPetal,800);






// ===============================
// FINAL
// ===============================


const restart =
document.getElementById("restart");



if(restart){


restart.addEventListener("click",()=>{


    currentScreen=0;


    showScreen(0);


});


}




// Easter egg:
// Clique 5 vezes no coração


let secretClicks=0;



if(heartButton){


heartButton.addEventListener("click",()=>{


    secretClicks++;


    if(secretClicks===5){


        alert(

        "❤️ Você encontrou o cantinho secreto do Feh para a Rô."


        );


    }



});


}
