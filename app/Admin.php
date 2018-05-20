<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    public static function logIn($email, $password)
    {
      $admin = Admin::where('email', $email)
                  ->where('password', $password)
                  ->get();
      return $admin;
    }
}
