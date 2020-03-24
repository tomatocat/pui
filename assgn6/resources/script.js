function init() {
  // localStorage.setItem("cart-items", JSON.stringify([])); // for testing
  if (localStorage.getItem("cart-items") === null) {
    localStorage.setItem("cart-items", JSON.stringify([]));
  }

  localStorage.setItem("cart-qty", JSON.parse(localStorage.getItem("cart-items")).length);
  document.getElementById("cart-qty").innerHTML = localStorage.getItem("cart-qty");

  if (document.getElementById("cart-grid") != null) {
    loadCart();
  }
}

function Item(image, title, qty, size, color, id) {
  this.image = image;
  this.title = title;
  this.qty = qty;
  this.size = size;
  this.color = color;
  this.id = id;
}

function loadCart() {
  var itemArray = JSON.parse(localStorage.getItem("cart-items"));
  var itemsGrid = document.getElementById("cart-items");
  for (item of itemArray) {
    var newItem = document.createElement("DIV");
    newItem.classList.add("cart-item");
    newItem.id = item.id;
    if (item === itemArray[0]) {
      newItem.classList.add("first-item");
    }

    var img = document.createElement("IMG");
    img.setAttribute("src", item.image);
    newItem.appendChild(img);

    var info = document.createElement("DIV");
    info.classList.add("cart-item-info");

    var title = document.createElement("H3");
    title.innerHTML = item.title + " <span class='price'>$0</span>";
    info.appendChild(title);
    var qty = document.createElement("H4");
    qty.innerHTML = "Qty: <span class='selected'>" + item.qty + "</span>";
    info.appendChild(qty);
    var size = document.createElement("H4");
    size.innerHTML = "Size: <span class='selected'>" + item.size + "</span>";
    info.appendChild(size);
    var color = document.createElement("H4");
    color.innerHTML = "Color: <span class='selected'>" + item.color + "</span>";
    color.innerHTML += " <a href='' class='remove-item' onclick='removeCart(this)'>Remove</a>"
    info.appendChild(color);
    newItem.appendChild(info);

    itemsGrid.appendChild(newItem);
  }
}

function pickSize(e) {
  var buttons = document.getElementsByClassName("select-size");
  document.getElementById("size-text").innerHTML = e.id;
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
  document.getElementById("color-text").innerHTML = e.value;
  for (item of buttons) {
    if (item === e) {
      item.classList.add("active");
    } else {
      item.className = "select-color";
    }
  }
}

function restore() {
  document.getElementById("add-cart").innerHTML = "Add to Cart";
}

function addCart(image, title) {
  document.getElementById("add-cart").innerHTML = "Added!";
  window.setTimeout(restore, 850);

  var qty = document.getElementById("qty").selectedIndex + 1;
  var size = document.getElementsByClassName("select-size active")[0].id;
  var color = document.getElementsByClassName("select-color active")[0].value;
  var itemArray = JSON.parse(localStorage.getItem("cart-items"));
  itemArray.push(new Item(image, title, qty, size, color, Date.now()));
  localStorage.setItem("cart-items", JSON.stringify(itemArray));

  var total = parseInt(localStorage.getItem("cart-qty"));
  localStorage.setItem("cart-qty", total + 1);
  document.getElementById("cart-qty").innerHTML = total + 1;
}

function removeCart(e) {
  var toRemove = e.parentElement.parentElement.parentElement;
  var itemArray = JSON.parse(localStorage.getItem("cart-items"));
  var i;
  for (i = 0; i < itemArray.length; i++) {
    if (itemArray[i].id == toRemove.id) {
      break;
    }
  }
  itemArray.splice(i, 1);
  localStorage.setItem("cart-items", JSON.stringify(itemArray));
}

window.onload = init;