import '@compiled/react'
import tw from 'twin.macro'

import { useTranslation } from 'react-i18next'

// export default ({ reversed }) => {
//   return (
//     <div
//       tw='flex flex-row gap-x-2 p-8'
//       css={[reversed && tw`flex-row-reverse`]}
//     >
//       <div tw='rounded-full h-24 w-24 flex flex-row items-center justify-center bg-c bg-center'>
//         Circle
//       </div>
//       <div tw='w-96 leading-9'>
//         Stay connected with other local businesses in your community.
//         Share and support your favorite stores, restaurants and businesses
//         to empower them to do more.
//       </div>
//     </div>
//   )
// }

export default ({ reversed }) => {
  const { t } = useTranslation()

  return (
    <div
      tw='flex flex-row gap-x-2 p-8'
      css={[reversed && tw`flex-row-reverse`]}
    >
      <div tw='rounded-full h-24 w-24 flex flex-row items-center justify-center bg-c bg-center'>
        Circle
      </div>
      <div tw='w-96 leading-9'>
        {t('first circle')}
      </div>
    </div>
  )
}

// make a positive impact to the local economy

// sparks innovation

// has a big impact

// create an environment which supports and nurtures small business growth.

// build a better tomorrow for their communities
