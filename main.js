fondb = document.getElementById('caseb');
piano = document.getElementById('piano');
const fond = document.getElementById('fond');
const h1 = document.getElementById('h1')
const notes = document.getElementById('notes')
piano.style.display = "flex"
// piano.style.flexDirection= "column"
piano.style.alignItems = "center"
piano.style.justifyContent = "center"
piano.style.borderRadius = "20px"
piano.style.backgroundColor = "white"
piano.style.width = "80%"
fondb.style.display = "flex"
fondb.style.flexDirection = "column"
fondb.style.alignItems = "center"
fondb.style.justifyContent = "center"
fondb.style.borderRadius = "20px"
fondb.style.backgroundColor = "white"
fondb.style.width = "80%"
fond.style.height = "100%"

fond.style.display = "flex"
fond.style.flexDirection = "column"
fond.style.alignItems = "center"
fond.style.justifyContent = "center"
fond.style.gap = "100px"
h1.style.fontSize = "50px"
h1.style.fontFamily = " Work Sans, sans-serif"
notes.style.display = "flex"
notes.style.flexDirection = "column"
notes.style.alignItems = "center"
notes.style.justifyContent = "center"
notes.style.fontFamily = " Work Sans, sans-serif"
notes.style.fontSize= "50px"





const son = [new Audio("./son/1.mp3"), new Audio("./son/2.mp3"), new Audio("./son/3.mp3"), new Audio("./son/4.mp3"), new Audio("./son/5.mp3"), new Audio("./son/6.mp3"), new Audio("./son/7.mp3")]

const note = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"]



for (let i = 0; i < son.length; i++) {




    const button = document.createElement('button');
    button.innerText = i + 1;
    piano.appendChild(button);

    button.addEventListener('click', () => {
        son[i].play()
        notes.innerText = note[i]
    })
    if (i % 2) {
        button.style.backgroundColor = "black"
        button.style.color = "white"
    }
    else {
        button.style.backgroundColor = "white"
    }
}


