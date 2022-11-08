import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const DemoCart = ({ lesson }) => {
    const { _id, img, title, description, price } = lesson;
    
    return (
        <div>
                <div className="m-4 grid justify-center grid-cols-1 p-2 ">
            <PhotoProvider src={img}>
                <PhotoView src={img}>
				<img role="presentation" className="object-cover w-full rounded h-48 bg-gray-500" src={img} alt='course img' />
                </PhotoView>
           </PhotoProvider>
                        <Link rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group bg-gray-900 rounded-lg p-2">
				<div className="p-6 space-y-2">
                        <Link className="text-2xl font-semibold  hover:underline">{ title}</Link>
					<span className="text-xs text-gray-400 block">November 01, 2022</span>
                        <p >{description.slice(0, 100)}...</p>
                        <p className='font-bold'>Price: {price }$</p>
                        <div className='flex justify-between'>

                        {/* get assignment result after this button added will be */}
                            {/* <Link to='/' className='btn hover:bg-black p-2 rounded-lg hover:underline bg-slate-600'>Purchase</Link> */}
                           
                            <Link to={`lesson/${_id}`} className='btn w-full text-center hover:bg-black p-2 rounded-lg hover:underline bg-slate-600'>Details</Link>
                       </div>
                    </div>
                    
			</Link>
            
            </div>
         
            
		
        </div>
    );
};

export default DemoCart;