import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewCart from './ReviewCart/ReviewCart';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data=>setReviews(data))
},[user?.email])

    console.log(reviews);
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 p-8 gap-8 mx-auto '>

            {
                reviews.map(review => <ReviewCart
                    key={review._id}
                    review={review}
                ></ReviewCart>)
            }
        </div>
    );
};

export default MyReview;