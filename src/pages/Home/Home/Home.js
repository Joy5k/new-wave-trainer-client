import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import DemoService from '../DemoService/DemoService';
const Home = () => {
	const {name}=useContext(AuthContext)
    return (
        <div>
            <section className="bg-gray-800 text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img  src="https://img.freepik.com/free-photo/young-male-teacher-wearing-glasses-happy-positive-explaining-lesson-standing-near-blackboard-with-mathematical-formulas-classroom_141793-99035.jpg?w=2000" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-full rounded-lg" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Hi
				 <span className="text-violet-400"> I'm Joy</span> a  Professional Trainer
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Welcome to my new-wave Trainer website. Iam Joy, a Professional teacher and author.It's my passion. I have experience about... 
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link rel="noopener noreferrer" to='/login' className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Sign Up</Link>
				<Link rel="noopener noreferrer" to='' className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Learn more...</Link>
			</div>
		</div>
	</div>
</section>
<DemoService></DemoService>
        </div>
    );
};

export default Home;