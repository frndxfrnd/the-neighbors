import { css } from '@compiled/react'
import tw from 'twin.macro'

import Header from '@/components/header'
import Footer from '@/components/footer'

import background from '@/assets/mainBackground.jpg'

export default ({ children }) => {
  return (
    <main tw='h-screen w-screen overflow-scroll bg-cover' style={{ backgroundImage: `url(${background})` }}>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
