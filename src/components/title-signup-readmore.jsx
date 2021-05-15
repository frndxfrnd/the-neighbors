import '@compiled/react'
import 'twin.macro'

export default () => {
  return (
    <div tw='flex flex-row '>
      <div tw='ml-8 rounded-full h-96 w-96 flex flex-row items-center justify-center bg-blue-500 bg-center m-12 mb-32' />
      <div>
        <p> TITLE</p>
        <button tw='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-500'> Button </button>
        <button tw='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Button
        </button>

      </div>
    </div>
  )
}
