import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <ul className="nav">
      <NavLink
        to="/home"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        <li className="nav-item">
          Home
        </li>
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        <li className="nav-item">
          Portfolio
        </li>
      </NavLink>
      <NavLink
        to="/experience"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        <li className="nav-item">
          Experience
        </li>
      </NavLink>
      <NavLink
        to="/contact"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        <li className="nav-item">
          Contact
        </li>
      </NavLink>
    </ul>
  );
}

export default Header;
