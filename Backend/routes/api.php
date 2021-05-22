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
Route::get('requests', function() {
    // If the Content-Type and Accept headers are set to 'application/json', 
    // this will return a JSON structure. This will be cleaned up later.
    return Requestt::all();
});
 
Route::get('request/{id}', function($id) {
    return Requestt::find($id);
});

Route::post('request', function(Request $request) {
    return Requestt::create($request->all);
});

Route::put('request/{id}', function(Request $request, $id) {
    $requestt = Requestt::findOrFail($id);
    $requestt->update($request->all());

    return $requestt;
});
Route::get('/articles', 'App\Http\Controllers\Api\RequesttController@index');
Route::get('articles/{id}', 'Api\RequesttController@show');
Route::post('articles', 'Api\RequesttController@store');
Route::put('articles/{id}', 'Api\RequesttController@update');
Route::delete('articles/{id}', 'Api\RequesttController@delete');
// Route::group(['middleware' => 'auth:api'], function() {
//     Route::get('articles', 'Api\RequesttController@index');
//     Route::get('articles/{article}', 'Api\RequesttController@index');
//     Route::post('articles', 'Api\RequesttController@index');
//     Route::put('articles/{article}', 'Api\RequesttController@index');
//     Route::delete('articles/{article}', 'Api\RequesttController@index');
// });
