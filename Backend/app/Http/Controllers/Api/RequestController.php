<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Requests;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
class RequestController extends Controller
{
    public function index()
    {
        $request = Requests::all();
        return response()->json($request);
    }
    public function create()
    {
        //
    }
 
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    public function index_1($id)
    {
        $request = Requests::find($id);
        return response()->json($request);
    }

    public function update(Request $request1, $id)
    {
        $request = Requests::find($id);
        $request->title = $request1->get('title');
        $request->description = $request1->get('description');
        $request->status = $request1->get('status');
        $request->category_id = $request1->get('category_id');
        $request->priority = $request1->get('priority');
        
        $request->save();
        return response()->json('Product Update Successfully');
    }

    public function destroy($id)
    {
        $request = Requests::find($id);
        $request->delete();
        return response()->json('Request Deleted Successfully');
    }

}