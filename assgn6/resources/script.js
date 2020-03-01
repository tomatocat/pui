function pickSize(e) {
  document.getElementsByClassName("stylebutton") //set back to default

  //change the one clicked
}

function pickColor(e) {
   var target = e.target,
       status = e.target.classList.contains('active');

   e.target.classList.add(status ? 'inactive' : 'active');
   e.target.classList.remove(status ? 'active' : 'inactive'); 
}
