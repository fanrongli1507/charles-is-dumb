const sendButton = document.querySelector('.js-send');
sendButton.addEventListener('click', send);

const inputBar = document.querySelector('.js-input');
inputBar.addEventListener('keydown', send);

function send() {
  const input = document.querySelector('.js-input').value;
  if (input.trim() === '') {
    return;
  }

  const messageHTML = `<div class="message">${input}</div>`;
  const messageContainer = document.querySelector('.js-text');

  messageContainer.innerHTML += messageHTML;

  document.querySelector('.js-input').value = '';
}
