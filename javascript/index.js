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

    if (rotate === values[0] || (rotate === values[6])) {
        valorDado = 1;
    } else if (rotate === values[1] || (rotate === values[7])) {
        valorDado = 2;
    } else if (rotate === values[2] || (rotate === values[8])) {
        valorDado = 3;
    } else if (rotate === values[3] || (rotate === values[9])) {
        valorDado = 4;
    } else if (rotate === values[4] || (rotate === values[10])) {
        valorDado = 5;
    } else if (rotate === values[5] || (rotate === values[11])) {
        valorDado = 6;
    }
    console.log(valorDado)
    moveUser(valorDado)
}

var user = "Anonymous";



function setUser() {

    let username = document.getElementById("inpUser").value;
    let linkStart = document.getElementById("linkStart");
    localStorage.setItem("user", username)
    user = localStorage.getItem("user")
}



function choosedAvatar(id) {
    let avatar = document.getElementById(id).getAttribute("src")
    localStorage.setItem("avatarImg", avatar)

}

/*Script Home*/
var isOn = true;
var sonido = new Audio()
sonido.src = '/media/audio/sound.mp3';

function sounds() {
    // sonido.volume = 0.3;
    // sonido.play();
    // console.log("dgfdg");

}

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


function printUsername() {



    //Set username
    let userP = document.getElementById("nameChoosed");
    let text = document.createTextNode(localStorage.getItem("user"));
    userP.appendChild(text);


    //Set img
    let userPhoto = document.getElementById("imgUserResult");
    let photo = userPhoto.setAttribute("src", localStorage.getItem("avatarImg"));


}

function startGame() {
    sounds();

}
let imgStart = document.createElement("img");
function inGame() {
    let start = document.getElementById("0");

    imgStart.setAttribute("src", localStorage.getItem("avatarImg"));
    imgStart.setAttribute("id", "imgUserResult2");

    start.appendChild(imgStart);

    printUsername();

}

let actualdiv = "0";
let cambioDinamico = "0";
function moveUser(diceValue) {

    let numero = parseInt(actualdiv);
    numero += diceValue;
    actualdiv = String(numero);
    let posicionNueva = document.getElementById(actualdiv);
    posicionNueva.appendChild(imgStart);

    showModal(posicionNueva);

}

let tittle = 1;



var questionsArray = [];

for (let i = 0; i <= 30; i++) {

    questionsArray[i] = i
}


var dict = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
    13: '13',
    14: '14',
    15: '15',
    16: '16',
    17: '17',
    18: '18',
    19: '19',
    20: '20',
    21: '21',
    22: '22',
    23: '23',
    24: '24',
    25: '25',
    26: '26',
    27: '27',
    28: '28',
    29: '29',
    30: '30',
    31: '31',
};


function showModal(newPosition) {
     
    var answerIdDict = {
        1: 'r',
        2: 'i1',
        3: 'i2',
    }

    questionToShow = Math.floor(Math.random() * (30 - 0)) + 0;
    answersShow = Math.floor(Math.random() * (3 - 1)) + 1;

    let answerDict = {
        1: `<div class="form-check"> 
                <input class="form-check-input" type="checkbox" value="" id="r">  
                    <label class="form-check-label" for="flexCheckDefault"> 
                    ${json.questions[dict[questionToShow]].r} 
                </label> 
        </div>`,
        2: `<div class="form-check"> 
                <input class="form-check-input" type="checkbox" value="" id="i1">  
                    <label class="form-check-label" for="flexCheckDefault"> 
                    ${json.questions[dict[questionToShow]].i1} 
        
                </label> 
            </div>`,
        3: `<div class="form-check"> 
                <input class="form-check-input" type="checkbox" value="" id="i2">  
                    <label class="form-check-label" for="flexCheckDefault"> 
                        ${json.questions[dict[questionToShow]].i2} 
                    </label> 
            </div>`
    }

    var myModal = new bootstrap.Modal(document.getElementById('QUESTIONMODAL'), {
        keyboard: false,
        backdrop: false,
        focus: false
    })
    var myModalTittle = document.getElementById('modal-tittle')
    myModalTittle.innerHTML = 'Question ' + tittle
    tittle++

    var myModalBody = document.getElementById('modal-body');
    myModalBody.innerHTML = `<div class="container-fluid">    
                                <div class="row">        
                                    <p class="display-6">${json.questions[dict[questionToShow]].q}</p>
                                </div>   
                                    <div class="row"> 
                                 
                                        ${answerDict[1]}


                                    ${answerDict[2]}

                       

                                        ${answerDict[3]}

                                    
                                  </div>
                                </div>`
    delete dict[questionToShow]
    myModal.show();


}







function setTittle() {

}


function setBody() {

}


function checkResult() {
    var isChecked1 = document.getElementById('r').checked;
    var isChecked2 = document.getElementById('i1').checked;
    var isChecked3 = document.getElementById('i2').checked;
    if (isChecked1 && !isChecked2) {
        alert('correcto');

        // FUNCION QUE HAGA SUMAR UN DIGITO A LA RESPUESTA CORRECTA
    } else {
        alert('incorrecto');

        // FUNCION QUE HAGA RESTAR UN CORAZON DE LA VIDA
    }
}

const json = {
    "questions": [{
        "q": "What’s the name of our planet?",
        "i1": "Mars",
        "i2": "Plutton",
        "r": "Earth"
    },
    {
        "q": "Which is the biggest planet in Solar System?",
        "r": "Jupiter",
        "i1": "Saturn",
        "i2": "Mercury"
    },
    {
        "q": "What’s the name of the biggest Star we have?",
        "i1": "Moon",
        "r": "Earth",
        "i2": "Sun"
    },
    {
        "q": "Which one is the red planet?",
        "r": "Mars",
        "i1": "Uranus",
        "i2": "Venus"
    },
    {
        "q": "What’s the name of the satellite we can only see at night?",
        "i1": "Andromeda",
        "r": "Moon",
        "i2": "Sun"
    },
    {
        "q": "How many planets are there in the Solar System?",
        "i1": "10",
        "i2": "9",
        "r": "8"
    },
    {
        "q": "Is Plutton a planet?",
        "i1": "I don't known",
        "r": "No",
        "i2": "Yes"
    },
    {
        "q": "Which is the smallest planet in the Solar System?",
        "i1": "Venus",
        "i2": "Uranus",
        "r": "Mercury"
    },
    {
        "q": "How many moons does Jupiter have?",
        "i1": "1",
        "i2": "2",
        "r": "8"
    },
    {
        "q": "How many times does the Sun turn around the Earth in 1 year?",
        "r": "none",
        "i2": "365",
        "i1": "1"
    }, {
        "q": "Is the Earth round or flat?",
        "i1": "Flat",
        "r": "Round",
        "i2": "Ask Darth Vader"
    },
    {
        "q": "What’s the nickname of the Earth?",
        "i1": "The blue lagoon",
        "i2": "THe Rock",
        "r": "The Blue Planet"
    },
    {
        "q": "How many times does the Earth turn around the Sun each year?",
        "r": "none",
        "i1": "365",
        "i2": "1"
    },
    {
        "q": "Does the moon turn around the Sun?",
        "i1": "Yes",
        "r": "No",
        "i2": "Maybe"
    },
    {
        "q": "Does the moon turn around the Earth?",
        "i1": "No",
        "i2": "Maybe",
        "r": "Yes"
    },
    {
        "q": "Which colour is the Sun?",
        "r": "White",
        "i1": "Red",
        "i2": "Yellow"
    },
    {
        "q": "Is the Sun hot or cold instead?",
        "i1": "Alohomora",
        "r": "Hot",
        "i2": "Cold"
    },
    {
        "q": "Is there any oxygen on the Moon?",
        "r": "None",
        "i1": "Some",
        "i2": "Plenty"
    },
    {
        "q": "Is there any gravity on the Moon?",
        "i1": "Some",
        "r": "0",
        "i2": "to much we can't stand it"
    },
    {
        "q": "Does the Moon shine by itself?",
        "i1": "Of course it does",
        "i2": "Yes",
        "r": "No"
    },
    {
        "q": "Which was the name of the mission that landed on the Moon?",
        "i1": "Apollo12",
        "i2": "Apollo Creed",
        "r": "Apollo 11"
    },
    {
        "q": "If we begin counting from the Sun, which is the Earths position?",
        "i1": "1",
        "r": "3",
        "i2": "8"
    },
    {
        "q": "Are there any planets formed by gas?",
        "i1": "No",
        "i2": "All of them are",
        "r": "Yes"
    },
    {
        "q": "Why do we live on the Earth instead of Mars, for example?",
        "i1": "Wingarium Leviosa",
        "r": "Because of the atmosphere",
        "i2": "Because the Earth rocks"
    },
    {
        "q": "What would happen if the Moon came closer?",
        "i1": "Merge with the Earth",
        "i2": "Dinosaurs return",
        "r": "Gravity would change"
    },
    {
        "q": "Is there any chance we can live in another planet?",
        "r": "Yes",
        "i1": "No",
        "i2": "We will create a new planet"
    },
    {
        "q": "When are we closer to the sun, during Summer or Winter?",
        "r": "Winter",
        "i1": "Summer",
        "i2": "We do not move"
    },
    {
        "q": "How long does it take to the Earth to turn around the Sun?",
        "i1": "365 hours",
        "i2": "365 years",
        "r": "365 days"
    },
    {
        "q": "Does the Earth turn around the Moon?",
        "i1": "Every day",
        "r": "Never",
        "i2": "Every 100 years"
    },
    {
        "q": "Do the planets remain in the same spot in space or do they move instead?",
        "r": "They move",
        "i1": "They do because Harry Potter threw a Petrifficus Totallus spell on them",
        "i2": "They do remain put"
    },
    {
        "q": "Why do rockets set on fire when they come back to Earth?",
        "i1": "Because they're excited to come back",
        "i2": "Because Lord Voldemort threw them an Incendio spell",
        "r": "Because of the atmosphere"
    }


    ]
}