const scriptURL = 'https://script.google.com/macros/s/AKfycbwYfk4LpEGD4qULyKcTFyckRkVf8kGtRNiCzTxn7r-Su88jvG6-EBH31KplEAtpNCId/exec'

const form = document.forms['appeal-form']

function disableForm() {
  form.querySelectorAll('input, textarea, button').forEach(element => {
    element.disabled = true;
  });
}

form.addEventListener('submit', e => {
  
  e.preventDefault()
  fetch(scriptURL, { redirect: "follow", method: 'POST',mode: 'no-cors', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  disableForm();
})