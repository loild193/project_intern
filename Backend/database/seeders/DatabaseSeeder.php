<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CommentSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(BoPhanSeeder::class);
        $this->call(RequestSeeder::class);
        $this->call(RequestHistorySeeder::class);
    }
}
