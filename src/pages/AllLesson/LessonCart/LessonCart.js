import React from 'react';
import { Link } from 'react-router-dom';

const LessonCart = ({ lesson }) => {
    const { img, title, description, price } = lesson;
    return (
        <div>
             <div className="grid grid-cols-1 ">
                <article className="flex flex-col bg-gray-900 text-left text-white rounded-lg">
                    <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 bg-gray-500" src={img} />
                    </Link>
                    <div className="flex flex-col flex-1 p-6">
                        <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                       
                        <h3 className="flex-1 py-2 text-2xl font-semibold leading-snug">{title }</h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-gray-400 ">
                            <p className='my-4'>{description.slice(0,100) }...</p>
                          
                           
                        </div>
                        <Link to='' className='btn bg-slate-600 hover:bg-black p-2 rounded-lg font-bold text-center'>Details</Link>
                    </div>
                </article>
               
            </div>
        </div>
    );
};

export default LessonCart;