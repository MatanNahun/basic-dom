console.log("hiiii");

const getRandomColor = function () {
  const niceColors = [
    "#8e44ad",
    "#3498db",
    "#c0392b",
    "#f1c40f",
    "#d35400",
    "#2ecc71",
    "#1abc9c",
    "#2c3e50",
    "#7f8c8d",
  ];

  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
};

const box = document.getElementById("box");

const enterColor = function () {
  box.style.backgroundColor = "#c0392b";
  box.innerHTML = "AHH GO AWAY";
};

const leaveColor = function () {
  box.style.backgroundColor = "#1abc9c";
  box.innerHTML = "Hover over me!";
};

const container = document.getElementById("container");

for (let i = 0; i < 3; i++) {
  console.log(i);
  const newBox = document.createElement("div");
  newBox.style.backgroundColor = getRandomColor();
  newBox.setAttribute("id", "box");
  newBox.setAttribute("class", "boxClass");
  newBox.onmouseenter = function () {
    newBox.style.backgroundColor = getRandomColor();
  };

  container.appendChild(newBox);
}

const isAllSameColor = function () {
  if (
    document.getElementsByClassName("boxClass")[0].style.backgroundColor ===
      document.getElementsByClassName("boxClass")[1].style.backgroundColor &&
    document.getElementsByClassName("boxClass")[0].style.backgroundColor ===
      document.getElementsByClassName("boxClass")[2].style.backgroundColor
  ) {
    const message = document.createElement("div");
    message.style.color = "green";
    message.innerHTML = "U did it!";
    document.body.appendChild(message);
    console.log("yessss");
  }
};
