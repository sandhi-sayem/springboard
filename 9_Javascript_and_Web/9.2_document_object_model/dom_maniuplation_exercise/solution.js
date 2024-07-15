// Task 1
document.getElementById('task1').innerText = "Changed using 'innerText'.";



// Task 2
document.getElementById('task2').innerHTML = '<button>Submit</button>';



// Task 3
document.body.style.backgroundColor = '#232323';



// Task 4

// const itemElements = document.getElementsByClassName('item');
// for (let i = 0; i < itemElements.length; i++)
//     itemElements[i].style.border = '2px solid black';

document.querySelectorAll('.item').forEach(item => item.style.border = '1px dotted red');



// Task 5

// document.getElementById('task5').href = 'https://www.springboard.com/';

document.querySelector('#task5').href = 'https://www.springboard.com/';



// Task 6

// document.getElementById('task6').value = 'DOM Master';

document.querySelector('#task6').value = 'DOM Master';



// Task 7

document.getElementById('task7').classList.add('new-class');

// document.querySelector('#task7').classList.add('new-class');



// Task 8

document.getElementById('task8').appendChild(document.createElement('button')).innerText = 'My Button';

// const myButton = document.createElement('button');
// myButton.innerText = 'My Button';
// document.querySelector('#task8').appendChild(myButton);



// Task 9

document.getElementById('task9').remove();

// const element = document.querySelector('#task9');
// element.parentElement.removeChild(element);