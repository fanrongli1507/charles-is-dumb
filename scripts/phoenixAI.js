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

  const response = `Phoenix AI 124M is out!
  Go to: https://github.com/fanrongli1507/Phoenix124M2.git
  Make sure you have Python 3.12, 3.13 and 3.14 are not supported!
  To start, run 'pip3 install requirements.txt'
  Then, run 'python3 chat2.py'
  Go to the localhost link provided. Most likely http://127.0.0.1:5000/`;
  const responseHTML = `<div class="response message">${response}</div>`;

  messageContainer.innerHTML = responseHTML + messageContainer.innerHTML;
  document.querySelector('.js-input').value = '';
}
