let toggleMenu = document.querySelector(".toggle-menu");
let ul = document.querySelector(".ul");
let a = document.querySelector(".ul").getElementsByTagName("a");
var x = window.matchMedia("(max-width: 767px)");
console.log(x);
if (x.matches) {
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("toggle-menu")) {
      ul.style = `
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    `;
      for (let i = 0; i <= a.length; i++) {
        a[i].style = `
        padding: 15px;
        `;
      }
    } else {
      ul.style = "display: none;";
    }
  });
}
