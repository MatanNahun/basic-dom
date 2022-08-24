const playingField = document.getElementById("playing-field");
console.log(playingField);

const down = document.getElementById("down");
down.innerHTML = "Down";

playingField.style.backgroundColor = "blue";

document.getElementById("ball").style.backgroundColor = "yellow";

document.getElementById("ball").style.left = "0px";

document.getElementById("ball").style.top = "0px";

const moveRight = function () {
  let add = parseInt(document.getElementById("ball").style.left);
  add = add + 15;
  console.log(add + "px");
  document.getElementById("ball").style.left = add + "px";
};

const moveLeft = function () {
  let add = parseInt(document.getElementById("ball").style.left);
  add = add - 15;
  console.log(add + "px");
  document.getElementById("ball").style.left = add + "px";
};

const moveUp = function () {
  let add = parseInt(document.getElementById("ball").style.top);
  add = add - 15;
  console.log(add + "px");
  document.getElementById("ball").style.top = add + "px";
};

const moveDown = function () {
  let add = parseInt(document.getElementById("ball").style.top);
  add = add + 15;
  console.log(add + "px");
  document.getElementById("ball").style.top = add + "px";
};

// const header = document.createElement("h2");
// header.innerHTML = "The Best Game Ever";
// header.style.color = "#c0392b";
// header.style.fontFamily = "Helvetica";
// document.body.appendChild(header);

// const subHeader = document.createElement("h1");
// subHeader.innerHTML = "Great course";
// subHeader.setAttribute("class", "sub-header");
// document.body.appendChild(subHeader);

// const box = document.getElementById("box");

// const enterColor = function () {
//   box.style.backgroundColor = "#c0392b";
//   box.innerHTML = "AHH GO AWAY";
// };

// const leaveColor = function () {
//   box.style.backgroundColor = "#1abc9c";
//   box.innerHTML = "Hover over me!";
// };

// const clickBox = function () {
//   box.style.backgroundColor = "#8e44ad";
// };

// const clickList = function () {
//   const newItem = document.createElement("li");
//   newItem.innerHTML = "New Item";
//   document.getElementById("list").appendChild(newItem);
// };
