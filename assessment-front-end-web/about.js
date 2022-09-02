console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Thanks for your feedback! Your message has been recieved.');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



function alertDuck(evt) {
	evt.preventDefault()

	alert('Nice hair today :)');
}

let duckAlert = document.querySelector('#duck');

duckAlert.addEventListener('mouseover', alertDuck);