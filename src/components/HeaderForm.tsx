import { IoSearchSharp } from 'react-icons/io5'

const HeaderForm = () => {
  return (
    <div className="flex w-6/12 mx-auto mt-5 items-center border border-gray-300 shadow-md rounded-full px-3 py-3 text-sm">
      <div className="pl-2 border-r w-4/12 mr-5">
        <div>Where</div>
        <input
          placeholder="Search destinations"
          type="text"
          className="w-full outline-none placeholder-gray-500"
        />
      </div>
      <div className="border-r w-2/12 mr-5 cursor-pointer">
        <div>Check in</div>
        <div className="text-gray-500">Add dates</div>
      </div>
      <div className="border-r w-2/12 mr-5 cursor-pointer">
        <div>Check out</div>
        <div className="text-gray-500">Add dates</div>
      </div>
      <div className="w-4/12 flex justify-between items-center">
        <div className="cursor-pointer">
          <div>Who</div>
          <div className="text-gray-500">Add guests</div>
        </div>
        <div className="px-4 py-4 rounded-full bg-rose-600 cursor-pointer">
          <IoSearchSharp className="text-xl  text-white size-5" />
        </div>
      </div>
    </div>
  )
}

export default HeaderForm
