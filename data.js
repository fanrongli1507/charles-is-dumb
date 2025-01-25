const scriptURL = 'https://script.google.com/macros/s/AKfycbwp10oTLN-Gug_FTgNv8XnRsK7R8p5DRLIiquogW15DOT8wAUWq24hL7e-i4qyktwlE/exec'

const form = document.forms['appeal-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})