<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicController extends Controller
{
    public function index():string {
        return view('index');
    }

    public function light_index():string {
        return view('light_index');
    }
}
