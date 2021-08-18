<?php $urlQuery = (isset($_GET["s"])) ? $_GET["s"] : null;
require 'assets/php/run.php'
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <title>Statistik Pendaftaran 2021 | Technology Community</title>

  <!-- Meta -->
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="X-UA-Compatible" content="IE=7">
  <meta name="keywords" content="">
  <meta name="description" content="">

  <!-- CSS -->
  <link href="assets/dist/bootstrap5/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">

  <!-- Script -->
  <script src="assets/dist/sweetalert2/sweetalert2.all.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script>
  <script data-main="assets/js/script.js" src="assets/dist/requirejs/requirejs.js"></script>
</head>

<body>

  <?php echo $header ?>

  <div class="container-fluid">
    <div class="row">
      <?php echo $navbar ?>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">
            <?php $title_page = "Pendaftaran TECO Tahun 2021";
              switch ($urlQuery) {
                case 'java': echo "Divisi Pemrograman Java"; break;
                case 'website': echo "Divisi Desain Website"; break;
                case 'grafis': echo "Divisi Desain Grafis"; break;
                case 'office': echo "Divisi Office"; break;
                case 'jaringan': echo "Divisi Jaringan"; break;
                case 'animasi': echo "Divisi Animasi"; break;
                default: echo $title_page; break;
              }
            ?></h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle" id="divisi" data-bs-toggle="dropdown" aria-expanded="false">
              <?php switch ($urlQuery) {
                case 'java': echo '<span data-feather="coffee"></span> &nbsp; Pemrograman Java'; break;
                case 'website': echo '<span data-feather="layout"></span> &nbsp; Desain Website'; break;
                case 'grafis': echo '<span data-feather="pen-tool"></span> &nbsp; Desain Grafis'; break;
                case 'office': echo '<span data-feather="file-text"></span> &nbsp; Office'; break;
                case 'jaringan': echo '<span data-feather="cpu"></span> &nbsp; Jaringan'; break;
                case 'animasi': echo '<span data-feather="film"></span> &nbsp; Animasi'; break;
                default: echo '<span data-feather="grid"></span> &nbsp; Semua Divisi'; break;
              } ?></button>
            <ul class="dropdown-menu" aria-labelledby="divisi">
              <?php divisiDropDownMenu($urlQuery); ?>
            </ul>
          </div>
        </div>

        <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>

        <?php echo $footer ?>

      </main>
    </div>
  </div>
</body>

</html>