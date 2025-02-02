import React from "react";
import { Link } from "react-router-dom";

function NavbarLink({ linkName, LinkUrl }) {
  return (
    <li className="nav-item">
      {/* Use Link from react-router-dom for client-side navigation */}
      <Link className="nav-link Js-scroll-trigger" to={LinkUrl}>
        {linkName}
      </Link>
    </li>
  );
}

export default NavbarLink;
