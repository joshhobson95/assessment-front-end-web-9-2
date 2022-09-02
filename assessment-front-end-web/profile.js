let colorButton = document.querySelector('#color')
let placeButton = document.querySelector('#place')
let ritualButton = document.querySelector('#ritual')


const colorFunction = (event) => {
    event.preventDefault();
	alert('Green is my favorite color');
}

const placeFunction = (event) => {
    event.preventDefault();
	alert('Seattle is my favorite place');
}

const ritualFunction = (event) => {
    event.preventDefault();
	alert('Making Espresso is my favorite ritual');
}

colorButton.addEventListener('click', colorFunction)
placeButton.addEventListener('click', placeFunction)
ritualButton.addEventListener('click', ritualFunction)