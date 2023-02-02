function abrirNav() {
    var main = document.getElementById('main');

    document.getElementById('backscreen').style.width = '100%';
  
    if (window.innerWidth > 992){
        document.getElementById('nav').style.width = '18vw';
    } else{
        document.getElementById('nav').style.width = '80%';
        document.getElementById('red-circle').style.backgroundColor = 'var(--cor-2)';
        document.getElementById('red-circle').style.left = 'calc(80% - 22.5px)';
    }
}

function abrirNav2(continente) {
    abrirNav();

    var main = document.getElementById('main');
    lista = continente.getAttribute('data-lists-names').split(',');
    links = continente.getAttribute('data-lists-links').split(',');
    all = '';
    for (i = 0; i < lista.length; i++) {
        all += '<li><a href="' + links[i] + '">' + lista[i] + '</a></li>';
    }

    document.getElementById('title').innerHTML = "Conflitos<br><b>" + continente.getAttribute('continente') + "</b>";
    document.getElementById('nav2-1').innerHTML = '<ul>' + all + '</ul>';
    if(window.innerWidth > 992){
      document.getElementById('conflictlist').style.height = '170px';
    } else {
      document.getElementById('conflictlist').style.height = '225px';
    }
    document.getElementById('pointconflictlist').style.transform = 'rotate(90deg)';
    if (window.innerWidth > 992){
        document.getElementById('nav2').style.width = '18vw';
    } else{
        document.getElementById('nav').style.width = '0';
        document.getElementById('nav2').style.width = '80%';
        document.getElementById('red-circle').style.backgroundColor = 'var(--cor-4)';
        document.getElementById('red-circle').style.left = 'calc(20% - 22.5px)';
    }
}

function fecharNav() {
    var main = document.getElementById('main');
    var nav = document.getElementById('nav');
    var nav2 = document.getElementById('nav2');
    var redc = document.getElementById('red-circle');

    if(nav.style.width == '80%'){
      redc.style.left = '-45px';
    }else{
      redc.style.left = 'calc(100% + 45px)';
    }
    nav.style.width = '0';
    nav2.style.width = '0';
    document.getElementById('backscreen').style.width = '0';

    if(window.innerWidth > 992){
      document.getElementById('header').style.height = '50px';
      main.style.paddingTop = '50px';
    }
}

function abrirCList() {
    var cLOpen = document.getElementById('conflictlist');
    var seta = document.getElementById('pointconflictlist');

    if(window.innerWidth > 992){
      if (cLOpen.style.height != '170px') {
          cLOpen.style.height = '170px';
          seta.style.transform = 'rotate(90deg)';
      } else if (cLOpen.style.height != '0px') {
          cLOpen.style.height = '0px';
          seta.style.transform = 'rotate(0deg)';
      }
    } else {
      if (cLOpen.style.height != '225px') {
          cLOpen.style.height = '225px';
          seta.style.transform = 'rotate(90deg)';
      } else if (cLOpen.style.height != '0px') {
          cLOpen.style.height = '0px';
          seta.style.transform = 'rotate(0deg)';
      }
    }
}

