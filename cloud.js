let clouds = [".cloud0", ".cloud1"];
let cont = document.querySelector(".container");
let time;
// let timedCloud = function () {
//   time = (Math.floor(Math.random() * (5 - 1)) + 1) * 1000;
//   console.log("the time is:", time);
//   setTimeout(timedCloud, time);
// };
// setTimeout(timedCloud, time);

let canvas = createItem("div", "canvas");
canvas.addEventListener("animationend", () => canvas.remove());

let cloudResult = createCloud(clouds);
canvas.appendChild(cloudResult);

canvas.classList.add("cloud-anim");
let coordinates = coords();
canvas.style.top = `${coordinates[1]}px`;
console.log("the cloud coords are: ", coordinates);
document.querySelector(".container").appendChild(canvas);

//----

function createCloud(arr) {
  let random;
  let type = cloudType();
  let size = cloudSize();
  random = Math.random() < 0.5;
  let cloud = createItem("div", arr[type]);
  cloud.classList.add("cloud");
  console.log("the cloud is: ", arr[type]);

  let topSection = createItem("div", "top");
  let bottomSection = createItem("div", "bottom");
  cloud.appendChild(topSection);
  cloud.appendChild(bottomSection);
  // let c = createSection(type);

  let topLeft = createItem("div", `cloud${type}-top-left`);
  let topMiddle = createItem("div", `cloud${type}-top-middle`);
  let topRight = createItem("div", `cloud${type}-top-right`);

  topSection.append(topLeft, topMiddle, topRight);

  console.log("the size is: ", size);
  console.log("the random is: ", random);

  if (!random) {
    cloud.style.transform += `scaleX(-1) scale(${size})`;
    console.log(cloud);
  } else {
    cloud.style.transform += `scale(${size})`;
    console.log(cloud);
  }
  // cloud.classList.add("cloud-anim");

  return cloud;
}

function cloudType() {
  return Math.floor(Math.random() * clouds.length);
}

function cloudSize() {
  return (Math.floor(Math.random() * (6 - 3)) + 3) * 0.25;
}

function createItem(elem, style) {
  let result = document.createElement(elem);
  result.classList.add(style);
  return result;
}

// function createSection(num) {
//   let c = [];
//   console.log("The cloudType num is:", num);
//   c[0] = `.cloud${num}-top-left`;
//   c[1] = `.cloud${num}-top-middle`;
//   c[2] = `.cloud${num}-top-right`;
//   return c;
// }

function coords() {
  let resX =
    (Math.floor(Math.random() * (20 - 1)) + 1) *
    Math.floor(window.innerWidth / 20);

  let resY =
    (Math.floor(Math.random() * (20 - 1)) + 1) *
    Math.floor(window.innerHeight / 20);
  return [resX, resY];
}

function randomTypeFunc() {}
