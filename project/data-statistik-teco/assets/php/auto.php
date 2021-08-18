<?php

$header =
'<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="http://'.getURL('','path').'">Technology Community</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed btn-menu" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </header>
';

$navbar =
'<nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link'.navbarMenuActive($urlQuery, '').'" href="http://'.getURL('','path').'">
                <span data-feather="grid"></span>
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link'.navbarMenuActive($urlQuery, 'java').'" href="http://'.getURL('','path').'?s=java">
                <span data-feather="coffee"></span>
                Pemrograman Java
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link'.navbarMenuActive($urlQuery, 'website').'" href="http://'.getURL('','path').'?s=website">
                <span data-feather="layout"></span>
                Desain Website
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link'.navbarMenuActive($urlQuery, 'grafis').'" href="http://'.getURL('','path').'?s=grafis">
                <span data-feather="pen-tool"></span>
                Desain Grafis
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link'.navbarMenuActive($urlQuery, 'office').'" href="http://'.getURL('','path').'?s=office">
                <span data-feather="file-text"></span>
                Office
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link'.navbarMenuActive($urlQuery, 'jaringan').'" href="http://'.getURL('','path').'?s=jaringan">
                <span data-feather="cpu"></span>
                Jaringan
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link'.navbarMenuActive($urlQuery, 'animasi').'" href="http://'.getURL('','path').'?s=animasi">
                <span data-feather="film"></span>
                Animasi
              </a>
            </li>
          </ul>
        </div>
      </nav>
';

$footer =
'<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <span class="text-muted">&copy; 2021 SMK Negeri 1 Pemalang<br>Technology Community. All Rights Reserved</span>
          </div>
          <div class="col-md-4 d-flex align-items-center justify-content-end">
            <span class="text-muted">Develop by <a class="text-decoration-none" href="http://sofa-emha.github.io">Sofa eMHa</a></span>
          </div>
        </footer>
';