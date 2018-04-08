<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Etablissement extends Model
{
  protected $fillable = ['code_uai', 'code_uai_agence_comptable', 'type_etablissement', 'nom', 'adresse', 'code_postal', 'commune', 'departement', 'region', 'academie', 'telephone', 'memo', 'ca', 'up_to_date', 'ip_ajout', 'ip_modification'];
}
