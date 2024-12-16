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
            ['title' => 'Update Website', 'description' => 'Update the homepage with new content and visuals as per the latest marketing strategy. Ensure responsiveness.', 'status' => 'pending', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Fix Bugs', 'description' => 'Resolve the bugs reported in the system by the QA team. Prioritize the critical issues first to avoid delays.', 'status' => 'in-progress', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Schedule Meeting', 'description' => 'Set up a meeting with the development team to discuss the upcoming release. Make sure everyone can attend.', 'status' => 'completed', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Write Documentation', 'description' => 'Create clear and concise documentation for the new API endpoints, including examples and best practices for usage.', 'status' => 'pending', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Design Icons', 'description' => 'Design new icons for the application dashboard that match the current UI theme and are user-friendly.', 'status' => 'in-progress', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Code Review', 'description' => 'Review the latest pull request from the development team. Ensure all coding standards are met and functionality is correct.', 'status' => 'completed', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Deploy Server', 'description' => 'Deploy the latest version of the app to the staging server for final testing before production. Ensure smooth deployment.', 'status' => 'pending', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
