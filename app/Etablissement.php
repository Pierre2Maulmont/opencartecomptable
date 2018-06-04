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

  public static function show($code_uai)
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

  public static function updateAgency($code_uai, $new_agency, $former_agency)
  {
    $ip = $_SERVER['REMOTE_ADDR'];

    DB::table('etablissements')
            ->where('code_uai', $code_uai)
            ->update(['code_uai_agence_comptable' => $new_agency]);

    DB::table('modifications')
            ->insert([
              'code_uai' => $code_uai,
              'ancien_code_agence' => $former_agency,
              'nouveau_code_agence' => $new_agency,
              'ip' => $ip
            ]);
    return;

    // not working...?
    // $school = Etablissement::where('code_uai', $code_uai);
    // $school->code_uai_agence_comptable = $new_agency;
    // $school->save();
    // return;
  }

  public static function updateMemo($code_uai, $memo)
  {
    DB::table('etablissements')
            ->where('code_uai', $code_uai)
            ->update(['memo' => $memo]);
    return;
  }

  public static function updateInfo($code_uai, $values)
  {

    foreach ($values as $value) {
      DB::table('etablissements')
              ->where('code_uai', $code_uai)
              ->update($value);
    }

    $ip = $_SERVER['REMOTE_ADDR'];

    DB::update('UPDATE etablissements SET date_modification = CURRENT_TIMESTAMP, ip_modification = ? WHERE code_uai = ?', [$ip, $code_uai]);
    return;
  }

  public static function updateDate($code_uai)
  {

    $currentDate = date('Y-m-d');
    DB::table('etablissements')
            ->where('code_uai', $code_uai)
            ->update(['up_to_date' => $currentDate]);
    return;
  }

  public static function store($values)
  {
    $ip = $_SERVER['REMOTE_ADDR'];

    DB::table('etablissements')->insert($values);

    // DB::table('etablissements')->insert(['ip_ajout' => $ip]);
    return;
  }
}
