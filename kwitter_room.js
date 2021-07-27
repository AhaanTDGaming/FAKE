
var firebaseConfig = {
      apiKey: "AIzaSyCw1k6gRZvLzfl5SKl1kwYaVWVIfrrnLK0",
      authDomain: "kwitter-5821f.firebaseapp.com",
      databaseURL: "https://kwitter-5821f-default-rtdb.firebaseio.com",
      projectId: "kwitter-5821f",
      storageBucket: "kwitter-5821f.appspot.com",
      messagingSenderId: "734633141881",
      appId: "1:734633141881:web:79c3542e5ef9bb5e8056a8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
