const recycleBtn = document.getElementById("recycle-btn");
recycleBtn.addEventListener("click", recycle);
const recycleSelect = document.getElementById("recycle-select");
const recycleBin = document.getElementById("recycle-bin");
const infoParagraph = document.getElementById("info-paragraph");

let itemList = [];

function recycle() {
    let item = recycleSelect.value;

    if (itemList.length === 10) {
        infoParagraph.innerText =
            "The Recycle bin is FULL!\n  Please empty it to continue!";
        recycleBtn.innerText = "Empty Bin";
        recycleBtn.addEventListener("click", emptyBin);
    } else {
        itemList.push(item);
        recycleBin.innerText = itemList;
    }
}

function emptyBin() {
    itemList = [];
    recycleBin.innerText = "";
    recycleBtn.innerText = "Recycle";
    recycleBtn.removeEventListener("click", emptyBin);

    infoParagraph.innerText = "Recycled items will appear above ⬆️";
}

// Task: Wire up the <select> tag and recycle button so that an emoji of the selected item appears in the DOM each time the recycle button is pressed.

// stretch goal 1️⃣ Add an item limit to indicate when the recycle bin is full

// stretch goal 2️⃣: Add the option to empty the bin.

// stretch goal 3️⃣: Animate adding the items to the bin.
