<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Statistique;

class StatsController extends Controller
{
    public function index()
    {
      $statistics = Statistique::index();
      return $statistics;
    }
}
