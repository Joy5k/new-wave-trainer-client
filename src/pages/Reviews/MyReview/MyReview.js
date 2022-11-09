import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewCart from './ReviewCart/ReviewCart';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                // if (res.status === 401 || res.status === 403) {
                //     return logOut();
                // }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email])
    console.log(reviews);
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 p-4 gap-8 '>
            
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