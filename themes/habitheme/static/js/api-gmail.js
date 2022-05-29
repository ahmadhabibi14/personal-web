// listen to the form submission
document
  .getElementById("myForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_sdscf8n";
    const templateID = "template_3jsgec3";

    // send the email here
    emailjs.sendForm(serviceID, templateID, this).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
          alert("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
      }
    );
  });
