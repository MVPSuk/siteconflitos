//ajustar imagem
window.onload = function () {
    var ImageMap = function (map, img) {
        var n,
            areas = map.getElementsByTagName('area'),
            len = areas.length,
            coords = [],
            previousWidth = 5760;
        for (n = 0; n < len; n++) {
            coords[n] = areas[n].coords.split(',');
        }
        this.resize = function () {
            var n, m, clen,
                x = img.offsetWidth / previousWidth;
            for (n = 0; n < len; n++) {
                clen = coords[n].length;
                for (m = 0; m < clen; m++) {
                    coords[n][m] *= x;
                }
                areas[n].coords = coords[n].join(',');
            }
            previousWidth = img.offsetWidth;
            return true;
        };
        window.onresize = this.resize;
    },
        imageMap = new ImageMap(document.getElementById('mapa'), document.getElementById('mapaimg'));
    imageMap.resize();
    return;
}

//destacar continente
function destacarArea(caminho) {
    document.getElementById('mapaimg').src = caminho;
}

//abrir barra lateral esquerda
function abrirNav() {
    var main = document.getElementById('main');

    if (window.innerWidth > 992){
        document.getElementById('nav').style.width = '18vw';
        main.style.paddingLeft = '18vw';
        document.getElementById('header').style.height = '13vh';
        document.getElementById('footer').style.height = '13vh';
        main.style.paddingTop = '13vh';
        main.style.paddingBottom = '13vh';
    } else{
        document.getElementById('nav').style.width = '80%';
        document.getElementById('red-circle').style.backgroundColor = 'var(--cor-2)';
        document.getElementById('red-circle').style.left = 'calc(80% - 22.5px)';
        document.getElementById('backscreen').style.background = 'rgb(0,0,0,0.2)';
    }
    document.getElementById('backscreen').style.width = '100%';
}

//abrir barra lateral esquerda, direita e lista de continentes
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
        main.style.paddingRight = '18vw';
    } else{
        document.getElementById('nav').style.width = '0';
        document.getElementById('nav2').style.width = '80%';
        document.getElementById('red-circle').style.backgroundColor = 'var(--cor-4)';
        document.getElementById('red-circle').style.left = 'calc(20% - 22.5px)';
    }
}

//fechar barras laterais
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
    main.style.paddingLeft = '0';
    main.style.paddingRight = '0';
    document.getElementById('footer').style.height = '0';

    if(window.innerWidth > 992){
      document.getElementById('header').style.height = '50px';
      main.style.paddingTop = '50px';
    }
    main.style.paddingBottom = '0';
    document.getElementById('backscreen').style.width = '0';
}

//abrir lista de continentes
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

function welcome(){
    if(window.innerWidth > 992){
      document.getElementById('welcome').style.display = 'none';
      document.getElementById('backwelcome').style.display = 'none';
    } else{
      abrirNav();
      if(window.innerWidth > 992){
      document.getElementById('conflictlist').style.height = '170px';
    } else {
      document.getElementById('conflictlist').style.height = '225px';
    }
    document.getElementById('pointconflictlist').style.transform = 'rotate(90deg)';
    }
}

function criaCookie(){
   var data_at = new Date();
   var data_6h = new Date(data_at);

   var data_6h = data_6h.setMinutes(data_at.getMinutes()+1);

   localStorage.protetor2 = data_6h;
}

$(document).ready(function(){ 
  if(window.innerWidth > 992){
   if(localStorage.getItem("protetor2") === null){
   
      criaCookie();
      $('#welcome').show();
      $('#backwelcome').show();
      
   }else{
      
      var tempo_fim = localStorage.protetor2;
      
      var data_at = new Date();
      var data_at = data_at.setMinutes(data_at.getMinutes());
      var tempo = tempo_fim - data_at;
      
      if(tempo <= 0){
         localStorage.removeItem("protetor2");
         criaCookie();
         $('#welcome').show();
         $('#backwelcome').show();
      }
     }
  }
});

