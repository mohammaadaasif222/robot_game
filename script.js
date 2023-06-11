const btns = document.querySelectorAll(".controls");
const play = document.querySelector("#play");
const retry = document.querySelector("#retry");
const logic_panel = document.querySelector(".logic-panel");
const cols = document.querySelectorAll(".col-style");
let panel = [];

btns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    panel.push(event.target.id);

    logic_panel.innerHTML += `<button class="btn btn-light controls ml-1 mr-1" id="left"><i class="fa-solid fa-arrow-${
      panel[panel.length - 1]
    }-long"></i></button>`;
  });
});

play.addEventListener("click", function () {
  for (let index = 0; index < panel.length; index++) {
    if (panel[index] === "right") {
      move_forward();
    } else if (panel[index] === "left") {
      move_backward();
    } else {
      panel = [];
      logic_panel.innerHTML = "";
    }
  }
});

retry.addEventListener("click", function () {});

function move_forward() {
  for (var i = 0; i < cols.length; i++) {
    var div = cols[i];
    if (div.getElementsByTagName("img").length > 0) {
      var img = document.getElementById("robot");
      var nextEl = div.nextElementSibling;
      nextEl.appendChild(img);
      break;
    }
  }
}

function move_backward() {
  for (var i = 0; i < cols.length; i++) {
    var div = cols[i];
    if (div.getElementsByTagName("img").length > 0) {
      var img = document.getElementById("robot");
      var preEl = div.previousElementSibling;
      preEl.appendChild(img);
      break;
    }
  }
}
function move_up() {
  for (var i = 0; i < cols.length; i++) {
    var div = cols[i];
    if (div.getElementsByTagName("img").length > 0) {
      var img = document.getElementById("robot");
      var preEl = div.previousElementSibling;
      preEl.appendChild(img);
      break;
    }
  }
}
