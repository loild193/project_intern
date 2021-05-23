<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    // use SoftDeletes;
    
    protected $table = 'comments';
    protected $fillable = [
        'user_id', 'request_id', 'content',
    ];
}
