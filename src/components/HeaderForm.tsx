const HeaderForm = () => {
  return (
    <div className="flex justify-between w-6/12 mx-auto mt-10 items-center border- rounded-full px-3 py-3 text-sm">
      <div>
        <p>Where</p>
        <input placeholder="Search destinations" type="text" />
      </div>
      <div>
        <p>Check in</p>
        <p>Add dates</p>
      </div>
      <div>
        <p>Check out</p>
        <p>Add dates</p>
      </div>
      <div className="flex">
        <div>
          <p>Who</p>
          <p>Add guests</p>
        </div>
        <div>Search</div>
      </div>
    </div>
  )
}

export default HeaderForm
