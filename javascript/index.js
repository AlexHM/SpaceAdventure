var valorDado;
miStorage = localStorage;

function roll() {
    var body = document.querySelector("body");
    var dice = document.querySelector(".box");
    var values = [
        `rotateX(360deg) rotateY(360deg) translate3d(32px, 0px, 0px)`, //1
        `rotateX(-270deg) rotateY(190deg) translate3d(-50px, 0px, 0px)`, //2
        `rotateX(-90deg) rotateY(20deg) translate3d(0px, 0px, 0px)`, //3
        `rotateX(-180deg) rotateY(90deg) translate3d(0px, 0px, 32px)`, //4
        `rotateX(0deg) rotateY(450deg) translate3d(0px, 0px, 0px)`, //5
        `rotateX(-180deg) rotateY(0deg) translate3d(32px, 0px, 0px)`, //6
        `rotateX(360deg) rotateY(-360deg) translate3d(0px,0px,0px)`, //1
        `rotateX(450deg) rotateY(436deg) translate3d(0px,0px,0px)`, //2
        `rotateX(-450deg) rotateY(-150deg) translate3d(0px,0px,0px)`, //3
        `rotateX(360deg) rotateY(-450deg) translate3d(0px,0px,0px)`, //4
        `rotateX(540deg) rotateY(630deg) translate3d(0px,0px,0px)`, //5
        `rotateX(-540deg) rotateY(720deg) translate3d(0px,0px,0px)` //6
    ];
    var len = values.length;
    var rotate = values[Math.floor(Math.random() * len)];
    dice.style.transform = rotate + `scale3d(0.7,0.7,0.7)`;

    if (rotate === values[0] || (rotate === values[6] )){
        valorDado = 1;
    } else if (rotate === values[1] || (rotate === values[7])){
        valorDado = 2;
    }else if (rotate === values[2] || (rotate === values[8])){
        valorDado = 3;
    }else if (rotate === values[3] || (rotate === values[9])){
        valorDado = 4;
    }else if (rotate === values[4] || (rotate === values[10])){
        valorDado = 5;
    }else if (rotate === values[5] || (rotate === values[11])){
        valorDado = 6;
    }
    console.log(valorDado)

}

var user= "Anonymous";
function setUser() {  
    let username = document.getElementById("inpUser").value;
    localStorage.setItem("user",username)
    user = localStorage.getItem("user")
    

}


/*Script Home*/ 
var isOn = true;
    var sonido = new Audio()
    sonido.src = '/media/audio/sound.mp3';

// function sounds() {
//    sonido.volume = 0.3;
//    sonido.play();
//    console.log("dgfdg");
// }

function changeButton() {
    
    var img = document.getElementById("sound");

    
    if (isOn) {
        console.log("Hola desde mute")
        img.setAttribute("src", "/media/imgs/sound.png");
        sonido.volume = 0;
        isOn = false;
    } else {
        console.log("Hola desde sonido")
        img.setAttribute("src", "/media/imgs/soundMute.png");
        sonido.volume = 0.3;
        isOn = true;
    }
}


function printUsername(){

    let userP = document.getElementById("nameChoosed");
    let text = document.createTextNode(localStorage.getItem("user"));
    userP.appendChild(text);
    console.log(localStorage.getItem("user"))
}