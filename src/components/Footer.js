import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://github.com/jacobgarcia" className="icon fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://angel.co/jacobgarcia" className="icon fa-angellist">
            <span className="label">Angel List</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jacobgarcian/"
            className="icon fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://nure.mx" className="icon fa-code">
            <span className="label">Nure</span>
          </a>
        </li>
        <li>
          <a href="https://wa.me/525617099730" className="icon fa-whatsapp">
            <span className="label">WhatsApp</span>
          </a>
        </li>
        <li>
          <a href="mailto:mario@nure.mx" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Jacob Garcia</li>
        <li>All rights reserved - 2020</li>
      </ul>
    </div>
  </div>
)

export default Footer
