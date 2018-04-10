<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Etablissement extends Model
{
  protected $fillable = ['code_uai', 'code_uai_agence_comptable', 'type_etablissement', 'nom', 'adresse', 'code_postal', 'commune', 'departement', 'region', 'academie', 'telephone', 'memo', 'ca', 'up_to_date', 'ip_ajout', 'ip_modification'];

  public static function index($sql, $values)
  {
    $schools = DB::select($sql, $values);
    return $schools;
  }

  public static function singleSchool($code_uai)
  {
    $sql = 'select * from etablissements where code_uai = ?';
    $school = DB::select($sql, [$code_uai]);
    return $school;
  }

  public static function agency($code_uai_agence_comptable)
  {
    $sql = 'select * from etablissements where code_uai_agence_comptable = ? ORDER BY nom DESC';
    $schools = DB::select($sql, [$code_uai_agence_comptable]);
    return $schools;
  }

  public static function editAgency($code_uai, $new_agency)
  {
    DB::table('etablissements')
            ->where('code_uai', $code_uai)
            ->update(['code_uai_agence_comptable' => $new_agency]);
    return;
  }

  public static function editMemo($code_uai, $memo)
  {
    DB::table('etablissements')
            ->where('code_uai', $code_uai)
            ->update(['memo' => $memo]);
    return;
  }

}
