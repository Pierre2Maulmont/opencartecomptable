<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Statistique;

class StatsController extends Controller
{
    public function averageStats()
    {
      $statistics = Statistique::averageStats();
      return $statistics;
    }

    public function upToDateStats($academy)
    {
      if (true) {
        $statistics = Statistique::upToDateStats($academy);
        return $statistics;
      }
      return 'lalala';
    }
}
