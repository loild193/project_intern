<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestHistory extends Model
{
    use HasFactory;
    // use SoftDeletes;
    
    protected $table = 'request_historys';
    protected $fillable = [
        'title', 'description', 'status', 'due_date', 'request_id',
    ];

}
