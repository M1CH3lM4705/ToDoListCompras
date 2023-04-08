const Form = () => {

  const formHtml = props => `
    
    <form>
      <h2>${props.id ? 'Editar' : 'Inserir' } Produto</h2>
      <input name="id" type="hidden" value="${Object.keys(props).length ? props.id : ''}" />
      <input class="css-input" type="text" value="${Object.keys(props).length ? props.produto : ''}" minlength="3" maxlength="15" name="produto" placeholder="Digite o nome do item" required>
      <input class="css-input" type="number" value="${Object.keys(props).length ? props.quantidade : ''}" placeholder="Digite a quantidades do item" name="quantidade" required pattern="[0-9]+" maxlength="5">
      <input class="css-input" type="text" value="${Object.keys(props).length ? props.valor : ''}" placeholder="Digite o valor do item" name="valor" required pattern="^([.\\d]{1,60})$">
      <input class="" type="submit"value="Enviar">
    </form>
  `

  const submitForm = (product, toggleModal) => {
    const formElement = document.querySelector('form');

    if (!formElement) return;
    formElement.addEventListener('submit', e => {
      e.preventDefault()
      const validarCampo = validation()
      
      Array.from(e.target).forEach(item => {
       console.dir(item.validity.ValidState)
      })

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

const validation = () => {
  const validarCampo = input => {
    input.setCustomValidity("");
    console.log(input.checkValidity());
  }
  // input.addEventListener('invalid', () => {
  //   input.setCustomValidity("")
  // })

  return {
    validarCampo
  }
}


export default Form;