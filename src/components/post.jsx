import '@compiled/react'
import tw from 'twin.macro'

import { useState } from 'react'

import Icon from '@/icon'

export default ({ avatar, name, content, image, likes }) => {
  const [liked, setLiked] = useState(false)

  return (
    <section css={[tw`rounded-xl border-2 max-w-prose w-full mx-auto p-8 my-2`, { backgroundColor: 'rgba(255,255,255,0.50)' }]}>
      <img tw='w-full rounded-xl border-2 mb-8 max-w-full' src={image} alt='content' />
      <p tw='mb-4 mx-2 text-justify'>
        <span tw='font-bold mr-4'>{name}</span>
        {content}
      </p>
      <div tw='mx-2 flex flex-row gap-x-4 justify-end items-center'>
        <Icon name='share'/>
        <Icon name={liked ? 'heart-fill' : 'heart'} onClick={() => setLiked(!liked)} css={[liked && tw`text-a`]} />
      </div>
    </section>
  )
}
