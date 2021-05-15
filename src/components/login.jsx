import '@compiled/react'
import 'twin.macro'

import { useState } from 'react'

const Login = () => {
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
          <label>Email</label>
          <input
            type='email'
            tw='w-full text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 py-2 px-10'
            id='email'
            placeholder='Your Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div tw='w-full'>
          <label>Password</label>
          <input
            type='password'
            tw='w-full py-2 px-10 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
            id='password'
            placeholder='Your Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          tw='bg-c hover:bg-d text-white font-semibold py-3 px-8 rounded-full transition duration-500 shadow-lg'
          type='submit'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
