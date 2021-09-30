// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEVYSvCMEeZP73X3l-xPwJKG5zC7tOl5Y",
    authDomain: "practice-68572.firebaseapp.com",
    databaseURL: "https://practice-68572-default-rtdb.firebaseio.com",
    projectId: "practice-68572",
    storageBucket: "practice-68572.appspot.com",
    messagingSenderId: "802046389771",
    appId: "1:802046389771:web:270eb00e257c3d2c42e10e"
  };
  
  // Initialize Firebase
  firebase.initializeApp (firebaseConfig);
user_name = localStorage.getItem("User_Name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;


//End code
    } });  }); }
getData();
function display_mssg()
{
mssg = document.getElementById("mssg").value;
firebase.database().ref(room_name).push({
    name: user_name,
    message: mssg,
    like: 0
});
document.getElementById("mssg").value = "";
}