document.addEventListener('DOMContentLoaded', function () {

    const boxContainer = document.querySelector('#box-container');
    const newBoxButton = document.querySelector('#new-box-button');
    const colorForm = document.querySelector('#color-form');
    const colorInput = document.querySelector('#color-input');

    let boxColor = 'violet';
    let boxIdCounter = 1;

    function addNewBox() {
        const newBox = document.createElement('div');
        const boxId = `Box ${boxIdCounter}`;
        newBox.className = 'box';
        newBox.innerText = boxId;
        newBox.style.backgroundColor = boxColor;
        newBox.setAttribute('box-id', boxId);

        boxContainer.appendChild(newBox);

        boxIdCounter++;
    }

    newBoxButton.addEventListener('click', function () {
        addNewBox();
    })

    document.addEventListener("dblclick", function (e) {
        if (e.target.classList.contains('box'))
            e.target.remove();
    })

    colorForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const userColor = colorInput.value.trim();

        const boxes = document.querySelectorAll('.box');
        for (let box of boxes)
            box.style.backgroundColor = userColor;

        colorInput.value = '';

        boxColor = userColor;

    })

    document.addEventListener('keydown', function (e) {
        if (e.target.id === 'color-input')
            return;

        if (e.key === 'n' || e.key === 'N')
            addNewBox();
    })

    document.addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('box')) {
            const rect = e.target.getBoundingClientRect();
            e.target.innerText = `x: ${rect.x}, y: ${rect.y}`
        }

    })

    document.addEventListener('mouseout', function (e) {
        if (e.target.classList.contains('box'))
            e.target.innerText = e.target.getAttribute('box-id');
    })

});
