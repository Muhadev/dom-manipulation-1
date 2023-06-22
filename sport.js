// DOM MANIPULATION 

// EVENT DELEGATION

// document.querySelector('#football').addEventListener
// ('click', function(e) {
//     console.log('Football is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }

    
// })
// document.querySelector('#basketball').addEventListener
// ('click', function(e) {
//     console.log('Football is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }

    
// })
// document.querySelector('#boxing').addEventListener
// ('click', function(e) {
//     console.log('Football is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }

    
// })
// document.querySelector('#tennis').addEventListener
// ('click', function(e) {
//     console.log('Football is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }

    
// })
// document.querySelector('#golf').addEventListener
// ('click', function(e) {
//     console.log('Football is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }

    
// })

document.querySelector('#sports').addEventListener

('click', function(e) {

    console.log(e.target.getAttribute('id') + ' is clicked')


    const target = e.target;
    if(target.matches('li')) {
        target.style.backgroundColor = 'Red'
    }
}) 

const sports = document.querySelector('#sports');

const newSport = document.createElement('li');

newSport.innerText = 'rugby';

newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);