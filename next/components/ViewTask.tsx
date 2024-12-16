'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { formatDistanceToNow } from 'date-fns';

import { FC } from 'react';

const getStatusBgClasses = (status: string) => {
    switch (status) {
        case 'completed':
        return 'bg-green-600';
        case 'pending':
        return 'bg-yellow-600';
        case 'in-progress':
        return 'bg-blue-600';
        default:
        return 'bg-gray-600';
    }
};

type ViewTaskProps = {
  isOpen: boolean;
  onClose: () => void;
  task: {
    title: string;
    description: string;
    status: string;
    created_at: string;
  };
};

const ViewTask: FC<ViewTaskProps> = ({ isOpen, onClose, task }) => {
    if (!isOpen) return null;

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
                <div className='flex items-center gap-x-2'>
                    <DialogTitle className="text-2xl font-semibold text-gray-900">
                      {task.title}
                    </DialogTitle>
                    <div className={`px-2 py-1 text-white capitalize rounded-full text-xs font-bold tracking-tight ${getStatusBgClasses(task.status)}`}>
                        {task.status}
                    </div>
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {task.description}
                  </p>
                </div>

                <div
                className='mt-8 text-xs text-gray-400 text-start'>
                    {formatDistanceToNow(task.created_at, { addSuffix: true })}
                    </div>
              </div>
            </div>
            <div className="pt-6 text-start sm:mt-6">
              <button
                type="button"
                onClick={() => onClose()}
                className="inline-flex justify-center w-32 px-3 py-2 text-sm font-semibold border border-gray-200 shadow bg-gray-50 text-gray-950 rounded-xl hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default ViewTask;
