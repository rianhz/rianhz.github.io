function SendMail() {
  var params = {
    from_name: document.getElementById('nama').value,
    from_email: document.getElementById('email').value,
    by_pesan: document.getElementById('pesan').value,
  };

  emailjs.send('service_m6bzei9', 'template_oq1osn8', params).then(function () {
    alert('Success');
  });
}
