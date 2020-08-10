import React from 'react'
import Logo from '../../public/corona.png'
import '../styles/components/Header.styl'

const Header = () => (
  <div className="header">
    <div className="header-fixed">
      <img src={Logo} alt="" />
    </div>
    <div className="header-notFixed">
      <p>CoronaApp</p>
    </div>
  </div>
)
export default Header
