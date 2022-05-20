// LISTENER
document.querySelector('.form-contact').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  let nama = document.querySelector('.nama').value;
  let email = document.querySelector('.email').value;
  let pesan = document.querySelector('.pesan').value;

  saveContact(nama, email, pesan);
}

// Save infos ke firebase
function saveContact(nama, email, pesan) {
  let newContact = contactInfo.push();

  newContact.set({
    nama: nama,
    email: email,
    pesan: pesan,
  });
}
