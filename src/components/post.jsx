import '@compiled/react'
import 'twin.macro'

import Icon from '@/icon'

export default ({ avatar, name, content, image, likes }) => {
  return (
    <section tw='rounded-xl border-2 max-w-prose w-full mx-auto p-8 my-2'>
      <img tw='w-full rounded-xl border-2 mb-8 max-w-full' src={image} alt='content' />
      <p tw='mb-4 mx-2 text-justify'>
        <span tw='font-bold mr-4'>{name}</span>
        {content}
      </p>
      <div tw='mx-2 flex flex-row gap-x-4 justify-end items-center'>
        <Icon name='share' />
        <Icon name='heart' />
      </div>
    </section>
  )
}
