$(document).ready(function () {

  $('.skillsCarousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  document.getElementById('formEmail')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      const btn = document.getElementById('button').value = "Sending...";

      const serviceID = 'service_';
      const templateID = 'template_';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = btnFormValue;
          Swal.fire({
            title: "Success!",
            text: "E-mail sent",
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }, (err) => {
          btn.value = btnFormValue;
          Swal.fire({
            title: "Error!",
            text: "Error: " + JSON.stringify(err),
            icon: 'error',
            confirmButtonText: 'OK'
          })
        });
    }
    );
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar.bg-light");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $nav.toggleClass('mt-5', $(this).scrollTop() < $nav.height());
  });
});