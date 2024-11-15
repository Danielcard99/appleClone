export default function initFooter() {
  const footerLista = document.querySelectorAll(".footerLista .tituloFooter");
  const slideList = document.querySelectorAll(".slideList");

  footerLista.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("ativo");
      item.nextElementSibling.classList.toggle("ativo");
    });
  });
}
