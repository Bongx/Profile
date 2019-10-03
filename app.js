//When the user clicks read more button
let myFunction = () => {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//media queries
let myFunction1 = () => {
  let x = document.getElementById("myNavBar");

  if (x.className === "navbar") {
    x.className += "responsive";
  } else {
    x.className = "navbar";
  }
}
//Responsive Nav Bar
let myNav = () => {
  var x = document.getElementById("demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }

}