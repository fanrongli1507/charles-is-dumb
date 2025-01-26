const scriptURL = 'https://script.google.com/macros/s/AKfycbwKK_72gX_ilYbfblhpGthNfMMN4_wrGZFIxuhpCWACDi8B3Wue5GvGrL-AuzB4-Nsq/exec'

const form = document.forms['appeal-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  fetch(scriptURL, { redirect: "follow", method: 'POST',mode: 'no-cors', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})