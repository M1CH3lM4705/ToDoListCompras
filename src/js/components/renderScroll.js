export default function ScrollLista(produtos) {
  const footer = document.querySelector('.section-footer')
  
  const tamanhoDaLista = () => {
    return produtos.clientHeight + produtos.offsetTop
  }

  const aHlistaEhMaiorQueOFooter = () =>
    tamanhoDaLista() >= footer.offsetTop;

  const ativarScollComTamnhoFixo = () => {
    produtos.classList.add('active-scroll')
    produtos.style.maxHeight = `${tamanhoDaLista()}px`
  }

  const ativarScroll = () => {
    aHlistaEhMaiorQueOFooter() ?
      ativarScollComTamnhoFixo() :
      produtos.classList.remove('active-scroll')
  }

  ativarScroll();
}