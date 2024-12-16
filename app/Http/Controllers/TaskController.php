<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    public function index($status = 'all'): JsonResponse
    {
        if($status == 'all'){
            return response()->json(Task::all());
        }

        return response()->json(Task::where('status', $status)->get());
    }

    public function store(Request $request)
    {
        $validatedObj = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'status' => 'required|in:pending,completed,in-progress',
        ]);

        $task = Task::create($validatedObj);

        return response()->json($task, 201);
    }
}
