import Products from "./components/products.js"
import modal from "./components/modal.js";

const { renderModal } = modal();
const { addProduto } = Products(renderModal);
const button = document.querySelector('button');
 

button.addEventListener('click', () => renderModal(addProduto))