<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\RequestHistory;


class RequestHistorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        RequestHistory::factory()->times(50)->create();
    }
}
