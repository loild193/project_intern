<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Requests extends Model
{
    use HasFactory;
  
    protected $table = 'requests';
    protected $fillable = [
        'title', 'description', 'status', 'due_date', 'request_id','category_id','user_id','assignedPerson_id','priority'

    ];
}
