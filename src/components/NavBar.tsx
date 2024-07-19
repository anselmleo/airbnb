import Logo from './Logo'
import CentreNav from './CentreNav'
import RightNav from './RightNav'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center mt-5 mx-20 h-12">
      <Logo />
      <CentreNav />
      <RightNav />
    </div>
  )
}

export default NavBar
