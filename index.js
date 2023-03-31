window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  //   focus on firstName on load
  firstName.focus();
  //   this is to reset the form after sending a message via formspree
  contactForm.reset();
});
