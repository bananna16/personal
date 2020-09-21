let h = window.innerHeight;
let scrollTo = (window.innerHeight > window.innerWidth) ? (4 * h) / 7 : (3 * h) / 7;
let allNavLinks = document.getElementsByClassName('nav-link');
let resumeButton = document.getElementById("resume");
let primaryColor = '#6E7FF3';
let secondaryColor = 'white';

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > scrollTo || document.documentElement.scrollTop > scrollTo) {
    for (var i = 0; i < allNavLinks.length; i++) {
      allNavLinks[i].style.color = primaryColor;
    }
    resumeButton.classList.remove("btn-light")
    resumeButton.classList.add("btn-primary")
  } else {
    for (var i = 0; i < allNavLinks.length; i++) {
      allNavLinks[i].style.color = secondaryColor;
    }
    resumeButton.classList.remove("btn-primary")
    resumeButton.classList.add("btn-light")
  }
}


