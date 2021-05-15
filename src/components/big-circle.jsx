import '@compiled/react'
import 'twin.macro'

import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()

  return (
    <div tw='p-28 h-screen flex flex-row justify-between items-center'>
      <img tw='flex-none m-12 rounded-full h-96 w-96 ' src='https://www.iheartradio.ca/image/policy:1.3838026:1548370085/restaurant-food-salat-2.jpg?a=16%3A9&$p$a=7cb0f5d' alt='LOGO' />

      <div tw='flex-grow' />
      <div tw='flex flex-col gap-y-2 w-max mx-auto items-center'>
        <h1 tw='mb-4 text-6xl'>Pinterest</h1>
        <div tw='w-96 leading-9 text-center'>
          Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Ea iure, eos
          assumenda repellat commodi, alias neque ipsum earum
          error quia dolores dolor, sit distinctio perspiciatis ex velit corporis beatae expedita?
        </div>
        <button
          tw='bg-c hover:bg-d text-white font-semibold py-3 px-8 rounded-full transition duration-500 shadow-lg'
          onClick={() => history.push('/join')}
        >
          Join us now
        </button>
      </div>
    </div>
  )
}
//  onClick={() => { history.push('/joinUs') }}
