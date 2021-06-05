<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Requests;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
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
        $category_id = 0;
        $assignedPerson_id = 0;
        if($request->category_id != NULL)
            $category_id = $request->category_id;
        if($request->assignedPerson_id != NULL)
            $assignedPerson_id = $request->assignedPerson_id;
        $requestDataArray          =       array(
            "title"               =>          $request->title,
            "description"              =>          $request->description,
            "category_id"           =>         $category_id,
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
    public function show($id)
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
        
        return response()->json([$request,'Product Update Successfully']);
    }

    public function destroy($id)
    {
        $request = Requests::find($id);
        $request->delete();
        return response()->json('Request Deleted Successfully');
    }
    public function sum_request($id)
    {
        // $request = DB
        $bophan = DB::table('users')
            ->join('bophans', 'users.bophan_id', '=', 'bophans.id')
            ->select('bophans.name')
            ->where('users.id', '=', $id)
            ->get();
        $user = User::find($id);
        $requests = Requests::where('user_id', '=', $id)->count();
        return response()->json([$requests,$user, $bophan]);

    }

}