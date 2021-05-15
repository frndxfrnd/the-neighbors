import '@compiled/react'
import 'twin.macro'
import person from '@/assets/person.png'

import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()

  return (
    <div tw='p-28 h-screen flex flex-row justify-between items-center'>
      <div tw='p-20'>
        <img src={person} alt='LOGO'/>
      </div>

      <div tw='flex-grow' />
      <div tw='flex flex-col gap-y-2 w-max mx-auto items-center'>
        <h1 tw='mb-4 text-6xl'>Neighbors</h1>
        <div tw='w-96 leading-9 text-center'>
        Explore and discover what's new, fun and innovative at the heart of your community.
Network and communicate with other local businesses, making every click count.
        </div>
        <button
          tw='bg-c hover:bg-d text-white font-semibold py-3 px-8 rounded-full transition duration-500 shadow-lg'
          onClick={() => history.push('/SignUp')}
        >
          Join us now
        </button>
      </div>
    </div>
  )
}
//  onClick={() => { history.push('/joinUs') }}
