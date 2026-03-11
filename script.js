// Step 1: Find the form on the page
const form = document.getElementById('contact-form');

// Step 2: Listen for when the user clicks "submit"
form.addEventListener('submit', function(event) {

  // Step 3: Stop the form from submitting right away
  event.preventDefault();

  // Step 4: Grab the values the user typed in
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Step 5: Grab the error message spots
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  // Step 6: Clear any previous error messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  // Step 7: Check each field and show errors if needed
  let isValid = true;

  if (name === '') {
    nameError.textContent = 'Please enter your name.';
    isValid = false;
  }

  if (email === '') {
    emailError.textContent = 'Please enter your email address.';
    isValid = false;
  } else if (!email.includes('@')) {
    emailError.textContent = 'That doesn\'t look like a valid email address.';
    isValid = false;
  }

  if (message === '') {
    messageError.textContent = 'Please write a message before sending.';
    isValid = false;
  }

  // Step 8: If everything looks good, submit the form
  if (isValid) {
    form.submit();
  }

});