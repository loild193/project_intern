<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(App\Models\User::class, 50)->create();
        // \App\Models\User::factory()->count(50)->create();
        User::factory()->times(50)->create();
    }
}
