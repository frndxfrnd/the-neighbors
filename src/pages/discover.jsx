 import '@compiled/react'
import 'twin.macro'
import { useTranslation } from 'react-i18next'
import Post from '@/components/post'
import Card from '@/components/card'

export default (props) => {
    const { t } = useTranslation()
    return (
        <div tw="my-8 ">
            <h1 tw="text-center text-5xl m-8">{t('discover title')}</h1>
            <div tw="flex flex-col justify-around gap-y-8 mx-8">
                <div tw=" flex flex-row justify-around gap-x-8 mx-8 ">
                <Card />
                <Card />
                <Card />
                <Card />
                </div>

                <div tw=" flex flex-row justify-around gap-x-8 mx-8">
                <Card />
                <Card />
                <Card />
                <Card />
                </div>

                <div tw=" flex flex-row justify-around gap-x-8 mx-8">
                <Card />
                <Card />
                <Card />
                <Card />
                </div>
            </div>
        </div>
    )
}
