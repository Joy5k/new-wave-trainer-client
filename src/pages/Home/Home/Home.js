import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import DemoService from '../DemoService/DemoService';
const Home = () => {
	useTitle('home')
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
				<Link rel="noopener noreferrer" to='/signIn' className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Sign Up</Link>
				<Link rel="noopener noreferrer" to='' className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Learn more...</Link>
			</div>
		</div>
	</div>
</section>
			<DemoService></DemoService>

			{/* about the course section start below */}

<section className=" bg-gray-800  text-gray-100 my8">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
			<div>
				<h3 className="font-semibold">Why You Purchase The courses?</h3>
				<p className="mt-1  text-gray-400">Here,You will know how to learn with easy.Every course has updated.Study while continuing with your job. Give your career the winning edge</p>
			</div>
			<div>
				<h3 className="font-semibold">What are facilities in these courses?</h3>
				<p className="mt-1  text-gray-400">If you complete a course.I will give you a certificate. And Before given certificate You have to take exam and If you pass the exam I will give you this class related more lesson that's free!. </p>
			</div>
			<div>
				<h3 className="font-semibold">Can the price of the course be reduced?</h3>
				<p className="mt-1  text-gray-400">absolutely not but If you are purchases more than 5 lesson then you will get 20% discount. </p>
			</div>
			<div>
				<h3 className="font-semibold">has any discount for brilliant students?</h3>
				<p className="mt-1  text-gray-400">Yeah! I will give Every brilliant students have a surprise offer that I won't publish it. If you are a brilliant student then take exam I will judge you.Not only judge you but also give you a special sign in you certificate.</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Home;