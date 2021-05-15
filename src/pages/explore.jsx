import '@compiled/react'
import 'twin.macro'

import Post from '@/components/post'
import CircleText from '@/components/circle-and-text'
import BigCircle from '@/components/big-circle'

export default (props) => {
  return (
    <>
      <img />

      <div tw='container mx-auto'>
        <BigCircle />

        {/* tw='absolute bottom-20 right-56 h-56 w-56' */}

        <div tw='w-1/2'>
          <CircleText />
          <CircleText reversed />
          <CircleText />

        </div>

        <Post />
      </div>
    </>
  )
}
