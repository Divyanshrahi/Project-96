
   var firebaseConfig = {
    apiKey: "AIzaSyDUoi7e8NPslEQtKXWKsDZjBt_bSfbx3a8",
    authDomain: "kwitter-app-176d9.firebaseapp.com",
    databaseURL: "https://kwitter-app-176d9-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-176d9",
    storageBucket: "kwitter-app-176d9.appspot.com",
    messagingSenderId: "223964622926",
    appId: "1:223964622926:web:96910566db031ab463931f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
    });
}
var user_name=localStorage.getItem("user_name", user_name);
  document.getElementById("user_name").innerHTML="Welcome   "+ user_name;
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
