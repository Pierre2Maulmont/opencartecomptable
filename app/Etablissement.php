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
    $school = Etablissement::where('code_uai', $code_uai)
                ->get();
    return $school;
  }

  public static function agency($code_uai_agence_comptable)
  {
    $schools = Etablissement::where('code_uai_agence_comptable', $code_uai_agence_comptable)
                  ->orderBy('nom', 'desc')
                  ->get();
    return $schools;
  }

  public static function editAgency($code_uai, $new_agency)
  {
    DB::table('etablissements')
            ->where('code_uai', $code_uai)
            ->update(['code_uai_agence_comptable' => $new_agency]);
    return;

    // not working...?
    // $school = Etablissement::where('code_uai', $code_uai);
    // $school->code_uai_agence_comptable = $new_agency;
    // $school->save();
    // return;
  }

  public static function editMemo($code_uai, $memo)
  {
    DB::table('etablissements')
            ->where('code_uai', $code_uai)
            ->update(['memo' => $memo]);
    return;
  }

}
