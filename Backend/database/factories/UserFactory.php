<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Faker\Generator as Faker;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $avatar = "storage\image\account.png";
        $role = mt_rand(0, 2);
        return [
            'name' => $this->faker->name,
            'avatar' => $avatar,
            'role' => $role,
            'email' => $this->faker->unique()->safeEmail,
            'password' => Hash::make('12345678'), // password
            'remember_token' => Str::random(10),
        ];
    }
}
