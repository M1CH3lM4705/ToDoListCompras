import product from "./product-item.js";
import ScrollLista from "./renderScroll.js";
import Utils from "../utils/tratar-dados.js";

export default function Products(renderModal) {
  const produtos = document.querySelector('[data-products="products"]')
  const total = document.querySelector('[data-total]');
  const itemsCalculos = []

  const addProduto = items => {

    save(items, renderizarNovoProduto);
  }

  function save(items, fn) {
    const { item, obj } = product(items)

    fn(item, obj);
    exibirMoeda(itemsCalculos);
    ScrollLista(produtos)
  }

  const editarObjetoNoArray = (obj) => {
    itemsCalculos
      .filter(({ id, calculo }) => id == obj.id && calculo != obj.calculo)
      .map(({ id }) => itemsCalculos.forEach(ic => {
        if (ic['id'] == id) ic['calculo'] = obj['calculo']
      }));
  }

  const editarProduto = items => {
    save(items, (item, obj) => {
      
      const element = Utils.convertTextoEmHtml(item, `[data-product="${obj.id}"]`)
      editarObjetoNoArray(obj)
      const elementoOld = produtos.querySelector(`[data-product="${obj.id}"]`)
      
      produtos.replaceChild(element, elementoOld)
    })
  }

  const exibirMoeda = (itemsCalculos) => {

    const valor = calculo(itemsCalculos)
    total.innerHTML = ''
    total.innerHTML = converterEmMoeda(valor)
  }

  function renderizarNovoProduto(item, obj) {

    itemsCalculos.push(obj);
    produtos.insertAdjacentHTML('beforeend', item);
  }

  const exibirDadosParaEditar = elementoClicado => {

    const idEditar = elementoClicado.dataset.editar
    const valores = Utils.tratarDadosItemsProduto(produtos, idEditar)
    valores['id'] = idEditar
    renderModal(editarProduto, valores)
  }

  produtos.addEventListener('click', e => {
    const elementoClicado = e.target
    if (elementoClicado.dataset.editar) {
      exibirDadosParaEditar(elementoClicado)
    }
  })

  return {
    produtos,
    addProduto
  }
}


const calculo = valores => {
  const soma = (acc, { calculo }) => acc += Number(calculo);
  return valores.reduce(soma, 0)
}

const converterEmMoeda = valor =>
  valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })



