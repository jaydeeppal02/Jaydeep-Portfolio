// send email
const form = document.querySelector(".contact-form");
const submitBtn = document.querySelector(".submit-btn");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(validateForm()){
     sendMail();
  }
  
 
});

//validate form
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.querySelector("#floatingTextarea").value;
  
  //errror
  let errEmail=document.querySelector(".email-err");
    let errName=document.querySelector(".name-err");
      let errMsg=document.querySelector(".msg-err")


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim() === "") {
    errEmail.innerText="Email is required! 😔";
    submitBtn.disabled=true;
    timeOut();

    return false;
} else if (!emailPattern.test(email.trim())) {
    errEmail.innerText="invalid Email Pattern! 😔";
    submitBtn.disabled=true;
    timeOut();
    return false;
} 
if(name.trim()===""){
    errname.innerText="Name is required! 😔";
    submitBtn.disabled=true;
    timeOut();
    return false;

}
if(message.trim()===""){
    errMsg.innerText="Message is required! 😔";
    submitBtn.disabled=true;
    timeOut();
    return false;
}
return true;
}

//timeOut

function timeOut(){
      setTimeout(()=>{
        submitBtn.disabled=false;
    },3000)
}

// send mail
function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.querySelector("#floatingTextarea").value,
  };

  emailjs
    .send("service_q4qhptf", "template_4tf1tt4", params)
    .then(function () {
      alert("Your message sent successfully 😊");
    })
    .catch(function (error) {
      console.log(error);
      alert("Failed to send email");
    });
}
