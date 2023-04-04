import product from "./product-item.js";
import ScrollLista from "./renderScroll.js";
import Utils from "../utils/tratar-dados.js";

export default function Products(renderModal){
  const produtos = document.querySelector('[data-products="products"]')
  const total = document.querySelector('[data-total]');
  const itemsCalculos = []

  const addProduto = items => {
      
    save(items, renderizarNovoProduto);
  }

  function save(items, fn){
    const {item, calculoPorItem } = product(items)
    
    fn(item, calculoPorItem);
    exibirMoeda(itemsCalculos);
    ScrollLista(produtos)
  }

  const editarProduto = items => {
    save(items)
  }
  
  const exibirMoeda = (itemsCalculos) => {   
   
    const valor = calculo(itemsCalculos)
    total.innerHTML = ''
    total.innerHTML = converterEmMoeda(valor)
  }

  function renderizarNovoProduto(item, calculoPorItem) {
    
    itemsCalculos.push(calculoPorItem());
    produtos.insertAdjacentHTML('beforeend', item);  
  }

  const exibirDadosParaEditar = elementoClicado => {
    
      const idEditar = elementoClicado.dataset.editar
      const valores = Utils.tratarDadosItemsProduto(produtos, idEditar)
      valores['id'] = idEditar
      renderModal(addProduto, valores)
  }

  produtos.addEventListener('click', e => {
    const elementoClicado = e.target
    if(elementoClicado.dataset.editar){
      exibirDadosParaEditar(elementoClicado)
    }
  })
  
  return {
    produtos,
    addProduto
  }
}


const calculo = valores => {
  const soma = (acc, item) => acc += Number(item);
  return valores.reduce(soma ,0)
}

const converterEmMoeda = valor => 
  valor.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})



