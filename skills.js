//write submit and reset button
//call back function
//event listener
// add .value to getelementbyid

//get necessary html elements; add .value to the end when referring to them

let password = document.querySelector('#password');
let confirmPW = document.querySelector('#confirm-password');
let firstName = document.querySelector('.fname');
let submitBttn = document.getElementById('button');
let form = document.querySelector('#my-form');

let fxVid = document.querySelector('#maldonado');
let createSrc = document.createAttribute('src'); //createSrc.innerText = [add any youtube link; attach source to iframe element]

//let simonebilevideo = link

//add event listener to form 
let submitForm = (e) => {
//if passwords don't match, don't submit
    e.preventDefault();
// if password === confirm password submit form
if (password.value === confirmPW.value){
    form.reset();
    alert('Thank you for signing up!');
    console.log(`${password.innerText} ${confirmPW.innerText}`);
} else {
    alert('Passwords do not match');
}}

submitBttn.addEventListener('click', submitForm);
    // e.preventDefault();
    // alert('message');


// submitBttn.addEventListener('click', function () {
//     form.submit();
//     alert('Thank you for signing up!')
// });