let isDragging = false;
let offsetX, offsetY;

var movingCircle = document.getElementById("movingCircle");

// Store the original position of the circle
var originalX = parseFloat(movingCircle.getAttribute("cx"));
var originalY = parseFloat(movingCircle.getAttribute("cy"));

// Function to update circle position
function updateCirclePosition(event) {
  // Get current mouse position
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // Calculate the angle between the circle and the cursor position
  var deltaX = mouseX - originalX;
  var deltaY = mouseY - originalY;
  var angle = Math.atan2(deltaY, deltaX);

  // Move the circle a few pixels in the direction of the angle
  var moveDistance = 5; // Adjust this value to change the distance to move
  var newX = originalX + moveDistance * Math.cos(angle);
  var newY = originalY + moveDistance * Math.sin(angle);

  // Update circle position
  movingCircle.setAttribute("cx", newX);
  movingCircle.setAttribute("cy", newY);
}

// Add mousemove event listener to the document
document.addEventListener("mousemove", updateCirclePosition);

const draggable = document.getElementById("draggable");
function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

draggable.addEventListener("mousedown", startDragging);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", stopDragging);

// Random placement only if not on mobile device
if (!isMobileDevice()) {
  const randomNum1 = Math.floor(Math.random() * 501);
  const randomNum2 = Math.floor(Math.random() * -50);
  draggable.style.left = randomNum1 + "px";
  draggable.style.top = 300 + randomNum2 + "px";
}

const blackCircle = document.getElementById(
  "SVGID_00000036226542102459594150000003604458304442471818_"
);

// Variables to store previous mouse position
let prevMouseX = 0;
let prevMouseY = 0;

window.onload = function () {
  var pastelColors = [
    "#f7b7ea"
    // "#FFCCCC",
    // "#CCFFCC",
    // "#CCCCFF",
    // "#FFFFCC",
    // "#FFCCFF",
    // "#CCFFFF",
    // "#FFB2B2",
    // "#FFCCE5",
    // "#B2EBF2",
    // "#FFD699",
    // "#D9B3FF",
    // "#B3FFB3",
    // "#B3B3FF",
    // "#FFE0B2",
    // "#B3FFFF",
    // "#FFB3B3",
    // "#FFB3FF",
    // "#B3FFB3",
    // "#B3B3FF",
    // "#FFF0B3",
    // "#F5DEB3",
    // "#ffcc66",
    // "#FFF5EE",
    // "#FFFACD",
    // "#FFEFD5",
    // "#E0FFFF",
    // "#FFD700",
  ];

  // Randomly select a pastel color
  // var randomColor =
  //   pastelColors[Math.floor(Math.random() * pastelColors.length)];

  // Apply the color to the body background
  // document.body.style.backgroundColor = randomColor;
  var backgrounds = [
    "background2.png",
    "background3.png",
    "background1.png",
    "background4.png",
    "background5.png",
    "background6.png",
  ]; // Add more backgrounds as needed
  var randomIndex = Math.floor(Math.random() * backgrounds.length);
  var selectedBackground = backgrounds[randomIndex];
  var imgDiv = document.getElementById("img");
  // imgDiv.style.backgroundImage = 'url("' + selectedBackground + '")';
  // document.getElementById('link').style.color = randomColor;
};

let timeoutId;

function resetTimer() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(changeBackgroundAndColor, 2000);
}

if (!isMobileDevice()) {
  document.addEventListener("mousemove", resetTimer);
}

function toggleImpressum() {
  const impressum = document.getElementById("imprint");
  if (impressum.style.display === "" || impressum.style.display === "none") {
    impressum.style.display = "block";
  } else {
    impressum.style.display = "none";
  }
  const draggable = document.getElementById("draggable");
  draggable.style.display = draggable.style.display === "none" ? "block" : "none";
  const firstAElement = document.querySelector("a:nth-of-type(1)");
  const secondAElement = document.querySelector("a:nth-of-type(2)");

  firstAElement.style.display = firstAElement.style.display === "none" ? "block" : "none";
  secondAElement.style.display = secondAElement.style.display === "none" ? "block" : "none";
}

function changeBackgroundAndColor() {
  const pastelColors = [
    "#f7b7ea"
    // "#FFCCCC",
    // "#CCFFCC",
    // "#CCCCFF",
    // "#FFFFCC",
    // "#FFCCFF",
    // "#CCFFFF",
    // "#FFB2B2",
    // "#FFCCE5",
    // "#B2EBF2",
    // "#FFD699",
    // "#D9B3FF",
    // "#B3FFB3",
    // "#B3B3FF",
    // "#FFE0B2",
    // "#B3FFFF",
    // "#FFB3B3",
    // "#FFB3FF",
    // "#B3FFB3",
    // "#FFF0B3",
    // "#F5DEB3",
    // "#ffcc66",
    // "#FFF5EE",
    // "#FFFACD",
    // "#FFEFD5",
    // "#E0FFFF",
    // "#FFD700",
  ];
  const randomColor =
    pastelColors[Math.floor(Math.random() * pastelColors.length)];

  // Animate background color transition
  document.body.style.transition = "background-color 1s";
  document.body.style.backgroundColor = randomColor;

  const backgrounds = [
    "background2.png",
    "background3.png",
    "background1.png",
    "background4.png",
    "background5.png",
    "background6.png",
  ];
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const selectedBackground = backgrounds[randomIndex];
  const imgDiv = document.getElementById("img");

  // Animate background image transition
  imgDiv.style.transition = "background-image 1s";
  // imgDiv.style.backgroundImage = 'url("' + selectedBackground + '")';

  // randomlyJustifyText();
  randomlyAlignP();
  // randomTextAlignment();
  randomlyOffsetP();

  resetTimer();
}

// draggable.style.left = randomNum1 + 'px';
// draggable.style.top = randomNum2 + 'px';

function startDragging(e) {
  isDragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
}

function drag(e) {
  if (!isDragging) return;
  e.preventDefault();
  draggable.style.left = e.pageX - offsetX + "px";
  draggable.style.top = e.pageY - offsetY + "px";
}

function stopDragging() {
  isDragging = false;
}

function randomlyJustifyText() {
  const h1Elements = document.querySelectorAll("h1");

  if (!isMobileDevice()) {
    h1Elements.forEach((h1) => {
      const randomJustification = Math.random() < 0.5 ? "left" : "right"; // Randomly choose 'left' or 'right'
      h1.style.textAlign = randomJustification;
    });
  }
}

function randomlyAlignP() {
  const aElements = document.querySelectorAll("a");
  const firstAElement = aElements[0];
  const secondAElement = aElements[1];

  let offsetX, offsetY;

  offsetX = Math.random() * (window.innerWidth - firstAElement.offsetWidth);

  if (isMobileDevice()) {
    offsetY =
      Math.random() * (window.innerHeight / 2 - firstAElement.offsetHeight) +
      window.innerHeight / 2;
  } else {
    offsetY = Math.random() * (window.innerHeight - firstAElement.offsetHeight);
  }

  firstAElement.style.transition = "left 0.5s, top 0.5s"; // Add transition property
  firstAElement.style.left = offsetX + "px";
  firstAElement.style.top = offsetY + "px";

  offsetX = Math.random() * (window.innerWidth - secondAElement.offsetWidth);

  if (isMobileDevice()) {
    offsetY =
      Math.random() * (window.innerHeight / 2 - secondAElement.offsetHeight) +
      window.innerHeight / 2;
  } else {
    offsetY = Math.random() * (window.innerHeight - secondAElement.offsetHeight);
  }

  secondAElement.style.transition = "left 0.5s, top 0.5s"; // Add transition property
  secondAElement.style.left = offsetX + "px";
  secondAElement.style.top = offsetY + "px";
}

function randomlyOffsetP() {
  const pElements = document.querySelectorAll("p");
  pElements.forEach((p, index) => {
    let isOverlapping = true;
    isOverlapping = !isMobileDevice();
    let offsetX;
    let i = 0;

    while (isOverlapping) {
      offsetX = Math.random() * (window.innerWidth / 2 - p.offsetWidth);

      if (index === 0) {
        // For the first <p> element, place it randomly in the right 50% of the screen
        offsetX += window.innerWidth / 2; // Start from the middle and go to the right edge
      } else {
        // For the second <p> element, place it randomly in the left 50% of the screen
        offsetX += 0; // Start from left edge
      }

      isOverlapping = checkOverlap(p, offsetX);
      console.log("Is Overlapping:", isOverlapping);
    }

    p.style.transition = "left 0.5s"; // Add transition property
    p.style.left = offsetX + "px";
  });
}

function checkOverlap(element, offsetX) {
  const elementRect = element.getBoundingClientRect();

  for (let i = 0; i < document.querySelectorAll("p").length; i++) {
    const otherElement = document.querySelectorAll("p")[i];

    if (otherElement !== element) {
      const otherElementRect = otherElement.getBoundingClientRect();

      // console.log('Element Rect:', elementRect);
      // console.log('Other Element Rect:', otherElementRect);

      if (
        offsetX + elementRect.left < otherElementRect.right &&
        offsetX + elementRect.right > otherElementRect.left
      ) {
        console.log("Overlap Detected!");
        return true; // Overlapping
      }
    }
  }

  return false; // Not overlapping
}

// randomlyOffsetP();

function randomTextAlignment() {
  var alignments = ["left", "right"];
  var randomIndex = Math.floor(Math.random() * alignments.length);
  var alignment = alignments[randomIndex];

  // document.getElementById('maumau').style.textAlign = alignment;
}

randomTextAlignment();
randomlyJustifyText();
randomlyAlignP();
