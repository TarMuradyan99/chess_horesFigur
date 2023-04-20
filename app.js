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