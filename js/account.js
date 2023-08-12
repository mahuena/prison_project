
function plusSlides(n) {
    showSlides(slideIndex +=n);
}
function currentSlide(n) {
    showSlides(slideIndex =n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let bars = document.getElementsByClassName("bar");
    if (n > slides.length) {slideIndex =1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < bars.length; i++)
    {
        bars[i].className = bars[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    bars[slideIndex-1].className += "active";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function openNav1() {
    document.getElementById("mySidenav1").style.width = "250px";
  }
  
  function closeNav1() {
    document.getElementById("mySidenav1").style.width = "0";
  }

  const searchBtn = document.querySelector(".search-icon");
         const cancelBtn = document.querySelector(".cancel-icon");
         const form = document.querySelector("form");
         cancelBtn.onclick = ()=>{
           searchBtn.classList.remove("hide");
           cancelBtn.classList.remove("show");
           form.classList.remove("active");
           cancelBtn.style.color = "#";
         }
         searchBtn.onclick = ()=>{
           form.classList.add("active");
           searchBtn.classList.add("hide");
           cancelBtn.classList.add("show");
         }

