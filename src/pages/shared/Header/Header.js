import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="p-4 bg-gray-800 text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
            <Link rel="noopener noreferrer" to=" " aria-label="Back to homepage" className="flex items-center p-2">
              <img className='w-20 h-20 rounded-full mr-2' src="https://img.freepik.com/free-vector/teacher-with-blackboard-design_1214-222.jpg?w=740&t=st=1667873607~exp=1667874207~hmac=e9dec438f0b43c80d89993432f6565ffd5e5f2559ae173d487d8ec42391f84c7" alt="" />
                    <p className='text-2xl font-bold'>newWave Trainer</p>
            </Link>
            <ul className="items-stretch hidden space-x-3 md:flex">
                <li className="flex">
                    <Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Home</Link>
                </li>
                <li className="flex">
                    <Link rel="noopener noreferrer" to=" " className="flex items-center px-4 -mb-1 border-b-2 border-transparent">services</Link>
                </li>
                <li className="flex">
                    <Link rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</Link>
                </li>
                <li className="flex">
                    <Link rel="noopener noreferrer" to=" " className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</Link>
                </li>
            </ul>
            <button className="flex justify-end p-4 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </header>
    );
};

export default Header;