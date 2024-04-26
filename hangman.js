let letters = "abcdefghijklmnopqrstuvwxyz";
lettersdiv = document.querySelector(".letters");
let letterarray = Array.from(letters);
let container = document.getElementsByClassName("container")[0];

for (let i = 0; i < letterarray.length; i++) {
  let letterspan = document.createElement("span");
  letterspan.className = "letterspan";
  let lettertext = document.createTextNode(letterarray[i]);
  letterspan.appendChild(lettertext);
  lettersdiv.appendChild(letterspan);
}

let words = {
  counties: ["egypt", "seryia", "palastine", "qatar", "oman"],
  programming: ["php", "javascript", "css", "python"],
  movies: [
    "robanzil",
    "frozen",
    "simba",
    "mollan",
    "senderilla",
    "zootrobules",
  ],
};

let allkeys = Object.keys(words);
let wordrandomnumer = Math.floor(Math.random() * allkeys.length);
let nameofkeys = allkeys[wordrandomnumer];

let contentofkeys = words[nameofkeys];
let keysrandomofnumber = Math.floor(Math.random() * contentofkeys.length);
let element = contentofkeys[keysrandomofnumber];

document.querySelector("header span").innerHTML = nameofkeys;
let letterguess = document.querySelector(".letters-guess");
let letterelement = Array.from(element);
for (let i = 0; i < letterelement.length; i++) {
  let createletters = document.createElement("span");
  createletters.className = "allspans";
  letterguess.appendChild(createletters);
}

let wrong = 1;
let found = false;
let correct = 0;
let divs = document.querySelectorAll(".drow div");
let allspans = document.querySelectorAll(".allspans");
document.addEventListener("click", function (e) {
  found = false;
  if (e.target.className === "letterspan") {
    e.target.classList.add("clicked");
    for (let i = 0; i < element.length; i++) {
      if (e.target.textContent.toLowerCase() === element[i].toLowerCase()) {
        allspans[i].innerHTML = element[i];
        found = true;
        correct++;
      }
    }
    if (found === false) {
      divs[wrong - 1].classList.add(`wrong-${wrong}`);
      wrong++;
      if (wrong > 7) {
        container.classList.add("opa");
        setTimeout(function () {
          let popup = document.createElement("div");
          popup.className = "pop";
          let poptext = document.createTextNode(
            `Game over the world is ${element}`
          );
          popup.appendChild(poptext);
          document.body.appendChild(popup);
        }, 1000);
        lettersdiv.classList.add("delete");
      }
    } else if (found === true && correct == element.length) {
      container.classList.add("opa");
      setTimeout(function () {
        let popup2 = document.createElement("div");
        popup2.className = "pop";
        let poptext2 = document.createTextNode(`Gongratulations`);
        popup2.appendChild(poptext2);
        document.body.appendChild(popup2);
      }, 1000);
      lettersdiv.classList.add("delete");
    }
  }
});
