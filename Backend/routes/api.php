<?php

use App\Models\Requestt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RequesttController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post("user-signup", "App\Http\Controllers\Api\UserController@userSignUp");

Route::post("user-login", "App\Http\Controllers\Api\UserController@userLogin");

Route::get("user/{email}", "App\Http\Controllers\Api\UserController@userDetail");

Route::apiResource('request', 'App\Http\Controllers\Api\RequestController');

Route::get('request/index/{id}','App\Http\Controllers\Api\RequestController@index_1');
Route::put('request/update/{id}','App\Http\Controllers\Api\RequestController@update');
Route::get('request/index/{id}','App\Http\Controllers\Api\RequestController@index_1');
