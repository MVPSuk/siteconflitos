<?php 
if($x){
  $backdir="";
}else{
  $backdir="../";
}

echo "<body>
    <div id=\"backscreen\" onclick=\"fecharNav()\"></div>
    <header id=\"header\">
        <a href=\"#\" id=\"btn-abrir\" onclick=\"abrirNav()\"><i class=\"fa-solid fa-bars\"></i></a>
    </header>
    <nav id=\"nav\">
	    <a href=\"#\" id=\"btn-fechar\" onclick=\"fecharNav()\"><div id=\"redcircle\"><i class=\"fa-solid fa-xmark\"></i></div></a>
        <ul>
            <li>
                <a href=\"../index.php\">Página Inicial</a>
            </li>
            <li>
                <a href=\"#\" onclick=\"abrirCList()\"><i id=\"pointconflictlist\" class=\"fa-solid fa-angle-right\"></i> Continentes</a>
                <ul id=\"conflictlist\">
                    <li>
                        <a 
                          href=\"#\"
                          onclick=\"abrirNav2(this);\"
                          continente=\"Oriente Médio\"
                          data-lists-names=\"
                            Afeganistão,
                            Estado Islâmico,
                            Palestina e Israel,
                            Primavera Árabe\"
                          data-lists-links=\"
                            {$backdir}conflicts/afeganistao.php,
                            {$backdir}conflicts/estadoislamico.php,
                            {$backdir}conflicts/palestinaeisrael.php,
                            {$backdir}conflicts/primaverarabe.php\"
                          onmouseover=\"destacarArea('imgs/mapamundiOM.png');\">Oriente Médio</a>
                    </li>
                    <li>
                        <a 
                          href=\"#\"
                          onclick=\"abrirNav2(this);\"
                          continente=\"Ásia\"
                          data-lists-names=\"
                            China e Hong Kong,
                            China e Taiwan,
                            Coreia do Norte\"
                          data-lists-links=\"
                            {$backdir}conflicts/chinaehongkong.php,
                            {$backdir}conflicts/chinaetaiwan.php,
                            {$backdir}conflicts/coreiadonorte.php\"
                          onmouseover=\"destacarArea('imgs/mapamundiAS.png');\">Ásia</a>
                    </li>
                    <li>
                        <a 
                          href=\"#\"
                          onclick=\"abrirNav2(this);\"
                          continente=\"Europa\"
                          data-lists-names=\"
                            ETA\"
                          data-lists-links=\"
                            {$backdir}conflicts/eta.php\"
                          onmouseover=\"destacarArea('imgs/mapamundiEU.png');\">Europa</a>
                    </li>
                    <li>
                        <a 
                          href=\"#\" 
                          onclick=\"abrirNav2(this);\" 
                          continente=\"África\" 
                          data-lists-names=\"
                            Chade,
                            Guerra Civil da Serra Leoa\" 
                          data-lists-links=\"
                            {$backdir}conflicts/chade.php,
                            {$backdir}conflicts/serraleoa.php\"  
                          onmouseover=\"destacarArea('imgs/mapamundiAF.png');\">África</a>
                    </li>
                    <li>
                        <a 
                          href=\"#\" 
                          onclick=\"abrirNav2(this);\" 
                          continente=\"América\" 
                          data-lists-names=\"
                            Cuba,
                            FARC/Colômbia,
                            Fronteira EUA x México,
                            Haiti,
                            Milícias cariocas,
                            Venezuela\" 
                          data-lists-links=\"
                            {$backdir}conflicts/cuba.php,
                            {$backdir}conflicts/farccolombia.php,
                            {$backdir}conflicts/fronteiraeuaxmex.php,
                            {$backdir}conflicts/haiti.php,
                            {$backdir}conflicts/miliciascariocas.php,
                            {$backdir}conflicts/venezuela.php\"  
                          onmouseover=\"destacarArea('imgs/mapamundiAM.png');\">América</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href=\"../sobre.php\">Sobre</a>
            </li>
        </ul>
        <p>&copy;2022 - Marcos, Beatriz e Ruth</p>
    </nav>

    <div id=\"nav2\">
        <p id=\"title\"></p>
        <div id=\"nav2-1\"></div>
    </div>;"
?>
