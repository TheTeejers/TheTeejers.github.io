  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC1qFsZW1fGpQfAtQpVcB6N5V-qVWc_nWI",
    authDomain: "contactform-84bf0.firebaseapp.com",
    databaseURL: "https://contactform-84bf0.firebaseio.com",
    projectId: "contactform-84bf0",
    storageBucket: "",
    messagingSenderId: "461320208738"
  };
  firebase.initializeApp(config);

//referenece message collection

var messagesRef = firebase.database().ref('messages')

//listen to submit form

document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form

function submitForm(event){
  event.preventDefault();

  //get values

  var name = getInputValue('name');
  var email = getInputValue('email');
  var company = getInputValue('company');
  var phoneNumber = getInputValue('phoneNumber');
  var message = getInputValue('message');

  saveMessage(name, email, company, phoneNumber, message);

  //show alert

document.querySelector('.alert').style.display = 'block';

//hide alert after three seconds

setTimeout(function(){
  document.querySelector('.alert').style.display = 'none'
},3000);

// clear out form
document.getElementById('contactForm').reset();
}

//get form values

function getInputValue(id) {
  return document.getElementById(id).value;

}


// save messages to firebase

function saveMessage(name, email, company, phoneNumber, message){
  var newMessagesRef = messagesRef.push();
  newMessagesRef.set({
    name: name,
    email: email,
    company: company,
    phoneNumber: phoneNumber,
    message: message
  });
}
