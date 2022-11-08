import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LessonCart from '../LessonCart/LessonCart';

const AllLesson = () => {
    const [allLesson, setAllLesson] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/lessons')
            .then(res => res.json())
            .then(data=>setAllLesson(data))
    },[])
    return (
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold"> My all courses or class.</h2>
                <p className="font-serif text-sm dark:text-gray-400">Find your lesson and if want to know about a lesson click Details Button</p>
            </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    {
                        allLesson.map(lesson => <LessonCart
                            key={lesson._id}
                            lesson={lesson}
                        ></LessonCart>)
                    }
           </div>
        </div>
    </section>
    );
};

export default AllLesson;