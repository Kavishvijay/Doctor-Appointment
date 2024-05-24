const firebaseConfig = {
    apiKey: "AIzaSyAPdy0I1HEPhCJI6A0XBfGMOJWW8wY2T6o",
    authDomain: "patient-data-eed8d.firebaseapp.com",
    databaseURL: "https://patient-data-eed8d-default-rtdb.firebaseio.com",
    projectId: "patient-data-eed8d",
    storageBucket: "patient-data-eed8d.appspot.com",
    messagingSenderId: "240650625742",
    appId: "1:240650625742:web:606dcf78c971efc90a669f",
  };

  firebaseConfig.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var firstname = getInputVal('fname');
  var lastname = getInputVal('Lname');
  var email = getInputVal('email');
  var phone = getInputVal('phone-number');
  var date = getInputVal('birth-date');
  var blood = getInputVal('blood-group');
  var sugar = getInputVal('Sugar-level');
  var message = getInputVal('Your-Concerns');

  // Save message
  saveMessage(firstname, lastname, email, phone,date,blood,sugar, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, lastname, email, phone,date,blood,sugar, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: firstname,
    Lname:lastname,
    email:email,
    phone:phone,
    date:date,
    blood:blood,
    Sugar:sugar,
    message:message
  });
}