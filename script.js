console.log('Welcome To the Tic Tac Toe Game')

let click = new Audio('click.wav')
let winner = new Audio('winner.mp3')
let gameOver = new Audio('gameover.mp3')
let turn = 'X';
//change Turn
const changeTurn = () => {
    return turn == 'X' ? 'O' : 'X';
}

//check Winner
const checkWinner = () => {

    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    let boxes = document.getElementsByClassName('box');
    if((boxes[0].innerText == boxes[1].innerText) && (boxes[2].innerText == boxes[0].innerText) && (boxes[0].innerText !== "")) return true;
    else if((boxes[3].innerText == boxes[4].innerText) && (boxes[5].innerText == boxes[3].innerText) && (boxes[3].innerText)) return true;
    else if((boxes[6].innerText == boxes[7].innerText) && (boxes[8].innerText == boxes[6].innerText) && (boxes[6].innerText !== "")) return true;
    else if((boxes[0].innerText == boxes[3].innerText) && (boxes[6].innerText == boxes[3].innerText) && (boxes[0].innerText !== "")) return true;
    else if((boxes[1].innerText == boxes[4].innerText) && (boxes[7].innerText == boxes[1].innerText) && (boxes[1].innerText !== "")) return true;
    else if((boxes[2].innerText == boxes[5].innerText) && (boxes[8].innerText == boxes[2].innerText) && (boxes[2].innerText !== "")) return true;
    else if((boxes[0].innerText == boxes[4].innerText) && (boxes[8].innerText == boxes[0].innerText) && (boxes[0].innerText !== "")) return true;
    else if((boxes[2].innerText == boxes[4].innerText) && (boxes[6].innerText == boxes[2].innerText) && (boxes[2].innerText !== "")) return true;


}

//reset

const reset = () => {
        turn = 'X'
        let boxes = document.getElementsByClassName('box');

        Array.from(boxes).forEach(element => {
            let e = element.querySelector('.box-content')
            e.innerText = "";
        })

        let ele = document.getElementById('dhruv')
            ele.style.display = 'none';

}

//isFilled

const isFilled = () => {
    let boxes = document.getElementsByClassName('box');
    let isAnyBoxEmpty = false;

    for (let i = 0; i < boxes.length; i++) {
        let e = boxes[i].querySelector('.box-content');
        if (e.innerText === "") {
            isAnyBoxEmpty = true;
            break;
        }
    }

    return !isAnyBoxEmpty;
}


//Game Logic
let boxes = document.getElementsByClassName('box');
console.log(boxes)

Array.from(boxes).forEach(element => {
    let boxcontent = element.querySelector('.box-content')

    element.addEventListener('click',()=>{
        if(boxcontent.innerText == ''){
        boxcontent.innerText = turn;
        click.play();
        turn = changeTurn();
        if(checkWinner())
        {
            winner.play()
            let ele = document.getElementById('dhruv')
            ele.style.display = 'block';
            console.log("Winner is " + changeTurn());
            return
        }
        if(isFilled())
        {
            gameOver.play()
        }
    }
    })
})
