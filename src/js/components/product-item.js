const product = ({produto, quantidade, valor, id = null}) => {
  const valorConvertido = Number(valor.replace(/,/g, ".")).toLocaleString('pt-br', {style: 'currency', currency:'BRL'})
  const produtId = id || crypto.randomUUID();

  const item = `
    <div data-product="${produtId}" class="section__item">
      <span class="section__item-1" data-nome="${produto}">${produto}</span>
      <div class="section__item-info">
        <span class="section__item-3" data-quantidade="${quantidade}">Quantidade: ${quantidade}.00UN</span>
        <span class="section__item-4" data-valor="${valor}">Valor Unitario: ${valorConvertido}</span>
      </div>
      <div class="section__item-action">
        <i class="fa-regular fa-pen-to-square" data-editar="${produtId}"></i>
        <i class="fa-regular fa-trash-can"></i>
      </div>
    </div>`

    const calculoPorItem = () => Number(quantidade * valor);

    return {
      item,
      calculoPorItem
    }
}

export default product;