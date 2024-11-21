let title_var = document.querySelector(".title");
let turn = "X";
let boxes = [];

function winner() {
  for (let i = 1; i < 10; i++) {
    boxes[i] = document.getElementById("item" + i).innerHTML;
  }
  if (boxes[1] == boxes[2] && boxes[2] == boxes[3] && boxes[1] != "") {
    let f = document.getElementById("item1").innerHTML;
    setTimeout(function () {
      alert(f + " Winner");
    }, 300);
    setTimeout(function () {
      location.reload();
    }, 700);
    document.getElementById("item" + 1).style.background = "gold";
    document.getElementById("item" + 2).style.background = "gold";
    document.getElementById("item" + 3).style.background = "gold";
  } else if (boxes[4] == boxes[5] && boxes[5] == boxes[6] && boxes[4] != "") {
    let f = document.getElementById("item4").innerHTML;
    setTimeout(function () {
      alert(f + " Winner");
    }, 300);
    setTimeout(function () {
      location.reload();
    }, 700);
    document.getElementById("item" + 4).style.background = "gold";
    document.getElementById("item" + 5).style.background = "gold";
    document.getElementById("item" + 6).style.background = "gold";
  } else if (boxes[7] == boxes[8] && boxes[8] == boxes[9] && boxes[7] != "") {
    let f = document.getElementById("item7").innerHTML;
    setTimeout(function () {
      alert(f + " Winner");
    }, 300);
    setTimeout(function () {
      location.reload();
    }, 700);
    document.getElementById("item" + 7).style.background = "gold";
    document.getElementById("item" + 8).style.background = "gold";
    document.getElementById("item" + 9).style.background = "gold";
  } else if (boxes[1] == boxes[4] && boxes[4] == boxes[7] && boxes[1] != "") {
    let f = document.getElementById("item1").innerHTML;
    setTimeout(function () {
      alert(f + " Winner");
    }, 300);
    setTimeout(function () {
      location.reload();
    }, 700);
    document.getElementById("item" + 1).style.background = "gold";
    document.getElementById("item" + 4).style.background = "gold";
    document.getElementById("item" + 7).style.background = "gold";
  } else if (boxes[2] == boxes[5] && boxes[5] == boxes[8] && boxes[2] != "") {
    let f = document.getElementById("item2").innerHTML;
    setTimeout(function () {
      alert(f + " Winner");
    }, 300);
    setTimeout(function () {
      location.reload();
    }, 700);
    document.getElementById("item" + 2).style.background = "gold";
    document.getElementById("item" + 5).style.background = "gold";
    document.getElementById("item" + 8).style.background = "gold";
  } else if (boxes[3] == boxes[6] && boxes[6] == boxes[9] && boxes[3] != "") {
    let f = document.getElementById("item3").innerHTML;
    setTimeout(function () {
      alert(f + " Winner");
    }, 300);
    setTimeout(function () {
      location.reload();
    }, 700);
    document.getElementById("item" + 3).style.background = "gold";
    document.getElementById("item" + 6).style.background = "gold";
    document.getElementById("item" + 9).style.background = "gold";
  } else if (boxes[1] == boxes[5] && boxes[5] == boxes[9] && boxes[1] != "") {
    let f = document.getElementById("item1").innerHTML;
    setTimeout(function () {
      alert(f + " Winner");
    }, 300);
    setTimeout(function () {
      location.reload();
    }, 700);
    document.getElementById("item" + 1).style.background = "gold";
    document.getElementById("item" + 5).style.background = "gold";
    document.getElementById("item" + 9).style.background = "gold";
  } else if (boxes[3] == boxes[5] && boxes[5] == boxes[7] && boxes[3] != "") {
    let f = document.getElementById("item3").innerHTML;
    setTimeout(function () {
      alert(f + " Winner");
    }, 300);
    setTimeout(function () {
      location.reload();
    }, 700);
    document.getElementById("item" + 3).style.background = "gold";
    document.getElementById("item" + 5).style.background = "gold";
    document.getElementById("item" + 7).style.background = "gold";
  } else {
    if (
      boxes[1] &&
      boxes[2] &&
      boxes[3] &&
      boxes[4] &&
      boxes[5] &&
      boxes[6] &&
      boxes[7] &&
      boxes[8] &&
      boxes[9] != ""
    ) {
      setTimeout(function () {
        alert("draw (NO Winner)");
      }, 300);
      setTimeout(function () {
        location.reload();
      }, 700);
    }
  }
}

function game(id) {
  let element = document.getElementById(id);
  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "O";
    title_var.innerHTML = "turn: O";
  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "X";
    title_var.innerHTML = "turn: X";
  }
  winner();
}
