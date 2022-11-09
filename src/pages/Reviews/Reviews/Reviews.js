import React from 'react';
import { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Reviews = ({ review }) => {
	const {user}=useContext(AuthContext)
	const { message, email,imgURL,userName } = review;
console.log(imgURL)
    return (
        <div>
<div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700  bg-gray-900  text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
						<div>
							{
								user?.imgURL ? 
									<img src={imgURL} alt="" className="object-cover w-12 h-12 
									rounded-full  bg-gray-500" />
								:<FaUserAlt></FaUserAlt>
							}
			</div>
			<div>
					
								<h4 className="font-bold">{userName}</h4> 
							
								
				<span className="text-xs  text-gray-400">2 days ago</span>
			</div>
		</div>
		
	</div>
	<div className="p-4 space-y-2 text-sm  text-gray-400">
					<p>{message }</p>
					
	</div>
			</div>
      </div>
    );
};

export default Reviews;