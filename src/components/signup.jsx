import '@compiled/react'
import 'twin.macro'

import { useState } from 'react'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <div tw='w-full max-w-md m-auto bg-white rounded-lg border py-10 px-16'>
      <form onSubmit={handleFormSubmit} tw='flex flex-col items-center'>
        <div tw='w-full'>
          <label>Business Name</label>
          <input
            type='username'
            tw='w-full py-2 px-10  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
            id='username'
            placeholder='Your Business Name'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div tw='w-full'>
          <label>Email</label>
          <input
            type='email'
            tw='w-full border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 py-2 px-10'
            id='email'
            placeholder='Your Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div tw='w-full'>
          <label>Password</label>
          <input
            type='password'
            tw='w-full py-2 px-10 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
            id='password'
            placeholder='Your Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div tw='w-full'>
          <label>Confirm your Password</label>
          <input
            type='password'
            tw='w-full py-2 px-10 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
            id='password'
            placeholder='Your Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          tw='bg-c tracking-wide hover:bg-d text-white font-semibold py-3 px-8 rounded-full transition duration-500 shadow-lg flex items-center justify-center gap-x-4'
          type='submit'
        >
          <svg
            tw="w-6 h-6 -ml-2"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <path d="M20 8v6M23 11h-6" />
          </svg>
            Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
