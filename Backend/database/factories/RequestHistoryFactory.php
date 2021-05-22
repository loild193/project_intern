<?php

namespace Database\Factories;

use App\Models\RequestHistory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;


class RequestHistoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = RequestHistory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $status = mt_rand(0, 4);
        $category = mt_rand(0,50);
        $request = mt_rand(0,50);
        return [
            'title' => $this->faker->text(10),
            'description' => $this->faker->text(50),
            'status' => $status,
            'category_id' => $category,
            'due_date' => $this->faker->date, // password
            // 'remember_token' => Str::random(10),
            'request_id' => $request,
        ];
    }
}


