import '@compiled/react'
import 'twin.macro'
import { useTranslation } from 'react-i18next'
import Post from '@/components/post'

import posts from '@/assets/posts.json'
console.log(posts)
export default (props) => {
  const { t } = useTranslation()
  return (
    <div tw="mb-8 pt-16">
      <h1 tw="text-center text-5xl m-8">{t('discover title')}</h1>
      <div tw='flex flex-col gap-y-8'>
        {posts.map((props) => <Post {...props} />)}
      </div>
    </div>
  )
}
