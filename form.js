const scriptURL = 'https://script.google.com/macros/s/AKfycbypkKr8gGhKygmyHmR3i135joz8VQzvDR3BtRYd3cFKpgSKEN_1fsmcUJJbZRd42JfE/exec';
const form = document.forms['contact-port'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const alrtSuccess = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // btn-kirim none, btn-loading tampil
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // btn-loading none, btn-kirim tampil
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');

      // alert dan finish
      alrtSuccess.classList.toggle('d-none');
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
