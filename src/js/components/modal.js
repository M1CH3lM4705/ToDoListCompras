import Form from "./form.js";


const modal = () => {
  const { submitForm, formHtml } = Form();
  const dataModal = document?.querySelector('[data-modal="modal"]');
  let modal;
  const form = `
  <div class="modal">
    <div class="content">
        ${formHtml}
    </div>
  </div>
  `

  const renderModal = (product) => {
    if(!dataModal)
      return;
    dataModal.innerHTML = form;
    modal =  document.querySelector('.modal');
    
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