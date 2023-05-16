const button = document.querySelector('button');
const body = document.querySelector('body');

const colors = ['blue','red','yellow','brown','purple','orange','black','gold','aqua','gray','white','azure'];

function changeTheBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex];
};

body.style.backgroundColor = 'green';
button.addEventListener('click', changeTheBackground);