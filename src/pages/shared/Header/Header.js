import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user,LogOutUser } = useContext(AuthContext);
    const handleLogOutUser = () => {
        LogOutUser()
            .then(() => {
                toast.success("successfully logOut", {
                    position: toast.POSITION.TOP_CENTER
                })
            })
            .catch(error => {
                console.log('logout error', error);
                toast.error(error, {
                    position: toast.POSITION.TOP_CENTER
                })
        })
    }
    return (
        <header className="p-4 bg-gray-700 text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
            <Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">
              <img className='w-20 h-20 rounded-full mr-2' src="https://e7.pngegg.com/pngimages/167/843/png-clipart-apprendimento-online-educational-technology-computer-icons-learning-course-study-text-trademark-thumbnail.png" alt="" />
                    <p className='text-2xl font-bold'>newWave Trainer</p>
            </Link>
            <ul className="items-stretch hidden space-x-3 md:flex">
                <li className="flex">
                    <Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Home</Link>
                </li>
                <li className="flex">
                    <Link rel="noopener noreferrer" to="/lesson" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">services</Link>
                    </li>
                    <li className="flex">
                      {  user?.uid ? <>
                        <Link rel="noopener noreferrer" to="/addService" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Add service</Link>
                    
                        <Link rel="noopener noreferrer" to="/lesson" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">My Reviews</Link>
                        </> :<></>}
                   </li>
                    
                <li className="flex">
                    <Link rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</Link>
                </li>
                <li className="flex">
                    <Link rel="noopener noreferrer" to="" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">About Me</Link>
                </li>
                <li className="flex text-center">
                        {
                            user?.uid ? <Link onClick={handleLogOutUser} rel="noopener noreferrer" to="/" className="flex items-center p-4 rounded-lg   bg-slate-900 border-b-2 border-transparent">Log Out</Link>
                                :<Link rel="noopener noreferrer" to="/signIn " className="flex items-center p-4 rounded-lg   bg-slate-900 border-b-2 border-transparent">Sign In</Link>
                   } 
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