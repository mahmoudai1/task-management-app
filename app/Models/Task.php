<?php

namespace App\Models;
use duxet\Rethinkdb\Eloquent\Model;

class Task extends Model
{
    public $timestamps = true;
    protected $fillable = ['title', 'description', 'status', 'created_at'];
}
