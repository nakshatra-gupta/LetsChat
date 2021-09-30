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

username = localStorage.getItem("User_Name");
document.getElementById("Welcome").innerHTML = "Welcome " + username;

function AddRoom()
{
room_name = document.getElementById("Room_Name").value;
firebase.database().ref("/").child(room_name).update({
  childkey: "AddingRoomName" 
});
localStorage.setItem("room_name", room_name);
window.location = "LetsChat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'> # " + Room_names + "</div> <hr>";
document.getElementById("previous_rooms").innerHTML = row;
      });});}

getData();

function redirectToRoomName(name) 
{
console.log(name);
localStorage.setItem("Room_Name", name);
window.location = "LetsChat_page.html";
}
