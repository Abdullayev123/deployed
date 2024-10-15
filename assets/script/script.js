let clicked_button = document.querySelector(".hamburger-button");
let activate = document.querySelector(".hidden");

let sticky_navbar = document.querySelector(".container-active");
let height_sticky_navbar = sticky_navbar.offsetHeight;
window.pageYOffset;

function active_toggle(){
  
}
function stickyElement(e) {
  let scroll_value = window.scrollY;

  if (scroll_value > height_sticky_navbar) {
    sticky_navbar.classList.add("smalled");
  } else if (scroll_value < height_sticky_navbar) {
    sticky_navbar.classList.remove("smalled");
  }
}

window.addEventListener("scroll", stickyElement);
clicked_button.addEventListener("click", () => {
  activate.classList.toggle("active");
});
