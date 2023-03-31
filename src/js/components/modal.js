import Form from "./form.js";


const modal = () => {
  const dataModal = document?.querySelector('[data-modal="modal"]');
  let modal;
  const form = `
  <div class="modal">
    <div class="content">
        <form>
            <h2>Inserir Produto</h2>
            <input class="css-input" type="text" minlength="5" name="produto" placeholder="Digite o nome do item" required>
            <input class="css-input" type="number" placeholder="Digite a quantidades do item" name="quantidade" required pattern="[0-9]+" maxlength="5">
            <input class="css-input" type="text"  placeholder="Digite o valor do item" name="valor" required pattern="^([.\\d]{1,60})$">
            <input class="" type="submit"value="Enviar">
        </form>
    </div>
  </div>
  `

  const renderModal = (product) => {
    if(!dataModal)
      return;
    dataModal.innerHTML = form;
    modal =  document.querySelector('.modal');
    const { submitForm } = Form();
    toggleModal();
    submitForm(product, toggleModal);
  } 
  
  const toggleModal = () => {
    if(!modal) return;

    modal.classList.toggle('open')
  }

  window.addEventListener('click', e => {
    if(e.target == modal)
      toggleModal();
  })

  return {
    renderModal,
    toggleModal
  }
}

export default modal;