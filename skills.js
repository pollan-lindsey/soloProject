//write submit and reset button
//call back function
//event listener
// add .value to getelementbyid

//get necessary html elements; add .value to the end when referring to them

let password = document.getElementById('password');
let confirmPW = document.getElementById('confirm-password');
let firstName = document.getElementById('fname');
let submitBttn = document.getElementById('button');
let form = document.getElementById('my-form');



// //add event listener to form 
// submitBttn.addEventListener('submit', (event) => {
// //if passwords don't match, don't submit
//     event.preventDefault();
// //if password === confirm password submit form
// if (password.value === confirmPW.value){
//     form.submit();
//     alert('Thank you for signing up!')
// } else {
//     alert('Passwords do not match');
// }})

submitBttn.addEventListener('click', function () {
    form.submit();
    alert('Thank you for signing up!')
});