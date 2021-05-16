import '@compiled/react'
import 'twin.macro'
import { useTranslation } from 'react-i18next'
import Post from '@/components/post'

export default (props) => {
  const { t } = useTranslation()
  return (
    <Post name='bob' content='wow' />
  )
}
