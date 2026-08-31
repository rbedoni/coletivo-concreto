document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var note = form.querySelector('.form-status');
      if (note) {
        note.textContent = 'Recebido. A equipe responde em até 1 dia útil.';
      }
      form.reset();
    });
  }
});
