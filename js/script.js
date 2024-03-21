
// NAV-BAR consts
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");
const n5 = document.getElementById("n5");


  // NAV-BAR consts for mobile
  const m1 = document.getElementById("m1");
  const m2 = document.getElementById("m2");
  const m3 = document.getElementById("m3");
  const m4 = document.getElementById("m4");
  const m5 = document.getElementById("m5");


// SITES consts
const header = document.querySelector("header");
const sec1 = document.querySelector('.section-1');
const sec2 = document.querySelector('.section-2');
const sec3 = document.querySelector('.section-3');
const sec4 = document.querySelector('.section-4');
// forside animation

setTimeout(function () {
    var text = document.getElementById("welcomeText").textContent;
    text = text.replace(/\n/g, " ");
  
    var element = document.getElementById("welcomeText");
    element.textContent = "";
    element.style.visibility = "visible"; // Gør teksten synlig
  
    function typeWriter(text, index) {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(function () {
          typeWriter(text, index);
        }, 20);
      }
    }
  
    typeWriter(text, 0);
  }, 2000); 



  // NAV-BAR functions

  n5.addEventListener("click", function () {
    header.style.display = "flex";
    sec1.style.display = "none";
    sec2.style.display = "none";
    sec3.style.display = "none";
    sec4.style.display = "none";
    n5.style.background = 'linear-gradient(#57a8f0, black 80%)';
    m5.style.background = 'linear-gradient(to left, #57a8f0, black 80%)';
    n1.style.background = 'black';
    n2.style.background = 'black';
    n3.style.background = 'black';
    n4.style.background = 'black';
    
    m1.style.background = 'black';
    m3.style.background = 'black';
    m4.style.background = 'black';
    m2.style.background = 'black';
    });



  n4.addEventListener("click", function () {
    
    header.style.display = "none";
    sec1.style.display = "flex";
    sec2.style.display = "none";
    sec3.style.display = "none";
    sec4.style.display = "none";
    n4.style.background = 'linear-gradient(#57a8f0, black 80%)';
    m4.style.background = 'linear-gradient(to left, #57a8f0, black 80%)';
    n1.style.background = 'black';
    n2.style.background = 'black';
    n3.style.background = 'black';
    n5.style.background = 'black';

    m1.style.background = 'black';
    m3.style.background = 'black';
    m5.style.background = 'black';
    m2.style.background = 'black';
  });

  n3.addEventListener("click", function () {
    header.style.display = "none";
    sec1.style.display = "none";
    sec2.style.display = "flex";
    sec3.style.display = "none";
    sec4.style.display = "none";
    n3.style.background = 'linear-gradient(#57a8f0, black 80%)';
    m3.style.background = 'linear-gradient(to left, #57a8f0, black 80%)';
    n1.style.background = 'black';
    n2.style.background = 'black';
    n4.style.background = 'black';
    n5.style.background = 'black';

    m1.style.background = 'black';
    m4.style.background = 'black';
    m5.style.background = 'black';
    m2.style.background = 'black';

  });

  n2.addEventListener("click", function () {
    header.style.display = "none";
    sec1.style.display = "none";
    sec2.style.display = "none";
    sec3.style.display = "flex";
    sec4.style.display = "none";
    n2.style.background = 'linear-gradient(#57a8f0, black 80%)';
    m2.style.background = 'linear-gradient(to left, #57a8f0, black 80%)';
    n1.style.background = 'black';
    n3.style.background = 'black';
    n4.style.background = 'black';
    n5.style.background = 'black';

    m1.style.background = 'black';
    m3.style.background = 'black';
    m5.style.background = 'black';
    m4.style.background = 'black';

  });
  
  n1.addEventListener("click", function () {
    header.style.display = "none";
    sec1.style.display = "none";
    sec2.style.display = "none";
    sec3.style.display = "none";
    sec4.style.display = "flex";
    n1.style.background = 'linear-gradient(#57a8f0, black 80%)';
    m1.style.background = 'linear-gradient(to left, #57a8f0, black 80%)';

    n2.style.background = 'black';
    n3.style.background = 'black';
    n4.style.background = 'black';
    n5.style.background = 'black';

    m4.style.background = 'black';
    m3.style.background = 'black';
    m5.style.background = 'black';
    m2.style.background = 'black';

  } );



  // NAV-BAR functions for mobile

  m5.addEventListener("click", function () {
    header.style.display = "flex";
    sec1.style.display = "none";
    sec2.style.display = "none";
    sec3.style.display = "none";
    sec4.style.display = "none";
    n5.style.background = 'linear-gradient(#57a8f0, black 80%)';
    m5.style.background = 'linear-gradient(to left, #57a8f0, black 80%)';
    n1.style.background = 'black';
    n2.style.background = 'black';
    n3.style.background = 'black';
    n4.style.background = 'black';

    m1.style.background = 'black';
    m3.style.background = 'black';
    m4.style.background = 'black';
    m2.style.background = 'black';
    
    
    });

    m4.addEventListener("click", function () {
    
    header.style.display = "none";
    sec1.style.display = "flex";
    sec2.style.display = "none";
    sec3.style.display = "none";
    sec4.style.display = "none";
    n4.style.background = 'linear-gradient(#57a8f0, black 80%)';
    m4.style.background = 'linear-gradient(to left, #57a8f0, black 80%)';
    n1.style.background = 'black';
    n2.style.background = 'black';
    n3.style.background = 'black';
    n5.style.background = 'black';

    m1.style.background = 'black';
    m3.style.background = 'black';
    m5.style.background = 'black';
    m2.style.background = 'black';

  });

  m3.addEventListener("click", function () {
    header.style.display = "none";
    sec1.style.display = "none";
    sec2.style.display = "flex";
    sec3.style.display = "none";
    sec4.style.display = "none";
    n3.style.background = 'linear-gradient(#57a8f0, black 80%)';
    m3.style.background = 'linear-gradient(to left, #57a8f0, black 80%)';
    n1.style.background = 'black';
    n2.style.background = 'black';
    n4.style.background = 'black';
    n5.style.background = 'black';

    m1.style.background = 'black';
    m5.style.background = 'black';
    m4.style.background = 'black';
    m2.style.background = 'black';

  });

  m2.addEventListener("click", function () {
    header.style.display = "none";
    sec1.style.display = "none";
    sec2.style.display = "none";
    sec3.style.display = "flex";
    sec4.style.display = "none";
    n2.style.background = 'linear-gradient(#57a8f0, black 80%)';
    m2.style.background = 'linear-gradient(to left, #57a8f0, black 80%)';
    n1.style.background = 'black';
    n3.style.background = 'black';
    n4.style.background = 'black';
    n5.style.background = 'black';

    m1.style.background = 'black';
    m3.style.background = 'black';
    m5.style.background = 'black';
    m4.style.background = 'black';

  });
  
  m1.addEventListener("click", function () {
    header.style.display = "none";
    sec1.style.display = "none";
    sec2.style.display = "none";
    sec3.style.display = "none";
    sec4.style.display = "flex";
    n1.style.background = 'linear-gradient(#57a8f0, black 80%)';
    m1.style.background = 'linear-gradient(to left, #57a8f0, black 80%)';
    n2.style.background = 'black';
    n3.style.background = 'black';
    n4.style.background = 'black';
    n5.style.background = 'black';
    
    m5.style.background = 'black';
    m3.style.background = 'black';
    m4.style.background = 'black';
    m2.style.background = 'black';

  } );


// hamburger-menu

const hamburger = document.querySelector(".hamburger-menu");
const navPopup = document.querySelector(".nav-popup");

hamburger.addEventListener('click', () => {
    navPopup.style.display = "flex";
});

navPopup.addEventListener('click', () => {
    navPopup.style.display = "none";
});


window.addEventListener('resize', () => {
  navPopup.style.display = "none";
});


const funny = document.querySelector(".funny");

setInterval(function () { 
  if (window.innerWidth < 1400) {
    funny.style.display = "none";
    
  }
}, 1);
