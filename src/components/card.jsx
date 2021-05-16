import '@compiled/react'
import 'twin.macro'

export default (image) => {
    return (
        <div tw=' h-96 w-80 bg-gray-500 flex items-center justify-center overflow-hidden'>
            <img src={image} alt='LOGO' />
        </div>


    )
}
