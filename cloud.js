// let clouds = [".cloud0",.cloud1", ".cloud2"];
let clouds = [".cloud0", ".cloud1"];

let cloudType = () => Math.floor(Math.random() * clouds.length);

document.querySelector(".canvas").appendChild(createCloud(clouds, cloudType));

//-----

function createCloud(arr, elem) {
  let size = (Math.floor(Math.random() * (6 - 3)) + 3) * 0.25;
  console.log("the size is: ", size);

  // let cloud = createItem("div", arr[elem]);
  let cloud = createItem("div", "cloud0");
  let topSection = createItem("div", "top");
  let bottomSection = createItem("div", "bottom");
  cloud.appendChild(topSection);
  cloud.appendChild(bottomSection);
  // let c = createSection(elem);

  let topLeft = createItem("div", "cloud0-top-left");
  let topMiddle = createItem("div", "cloud0-top-middle");
  let topRight = createItem("div", "cloud0-top-right");

  topSection.append(topLeft, topMiddle, topRight);
  const random = Math.random() < 0.5;
  if (!random) {
    cloud.style.transform = "scaleX(-1)";
  }
  cloud.style.transform += `scale(${size})`;

  return cloud;
}

function createItem(elem, style) {
  let result = document.createElement(elem);
  result.classList.add(style);
  return result;
}

function createSection(elem) {
  let c = [];
  let num = elem;
  console.log("The cloudType num is:", num);
  c[0] = `cloud${num}-top-left`;
  c[1] = `cloud${num}-top-middle`;
  c[2] = `cloud${num}-top-right`;
  return c;
}

function randomTypeFunc() {}
