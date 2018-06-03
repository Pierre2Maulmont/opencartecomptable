<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Admin;

class AdminsController extends Controller
{
    public function logIn(Request $request)
    {
      $admin = Admin::logIn($request->input('email'), $request->input('password'));
      return $admin;
    }

    public function agencies(Request $request)
    {
      $agencyChanges = DB::select('select * from modifications');
      return $agencyChanges;
    }
}
