import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { FaChessKing } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { courseIdContext } from '../../AllLesson/LessonCart/LessonCart';
import ReviewCart from './ReviewCart/ReviewCart';

const Reviews = () => {


    // const [reviews, setReviews] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/reviews/${id}`)
    // }, [id])
    //     .then(res => res.json())
    //     .then(data => setReviews(data))
    // console.log(reviews)
    return (
        <div>

             <ReviewCart></ReviewCart>
      </div>
    );
};

export default Reviews;