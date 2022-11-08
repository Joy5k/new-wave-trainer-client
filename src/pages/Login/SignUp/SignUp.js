import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='flex justify-center my-20'>
        <div className=" flex flex-col w-96 p-6 rounded-md sm:p-10 bg-gray-900  text-gray-100">
  <div className="mb-8 text-center">
      <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
      
  </div>
  <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
      <div className="space-y-4">
          <div>
              <label for="email" className="block mb-2 text-sm">Your Name</label>
              <input type="text" name="name" id="email" placeholder="your name" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-gray-900  text-gray-100" required />
          </div>
          <div>
              <label for="email" className="block mb-2 text-sm">Email address</label>
              <input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-gray-900  text-gray-100" required />
          </div>
          <div>
              <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm">Password</label>
                  <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline  text-gray-400">Forgot password?</Link>
              </div>
              <input type="password" name="password" id="password" placeholder="password" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-gray-900  text-gray-100" required/>
          </div>
      </div>
      <div className="space-y-2">
          <div>
              <button type="button" className="w-full px-8 py-3 font-semibold rounded-md  bg-violet-400  text-gray-900">Sign Up</button>
          </div>
          <p className="px-6 text-sm text-center  text-gray-400">Already an account?
              <Link rel="noopener noreferrer" to='/signIn' className="hover:underline  text-violet-400">Sign In</Link>.
          </p>
      </div>
  </form>
</div>
</div>
    );
};

export default SignUp;