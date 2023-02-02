<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conflitos</title>
    <link rel="stylesheet" href="styles.css"> 
    <script src="https://kit.fontawesome.com/b397ee59be.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="scripts.js"></script>
</head>
  <body>
    <div id="backwelcome"></div>
    <div id="welcome">
        <h2>Olá!</h2>
        <p>Bem vindo(a) ao nosso site sobre conflitos mundiais!</p>
        <p id="pc">Clique em qualquer continente ou abra o menu na esquerda superior para começar seus estudos!</p>
        <p id="cell">Clique em "Vamos lá!" para abrir o menu da de opções e começar seus estudos!</p>
        <div>
            <a href="#" onclick="welcome()">Vamos lá!</a>
            <a href="sobre.php">Quem são vocês?</a>
        </div>
    </div>
    <img id="imgcell" src="imgs/mapamundi.png">
    <?php 
    $x=1;
    require_once('include/default.require.php');
    ?>
    
    <main id="main">
        <img id="mapaimg" src="imgs/mapamundi.png" alt="Mapa Mundi" usemap="#map" onmouseover="destacarArea('imgs/mapamundi.png');"/>
    <?php require_once 'include/map.require.php';?>
    </main>
    <footer id="footer"></footer>
</body>
</html>
