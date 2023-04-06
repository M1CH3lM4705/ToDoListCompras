import Form from "./form.js";


const modal = () => {
  const { submitForm, formHtml } = Form();
  const dataModal = document?.querySelector('[data-modal="modal"]');
  let modal;
  
  const form = props => `
  <div class="modal">
    <div class="content">
        ${formHtml(props)}
    </div>
  </div>
  `
  
  const renderModal = (product, props = {}) => {
    if(!dataModal)
      return;
    dataModal.innerHTML = form(props);
    modal =  document.querySelector('.modal');
    
    toggleModal();
    submitForm(product, toggleModal);
  } 
  
  const toggleModal = () => {
    if(!modal) return;

    modal.classList.toggle('open')
  }

  window.addEventListener('click', e => {
    if(e.target === modal)
      toggleModal();
  })

  return {
    renderModal,
    toggleModal
  }
}

export default modal;