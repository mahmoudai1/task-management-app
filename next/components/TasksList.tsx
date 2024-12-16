'use client';

import { useState } from 'react';
import ViewTask from './ViewTask';
import { formatDistanceToNow } from 'date-fns';

import { FC } from 'react';

type Task = {
  title: string;
  description: string;
  status: string;
  created_at: string;
};

type TasksProps = {
    tasks: Task[];
    loading: boolean;
};

const hardCodedTasks = [
    {
      title: 'Learn Deutsch',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, perspiciatis!',
      status: 'Completed'
    },

    {
    title: 'Excersing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, perspiciatis!',
    status: 'Pending'
    },

    {
    title: 'Review Issues',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, perspiciatis!',
    status: 'In-progress'
    },
]

const getStatusCardClasses = (status: string) => {
    switch (status) {
        case 'completed':
        return 'focus-within:border-green-400';
        case 'pending':
        return 'focus-within:border-yellow-400';
        case 'in-progress':
        return 'focus-within:border-blue-400';
        default:
        return 'focus-within:border-gray-400';
    }
};

const getStatusEllipseClasses = (status: string) => {
    switch (status) {
        case 'completed':
        return 'bg-green-500';
        case 'pending':
        return 'bg-yellow-500';
        case 'in-progress':
        return 'bg-blue-500';
        default:
        return 'bg-gray-500';
    }
};

const truncateText = (input: string) => {
    return input?.length > 100 ? `${input.substring(0, 100)}...` : input;
};


const TasksList:  FC<TasksProps> = ({ tasks, loading }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const openModal = (task: Task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTask(null);
    };


    if (loading) {
        return (
        <ul role="list" className="flex flex-wrap gap-5 mt-8">
            {[...Array(1)].map((_, index) => (
            <li key={index} className="relative animate-pulse">
                <div className="overflow-hidden transition duration-500 bg-gray-100 border-2 border-white shadow-sm w-96 h-36 sm:w-72 rounded-2xl group hover:shadow hover:bg-gray-200">
                    <div className="w-3/4 h-6 pt-5 pl-5 text-xl font-medium tracking-tight bg-gray-300 text-gray-950 rounded-r-2xl"></div>
                    <div className="w-1/2 h-4 pt-2 pl-5 text-sm text-gray-500 bg-gray-200 rounded-r-2xl"></div>
                </div>
            </li>
            ))}
        </ul>
        );
    }


  return (
    <div>
        <ul role="list" className="flex flex-wrap justify-center gap-5 mt-8 font-[Lato] md:justify-start">
        {tasks.map((task) => (
            <li key={task.title} className="relative">
            <div className={`w-96 h-36 overflow-hidden transition duration-500 md:w-72 rounded-2xl group border-2 border-white hover:shadow bg-gray-100 hover:bg-gray-200 ${getStatusCardClasses(task.status)}`}>
                <div className='mx-6 my-5'>
                    <div className='flex items-center gap-x-2'>
                        <div className={`w-3 h-2 rounded-full ${getStatusEllipseClasses(task.status)}`}></div>
                        <div className="text-xl font-bold tracking-tight text-gray-700">{task.title}</div>
                    </div>
                    <div className={`text-xs capitalize mt-0.5 font-bold text-gray-500`}>{task.status}</div>
                    <div className='mt-2 text-xs text-gray-600'>{truncateText("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eius?")}</div>
                    <div className='mt-2 text-xs text-gray-400 text-end'>{formatDistanceToNow(task.created_at ?? null, { addSuffix: true })}</div>
                </div>

                <button onClick={() => openModal(task)}
                        type="button" className="absolute inset-0 focus:outline-none">

                <span className="sr-only">View details for {task.title}</span>
                </button>
            </div>
            </li>
        ))}
        </ul>
        {selectedTask && (
            <ViewTask isOpen={isModalOpen} onClose={closeModal} task={selectedTask} />
        )}
    </div>
  );
};

export default TasksList;
