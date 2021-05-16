import '@compiled/react'
import 'twin.macro'
import React from 'react';

import Post from '@/components/post'
import CircleText from '@/components/circle-and-text'
import BigCircle from '@/components/big-circle'

import yellowBackground from '@/assets/background4.png'
import background from '@/assets/background3.png'
import SignUp from '@/components/signup'
import { useTranslation } from 'react-i18next'
export default (props) => {
  const { t } = useTranslation()
  return (
    <main tw='container mx-auto h-screen flex flex-row justify-around gap-x-52'>
      <div tw='absolute inset-0'>
        <img tw='h-full object-cover' src={background} alt='background'/>
      </div>
      <div tw='absolute inset-0'>
        <img tw='h-full object-cover' src={yellowBackground} alt='background'/>
      </div>
      <div tw='relative flex-grow flex flex-col gap-y-2 w-max mx-auto items-center place-self-center m-80'>
        <h1 tw='mb-4 text-4xl font-semibold'>Sign Up</h1>
        <SignUp />
      </div>
    </main>
  )
}
