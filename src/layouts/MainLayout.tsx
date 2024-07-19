import { Outlet } from 'react-router-dom'
import HeaderSection from '../sections/HeaderSection'

const MainLayout = () => {
  return (
    <div>
      <HeaderSection />
      <Outlet />
    </div>
  )
}

export default MainLayout
