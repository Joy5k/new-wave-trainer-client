import React from 'react';
import { Link } from 'react-router-dom';

const LessonDetails = () => {
    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
                <Link  rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">Photography </Link>
            </div>
            <Link  rel="noopener noreferrer" href="#">See All </Link>
        </div>
        <div className="space-y-4">
            <div className="space-y-2">
                <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="flex items-center text-xs">
                    <span>6 min ago</span>
                </div>
            </div>
            <div className="space-y-2">
                <Link  rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                 </Link>
                <p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
            </div>
        </div>
    </div>
    );
};

export default LessonDetails;