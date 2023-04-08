export default function ScrollLista(produtos) {
  const footer = document.querySelector('.section-footer')
  
  const tamanhoDaLista = () => {
    return produtos.clientHeight + produtos.offsetTop
  }

  const aHlistaEhMaiorQueOFooter = () =>
    tamanhoDaLista() >= footer.offsetTop;

  const ativarScroll = () => {
    aHlistaEhMaiorQueOFooter() ?
      produtos.classList.add('active-scroll') :
      produtos.classList.remove('active-scroll')
  }

  ativarScroll();
}