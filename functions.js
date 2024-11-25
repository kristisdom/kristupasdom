document.addEventListener('DOMContentLoaded', function() {
    var themeButton = document.getElementById('themeButton');
    var body = document.body;
  
    themeButton.addEventListener('click', function() {
      if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeButton.textContent = 'Switch to Dark Theme';
      } else {
        body.classList.add('dark-theme');
        themeButton.textContent = 'Switch to Light Theme';
      }
    });
  });

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}