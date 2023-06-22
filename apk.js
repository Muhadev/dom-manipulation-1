// DOM MANIPULATION

// Event Listener 

// element.addeventlistener("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn () {
    alert('I also love playing Football');
}

buttonTwo.addEventListener("click", alertBtn);

// MOUSEOVER

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue';    

};

newBackgroundColor.addEventListener("mouseover", changeBgColor);