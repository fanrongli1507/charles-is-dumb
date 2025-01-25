const scriptURL = 'https://script.google.com/macros/s/AKfycbxQFLFqs2C86cFuQmnhv6ZYhV-E4IBLPmJBb_HZG4d6E_9QuT_zuTcdnJ9ZSOuvyji7/exec'

const form = document.forms['appeal-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})