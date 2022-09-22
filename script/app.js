/* VARIABLES DECLATARION */
const game = document.querySelector('.game');
const cube = document.querySelectorAll('.cube');
const cube1 = document.querySelector('.cube-1');
const cube2 = document.querySelector('.cube-2');
const cube3 = document.querySelector('.cube-3');
const cube4 = document.querySelector('.cube-4');
const cube5 = document.querySelector('.cube-5');
const cube6 = document.querySelector('.cube-6');
const cube7 = document.querySelector('.cube-7');
const cube8 = document.querySelector('.cube-8');
const cube9 = document.querySelector('.cube-9');

/* GAME */
cube.forEach(e => {
    e.addEventListener('click', () => {
        if(e.getAttribute('dataset') == '' && e.getAttribute('dataset') != 'O' && e.getAttribute('dataset') != 'X'){
            e.setAttribute('dataset','O');
            e.innerHTML = 'O';
        }

        for(i = getRandom(1,9); i<=cube.length; i++){
            if(document.querySelector(`.cube-${i}`).getAttribute('dataset') == '' && document.querySelector(`.cube-${i}`).getAttribute('dataset') != 'O' && document.querySelector(`.cube-${i}`).getAttribute('dataset') != 'X'){
                document.querySelector(`.cube-${i}`).innerHTML = 'X';
                document.querySelector(`.cube-${i}`).setAttribute('dataset','X');
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


/* GAME LOGIC */
function gameLogic(){
    if(
        cube1.getAttribute('dataset') == 'O' &&
        cube2.getAttribute('dataset') == 'O' &&
        cube3.getAttribute('dataset') == 'O' ||
        cube4.getAttribute('dataset') == 'O' &&
        cube5.getAttribute('dataset') == 'O' &&
        cube6.getAttribute('dataset') == 'O' ||
        cube7.getAttribute('dataset') == 'O' &&
        cube8.getAttribute('dataset') == 'O' &&
        cube9.getAttribute('dataset') == 'O' ||

        cube1.getAttribute('dataset') == 'O' &&
        cube4.getAttribute('dataset') == 'O' &&
        cube7.getAttribute('dataset') == 'O' ||
        cube2.getAttribute('dataset') == 'O' &&
        cube5.getAttribute('dataset') == 'O' &&
        cube8.getAttribute('dataset') == 'O' ||
        cube3.getAttribute('dataset') == 'O' &&
        cube6.getAttribute('dataset') == 'O' &&
        cube9.getAttribute('dataset') == 'O' ||

        cube1.getAttribute('dataset') == 'O' &&
        cube5.getAttribute('dataset') == 'O' &&
        cube9.getAttribute('dataset') == 'O' ||

        cube3.getAttribute('dataset') == 'O' &&
        cube5.getAttribute('dataset') == 'O' &&
        cube7.getAttribute('dataset') == 'O'
        ){
        alert('Player is winner')
        cube.forEach(e => {
            e.innerHTML = '';
            e.setAttribute('dataset', '')
        })
    }else if(
        cube1.getAttribute('dataset') == 'X' &&
        cube2.getAttribute('dataset') == 'X' &&
        cube3.getAttribute('dataset') == 'X' ||
        cube4.getAttribute('dataset') == 'X' &&
        cube5.getAttribute('dataset') == 'X' &&
        cube6.getAttribute('dataset') == 'X' ||
        cube7.getAttribute('dataset') == 'X' &&
        cube8.getAttribute('dataset') == 'X' &&
        cube9.getAttribute('dataset') == 'X' ||

        cube1.getAttribute('dataset') == 'X' &&
        cube4.getAttribute('dataset') == 'X' &&
        cube7.getAttribute('dataset') == 'X' ||
        cube2.getAttribute('dataset') == 'X' &&
        cube5.getAttribute('dataset') == 'X' &&
        cube8.getAttribute('dataset') == 'X' ||
        cube3.getAttribute('dataset') == 'X' &&
        cube6.getAttribute('dataset') == 'X' &&
        cube9.getAttribute('dataset') == 'X' ||

        cube1.getAttribute('dataset') == 'X' &&
        cube5.getAttribute('dataset') == 'X' &&
        cube9.getAttribute('dataset') == 'X' ||

        cube3.getAttribute('dataset') == 'X' &&
        cube5.getAttribute('dataset') == 'X' &&
        cube7.getAttribute('dataset') == 'X'
    ){
        alert('Computer is winner')
        cube.forEach(e => {
            e.innerHTML = '';
            e.setAttribute('dataset', '')
        })
    }
}