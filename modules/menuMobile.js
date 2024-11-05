export default function initMenuMobile() {
  const bars = document.querySelector(".fa-bars");
  const menuMobile = document.querySelector(".menuMobile");
  const headerMobile = document.querySelector(".headerMobile");

  bars.addEventListener("click", handleClick);

  function handleClick(e) {
    e.preventDefault();
    menuMobile.classList.toggle("ativo");
    headerMobile.classList.toggle("ativo");

    if (bars.classList.value.includes("fa-bars")) {
      bars.classList.remove("fa-bars");
      bars.classList.add("fa-x");
    } else {
      bars.classList.add("fa-bars");
      bars.classList.remove("fa-x");
    }
  }
}
