<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Requests;

class RequestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Requests::factory()->times(50)->create();
    }
}
