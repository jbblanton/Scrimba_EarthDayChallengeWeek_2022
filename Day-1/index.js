// POEM: Forests are green, oceans are blue. Keep the earth clean, for me and for you

const obj = {
  color1: "green",
  color2: "blue",
  planet: "Earth",
  adjective: "clean",
  emojis: ["🚂", "🌍", "🛼", "🍩", "🏖", "🎠", "🔮"],

  sentence: function () {
    //maybe some code here 🤔

    // Stretch #2
    // this.color2 = 'purple'

    // let poem = `${this.emojis[1]}\n \n Forests are ${this.color1},\n oceans are ${this.color2}.\n Keep the ${this.planet} ${this.adjective},\n for me and for you.\n \n ${this.emojis[1]}`

    // document.querySelector('#poem').innerText = poem

    // Stretch #3
    let poem = `${this.emojis[1]}<br><br> Forests are <strong style="color:green;">${this.color1}</strong>,<br> oceans are <strong style="color:blue;">${this.color2}</strong>.<br> Keep the ${this.planet} <em>${this.adjective}</em>,<br> for me and for you.<br><br> ${this.emojis[1]}`;

    document.querySelector("#poem").innerHTML = poem;
  },
};

obj.sentence();

// Task: Changing only the code ABOVE (lines 1-15), complete the poem and render it on the page.

// stretch goal 1️⃣: Render the most suitable emoji from the emojis array in the object somewhere in our poem.

// stretch goal 2️⃣: Without changing the object declaration above, change sea color to purple!

// stretch goal 3️⃣: Without changing the CSS file, style the values added from the object.
