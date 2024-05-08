<!DOCTYPE html>
<html lang="en">

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

      <div class="dashboard-content px-3 pt-4">

        <div class="fs-5 text-center">
          <h1>Nombre d’appel décroché en cours</h1>

        </div>
        <table class="table mt-3">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Caller</th>
              <th scope="col">Callee</th>
              <th scope="col">Duration</th>
            </tr>
          </thead>
          <tbody id="callsBody">
            <!-- <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr> -->
          </tbody>
        </table>
        <div class="text-center">
          <p>Nombre d’appel décroché en cours: <span id="nbCalls" class="badge bg-dark"></span></p>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <script src="js/script.js"></script>
  <script src="js/script_table3.js"></script>

</body>

</html>