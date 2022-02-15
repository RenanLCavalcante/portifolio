$(function () {

  $(window).scroll(function (event) {
    var $nav = $(".navbar.bg-light");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $nav.toggleClass('mt-5', $(this).scrollTop() < $nav.height());
  });

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

  $('#my-years-old').text(getAge());

  function getAge() {
    let today = new Date();
    let birthDate = new Date("1996-10-05");
    var age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  };

  emailjs.init('user_QW0RVBYEWjqExneUn94UB');

  $('#formEmail').submit(function(event){
    event.preventDefault();

    let serviceID = 'service_ww6jnxb';
    let templateID = 'template_d7m2lb9';

    $('#btn-send-email').val("Sending....");
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        $('#btn-send-email').val("Sended !! :D");
        Swal.fire({
          title: "Success!",
          text: "E-mail sent",
          icon: 'success',
          confirmButtonText: 'OK'
        })
        $('#btn-send-email').val("Send");
        this.reset();
      }, (err) => {
        Swal.fire({
          title: "Error!",
          text: "Error: " + JSON.stringify(err),
          icon: 'error',
          confirmButtonText: 'OK'
        })
      });
  })
});