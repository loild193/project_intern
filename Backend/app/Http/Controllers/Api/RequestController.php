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
        $validator              =        Validator::make($request->all(), [
            "title"              =>     "required",
            "description"        =>     "required",
            "due_date"           =>     "required",
            "priority"           =>     "required",
        ]);
        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
        }

        if($request->category == NULL)
            $category = 0;
        if($request->assignedPerson_id == NULL)
            $assignedPerson_id = 0;
        $requestDataArray          =       array(
            "title"               =>          $request->title,
            "description"              =>          $request->description,
            "category_id"           =>         $category,
            "user_id"              =>          $request->user_id,
            "assignedPerson_id" => $assignedPerson_id,
            "due_date" => $request->due_date,
            "priority" => $request->priority,
            "status"   => $request->status,
        );
        $request1                   =          Requests::create($requestDataArray);
        return response()->json(["Add Request Successfully.", $request1]);
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