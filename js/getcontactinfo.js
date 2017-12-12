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



//get data
function gotData(data){
  // console.log(data.val());
  var messages = data.val();
  var keys = Object.keys(messages);
  // console.log(keys);
  for (var i = 0; i <keys.length; i++) {
    var m =keys[i];
    var name = messages[m].name;
    var phoneNumber = messages[m].phoneNumber;
    var email = messages[m].email;
    var company = messages[m].company;
    var message = messages[m].message;
  // console.log(keys);

    console.log(name, phoneNumber, email, company,);
    console.log(message);
    console.log('    ');
  }

}

function errData(err) {
  console.log('Error!');
  console.log(err);
}
