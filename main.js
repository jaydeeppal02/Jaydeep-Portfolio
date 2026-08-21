// =========================
// EMAILJS INITIALIZE
// =========================

emailjs.init("8n1IMn-5p_9w45cjY");


// =========================
// SELECT ELEMENTS
// =========================

const form = document.querySelector(".contact-form");
const submitBtn = document.querySelector(".contact-btn");


// =========================
// FORM SUBMIT
// =========================

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    sendMail();
  }
});


// =========================
// VALIDATE FORM
// =========================

function validateForm() {

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const errName = document.querySelector(".name-err");
  const errEmail = document.querySelector(".email-err");
  const errMsg = document.querySelector(".msg-err");


  // Clear previous errors
  errName.innerText = "";
  errEmail.innerText = "";
  errMsg.innerText = "";

  name.classList.remove("is-invalid");
  email.classList.remove("is-invalid");
  message.classList.remove("is-invalid");


  // Email validation pattern
  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  // =========================
  // NAME
  // =========================

  if (name.value.trim() === "") {

    errName.innerText = "Name is required 😔";
    name.classList.add("is-invalid");

    name.focus();

    return false;
  }


  // =========================
  // EMAIL
  // =========================

  if (email.value.trim() === "") {

    errEmail.innerText = "Email is required 😔";
    email.classList.add("is-invalid");

    email.focus();

    return false;
  }


  if (!emailPattern.test(email.value.trim())) {

    errEmail.innerText = "Please enter a valid email 😔";
    email.classList.add("is-invalid");

    email.focus();

    return false;
  }


  // =========================
  // MESSAGE
  // =========================

  if (message.value.trim() === "") {

    errMsg.innerText = "Message is required 😔";
    message.classList.add("is-invalid");

    message.focus();

    return false;
  }


  // Everything is valid
  return true;
}


// =========================
// SEND MAIL USING EMAILJS
// =========================

function sendMail() {

  const params = {
    name: document.getElementById("name").value.trim(),

    email: document.getElementById("email").value.trim(),

    message: document.getElementById("message").value.trim()
  };


  // Disable button
  submitBtn.disabled = true;

  submitBtn.innerHTML = `
    Sending...
    <i class="bi bi-arrow-repeat ms-2"></i>
  `;


  // =========================
  // EMAILJS SEND
  // =========================

  emailjs
    .send(
      "service_q4qhptf",
      "template_4tf1tt4",
      params
    )

    .then((response) => {

      console.log("SUCCESS:", response);

      alert("Your message was sent successfully 😊");

      form.reset();

    })

    .catch((error) => {

      console.error("EMAILJS ERROR:", error);

      alert("Failed to send email ❌");

    })

    .finally(() => {

      submitBtn.disabled = false;

      submitBtn.innerHTML = `
        Send Message
        <i class="bi bi-send ms-2"></i>
      `;

    });
}