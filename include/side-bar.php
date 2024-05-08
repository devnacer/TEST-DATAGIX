<?php
$current_page = basename($_SERVER['PHP_SELF']);
?>

<div class="sidebar" id="side_nav">
  <div class="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
    <h1 class="fs-4"><a href="index.php" class="text-white text-decoration-none">DATA<span class="text-primary">GIX</span></a></h1>
    <button class="btn d-md-none d-block close-btn px-1 py-0 text-white"><i class="fa-regular fa-circle-xmark"></i></button>
  </div>

  <ul class="list-unstyled px-2">
    <li <?php if ($current_page == 'table1.php') echo 'class="active"'; ?>><a href="table1.php" class="text-decoration-none px-3 py-2 d-block">Nombre d’appel Non décroché dynamique sur sample [ Tallking ]</a></li>
    <li <?php if ($current_page == 'table2.php') echo 'class="active"'; ?>><a href="table2.php" class="text-decoration-none px-3 py-2 d-block">Nombre APPELS TOTAL EN COURS PAR LES AGENT</a></li>
    <li <?php if ($current_page == 'table3.php') echo 'class="active"'; ?>><a href="table3.php" class="text-decoration-none px-3 py-2 d-block">Nombre d’appel décroché en cours</a></li>
    <li <?php if ($current_page == 'table4.php') echo 'class="active"'; ?>><a href="table4.php" class="text-decoration-none px-3 py-2 d-block">Nombre d’appel sortant en cours</a></li>
  </ul>
</div>