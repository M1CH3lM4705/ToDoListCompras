import product from "./product-item.js";
import ScrollLista from "./renderScroll.js";
import Utils from "../utils/tratar-dados.js";

export default function Products(){
  const produtos = document.querySelector('[data-products="products"]')
  const total = document.querySelector('[data-total]');
  const itemsCalculos = []

  const addProduct = items => {
    const {item, calculoPorItem } = product(items)
    
    renderizar(item, calculoPorItem);
  }
  
  const exibirMoeda = (itemsCalculos) => {   
   
    const valor = calculo(itemsCalculos)
    total.innerHTML = ''
    total.innerHTML = converterEmMoeda(valor)
  }

  function renderizar(item, calculoPorItem) {
    const xHtml = new DOMParser().parseFromString(item, 'text/xml');
    itemsCalculos.push(calculoPorItem());
    produtos.insertAdjacentHTML('beforeend', item);
    exibirMoeda(itemsCalculos);
    ScrollLista(produtos)
  }

  produtos.addEventListener('click', e => {
    const elementoClicado = e.target
    if(elementoClicado.dataset.editar){
      const idEditar = elementoClicado.dataset.editar
      const valores = Utils.tratarDadosItemsProduto(produtos, idEditar)
      console.log(valores)
    }
  })
  
  return {
    produtos,
    addProduct
  }
}


const calculo = valores => {
  const soma = (acc, item) => acc += Number(item);
  return valores.reduce(soma ,0)
}

const converterEmMoeda = valor => 
  valor.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})



