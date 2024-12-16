<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tasks')->insert([
            ['title' => 'Merge a specific PR', 'description' => 'Description1', 'status' => 'pending', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Review issues', 'description' => 'Description2', 'status' => 'completed', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Learn Deutsch', 'description' => 'Description3', 'status' => 'in-progress', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
