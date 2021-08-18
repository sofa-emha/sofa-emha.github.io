<?php $link = (isset($_GET["s"])) ? $_GET["s"] : null;

require 'assets/php/function.php';
require 'assets/php/auto.php';
require 'assets/php/db.php';

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
  <script src="assets/dist/bootstrap5/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script>
</head>

<body>

  <?php echo $header?>

  <div class="container-fluid">
    <div class="row">
      <?php echo $navbar?>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Statistik</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle" id="divisi" data-bs-toggle="dropdown" aria-expanded="false">
              <?php switch ($link) {
                case 'java':
                  echo '<span data-feather="coffee"></span> &nbsp; Pemrograman Java';
                  break;
                case 'website':
                  echo '<span data-feather="layout"></span> &nbsp; Desain Website';
                  break;
                case 'grafis':
                  echo '<span data-feather="pen-tool"></span> &nbsp; Desain Grafis';
                  break;
                case 'office':
                  echo '<span data-feather="file-text"></span> &nbsp; Office';
                  break;
                case 'jaringan':
                  echo '<span data-feather="cpu"></span> &nbsp; Jaringan';
                  break;
                case 'animasi':
                  echo '<span data-feather="film"></span> &nbsp; Animasi';
                  break;
                
                default:
                  echo '<span data-feather="grid"></span> &nbsp; Semua Divisi';
                  break;
              }?>
            </button>
            <ul class="dropdown-menu" aria-labelledby="divisi">
              <?php divisiDropDownMenu($link);?>
            </ul>
          </div>
        </div>

        <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>

        <h2>Detail Data</h2>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">Index</th>
                <th scope="col">Name</th>
                <th scope="col">Major</th>
                <th scope="col">Phone</th>
                <th scope="col">Division</th>
                <th scope="col">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>video</td>
                <td>text</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
                <td>video</td>
                <td>layout</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>data</td>
                <td>rich</td>
                <td>dashboard</td>
                <td>video</td>
                <td>tabular</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>information</td>
                <td>placeholder</td>
                <td>illustrative</td>
                <td>video</td>
                <td>data</td>
              </tr>
            </tbody>
          </table>
        </div>

        <?php echo $footer?>

      </main>
    </div>
  </div>

  <!-- Script -->
  <script src="assets/db/local/array.js"></script>
  <script src="assets/js/variable.js"></script>
  <script src="assets/js/function.js"></script>
  <script src="assets/js/run.js"></script>
  <script src="assets/js/script.js"></script>
</body>

</html>