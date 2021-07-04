$(document).ready(function () {

  //Smooth Scroll
  $(".smooth-scroll").click(function (event) {
    event.preventDefault();

    var gato = this.hash;

    $("html").animate(
      {
	scrollTop: $(gato).offset().top - 85,
      },
      800
    );
  });

//TOOLTIP
$("[data-toggle='tooltip']").tooltip();

});
