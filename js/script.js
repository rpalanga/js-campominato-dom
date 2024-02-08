
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco 
// (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git). VV

// Il computer deve generare 16 numeri casuali e inserirli in un array, in base al range della difficoltà prescelta (se abbiamo scelto facile l'array conterrà numeri casuali da 1 a 100,
//  se invece abbiamo scelto difficile l'array dovrà contenerne da 1 a 49): questi rappreseranno le posizioni delle nostre bombe :bomba:.


// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

const playerButton = document.querySelector("#player");

playerButton.addEventListener("click", function () {
    const gridElement = document.querySelector(`#griglia`)



    let numberCell;

    let levelGame = document.querySelector("#level")

    if (levelGame.value == "easy") {

        numberCell = 100;

    } else if (levelGame.value == "medium") {

        numberCell = 81;
    } else {

        numberCell = 49;
    }

    gridElement.className = levelGame.value
    gridElement.innerHTML = "";


    for (let i = 1; i <= numberCell; i++) {

        const newElement = document.createElement("div")
        newElement.classList.add("square")

        console.log(newElement)

        newElement.innerHTML = i;








        newElement.addEventListener("click", function () {

            this.classList.add("action")



        })








        gridElement.append(newElement)
    }

    let randomNumber;

    for (let i = 0; i <= 16; i++) {

        randomNumber = Math.floor(Math.random()* numberCell) + 1;

        console.log("questo è il random Number " + randomNumber)

    }

    const cellsArray = []

    while (cellsArray.length <= 16){

        const newNumber = randomNumber;
        if (! cellsArray.includes(newNumber)){
            
            cellsArray.push(newNumber)
        }
        console.log(cellsArray)
        
    }
    
    return cellsArray;
    console.log(cellsArray)

    

    

    

    




})











