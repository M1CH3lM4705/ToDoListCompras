const product = ({produto, quantidade, valor}) => {
  const valorConvertido = Number(valor.replace(/,/g, ".")).toLocaleString('pt-br', {style: 'currency', currency:'BRL'})
  
  const item = `
    <div data-product="${crypto.randomUUID()}" class="section__item">
      <span class="section__item-1">${produto}</span>
      <div class="section__item-info">
        <span class="section__item-3">Quantidade: ${quantidade}.00UN</span>
        <span class="section__item-4" data-valor="${valor}">Valor Unitario: ${valorConvertido}</span>
      </div>
    </div>`

    const calculoPorItem = () => Number(quantidade * valor);

    return {
      item,
      calculoPorItem
    }
}

export default product;