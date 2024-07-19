import { FiGlobe } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaUserCircle } from 'react-icons/fa'

const RightNav = () => {
  return (
    <div className="flex justify-between cursor-pointer">
      <button className="border-transparent rounded-3xl px-4 py-2 text-sm font-medium hover:bg-gray-100">
        Airbnb your home
      </button>
      <button className="border-transparent rounded-3xl px-4 py-2 mr-1 hover:bg-gray-100">
        <FiGlobe />
      </button>
      <div className="flex justify-between items-center rounded-3xl px-2 py-2 border-gray-300 border">
        <RxHamburgerMenu className="mx-3" />
        <FaUserCircle className="text-gray-600 size-8" />
      </div>
    </div>
  )
}

export default RightNav
