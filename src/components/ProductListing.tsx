import trainMansion from '../assets/product-images/train-x-mansion.webp'
import vipKevin from '../assets/product-images/vip-with-kevin.webp'
import purpleRain from '../assets/product-images/purple-rain-house.webp'
import olympicGame from '../assets/product-images/olympic-games-at-musee.webp'
import livingRoomDoja from '../assets/product-images/living-room-with-doja.webp'
import likeBollywood from '../assets/product-images/like-bollywood-star.webp'
import wakeUpMuse from '../assets/product-images/wake-up-musee.webp'
import ProductCards from './ProductCards'

const ProductListing = () => {
  return (
    <div className="flex flex-wrap w-11/12 mx-20 my-10">
      <ProductCards
        Image={trainMansion}
        Title={'Train at the X-Mansion'}
        Owner={'Hosted by Jubilee'}
        Status={'$39 per guest'}
      />
      <ProductCards
        Image={vipKevin}
        Title={'Train at the X-Mansion'}
        Owner={'Hosted by Jubilee'}
        Status={'$39 per guest'}
      />
      <ProductCards
        Image={livingRoomDoja}
        Title={'Train at the X-Mansion'}
        Owner={'Hosted by Jubilee'}
        Status={'$39 per guest'}
      />
      <ProductCards
        Image={purpleRain}
        Title={'Train at the X-Mansion'}
        Owner={'Hosted by Jubilee'}
        Status={'$39 per guest'}
      />
      <ProductCards
        Image={olympicGame}
        Title={'Train at the X-Mansion'}
        Owner={'Hosted by Jubilee'}
        Status={'$39 per guest'}
      />
      <ProductCards
        Image={likeBollywood}
        Title={'Train at the X-Mansion'}
        Owner={'Hosted by Jubilee'}
        Status={'$39 per guest'}
      />
      <ProductCards
        Image={wakeUpMuse}
        Title={'Train at the X-Mansion'}
        Owner={'Hosted by Jubilee'}
        Status={'$39 per guest'}
      />
    </div>
  )
}

export default ProductListing
