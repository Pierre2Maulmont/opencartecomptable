<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Etablissement;

class SchoolsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
      $sql = 'select * from etablissements where ';
      $values = [];

      if ($request->has('agencies')) {
        $sql = $sql . ' code_uai_agence_comptable = code_uai AND ';
      }

      $exactMatch = ['code_uai', 'type_etablissement', 'academie', 'region'];

      foreach ($exactMatch as $criterion) {
        if ($request->has($criterion)) {
          $sql = $sql . $criterion . ' = ? AND ';
          array_push($values, $request->input($criterion));
        }
      }

      $inexactMatch = ['nom', 'departement', 'commune'];

      foreach ($inexactMatch as $criterion) {
        if ($request->has($criterion)) {
          $sql = $sql . $criterion . ' LIKE ? AND ';
          $criterion = '%' . $request->input($criterion) . '%';
          array_push($values, $criterion);
        }
      }

      $sql = substr($sql, 0, -4);
      $sql = $sql . ' ORDER BY nom';

      $schools = Etablissement::index($sql, $values);
      return $schools;
    }

    public function agency($code_uai_agence_comptable)
    {
      $schools = Etablissement::agency($code_uai_agence_comptable);
      return $schools;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

      $fields = ['code_uai', 'code_uai_agence_comptable', 'type_etablissement', 'nom', 'adresse', 'code_postal', 'commune', 'departement', 'region', 'academie', 'telephone', 'ca', 'memo'];
      $values = [];
      foreach ($fields as $field) {
        if ($request->has($field)) {
          $values[$field] = $request->input($field);
        }
      }
      $response = Etablissement::store($values);
      return $response;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($code_uai)
    {
      // $school = Etablissement::show($code_uai);
      // return $school;
      return "test";
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $code_uai)
    {
      if ($request->has('new_agency')) {

        $response = Etablissement::updateAgency($code_uai, $request->input('new_agency'));
        return $response;

      } else if ($request->has('memo')) {

        $response = Etablissement::updateMemo($code_uai, $request->input('memo'));
        return $response;

      } else if ($request->has('info')) {

        $fields = ['type_etablissement', 'nom', 'adresse', 'code_postal', 'commune', 'departement', 'region', 'academie', 'telephone', 'ca'];
        $values = [];
        foreach ($fields as $field) {
          if ($request->has($field)) {
            array_push($values, [$field => $request->input($field)]);
          }
        }

        $response = Etablissement::updateInfo($code_uai, $values);
        return $response;

      } else if ($request->has('update')) {

        $response = Etablissement::updateDate($code_uai);
        return $response;

      } else {
        return;
      }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
