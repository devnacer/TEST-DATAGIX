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

      <div class="dashboard-content px-3 pt-4">

        <!--___________table1________________ -->
        <div class="container" id="tab1">
          <div class="fs-5 text-center">
            <h2>Nombre d’appel Non décroché dynamique sur sample [ Tallking ]</h2>
          </div>

          <div class="text-center">
            <p>Nombre d’appel Non décroché dynamique sur sample [ Tallking ]: <span id="nbCalls_table1" class="badge bg-primary" style="font-size: larger;"></span></p>
          </div>

          <table class="table mt-3 mb-5">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Caller</th>
                <th scope="col">Callee</th>
                <td>Duration</td>
              </tr>
            </thead>
            <tbody id="callsBody_table1">
            </tbody>
          </table>

        </div>
        <!--_________end_table1______________ -->


        <!--____________table2______________ -->
        <div class="container" id="tab2">

          <div class="fs-5 text-center">
            <h2>Nombre Appels Total En Cours Par Les Agent</h2>
          </div>
          <div class="text-center">
            <p>Nombre d’appel total en cours : <span id="nbCalls_table2" class="badge bg-primary" style="font-size: larger;"></span></p>
          </div>
          <table class="table mt-3 mb-5">
            <thead>
              <tr>
              <th scope="col">ID</th>
                <th scope="col">Caller</th>
                <th scope="col">Callee</th>
                <td>Duration</td>
              </tr>
            </thead>
            <tbody id="agentCallsBody_table2">
            
            </tbody>
          </table>
        </div>
        <!--_________end_table2______________ -->


        <!--_________table3______________ -->
        <div class="container" id="tab3">
          <div class="fs-5 text-center">
            <h2>Nombre d’appel décroché en cours</h2>
          </div>
          <div class="text-center">
            <p>Nombre d’appel décroché en cours: <span id="nbCalls_table3" class="badge bg-primary" style="font-size: larger;"></span></p>
          </div>
          <table class="table mt-3 mb-5">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Caller</th>
                <th scope="col">Caller</th>
                <th scope="col">Duration</th>
              </tr>
            </thead>
            <tbody id="callsBody_table3">
    
            </tbody>
          </table>

        </div> 
        <!--_________end_table3______________ -->


        <!--_________table4______________ -->
        <div class="container" id="tab4">
          <div class="fs-5 text-center">
            <h2>Nombre d’appel sortant en cours</h2>
          </div>
          <div class="text-center">
            <p>Nombre d’appel sortant en cours: <span id="nbCalls_table4" class="badge bg-primary" style="font-size: larger;"></span></p>
          </div>
          <table class="table mt-3 mb-5">
            <thead>
              <tr>
              <th scope="col">ID</th>
                <th scope="col">Caller</th>
                <th scope="col">Caller</th>
                <th scope="col">Duration</th>
              </tr>
            </thead>
            <tbody id="callsBody_table4">
             
            </tbody>
          </table>
        </div> 
        <!--_________end_table4______________ -->
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <script src="js/script.js" defer></script>
  <script src="js/script_functions.js" defer></script>

</body>

</html>