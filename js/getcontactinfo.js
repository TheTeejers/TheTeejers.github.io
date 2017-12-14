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

// $(document).ready(function(){
//   console.log('working');

// $.ajax({
//   method: 'GET',
//   data:'',
//   url: 'https://contactform-84bf0.firebaseio.com',
//   dataType: 'json',
//   success: onSuccess,
//   // error: onError,
// })

// });

// function onSuccess(json){
//   var count = 0;

//   for (var i =0; i < json.messages.length; i++){
//     $('#messageList').append('<li class="listName">' + json.messages[i].name + '</li>');
//     console.log(json.messages[i].name);
//   }
// }


// get data
function gotData(data){
  var inputData = [];
  // console.log(data.val());
  for(var x in data.val()) {
    inputData.push(data.val()[x]);
  }
  for (var i = 0; i < inputData.length; i++){
  $('ol').append('<li><h1>' + inputData[i].name + '</h1><p class ="comapanyName"> Company: ' + inputData[i].company +'</p><p class ="email">Email: '+ inputData[i].email +'</p><p class="Phone Number">' + inputData[i].phoneNumber + '</p><p class="message">Message: '+ inputData[i].message +'</p></li>');
console.log(inputData);
}
}

// console.log(inputData.length);
  //Object.keys(data.val())
  // var messages = data.val();
  // var keys = Object.keys(messages);
  // console.log(Object(data.val()));
  // for (var i = 0; i < keys.length; i++) {
  //   var m =keys[i];
  //   var name = data.val()[m].name;
  //   var phoneNumber = data.val()[m].phoneNumber;
  //   var email = data.val()[m].email;
  //   var company = data.val()[m].company;
  //   var message = data.val()[m].message;
  //   console.log(name, phoneNumber, email, company);
  //   console.log(message);
  //   console.log('    ');
  //   $("ol").text(data.val[1]);
    // for (var keys in m)
  // document.getElementById('messageList').innerHTML = document.getElementById('messageList').innerHTML[m];
  // for (var i = 0; i < Object.keys.length; i++){
  //   console.log('ok!');
  //   $('ol').append('<li>' + (data.val()) + '</li>');
  //   console.log(data.val.length);

  // }



// }







function errData(err) {
  console.log('Error!');
  console.log(err);
}




