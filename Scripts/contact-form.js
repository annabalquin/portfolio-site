const submitBtn = document.getElementById('submit')
const clearBtn = document.getElementById('clear')
const form = document.getElementById('form')

submitBtn.addEventListener('click', validateForm)
clearBtn.addEventListener('click', clearForm)

function validateForm(event) {
  event.preventDefault() 
  const name = document.getElementById('name').value 
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value
  const inputs = [
    {id: 'name', value: name}, 
    {id: 'email', value: emailIsValid(email) ? email : ""}, 
    {id: 'message', value: message}]
  inputs.forEach(removeErrorStyles)
  const invalidInputs = inputs.filter(input => !input.value)
  if (invalidInputs.length === 0) {
      alert(`Your message has been sent! ${name}   ${email}   ${message}`)
      form.reset()
  } else {
      invalidInputs.forEach(addErrorStyles)
    }
}

function clearForm() {
    form.reset()
    inputs.forEach(removeErrorStyles)
  }

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
// from https://ui.dev/validate-email-address-javascript/

function addErrorStyles(input) {
  const id = input.id
  document.getElementById(id).classList.add('input-error')
  const label = document.getElementById(`${id}-label`)
  label.childNodes[1].classList.add('show-helper-text')
} 

function removeErrorStyles(input) {
  const id = input.id
  document.getElementById(id).classList.remove('input-error')
  const label = document.getElementById(`${id}-label`)
  label.childNodes[1].classList.remove('show-helper-text')
}

