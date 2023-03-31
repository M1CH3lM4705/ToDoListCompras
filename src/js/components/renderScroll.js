export default function ScrollLista(produtos) {
  const footer = document.querySelector('.section-footer')
  console.dir(produtos)
  const tamanhoDaLista = () => {
    return produtos.clientHeight + produtos.offsetTop
  }

  const aHlistaEhMaiorQueOFooter = () =>
    tamanhoDaLista() >= footer.offsetTop;

  const ativarScroll = () => {
    if(aHlistaEhMaiorQueOFooter())
      produtos.classList.add('active-scroll')
  }

  ativarScroll();
}