<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Statistique extends Model
{
  public static function index()
  {
    $statistics = DB::select('SELECT * from statistiques ORDER BY moyenne DESC');
    return $statistics;
  }
}