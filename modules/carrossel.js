export default function initCarrossel() {
  $(".carrossel").slick({
    dots: true,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    autoplay: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
  });

  $(".carrosselMobile").slick({
    dots: true,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    autoplay: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".carrossel").on(
    "beforeChange",
    (event, slick, currentSlide, nextSlide) => {
      const proximoElemento =
        slick.$slides[nextSlide].lastChild.previousElementSibling;

      const currentElemento =
        slick.$slides[currentSlide].lastChild.previousElementSibling;

      if (currentSlide === nextSlide) {
        currentElemento.classList.add("ativarAnimacao");
      } else if (currentSlide < nextSlide) {
        proximoElemento.classList.add("ativarAnimacao");
        currentElemento.classList.remove("ativarAnimacao");
        currentElemento.classList.add("desativarAnimacao");
        proximoElemento.classList.remove("desativarAnimacao");
      } else if (currentSlide > nextSlide) {
        proximoElemento.classList.add("ativarAnimacao");
        currentElemento.classList.remove("ativarAnimacao");
        currentElemento.classList.add("desativarAnimacao");
        proximoElemento.classList.remove("desativarAnimacao");
      }
    }
  );

  $(".carrosselMobile").on(
    "beforeChange",
    (event, slick, currentSlide, nextSlide) => {
      const proximoElemento =
        slick.$slides[nextSlide].lastChild.previousElementSibling;

      const currentElemento =
        slick.$slides[currentSlide].lastChild.previousElementSibling;

      if (currentSlide === nextSlide) {
        currentElemento.classList.add("ativarAnimacao");
      } else if (currentSlide < nextSlide) {
        proximoElemento.classList.add("ativarAnimacao");
        currentElemento.classList.remove("ativarAnimacao");
        currentElemento.classList.add("desativarAnimacao");
        proximoElemento.classList.remove("desativarAnimacao");
      } else if (currentSlide > nextSlide) {
        proximoElemento.classList.add("ativarAnimacao");
        currentElemento.classList.remove("ativarAnimacao");
        currentElemento.classList.add("desativarAnimacao");
        proximoElemento.classList.remove("desativarAnimacao");
      }
    }
  );
}
