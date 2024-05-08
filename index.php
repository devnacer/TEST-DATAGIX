<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TEST DEV DATAGIX</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="style.css" />
</head>


<body>

  <div class="main-container d-flex">
    <?php
    include 'include/side-bar.php';
    ?>
    <div class="content">

      <?php
      include 'include/nav-bar.php';
      ?>

      <div class="container">
        <h1 class="text-center mt-5">TEST DEV DATAGIX</h1>
        <div class="row justify-content-center mt-3">
          <div class="col-md-6">
            <p><strong>Test réalisé le :</strong> 07 mai 2024</p>
            <p><strong>Nom et Prénom :</strong> KALACHE Abdenaceur </p>
            <p><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/abdenaceur-kalache-333b18237/" target="_blank">Cliquez ici</a></p>
            <p><strong>Portfolio :</strong> <a href="https://devnacer.github.io/portfolio_kalache/" target="_blank">Cliquez ici</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <script src="js/script.js"></script>
</body>

</html>