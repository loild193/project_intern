<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BoPhan extends Model
{
    use HasFactory;
    // use SoftDeletes;
    
    protected $table = 'bophans';
    protected $fillable = [
        'name'
    ];
}
