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
  $attr = '<li><a class="dropdown-item" href="http://';
  if ($value) {echo $attr. getURL('','path') .'">Semua Divisi</a></li>';}
  if ($value != 'java') {echo $attr. getURL('','path') .'?s=java">Pemrograman Java</a></li>';}
  if ($value != 'website') {echo $attr. getURL('','path') .'?s=website">Desain Website</a></li>';}
  if ($value != 'grafis') {echo $attr. getURL('','path') .'?s=grafis">Desain Grafis</a></li>';}
  if ($value != 'office') {echo $attr. getURL('','path') .'?s=office">Office</a></li>';}
  if ($value != 'jaringan') {echo $attr. getURL('','path') .'?s=jaringan">Jaringan</a></li>';}
  if ($value != 'animasi') {echo $attr. getURL('','path') .'?s=animasi">Animasi</a></li>';}
}

function navbarMenuActive($url, $value)
{
  $attr = ' active" aria-current="page';
  if ($url === 'java' && $value === 'java') {return $attr;}
  elseif ($url === 'website' && $value === 'website') {return $attr;}
  elseif ($url === 'grafis' && $value === 'grafis') {return $attr;}
  elseif ($url === 'office' && $value === 'office') {return $attr;}
  elseif ($url === 'jaringan' && $value === 'jaringan') {return $attr;}
  elseif ($url === 'animasi' && $value === 'animasi') {return $attr;}
  elseif ($url === null && $value === '') {return $attr;}
}