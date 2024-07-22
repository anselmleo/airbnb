import { IoSearchOutline } from 'react-icons/io5'

const HeaderForm = () => {
  return (
    <div className="flex w-6/12 mx-auto mt-5 items-center border border-gray-300 shadow-md rounded-full px-3 py-3 text-sm">
      <div className="pl-2 border-r w-4/12 mr-5">
        <div>Where</div>
        <input placeholder="Search destinations" type="text" className="w-full" />
      </div>
      <div className="border-r w-2/12 mr-5">
        <div>Check in</div>
        <div>Add dates</div>
      </div>
      <div className="border-r w-2/12 mr-5">
        <div>Check out</div>
        <div>Add dates</div>
      </div>
      <div className="w-4/12 flex justify-between items-center">
        <div>
          <div>Who</div>

          <div>Add guests</div>
        </div>
        <div className="px-4 py-4 rounded-full bg-pink-600">
          <IoSearchOutline className="text-xl  text-white" />
        </div>
      </div>
    </div>
  )
}

export default HeaderForm
