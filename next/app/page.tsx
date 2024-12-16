'use client';

import { useEffect, useState } from 'react';
import TasksList from '../components/TasksList';
import { PlusIcon } from '@heroicons/react/16/solid'
import { fetchTasksAPI } from '../utils/api';
import AddNewTask from '../components/AddNewTask';


type Task = {
    title: string;
    description: string;
    status: string;
    created_at: string;
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const [tabs, setTabs] = useState([
        { name: 'all', current: true },
        { name: 'in-progress', current: false },
        { name: 'pending', current: false },
        { name: 'completed', current: false },
    ]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleTabClick = (tabName: string) => {
        setTabs(prevTabs =>
                prevTabs.map(tab =>
                tab.name === tabName ? { ...tab, current: true } : { ...tab, current: false }
            )
        );
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTabName = e.target.value;
        handleTabClick(selectedTabName);
    };

    const fetchTasks = async (status: string) => {
        setLoading(true);
        try {
            setTasks(await fetchTasksAPI(status));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const selectedTab = tabs.find(tab => tab.current);
        if (selectedTab) {
            fetchTasks(selectedTab.name);
        }
    }, [tabs]);

  return (
    <div>

        <div className="relative pb-5 mx-4 mt-16 sm:pb-0 sm:mx-24 sm:mt-24">
            <div className="md:flex md:items-center md:justify-between">
                <h1 className="text-6xl font-bold tracking-tighter text-gray-950">
                    my tasks
                </h1>
                <div className="absolute right-0 flex mt-0 top-3">
                <button
                    onClick={() => openModal()}
                    type="button"
                    className="inline-flex items-center px-2 py-2 ml-3 text-sm font-semibold text-white transition duration-500 rounded-full shadow-sm bg-gray-950 hover:bg-gray-900 ring-offset-2 ring-gray-800 active:ring-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950"
                >
                    <PlusIcon
                        aria-hidden="true"
                        className="self-center col-start-1 row-start-1 pointer-events-none size-7 justify-self-end fill-white"
                    />
                </button>
                </div>
            </div>

            <div className="mt-8 border-b border-gray-200">
                <div className="grid grid-cols-1 sm:hidden">
                <select
                    onChange={handleSelectChange}
                    defaultValue={tabs.find((tab) => tab.current)?.name}
                    aria-label="Select a tab"
                    className="w-full col-start-1 row-start-1 py-2 pl-3 pr-8 text-base text-gray-900 bg-white rounded-md appearance-none outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-950"
                >
                    {tabs.map((tab) => (
                        <option className='capitalize' key={tab.name} value={tab.name}>{tab.name}</option>
                    ))}
                </select>
                </div>
                <div className="hidden sm:block">
                    <nav className="flex -mb-px space-x-8">
                        {tabs.map((tab) => (
                        <a
                            key={tab.name}
                            aria-current={tab.current ? 'page' : undefined}
                            onClick={(e) => {
                                e.preventDefault();
                                handleTabClick(tab.name);
                            }}
                            className={classNames(
                            tab.current
                                ? 'border-gray-900 text-gray-950'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium capitalize cursor-pointer',
                            )}
                        >
                            {tab.name}
                        </a>
                        ))}
                    </nav>
                </div>
            </div>

            <TasksList tasks={tasks} loading={loading} />

            <footer>
                <div className='pt-10 text-sm text-center text-gray-700 border-t mt-96'>
                    <p>&copy; 2024 <a className='font-bold underline' href="mailto:mahmoud.ahmed9@outlook.com">Mahmoud Ahmed</a>, Task Management App.</p>
                </div>
            </footer>
        </div>

        <AddNewTask isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
