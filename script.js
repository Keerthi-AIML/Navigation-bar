const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Google Sheets Integration
function handleFormSubmit(formId, sheetUrl) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch(sheetUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => alert('Data submitted successfully!'))
      .catch((error) => alert('Error submitting data.'));
  });
}

// Replace with your Google Sheets API endpoint
const sheetUrl = 'https://your-google-sheet-api-url';

// Link forms to Google Sheets
handleFormSubmit('cardLoginForm', sheetUrl);
handleFormSubmit('loginForm', sheetUrl);