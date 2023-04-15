import Image from "next/image";
import logo from "../assets/logo.jpg";

function Nav() {
  return (
    <nav>
        <div className="logo__container">
          <figure>
            <Image className="header__logo-img" height={60} src={logo} />
          </figure>
          <span className="header__name">OSMAN CAKIR</span>
        </div>
        <div className="nav__links--container">
          <ul className="nav__links">
            <li className="nav__link">
              <a href="/">Home</a>
            </li>
            <li className="nav__link">
              <a href="/#about">About</a>
            </li>
            <li className="nav__link">
              <a href="/#projects">Projects</a>
            </li>
            <li className="nav__link">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Nav