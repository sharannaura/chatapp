
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDdtGqWmyBcovBBqrxeTSGPubATAPn3wc4",
      authDomain: "class94-64522.firebaseapp.com",
      projectId: "class94-64522",
      storageBucket: "class94-64522.appspot.com",
      messagingSenderId: "657736927239",
      appId: "1:657736927239:web:f7e07e85366b7d6c23c2a2"
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();



