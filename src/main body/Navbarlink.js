import React from 'react'
import { Link } from react-router-dom;

 function Navbarlink(linkName, LinkUrl) {
  return (
    <div>
      <li className='nav-item'>
        <a className='nav-link Js-scroll-trigger' href='LinkUrl'>(linkName)</a>

      </li>
    </div>
  )
}
export default Navbarlink;