<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre nós</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/b397ee59be.js" crossorigin="anonymous"></script>
    <script src="conflicts/scripts.js"></script>
  
    <style>
      html,body{
        background: white;
      }
      
      h1{
        margin: 30px 0;
        text-align: center;
        color: #4a4a4a;
        font-size: 30px;
      }

      ul.nos{
        list-style:none;
        display: block;
        text-align: center;
        color: rgb(35, 53, 133);
        margin: auto;
      }

      ul.nos li{
        display: inline-block;
        margin: 15px 10px;
      }

      img{
        border-radius: 10px;
        width: 35vw;
        border: 12px solid rgb(35, 53, 133);
        -webkit-box-shadow: 0px 3px 11px 0px rgba(50, 50, 50, 0.3);
        -moz-box-shadow: 0px 3px 11px 0px rgba(50, 50, 50, 0.3);
        box-shadow: 0px 3px 11px 0px rgba(50, 50, 50, 0.3);
      }

      p.nome{
        text-align: center;
        font-style: italic;
        font-size: 12px;
        text-indent: 0;
      }

      p.if{
        color: #474747;
        margin: 20px 25px;
        text-align: justify;
        text-indent: 25px;
      }
      
      @media screen and (min-width:992px) {
      h1{
        font-size: 70px;
      }

      img{
        width: 18vw;
      }

      p.if{
        margin: 32px 300px;
      }

      p.nome{
        font-size: smaller;
      }
      }
    </style>
</head>
  <body>
    <?php 
    $x = 1;

    require_once('include/default.require.php');
    ?>
    <main id="main">
        <h1>Sobre nós</h1>

      <ul class="nos">
          <li><img src="../imgs/1aluno.jpg" alt="Maria_Beatriz_L_S" width="250">
            <p class="nome">Maria Beatriz Lopes Santiago</p>
          </li>
          <li><img src="../imgs/2aluno.jpeg" alt="Marcos_Felipe_Nery_M" width="250">
            <p class="nome">Marcos Felipe Nery Micheletti</p>
          </li>
          <li><img src="../imgs/3aluno.jpeg" alt="Ruth_Nunes_de_O" width="250">
            <p class="nome">Ruth Nunes de Oliveira</p>
          </li>
    
      </ul>


 <p class="if">Somos estudantes do Instituto Federal do Norte de Minas Gerais e atualmente cursamos o 3º ano do curso de Informática integrado ao Ensino Médio. Realizamos esse projeto sob a orientação dos professores Luis Antonio Guisso Lopes e Mario Sergio Costa da Silveira. O conteúdo de todo o site foi resultado da colaboração de todos os nossos colegas de turma, que pesquisaram e reuniram os principais fatos sobre os conflitos do mundo.</p>
      
    </main>
</body>
</html>