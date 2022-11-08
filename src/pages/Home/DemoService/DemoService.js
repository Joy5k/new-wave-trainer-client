import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DemoCart from './DemoCart/DemoCart';

const DemoService = () => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/lesson')
            .then(res => res.json())
            .then(data=>setLessons(data))
    },[])
console.log(lessons)
    return (
      <section className="bg-gray-800 text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<Link rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
        <img src="https://static.vecteezy.com/system/resources/previews/001/937/817/original/online-education-application-learning-worldwide-on-computer-mobile-website-background-social-distance-concept-with-books-lecture-pencil-the-classroom-training-course-library-illustration-flat-vector.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 rounded-lg" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl ">I am your instructor of these courses.Every course made for Beginner.</h3>
				<span className="text-xs dark:text-gray-400">November 08, 2022</span>
				<p>With this course from newWave trainer you can learn about hardest subject and how to apply them in clinical practice. This course is most suitable for those already studying , and you'll get the most out of this course .</p>
			</div>
                </Link>
                <h1 className='text-3xl text-center font-bold'> --- Some courses Demo --- </h1>
                <div className='grid grid-cols-3'>
                {
                    lessons.map(lesson => <DemoCart
                        key={lesson._id}
                        lesson={lesson}
                    ></DemoCart>)
                }
               </div>
<div className="flex justify-center">
			<Link to='/lesson' type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400">see all</Link>
		</div>
	</div>
</section>
    );
};

export default DemoService;