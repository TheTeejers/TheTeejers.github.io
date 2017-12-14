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
  database = firebase.database();

  var ref = database.ref('messages');
  ref.on('value', gotData, errData);


//get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');
const btnSignUp = document.getElementById('btnSignUp');

//add login
btnLogin.addEventListener('click', event =>{
   // window.location.reload(true);
  //get email and password
  const email =txtEmail.value;
  const pass =txtPassword.value;
  const auth =firebase.auth();
  //sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);

  promise.catch(event => console.log('logged in'));
});

//logout and refresh page to remove data from console
btnLogout.addEventListener('click', event => {
  firebase.auth().signOut();
  window.location.reload(true);
});

//add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log('logged in');
  } else {
    console.log('not logged in');
  }
});


// get data
function gotData(data){
  var inputData = [];
  // console.log(data.val());
  for(var x in data.val()) {
    inputData.push(data.val()[x]);
  }
  for (var i = 0; i < inputData.length; i++){
  $('ol').append('<li><h1>' + inputData[i].name + '</h1><p class ="comapanyName"> Company: ' + inputData[i].company +'</p><p class ="email">Email: '+ inputData[i].email +'</p><p class="Phone Number">' + inputData[i].phoneNumber + '</p><p class="message">Message: '+ inputData[i].message +'</p></li>');
console.log(inputData[i]);
}
}



function errData(err) {
  console.log('Error!');
  console.log(err);
}




