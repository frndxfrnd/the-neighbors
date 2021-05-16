import '@compiled/react'
import 'twin.macro'

import Icon from '@/components/icon'
import Image from '@/assets/city.jpeg'

const footer = () => {
  return (
    <footer tw='bg-d w-full p-2 py-7 text-white font-sans text-sm rounded-t-lg'>
      <div tw='container mx-auto overflow-hidden '>
        <div tw='flex flex-row justify-between flex-wrap mx-8'>

          <div tw='flex flex-col'>
            <h1 tw='text-xl'>THE NEIGHBORS</h1>
          </div>

          <div tw='flex flex-col'>
            <h1 tw='text-xl'>ABOUT US</h1>
            <br />
            <p tw='w-40'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea iure, eos</p>
          </div>

          <div tw='flex flex-col'>
            <h1 tw='text-xl'>RESOURCES</h1>
            <br />
            <p>Google Maps</p>
            <p>Yelp</p>
          </div>

          <div tw='flex flex-col'>
            <h1 tw='text-xl'>CONTACT US</h1>
            <br />
            <p>514-123-4567</p>
            <p>contact@mail.ca</p>
          </div>

          <div tw='flex flex-col gap-y-2 justify-between'>
            <Icon name='facebook' />
            <Icon name='instagram' />
            <Icon name='linkedin' />
            <Icon name='twitter' />
          </div>

        </div>

      </div>
    </footer>
  )
}

export default footer
