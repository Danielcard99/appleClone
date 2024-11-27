export default function initHeader() {
  const headerLi = document.querySelectorAll(
    ".headerDesktop ul li:not(.exclude)"
  );
  const body = document.body;
  const headerDesktop = document.querySelectorAll(".headerDesktop");

  function addTransparencia() {
    body.classList.add("transparente");
    headerDesktop.forEach((header) => (header.style.backgroundColor = "white"));
  }

  function removeTransparencia() {
    body.classList.remove("transparente");
    headerDesktop.forEach((header) => (header.style.backgroundColor = ""));
  }

  function funcionamentoBody() {
    headerLi.forEach((item) => {
      item.addEventListener("mouseover", addTransparencia);
      item.addEventListener("mouseout", removeTransparencia);
    });
  }

  funcionamentoBody();
}
