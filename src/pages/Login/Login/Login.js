import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, IconName } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    useTitle('login')
    const { signInWithGoogle, LoginWithUserEmail,user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

// signIn With User Email
    const handleSignInWithUserEmail = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        LoginWithUserEmail(email, password)
            .then(result => {
                const user = result.user;
                form.reset()

                navigate(from, { replace: true });
                
            })
            .catch(error => {
                console.log(error);
                toast.error(error, {
                    position: toast.POSITION.TOP_CENTER
                })
        })
    }
console.log(user);
// signIn Wiht google Account
    const handleGoogleSignIn = (event) => {
        event.preventDefault()
        signInWithGoogle()
        .then((result) => {
            const user = result.user;
            console.log(user)
            navigate(from, { replace: true });
            
           }).catch((error) => {
             // Handle Errors here.
             const errorMessage = error.message;
             toast.error(errorMessage, {
                position: toast.POSITION.TOP_CENTER
            })
           });
        console.log('clicked');
    }
    return (
        <div className='flex justify-center my-20'>
              <div className=" flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900  text-gray-100">
        <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm  text-gray-400">Sign in to access your account</p>
        </div>
        <form onSubmit={handleSignInWithUserEmail} noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                    <input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-gray-900  text-gray-100" />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">Password</label>
                        <Link rel="noopener noreferrer" to='' className="text-xs hover:underline  text-gray-400">Forgot password?</Link>
                    </div>
                    <input type="password" name="password" id="password" placeholder="password" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-gray-900  text-gray-100" />
                </div>
            </div>
            <div className="space-y-2">
                <div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md  bg-violet-400  text-gray-900">Sign in</button>
                </div>
                <p className="px-6 text-sm text-center my-3  text-gray-400">Don't have an account yet?
                    <Link rel="noopener noreferrer" to='/signUp' className="hover:underline  text-violet-400">Sign up</Link>.
                        </p>
                        <div>
                        <button onClick={handleGoogleSignIn} className='w-full my-3 flex justify-center border p-2 cursor-pointer rounded-lg text-xl hover:bg-gray-600'><FaGoogle className='mt-1 mx-2 '></FaGoogle>Google</button>
                </div>
            </div>
        </form>
    </div>
      </div>
    );
};

export default Login;