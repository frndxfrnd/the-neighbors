import '@compiled/react'
import tw from 'twin.macro'

export default ({ reversed ,txt,image}) => {

const featureds=['https://images.immediate.co.uk/production/volatile/sites/30/2020/11/Spicy-cauliflower-halloumi-rice-35ee40a.jpg?quality=90&resize=504,458',
"https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/08/hotDogsWorstDiabetesFood-956129522-770x533-1.jpg",
"https://specials-images.forbesimg.com/imageserve/5f748b1a267da47f7b3c2dfa/960x0.jpg?cropX1=0&cropX2=1252&cropY1=155&cropY2=1094",
"https://localadventurer.com/wp-content/uploads/2015/11/what-to-eat-in-morocco.jpg"]

const featuredNames=['Cauliflower by Jean-Talon Eats',
'Hot dogs by ChicagoPlus',
'Oriental Spaghet by TheNewWin',
'Ratatouille Inspired by The Cat and the Mouse'
]
const index=Math.floor(Math.random()*featureds.length);
const randomFeatured = featureds[index];
const foodResto = featuredNames[index];

return (


        <div tw="pl-40 pt-24 grid justify-items-center">
        <img
      src={randomFeatured} alt='LOGO'
      tw='rounded-lg border-4 h-96 w-auto bg-gray-500 grid justify-items-center justify-center' />
      {foodResto}
{/* <div tw="h-80 w-80 bg-gray-500 grid justify-items-center justify-center "> hello</div> */}
</div>
    )
}
