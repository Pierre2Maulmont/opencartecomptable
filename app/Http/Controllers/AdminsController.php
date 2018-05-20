<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Admin;

class AdminsController extends Controller
{
    public function logIn(Request $request)
    {
      // return "holaaa";
      $admin = Admin::logIn($request->input('email'), $request->input('password'));
      return $admin;
    }
}
