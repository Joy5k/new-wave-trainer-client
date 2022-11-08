import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const LessonDetails = () => {
    const singleCourse = useLoaderData();
    const { img, price, description,title } = singleCourse;
    return (
        <div className="w-8/12 mx-auto my-8 p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
      <h1 className=' text-5xl font-semibold text-center my-8'>Details of <span className='text-violet-500 font-bold'>{title} </span>course</h1>
        <div className="space-y-4">
            <div className="space-y-2">
                <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
             
            </div>
            <div className="space-y-2">
                <Link  rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-2xl font-semibold dark:text-violet-400">{title }</h3>
                 </Link>
                    <p className="leading-snug dark:text-gray-400 text-justify"><span className='underline font-bold text-black'>About The Course :</span>{description}</p>
            </div>
        </div>
    </div>
    );
};

export default LessonDetails;