const socket = io.connect("https://salty-chamber-87455.herokuapp.com/");

const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (msg.value == "") return;
  socket.emit("message", {
    msg: msg.value,
    id: socket.id,
  });
  msg.value = "";
});

socket.on("message", function (data) {
  if (socket.id == data.id) {
    document.getElementById("chat").innerHTML +=
      "<div class='me'><div class='container__msg' id='me'>" +
      data.msg +
      "</div></div><div class='container__pending'></div>";
  } else {
    document.getElementById("chat").innerHTML +=
      "<div class='other'><div class='container__msg' id='other'>" +
      data.msg +
      "</div></div><div class='container__pending'></div>";
  }
});
