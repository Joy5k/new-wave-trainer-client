import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import Reviews from '../../../Reviews/Reviews/Reviews';

const LessonDetails = () => {
    const singleCourse = useLoaderData();
    const { user } = useContext(AuthContext);
    const userEmail = user.email
    console.log(userEmail,'this is')
    const {_id, img, price, description, title } = singleCourse;
    
    const handleComment = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.message.value;
        const courseId = _id;

        const message = {
            email:userEmail,
            courseId,
            message:comment
        }
        fetch('http://localhost:5000/addReview', {
            method:'PUT', 
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(message)
        })
            .then(res => {
            form.reset()
                return res.json()
            })
            .then(data => {
               console.log(data);
            })
            .catch(error => console.log(error))
    
    }
    return (
        <div>
                <div className="w-8/12 mx-auto my-8 p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
      <h1 className=' text-5xl font-semibold text-center my-8'>Details of <span className='text-violet-500 font-bold'>{title} </span>course</h1>
        <div className="space-y-4">
            <div className="space-y-2">
                <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
             
            </div>
            <div className="space-y-2">
                <Link  rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-2xl font-semibold dark:text-violet-400">{title }</h3>
                            <p className='text-lg font-bold my-2'>Price:{ price}$</p>
                        </Link>
                    <p className="leading-snug dark:text-gray-400 text-justify"><span className='underline font-bold text-black'>About The Course :</span>{description}</p>
            </div>
            </div>
           
    </div>

            <div className='text-center'>
                <Reviews id={_id}></Reviews>
                
            </div>
            <div>
                <h3 className='my-4 text-center font-bold text-3xl'>Write a comment </h3>
                <form onSubmit={handleComment} className='p-24 bg-gray-200 rounded-lg w-5/12 mx-auto'>
                    
                <div className='grid grid-cols-1 '>
                        <h2 className='text-2xl font-bold '>Course Name: {title }</h2>
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full my-5 h-96 p-4" placeholder="Write Your comentd here ..."></textarea>
                <button className="btn bg-orange-600 w-full border-none text-xl font-semibold">Add Review</button>
           </form>
            </div>
        
    </div>
    );
};

export default LessonDetails;