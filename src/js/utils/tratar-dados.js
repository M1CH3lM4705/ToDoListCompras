export default class Utils {

  static tratarDadosItemsProduto = (elements, idEditar) => {
    const produtoFiltrado = Array.from(elements.children)
      .filter(produto => produto.dataset.product === idEditar)
      .reduce((acc, item) => acc = new Set(item.textContent.replace(/(\r\n|\n|\r)/gm, "").trim().split(' ')), {})

    const [produto, , , qnt, , , valor] = produtoFiltrado;
    const quantidade = Utils.stringUnidadeParaInt(qnt)
    return { produto, quantidade, valor }
  }

  static converterParaInt = (str) =>
    parseInt(str.replace(/[^\d,]+/g, ''))

  static stringUnidadeParaInt = str =>
    parseInt(str.substring(0, 1))

  static convertTextoEmHtml = (str, ref) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(str, 'text/html')
    const element = doc.querySelector(ref)
    return element;
  }
}