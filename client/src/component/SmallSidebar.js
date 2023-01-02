import Wrapper from '../assets/wrappers/SmallSidebar'
import links from '../utils/links'
import Logo from './Logo'

import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className='sidebar-container show-sidebar'>
        <div className="content">
          <button type= "button" className='close-btn' onClick={()=> console.log("toggle")}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
      
        <div className='nav-links'>nav links</div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar