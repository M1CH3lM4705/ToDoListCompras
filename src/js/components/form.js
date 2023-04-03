const Form = () => {
  const formElement = document.querySelector('form');

  const formHtml = `
    <form>
      <h2>Inserir Produto</h2>
      <input class="css-input" type="text" minlength="5" name="produto" placeholder="Digite o nome do item" required>
      <input class="css-input" type="number" placeholder="Digite a quantidades do item" name="quantidade" required pattern="[0-9]+" maxlength="5">
      <input class="css-input" type="text"  placeholder="Digite o valor do item" name="valor" required pattern="^([.\\d]{1,60})$">
      <input class="" type="submit"value="Enviar">
    </form>
  `

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
    formHtml,
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