const MyForm = document.getElementById('myform');
const inputNama = document.getElementById('nama');
const inputEmail = document.getElementById('email');
const inputPesan = document.getElementById('pesan');

MyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  cekInput();
  if (formValid) {
    var params = {
      from_name: inputNama.value,
      from_email: inputEmail.value,
      by_pesan: inputPesan.value,
    };
    emailjs.send('service_m6bzei9', 'template_oq1osn8', params);
    Swal.fire('Pesan Terkirim', 'Terima Kasih', 'success');
    MyForm.reset();
  }
});

function cekInput() {
  const namaValue = inputNama.value.trim();
  const emailValue = inputEmail.value.trim();
  const pesanValue = inputPesan.value.trim();

  if (namaValue == '') {
    inputNama.style.border = '2px solid red';
    formValid = false;
  } else {
    inputNama.style.border = '2px solid rgb(128, 128, 128)';
    formValid = true;
  }

  if (emailValue == '') {
    inputEmail.style.border = '2px solid red';
    formValid = false;
  } else {
    inputEmail.style.border = '2px solid rgb(128, 128, 128)';
    formValid = true;
  }

  if (pesanValue == '') {
    inputPesan.style.border = '2px solid red';
    formValid = false;
  } else {
    inputPesan.style.border = '2px solid rgb(128, 128, 128)';
    formValid = true;
  }
}
