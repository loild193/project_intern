<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\BoPhan;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
class UserController extends Controller
{
    private $status_code    =        200;

    public function userSignUp(Request $request) {
        $validator              =        Validator::make($request->all(), [
            "name"              =>          "required",
            "email"             =>          "required|email",
            "password"          =>          "required",
            "phone"             =>          "required"
        ]);
        if ($request->email==NULL)
            return response()->json('eror');

        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
        }

        $name                   =       $request->name;
        $name                   =       explode(" ", $name);
        $first_name             =       $name[0];
        $last_name              =       "";

        if(isset($name[1])) {
            $last_name          =       $name[1];
        }

        $userDataArray          =       array(
            "name"               =>          $request->name,
            "email"              =>          $request->email,
            "password"           =>          md5($request->password),
            "phone"              =>          $request->phone
        );

        $user_status            =           User::where("email", $request->email)->first();

        if(!is_null($user_status)) {
           return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! email already registered"]);
        }

        $user                   =           User::create($userDataArray);

        if(!is_null($user)) {
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Registration completed successfully", "data" => $user]);
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "failed to register"]);
        }
    }


    // ------------ [ User Login ] -------------------
    public function userLogin(Request $request) {

        $validator          =       Validator::make($request->all(),
            [
                "email"             =>          "required|email",
                "password"          =>          "required"
            ]
        );

        if($validator->fails()) {
            return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        }


        // check if entered email exists in db
        $email_status       =       User::where("email", $request->email)->first();


        // if email exists then we will check password for the same email

        if(!is_null($email_status)) {
            $password_status    =   User::where("email", $request->email)->where("password", md5($request->password))->first();

            // if password is correct
            if(!is_null($password_status)) {
                $user           =       $this->userDetail($request->email);

                return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $user]);
            }

            else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);
            }
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email doesn't exist."]);
        }
    }

    // ------------------ [ User Detail ] ---------------------
    public function userDetail($email) {
        $user               =       array();
        if($email != "") {
            $user           =       User::where("email", $email)->first();
            return $user;
        }
    }
    
    public function index()
    {
        $users = User::where('role',"=",0)
        ->orwhere('role',"=",1)
        ->get();
        return response()->json($users);
    }
    public function show($id)
    {
        $user = User::find($id);
        $bophan = BoPhan::find($user["bophan_id"]);
        return response()->json([$user,$bophan]);
    }
    
    public function destroy($id)
    {
       $user = User::find($id);
       $user->delete();
       return response()->json('User Delete Successfully');
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->get('name');
        $user->password = $request->get('password');
        $user->role = $request->get('role');
        $user->bophan_id = $request->get('bophan_id');
        $user->phone = $request->get('phone');
        $user->save();
        return response()->json('User Update Successfully');
    }
    public function store(Request $request)
    {
        $validator              =        Validator::make($request->all(), [
            "name"              =>     "required",
            "email"        =>     "required",
            "role"           =>     "required",
            "password"           =>     "required",
            "phone"           =>     "required",
            "bophan_id"         =>     "required",
        ]);
        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
        }
        $userDataArray          =       array(
            "name"               =>          $request->name,
            "email"              =>          $request->email,
            "role"              =>          $request->role,
            "bophan_id"              =>          $request->bophan_id,
            "password"           =>          md5($request->password),
            "phone"              =>          $request->phone
        );

        $user_status            =           User::where("email", $request->email)->first();

        if(!is_null($user_status)) {
           return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! email already registered"]);
        }
        $user                   =           User::create($userDataArray);
        return response()->json(["Add User Successfully.", $user]);
    }
  
}
