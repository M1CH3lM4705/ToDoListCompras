import Utils from "../utils/tratar-dados.js";

const product = ({produto, quantidade, valor, id = null}) => {
  const valorConvertido = Utils.convertToStringMoney(valor)
  const productId = id || crypto.randomUUID();

  const itemHtml = `
    <div data-product="${productId}" class="section__item">
      <span class="section__item-1" data-nome="${produto}">${produto}</span>
      <div class="section__item-info">
        <span class="section__item-3" data-quantidade="${quantidade}">Quantidade: ${quantidade}.00UN</span>
        <span class="section__item-4" data-valor="${valor}">Valor Unitario: ${valorConvertido}</span>
      </div>
      <div class="section__item-action">
        <i class="fa-regular fa-pen-to-square" data-editar="${productId}"></i>
        <i class="fa-regular fa-trash-can" data-remover="${productId}"></i>
      </div>
    </div>`

    const calculoPorItem = () => Number(quantidade * valor).toFixed(2);

    const obj = {
      id:productId,
      calculo:calculoPorItem()
    }

    return {
      item: itemHtml,
      obj
    }
}

export default product;