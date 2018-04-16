<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Statistique extends Model
{
  public static function averageStats()
  {
    $statistics = DB::select('SELECT * from statistiques ORDER BY moyenne DESC');
    return $statistics;
  }

  public static function upToDateStats($academy)
  {
    $statistics = DB::select('SELECT * from etablissements WHERE academie = "' . $academy . '"');
    // $statistics = 'hola que tal';
    return $statistics;
  }
}
