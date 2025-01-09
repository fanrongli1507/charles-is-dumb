const sendButton = document.querySelector('.js-send');
sendButton.addEventListener('click', send);

const sendButton1 = document.querySelector('.js-send');
sendButton1.addEventListener('touch', send);

const inputBar = document.querySelector('.js-input');
inputBar.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    send();
  }
});

function send() {
  const input = document.querySelector('.js-input').value;
  if (input.trim() === '') {
    return;
  }

  const messageHTML = `<div class="message">${input}</div>`;
  const messageContainer = document.querySelector('.js-text');

  messageContainer.innerHTML = messageHTML + messageContainer.innerHTML;

  document.querySelector('.js-input').value = '';
}
