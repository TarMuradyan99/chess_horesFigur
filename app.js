let mainBox = document.getElementById(`mybox`);
let arrayBoxes = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];


function draw() {
    let main = 0;
    let boxes = '';
    for (let i = 0; i < arrayBoxes.length; i++) {
        let rows = arrayBoxes[i]
        for (let j = 0; j < rows.length; j++) {
            if (main % 2 === 0) {
                boxes += `<div class="black-boxes chess-boxes" data-x="${i}" data-y="${j}"></div>`;
            } else {
                boxes += `<div class="white-boxes chess-boxes"  data-x="${i}" data-y="${j}"></div>`;
            }
            main++
        }
        main++
    }
    document.querySelector(`#mybox`).innerHTML = boxes;
    Array.from(document.querySelectorAll(`#mybox>div`)).map(el => {
        el.addEventListener(`click`,
            horseFigure
        )
    })
}
function horseFigure() {
    Array.from(document.querySelectorAll(`.chess-boxes`)).map(el => {
        el.classList.remove('item-bg');
        el.classList.remove('horse-bg');
    })
    let x = this.dataset.x
    let y = this.dataset.y
    console.log(x + ' ' + y);
    this.classList.add('item-bg');
    if (+x + 2 < 8 && +x + 2 >= 0 && +y + 1 < 8 && +y + 1 >= 0) {
        document.querySelector(`.chess-boxes[data-y="${+y + 1}"][data-x="${+x + 2}"]`).classList.add('horse-bg')
    }
    if (+x - 2 < 8 && +x - 2 >= 0 && +y + 1 < 8 && +y + 1 >= 0) {
        document.querySelector(`.chess-boxes[data-y="${+y + 1}"][data-x="${+x - 2}"]`).classList.add('horse-bg')
    }
    if (+x + 2 < 8 && +x + 2 >= 0 && +y - 1 < 8 && +y - 1 >= 0) {
        document.querySelector(`.chess-boxes[data-y="${+y - 1}"][data-x="${+x + 2}"]`).classList.add('horse-bg')
    }
    if (+x - 2 < 8 && +x - 2 >= 0 && +y - 1 < 8 && +y - 1 >= 0) {
        document.querySelector(`.chess-boxes[data-y="${+y - 1}"][data-x="${+x - 2}"]`).classList.add('horse-bg')
    }
    if (+x + 1 < 8 && +x + 2 >= 0 && +y + 1 < 8 && +y + 2 >= 0) {
        document.querySelector(`.chess-boxes[data-y="${+y + 2}"][data-x="${+x + 1}"]`).classList.add('horse-bg')
    }
    if (+x - 1 < 8 && +x - 1 >= 0 && +y + 2 < 8 && +y + 2 >= 0) {
        document.querySelector(`.chess-boxes[data-y="${+y + 2}"][data-x="${+x - 1}"]`).classList.add('horse-bg')
    }
    if (+x + 1 < 8 && +x + 1 >= 0 && +y - 2 < 8 && +y - 2 >= 0) {
        document.querySelector(`.chess-boxes[data-y="${+y - 2}"][data-x="${+x + 1}"]`).classList.add('horse-bg')
    }
    if (+x - 1 < 8 && +x - 1 >= 0 && +y - 2 < 8 && +y - 2 >= 0) {
        document.querySelector(`.chess-boxes[data-y="${+y - 2}"][data-x="${+x - 1}"]`).classList.add('horse-bg')
    }


}


draw()



let combinations = [
    [2,1],
    [-2,1],
    [2,-1],
    [-2,-1],
    [1,2],
    [-1,2],
    [1,-2],
    [-1,-2],
]