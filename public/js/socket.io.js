const socket = io.connect("http://localhost:3000/");

const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

const getname = document.getElementById("getname");
const userName = document.getElementById("name");
const mask = document.getElementById("msk");

btn.addEventListener("click", function () {
  if (msg.value == "") return;
  socket.emit("message", {
    msg: msg.value,
    id: socket.id,
    name:userName.value
  });
  msg.value = "";
});

socket.on("message", function (data) {
  if (socket.id == data.id) {
    document.getElementById("chat").innerHTML +=
      "<div class='me'><div class='container__msg' id='me'>" +data.name+" : "+
      data.msg +
      "</div></div><div class='container__pending'></div>";
  } else {
    document.getElementById("chat").innerHTML +=
      "<div class='other'><div class='container__msg' id='other'>" +
      data.name +
      " : " +
      data.msg +
      "</div></div><div class='container__pending'></div>";
  }
});

getname.addEventListener("click", function () {
   mask.style.display="none";

});