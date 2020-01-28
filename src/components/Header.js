import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I'm Jacob</strong>, a passionate
        <br />
        developer always craving for
        <br />
        knowledge and eager to learn.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
