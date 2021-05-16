import '@compiled/react'
import 'twin.macro'
import React from 'react';

import Post from '@/components/post'
import CircleText from '@/components/circle-and-text'
import BigCircle from '@/components/big-circle'

import person from '@/assets/person2.png'
import background from '@/assets/background2.png'
import Login from '@/components/login'
import { useTranslation } from 'react-i18next'
export default (props) => {
  const { t } = useTranslation()
  return (
    <main tw='container mx-auto h-screen flex flex-row justify-around gap-x-52'>
      <div tw='absolute inset-0'>
        <img tw='w-full' src={background} alt='background'/>
      </div>

      <div tw='absolute inset-0'>
        <img tw='max-h-full max-w-full inset-1 mx-40' src={person} alt='person'/>
      </div>

      <div tw='relative flex-grow flex flex-col gap-y-2 w-max mx-auto items-center place-self-center'>
        <h1 tw='text-center mb-4 text-4xl font-semibold'>Login to your account</h1>
        <Login />
      </div>
    </main>
  )
}

{/* <main tw='container mx-auto h-screen flex flex-row justify-around gap-x-52'>
      <div tw='absolute inset-0'>
        <img tw='w-full' src={background} alt='background'/>
      </div>

      <div tw='relative flex-shrink flex justify-center items-center'>
        <img tw='max-h-full max-w-full' src={person} alt='person'/>
      </div>

      <div tw='relative flex-grow flex flex-col gap-y-2 w-max mx-auto items-center place-self-center'>
        <h1 tw='mb-4 text-4xl font-semibold'>Login to your account</h1>
        <Login />
      </div>


    </main> */}
