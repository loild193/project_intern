<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Requestt extends Model
{
    protected $table = 'requests';
    public $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'title',
        'description',
    ];
    protected $perPage = 5;

}
