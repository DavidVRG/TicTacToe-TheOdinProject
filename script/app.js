/* VARIABLES DECLATARION */
const game = document.querySelector('.game');
const cube = document.querySelectorAll('.cube');

let playerResult = [];
let computerResult = [];

/* GAME */
cube.forEach(e => {
    e.addEventListener('click', () => {
        if(e.getAttribute('dataset') == '' && e.getAttribute('dataset') != 'O' && e.getAttribute('dataset') != 'X'){
            e.setAttribute('dataset','O');
            e.innerHTML = 'O';
            playerResult.push(Number(e.getAttribute('data-number')))
        }

        for(i = getRandom(1,9); i<=cube.length; i++){
            if(document.querySelector(`.cube-${i}`).getAttribute('dataset') == '' && document.querySelector(`.cube-${i}`).getAttribute('dataset') != 'O' && document.querySelector(`.cube-${i}`).getAttribute('dataset') != 'X'){
                document.querySelector(`.cube-${i}`).innerHTML = 'X';
                document.querySelector(`.cube-${i}`).setAttribute('dataset','X');
                computerResult.push(i)
                break;
            }
        }
       gameLogic()
    })
})

/* RANDOM NUMBER */
function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}


/* WIN SITUATIONS */
const winSituations = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

/* GAME LOGIC */
function gameLogic(){
    let sortedPlayerResult = playerResult.sort();
    let sortedComputerResult = computerResult.sort();

    winSituations.forEach(e => {

        if(JSON.stringify(sortedPlayerResult).includes(JSON.stringify(e[0])) &&
        JSON.stringify(sortedPlayerResult).includes(JSON.stringify(e[1])) &&
        JSON.stringify(sortedPlayerResult).includes(JSON.stringify(e[2]))
        ){
            alert('Player win!')
            reset()
        }
        
        else if(JSON.stringify(sortedComputerResult).includes(JSON.stringify(e[0])) &&
        JSON.stringify(sortedComputerResult).includes(JSON.stringify(e[1])) &&
        JSON.stringify(sortedComputerResult).includes(JSON.stringify(e[2]))
        ){
            alert('Computer win!')
            reset()
        }
    })
}

/* RESET GAME */
function reset(){
    cube.forEach(e => {
        e.setAttribute('dataset', '')
        e.innerHTML = '';
        playerResult = [];
        computerResult = [];
    })
}