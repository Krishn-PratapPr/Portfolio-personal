document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    var formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    // Send the email using EmailJS
    emailjs.send("service_voadgjh", "template_5w80yzl", formData).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email successfully sent!");
        document.getElementById("contact-form").reset(); // Clear the form
      },
      function (error) {
        
        console.error("FAILED...", error);
        alert("Failed to send email.");
      }
    );
  });
