'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { addNewTasksAPI } from '../utils/api';
import { useEffect, useState } from 'react';


import { FC } from 'react';

type AddNewTaskProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddNewTask: FC<AddNewTaskProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "in-progress"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addNewTasksAPI(formData);
        onClose();
    };


  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10 transition duration-500">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-2xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-full sm:max-w-xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>
              <div className="mt-3 text-left">
                <DialogTitle className="text-2xl font-semibold text-gray-900">
                        Add new task
                </DialogTitle>
              </div>
            </div>

            <div>
                <form onSubmit={handleSubmit} className="mx-auto mt-5 space-y-4 text-black rounded">
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="block w-full rounded-xl bg-white px-3 py-2.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                            placeholder='Title'
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="block w-full rounded-xl bg-white px-3 py-3.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                            placeholder='Description'
                            required
                        />
                    </div>
                    <div className="flex pt-3 space-x-4">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="status"
                                value="in-progress"
                                checked={formData.status === "in-progress"}
                                onChange={handleChange}
                                className="mr-2 relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-gray-600 checked:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                />
                            In-Progress
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="status"
                                value="pending"
                                checked={formData.status === "pending"}
                                onChange={handleChange}
                                className="mr-2 relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-gray-600 checked:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                            />
                            Pending
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="status"
                                value="completed"
                                checked={formData.status === "completed"}
                                onChange={handleChange}
                                className="mr-2 relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-gray-600 checked:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                            />
                            Completed
                        </label>
                    </div>

                    <div className='flex justify-between pt-6'>
                        <button
                            type="button"
                            onClick={() => onClose()}
                            className="inline-flex justify-center w-32 px-3 py-2 text-sm font-semibold border border-gray-200 shadow bg-gray-50 text-gray-950 rounded-xl hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
                        >
                            Close
                        </button>

                        <button type="submit" className="w-32 px-3 py-2 text-white bg-gray-900 rounded-xl">
                            Add Task
                        </button>

                    </div>
            </form>
            </div>

            <div className="mt-5 text-end sm:mt-6">

            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default AddNewTask;
