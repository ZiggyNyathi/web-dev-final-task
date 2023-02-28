
function sendEmail(event) {
  event.preventDefault(); // prevent the form from submitting to a server

  const email = document.getElementById("email").value; // retrieve the email address from the input field
  const subject = "Welcome to My Website!";
  const message = "Thank you for subscribing to our newsletter.";

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${message}`; // create a mailto link

  window.location.href = mailtoLink; // open the default email client with the mailto link
}
