<?php

namespace Database\Seeders;

use App\Models\Requestt;
use Illuminate\Database\Seeder;

class RequestsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Requestt::truncate();

        $faker = \Faker\Factory::create();

        // And now, let's create a few articles in our database:
        for ($i = 0; $i < 50; $i++) {
            Requestt::create([
                'title' => $faker->sentence,
                'description' => $faker->paragraph,
            ]);
        }
    }
}
