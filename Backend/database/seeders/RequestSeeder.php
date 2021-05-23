<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Request;

class RequestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Request::factory()->times(50)->create();
    }
}
