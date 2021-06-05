<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Requests;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    public function show($id)
    {
        $comments = DB::table('comments')
            ->join('users', 'comments.user_id', '=', 'users.id')
            ->select('comments.*', 'users.name')
            ->where('request_id', '=', $id)
            ->get();
        return response()->json($comments);
    }

    public function store(Request $request)
    {
        $validator              =        Validator::make($request->all(), [
            "content"              =>     "required",
        ]);
        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
        }
        $commentDataArray          =       array(
            "content"               =>          $request->content,
            "user_id"               =>          $request->user_id,
            "request_id"            =>          $request->request_id,
        );
        $comment                  =          Comment::create($commentDataArray);
        return response()->json(["Add Comment Successfully.", $comment]);
    }
    public function update(Request $request, $id)
    {
        $comment = Comment::find($id);
        $comment->content = $request->get('content');
        $comment->save();
        return response()->json(['Comment Update Successfully', $comment]);
    }

    public function destroy($id)
    {
        $request = Comment::find($id);
        $request->delete();
        return response()->json('Comment Deleted Successfully');
    }


}