<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Statistique extends Model
{
  public static function index()
  {
    $statistics = DB::select('select id, academie, moyenne from statistiques');
    return $statistics;
  }
}
