<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Requests;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
// use Illuminate\Support\Facades\Validator;
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
        if ($request->get('descrption') == NULL)
            return response()->json('Error');
        $request = new Requests([
            'title' => $request->title,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'user_id' => $request->user_id,
            'assignedPerson_id' => $request->assignedPerson_id,
            'due_date' => $request->due_date,
            'priority' => $request->priority,

        ]);
        $request->save();
        return response()->json('Add Request Successfully.');
    }

    public function index_1($id)
    {
        $request = Requests::find($id);
        return response()->json($request);
    }

    public function update(Request $request1, $id)
    {
        $request = Request::find($id);
        $request->title = $request1->title;
        $request->description = $request1->description;
        $request->status = $request1->status;
        $request->priority = $request1->priority;
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