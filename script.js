let i = 0;
let txt = "Java Backend Developer.";
let speed = 75;

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("user-detail-name").style.color = "white";
    document.getElementById("demo1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // reset the index when it reaches the end of the text
    i = 0;
    // clear the text
    document.getElementById("demo1").innerHTML = "";
    // make the recursive call
    document.getElementById("user-detail-name").style.color = "#71e281";
    setTimeout(typeWriter, speed);
  }
}

var myNav = document.getElementById("nav-menu");
var myNav2 = document.getElementById("main");
window.onscroll = function () {
  if (document.documentElement.scrollTop >= 15) {
    myNav.classList.add("nav-colored");
    myNav2.classList.add("nav-colored");
    // myNav.classList.remove("nav-transparent");
  } else {
    // myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    myNav2.classList.remove("nav-colored");
  }
};

GitHubCalendar(".calendar", "hoshiyarjyani", {
  responsive: true,
  global_stats: false,
  tooltips: true,
});

document.getElementById("resume-button-1").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/16rdkBqNuaSTC4TMVWpN2thxc1Cg8MEwV/view?usp=share_link"
  );
};

document.getElementById("resume-link-2").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/16rdkBqNuaSTC4TMVWpN2thxc1Cg8MEwV/view?usp=share_link"
  );
};

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.display = "block";
}