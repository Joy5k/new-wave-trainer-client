import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ReviewCart from './ReviewCart/ReviewCart';

const MyReview = () => {
    useTitle('my-reviews')
    const { user,LogOutUser } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                   return LogOutUser()
                }
             return   res.json()
            })
            .then(data=>setReviews(data))
},[user?.email])
const handleDelete = id => {
    const proceed = window.confirm('Are you want delete the review');
    if (proceed) {
        fetch(`http://localhost:5000/myreviews/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt-token')}`
            }
            
        })
            .then(res => res.json())
        
            .then(data => {
                console.log(data)
                toast.success('successfully Deleted', {
                    position: toast.POSITION.TOP_CENTER
                });
                const remaining=reviews.filter(review=>review._id!==id)
            setReviews(remaining)
            })
    }
}
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 p-8 gap-8 mx-auto '>

          
                  {  reviews.map(review => <ReviewCart
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                  ></ReviewCart>)
            }
                
            

        </div>
    );
};

export default MyReview;