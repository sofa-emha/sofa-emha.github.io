<?php

function getURL($url, $value)
{
  if ($url != '') {
    if ($value != '') {
      $call = parse_url($url)[$value];
      return $call;
    } else {
      $call = parse_url($url);
      return $call;
    }
  } else {
    $url = $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
    if ($value != '') {
      $call = parse_url($url)[$value];
      return $call;
    } else {
      $call = parse_url($url);
      return $call;
    }
  }
}

function divisiDropDownMenu($value)
{
  if ($value) {
    echo '<li><a class="dropdown-item" href="http://'. getURL('','path') .'">Semua Divisi</a></li>';
  }
  if ($value != 'java') {
    echo '<li><a class="dropdown-item" href="http://'. getURL('','path') .'?s=java">Pemrograman Java</a></li>';
  }
  if ($value != 'website') {
    echo '<li><a class="dropdown-item" href="http://'. getURL('','path') .'?s=website">Desain Website</a></li>';
  }
  if ($value != 'grafis') {
    echo '<li><a class="dropdown-item" href="http://'. getURL('','path') .'?s=grafis">Desain Grafis</a></li>';
  }
  if ($value != 'office') {
    echo '<li><a class="dropdown-item" href="http://'. getURL('','path') .'?s=office">Office</a></li>';
  }
  if ($value != 'jaringan') {
    echo '<li><a class="dropdown-item"href="http://'. getURL('','path') .'?s=jaringan">Jaringan</a></li>';
  }
  if ($value != 'animasi') {
    echo '<li><a class="dropdown-item" href="http://'. getURL('','path') .'?s=animasi">Animasi</a></li>';
  }
}

function navbarMenuActive($url, $value)
{
  if ($url === 'java' && $value === 'java') {
    return ' active" aria-current="page';
  }
  elseif ($url === 'website' && $value === 'website') {
    return ' active" aria-current="page';
  }
  elseif ($url === 'grafis' && $value === 'grafis') {
    return ' active" aria-current="page';
  }
  elseif ($url === 'office' && $value === 'office') {
    return ' active" aria-current="page';
  }
  elseif ($url === 'jaringan' && $value === 'jaringan') {
    return ' active" aria-current="page';
  }
  elseif ($url === 'animasi' && $value === 'animasi') {
    return ' active" aria-current="page';
  }
  elseif ($url === null && $value === '') {
    return ' active" aria-current="page';
  }
}