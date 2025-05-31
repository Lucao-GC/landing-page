function enviarEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };
  const serviceID = "service_dmf2bvf";
  const templateID = "template_02tm2sa";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      console.log(res);
      alert("Ebook enviado ");
    })
    .catch((err) => console.log(err));
}
