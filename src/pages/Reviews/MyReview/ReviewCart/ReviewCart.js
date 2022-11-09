import { data } from 'autoprefixer';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const ReviewCart = ({ review }) => {
    const { user } = useContext(AuthContext);
    const { photoURL, email, displayName } = user;
    const { img, title,message } = review;
    
    return (
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700   bg-gray-900   text-gray-100">

            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
	
	<div>
                    <img src={img} alt="" className="object-cover w-full mb-4 h-28 bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{title }</h2>

	</div>
	<div className="flex flex-wrap justify-between">

	</div>
            <h2 className='text-center'>My Review</h2>
            </div>
            

            <div className="flex justify-between p-4">
                
            <div className="flex space-x-4">
                    <div>
                        {
                            photoURL ? <img src={photoURL} alt="" className="object-cover w-12 h-12 rounded-full   bg-gray-500" /> :<FaUserAlt></FaUserAlt> 
                        }
                    
                </div>
                    <div>
                      
                        <h4 className="font-bold">{displayName }</h4>
                        <span className="text-xs   text-gray-400">Email: {email }</span>
                </div>
            </div>
              
        </div>
        <div className="p-4 space-y-2 text-sm   text-gray-400">
                <p>{message }</p>
        </div>
    </div>
    );
};

export default ReviewCart;