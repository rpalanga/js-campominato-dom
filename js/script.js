
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

// Ogni cella ha un numero progressivo, da 1 a 100.

// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// Quando l'utente clicca su ogni cella,

//  la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità :muscolo::carnagione-2:

const playerButton = document.querySelector("#player");

playerButton.addEventListener("click", function(){
    const gridElement = document.querySelector(`#griglia`)



    let numberCell;

    let levelGame = document.querySelector("#level")

    if (levelGame.value == "easy" ) {
        
        numberCell = 100;

    } else if (levelGame.value == "medium") {

        numberCell = 81;
    } else {

        numberCell = 49;
    }

    gridElement.className = levelGame.value
    gridElement.innerHTML = "";


for (let i = 1; i <= numberCell; i++){

    const newElement = document.createElement("div")
    newElement.classList.add("square")

    console.log(newElement)

    newElement.innerHTML = i;


   



    

    newElement.addEventListener("click", function (){
        
        this.classList.toggle("action")



    })






    gridElement.append(newElement)
}
})


// const gridElement = document.querySelector(`#griglia`)

// for (let i = 1; i <= 100; i++){

//     const newElement = document.createElement("div")
//     newElement.classList.add("square")
//     console.log(newElement)
//     newElement.innerHTML = i;

//     newElement.addEventListener("click", function (){
        
//         this.classList.toggle("action")



//     })






//     gridElement.append(newElement)
// }

// const serialNumber = Numbers ();

// function Numbers() {
//     for (i = 1; i < 100; i++){

//         con)
//     }
// }


