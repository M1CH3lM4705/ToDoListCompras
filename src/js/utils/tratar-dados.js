export default class Utils {

    static tratarDadosItemsProduto = (elements, idEditar) => {
        const produtoFiltrado = Array.from(elements.children)
        .filter(produto => produto.dataset.product === idEditar)
        .reduce((acc, item) => acc = new Set(item.textContent.replace(/(\r\n|\n|\r)/gm, "").trim().split(' ')), {})

        const [produto,,,quantidate,,,valor] = produtoFiltrado;
        return {produto, quantidate, valor}
    }
}