function firstbutton() {
  console.log("Hello, World!")
}

function secondbutton() {
  alert("Hello, World!");
}

function thirdbutton() {
  var p = document.getElementById("third");
  p.innerHTML = "Hello, World!";
}

function fourthbutton() {
  var answer;
  var answer = prompt ("What is your name?");
  alert("Hello " + answer);
}
