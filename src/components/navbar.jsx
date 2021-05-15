import '@compiled/react'
import 'twin.macro'

export default (props) => {
  return (
    <nav tw='w-full flex flex-row justify-between p-2 bg-blue-400 rounded-b-lg'>
      <div tw='w-12'>
        <img src='https://assets.turbologo.com/blog/en/2018/03/19085254/prozrachniy-logo-1-800x575.png' alt='LOGO' />
      </div>

      {/* <div  /> */}
      <div tw='flex flex-row gap-x-4 items-center text-sm font-sans text-white'>
        <button>About us</button>
        <button>Home</button>
        <button>Contact us</button>
        <button tw='px-5 py-2  rounded-full shadow-lg font-semibold text-yellow-50 bg-a transform hover:bg-yellow-600 transition duration-500'>Login</button>
      </div>
    </nav>
  )
}

// pt p-8
// mx my-7 mt
