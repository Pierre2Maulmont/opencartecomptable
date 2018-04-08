<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Etablissement;
use Illuminate\Support\Facades\DB;

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

      if ($request->has('code_uai')) {
        $sql = $sql . 'code_uai = ? AND ';
        array_push($values, $request->input('code_uai'));
      }

      if ($request->has('type_etablissement')) {
        $sql = $sql . 'type_etablissement = ? AND ';
        array_push($values, $request->input('type_etablissement'));
      }

      if ($request->has('nom')) {
        $sql = $sql . 'nom LIKE ? AND ';
        $name = '%' . $request->input('nom') . '%';
        array_push($values, $name);
      }

      if ($request->has('academie')) {
        $sql = $sql . 'academie = ? AND ';
        array_push($values, $request->input('academie'));
      }

      if ($request->has('region')) {
        $sql = $sql . 'region = ? AND ';
        array_push($values, $request->input('region'));
      }

      if ($request->has('departement')) {
        $sql = $sql . 'departement LIKE ? AND ';
        $name = '%' . $request->input('departement') . '%';
        array_push($values, $name);
      }

      if ($request->has('commune')) {
        $sql = $sql . 'commune LIKE ? AND ';
        $name = '%' . $request->input('commune') . '%';
        array_push($values, $name);
      }

      $sql = substr($sql, 0, -4);
      $sql = $sql . ' ORDER BY nom';

      $schools = DB::select($sql, $values);

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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
    public function update(Request $request, $id)
    {
        //
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
