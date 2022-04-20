const actionsArr = [
  {
    name: "recycledPaper",
    emoji: "📄",
    text: "recycled paper",
    good: true,
  },
  {
    name: "boughtSecondHand",
    emoji: "🛍",
    text: "bought 2nd hand",
    good: true,
  },
  {
    name: "tookTrain",
    emoji: "🚂",
    text: "took train",
    good: true,
  },
  {
    name: "leftLightsOn",
    emoji: "💡",
    text: "left lights on",
    good: false,
  },
  {
    name: "drippingTap",
    emoji: "🚰",
    text: "let tap drip",
    good: false,
  },
  {
    name: "leftCarRunningWhileDucksCrossed",
    emoji: "🦆",
    text: "left car running while ducks crossed road",
    good: false,
  },
];

const pointsEl = document.getElementById("points-p");
const btnsContainer = document.getElementById("btns-container"); // a div
let ptVal = 0;
let activityCt = 0;

function renderBtns() {
  // 1. Render buttons onto page
  // 2. Update points
  const bodyEl = document.querySelector("body");
  const ptText = pointsEl.innerText.substring(2);

  actionsArr.forEach((action, idx) => {
    // make a button
    let newBtn = document.createElement("button");
    newBtn.innerHTML = `${action.emoji} ${action.text}`;
    newBtn.value = action.good;
    // stretch goal 1️⃣: Change each button color, green for good activities, red for bad.
    action.good
      ? (newBtn.className = "btn btn-good")
      : (newBtn.className = "btn btn-bad");
    newBtn.name = action.name;
    newBtn.addEventListener("click", function () {
      // stretch goal 3️⃣: Add an activity count.
      activityCt++;
      newBtn.value === "true" ? (ptVal += 5) : (ptVal -= 5);
      // stretch goal 2️⃣: Change the background color to reflect the user's total points. 0 or above = green, below 0 = red.
      ptVal < 0
        ? bodyEl.classList.add("btn-bad")
        : bodyEl.classList.remove("btn-bad");
      pointsEl.innerText = `${ptVal} points earned for ${activityCt} actions today!`;

      console.log(activityCt);
    });
    // add to the DOM
    btnsContainer.appendChild(newBtn);
  });
}

renderBtns();

// Task: For each action in actionsArr, render a button on the page which matches the design on the slide.
// The button should show:
// 1. the emoji
// 2. the action name
// 3. Add +5 points to the user’s score for good actions, and -5 for bad actions on click
// 4. Update the points total in the DOM on click
