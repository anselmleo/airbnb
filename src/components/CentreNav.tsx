import { useState } from 'react'

const CentreNav = () => {
  const [isStaysActive, setIsStaysActive] = useState(true)
  const [isExperiencesActive, setIsExperiencesActive] = useState(false)
  const toggleActive = () => {
    setIsStaysActive(!isStaysActive)
    setIsExperiencesActive(!isExperiencesActive)
  }

  return (
    <div className="flex justify-between">
      <button
        onClick={toggleActive}
        className={`mr-1 border-transparent rounded-3xl px-4 py-2 ${isStaysActive ? `font-medium` : `hover:bg-gray-100 font-light`}`}
      >
        Stays
      </button>
      <button
        onClick={toggleActive}
        className={`mr-1 border-transparent rounded-3xl px-4 py-2 ${isExperiencesActive ? `font-medium` : `hover:bg-gray-100 font-light`}`}
      >
        Experiences
      </button>
    </div>
  )
}

export default CentreNav
