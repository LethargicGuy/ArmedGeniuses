const slide = document.body;

function doThis() {
  // let name1 = document.getElementById('name'),value;
  let message1 = document.getElementById("message").value;

  window.localStorage.setItem("message_", message1);

  let temp = window.localStorage.getItem("message_");

  console.log(temp);

  document.getElementById("m5").innerHTML = temp;
}
