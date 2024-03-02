// tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// click enviar correo
$("#enviarCorreo").on("click", function () {
  alert("El correo fue enviado correctamente...");
});

// cambio de color de los textos
$("#tituloingredientes,#titulopreparacion").on("dblclick", function () {
  $(this).css({
    color: "red",
  });
});

// cerra /abrir seccin de las cards
$(".card-title").click(function () {
  $(this).closest(".card").find(".card-text").toggle();
});

// smooth scroll
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
