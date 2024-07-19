import { useState } from 'react'

const CentreNav = () => {
  const centreNavElements = { stays: 'stays', experiences: 'experiences' }
  const [isStaysActive, setIsStaysActive] = useState(true)
  const [isExperiencesActive, setIsExperiencesActive] = useState(false)
  const toggleActive = (buttonText: string) => {
    if (buttonText === centreNavElements.stays) {
      setIsStaysActive((prev) => (prev ? true : !prev))
      setIsExperiencesActive((prev) => (prev ? !prev : prev))
    } else if (buttonText === centreNavElements.experiences) {
      setIsExperiencesActive((prev) => (prev ? true : !prev))
      setIsStaysActive((prev) => (prev ? !prev : prev))
    }
  }

  return (
    <div className="flex justify-between">
      <button
        onClick={() => toggleActive(centreNavElements.stays)}
        className={`mr-1 border-transparent rounded-3xl px-4 py-2 ${isStaysActive ? `font-medium` : `hover:bg-gray-100 font-light`}`}
      >
        Stays
      </button>
      <button
        onClick={() => toggleActive(centreNavElements.experiences)}
        className={`mr-1 border-transparent rounded-3xl px-4 py-2 ${isExperiencesActive ? `font-medium` : `hover:bg-gray-100 font-light`}`}
      >
        Experiences
      </button>
    </div>
  )
}

export default CentreNav
