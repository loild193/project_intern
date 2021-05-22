<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Requestt;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RequesttController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $requestts = Requestt::all();
        // return response()->json($requestts, Response::HTTP_OK);
        return Requestt::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Requestt::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Requestt  $requestt
     * @return \Illuminate\Http\Response
     */
    public function show(Requestt $requestt)
    {
        return $requestt;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Requestt  $requestt
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $requestt = Requestt::findOrFail($id);
        $requestt->update($request->all());

        return $requestt;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Requestt  $requestt
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $requestt = Requestt::findOrFail($id);
        $requestt->delete();

        return 204;
    }
}
