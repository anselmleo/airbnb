import { SiSimpleicons } from 'react-icons/si'
import { PiCastleTurret } from 'react-icons/pi'
import { FaCity } from 'react-icons/fa'
import { GoKey } from 'react-icons/go'
import { GiSurfBoard } from 'react-icons/gi'
import { GiGreenhouse } from 'react-icons/gi'
import { MdOutlineBedroomParent } from 'react-icons/md'
import { FaFireAlt } from 'react-icons/fa'
import { PiShippingContainer } from 'react-icons/pi'
import { GiIsland } from 'react-icons/gi'
import { MdOutlineSevereCold } from 'react-icons/md'
import { GiHorizonRoad } from 'react-icons/gi'
import { PiIsland } from 'react-icons/pi'
import { LiaSwimmingPoolSolid } from 'react-icons/lia'
import { PiFarm } from 'react-icons/pi'
import { SlCup } from 'react-icons/sl'
import { IoChevronForward } from 'react-icons/io5'
import { GiSiegeTower } from 'react-icons/gi'

import Icon from './Icon'

const IconMenu = () => {
  return (
    <div className="flex my-5 items-center mx-20">
      <div className="w-8 h-8 flex items-center justify-center rounded-full border-gray-300 border mr-10">
        <IoChevronForward className="transform rotate-180 cursor-pointer" />
      </div>
      <div className="flex">
        <Icon Icon={SiSimpleicons} IconText="Icons" />
        <Icon Icon={GoKey} IconText="New" />
        <Icon Icon={PiCastleTurret} IconText="Castles" />
        <Icon Icon={FaCity} IconText="Top cities" />
        <Icon Icon={GiSurfBoard} IconText="Surfing" />
        <Icon Icon={GiGreenhouse} IconText="Design" />
        <Icon Icon={MdOutlineBedroomParent} IconText="Rooms" />
        <Icon Icon={FaFireAlt} IconText="Trending" />
        <Icon Icon={PiShippingContainer} IconText="Amazing views" />
        <Icon Icon={GiIsland} IconText="Islands" />
        <Icon Icon={MdOutlineSevereCold} IconText="Arctic" />
        <Icon Icon={GiHorizonRoad} IconText="Country side" />
        <Icon Icon={PiIsland} IconText="Tropical" />
        <Icon Icon={LiaSwimmingPoolSolid} IconText="Amazing pools" />
        <Icon Icon={PiFarm} IconText="Farms" />
        <Icon Icon={SlCup} IconText="B & breakfasts" />
        <Icon Icon={GiSiegeTower} IconText="Towers" />
      </div>
      <div className="w-8 h-8 flex items-center justify-center rounded-full border-gray-300 border">
        <IoChevronForward className="cursor-pointer" />
      </div>
    </div>
  )
}

export default IconMenu
