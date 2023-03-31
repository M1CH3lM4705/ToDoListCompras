const Form = () => {
  const formElement = document.querySelector('form');

  const submitForm = (product, toggleModal) => {
    if(!formElement) return;
    formElement.addEventListener('submit', e => {
      e.preventDefault()
      
      product(obterValoresInput(e.target))
      toggleModal();
    })
  }

  const obterValoresInput = form => {
    const formData = new FormData(form)
    const obj = {}
    formData.forEach((value, key) => obj[key] = value)

    return obj
  }

  return {
    submitForm
  }
}

const validation = (input) => {
  const validarCampo = input => {
    input.setCustomValidity("");
    input.checkValidity();
  }
  input.addEventListener('invalid', () => {
    input.setCustomValidity("")
  })
}


export default Form;