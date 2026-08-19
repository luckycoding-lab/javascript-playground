const scriptURL = 'https://script.google.com/macros/s/AKfycbxWeAfmJbO9khRXYC_oifbF-dmGuN_ESEalOAxzQas8ek3Ap97rWpAQ8EyG1vzuqMjgsg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thanks for Subscribing..."
        setTimeout(function(){
        msg.innerHTML = ""
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })