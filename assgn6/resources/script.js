function pickSize(e) {
  var buttons = document.getElementsByClassName("select-size");
  for (item of buttons) {
    if (item === e) {
      item.classList.add("active");
    } else {
      item.className = "select-size";
    }
  }
}

function pickColor(e) {
  var buttons = document.getElementsByClassName("select-color");
  for (item of buttons) {
    if (item === e) {
      item.classList.add("active");
    } else {
      item.className = "select-color";
    }
  }
}

function addCart() {
  document.getElementById("cart-qty").innerHTML++;
}