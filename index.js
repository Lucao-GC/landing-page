let currentButton = null;

function enviarEmail(event) {
  const form = event.currentTarget.closest("form");
  if (!form.checkValidity()) {
    return;
  }
  event.preventDefault();

  const button = event.currentTarget;
  const btnText = button.querySelector(".btn-text");
  const btnLoading = button.querySelector(".btn-loading");

  currentButton = button;

  button.disabled = true;
  btnText.style.display = "none";
  btnLoading.style.display = "inline-block";
  btnLoading.innerHTML = `<img src="./assets/spinner-gif.gif" style="height: 20px;">`;

  const params = {
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
      setTimeout(openModal, 2000);
    })
    .catch((err) => {
      console.error(err);
      resetButton();
    });
}

function openModal() {
  const modal = document.getElementById("modalTy");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modalTy");
  modal.style.display = "none";
  resetButton();
}

function resetButton() {
  if (!currentButton) return;
  const btnText = currentButton.querySelector(".btn-text");
  const btnLoading = currentButton.querySelector(".btn-loading");

  currentButton.disabled = false;
  btnText.style.display = "inline";
  btnLoading.style.display = "none";
  btnLoading.innerHTML = "";
  currentButton = null;
}
