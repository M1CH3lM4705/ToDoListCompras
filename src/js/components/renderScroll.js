export default function ScrollLista(produtos) {
  const footer = document.querySelector('.section-footer')
  const activeScrollClass = 'active-scroll';
  
  const tamanhoDaLista = () => {
    return produtos.clientHeight + produtos.offsetTop
  }

  const aHlistaEhMaiorQueOFooter = () =>
    tamanhoDaLista() >= footer.offsetTop;

  const ativarScollComTamnhoFixo = () => {
    produtos.classList.add(activeScrollClass)
    //produtos.style.maxHeight = `${tamanhoDaLista()}px`
    produtos.style.maxHeight = `${500}px`
  }
  const ahClasseJaExisteNaLista = () => 
    produtos.classList.contains(activeScrollClass)

  const removerScrollComTamanhoFixo = () => {
    if(tamanhoDaLista() < 500){

      produtos.classList.remove(activeScrollClass)
      produtos.style.maxHeight = 'none';
    }
  }

  const ativarScroll = () => {
    aHlistaEhMaiorQueOFooter() ?
      ativarScollComTamnhoFixo() :
      removerScrollComTamanhoFixo();
  }

  ativarScroll();
}