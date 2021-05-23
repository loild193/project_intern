<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\BoPhan;

class BoPhanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        BoPhan::factory()->times(50)->create();
    }
}
