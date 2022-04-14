import React, { useEffect, useState } from "react";
import menuDark from "./icons/menuIcon.svg";
import menuLight from "./icons/menulight.svg";
import closeDark from "./icons/closewhite.svg";
import closeLight from "./icons/close.svg";
import dark from "./icons/dark.svg";
import light from "./icons/light.svg";
import dzinelight from './icons/dzinelight.svg';
import dezinedark from "./icons/dzinedark.svg"
import { Link } from "react-scroll";

const Navbar = (props) => {
  const { setScrlBtn } = props;
  const [nav, setNav] = useState("nav__menu");
  const [header, setHeader] = useState("header");
  const [scroll, setScroll] = useState(0);
  const [themeBtn, setThemeBtn] = useState(dark);
  const [closeBtn, setCloseBtn] = useState(closeDark);
  const [menuBtn, setMenuBtn] = useState(menuLight);
  const [logo, setLogo]= useState(dezinedark);

  useEffect(() => {
    const position = () => setScroll(Math.round(window.scrollY));
    window.addEventListener("scroll", position);
    if (scroll > 100) {
      setHeader("header scroll-header");
      setScrlBtn("scrollup show-scroll");
    } else {
      setHeader("header");
      setScrlBtn("scrollup");
    }
  }, [scroll]);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList = "dark-theme";
      setThemeBtn(light);
      setLogo(dzinelight)
      setCloseBtn(closeDark);
      setMenuBtn(menuLight);
    } else {
      document.body.classList = "";
      setThemeBtn(dark);
      setLogo(dezinedark)
      setCloseBtn(closeLight);
      setMenuBtn(menuDark);
    }
  }, []);

  const getCurrentTheme = () => {
    return document.body.classList.contains("dark-theme") ? "dark" : "light";
  };
  const handleTheme = () => {
    setThemeBtn(themeBtn === light ? dark : light);
    setLogo(logo===dzinelight?dezinedark:dzinelight)
    setCloseBtn(closeBtn === closeLight ? closeDark : closeLight);
    setMenuBtn(menuBtn === menuLight ? menuDark : menuLight);
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", getCurrentTheme());
  };

  const handleNav = () => {
    setNav(`nav__menu show-menu`);
  };
  const handleClose = () => {
    setNav("nav__menu");
  };
  return (
    <header className={header} id="header">
      <nav className="nav container">
        <Link to="home" className="nav__logo"  hashSpy={true}>
          <img src={logo} width="80px" alt="logo" />
        </Link>

        <div className={nav} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                activeClass="active-link"
                onClick={handleClose}
                className="nav__link"
                to="home"
                spy={true}
                offset={-100}
                
                hashSpy={true}
              >
                Home
              </Link>
            </li>

            <li className="nav__item">
              <Link
                activeClass="active-link"
                onClick={handleClose}
                className="nav__link"
                to="discover"
                spy={true}
                offset={-100}
                
                hashSpy={true}
              >
                Discover
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active-link"
                onClick={handleClose}
                className="nav__link"
                to="about"
                spy={true}
                offset={-100}
                
                hashSpy={true}
              >
                About Us
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active-link"
                onClick={handleClose}
                className="nav__link"
                to="experience"
                spy={true}
                hashSpy={true}
                offset={-100}
              >
                Services
              </Link>
            </li>

            <div className="nav__dark">
              {/* <!-- Theme change button --> */}
              <span className="change-theme-name change-theme">Theme</span>
              <div onClick={handleTheme}>
                <img
                  src={themeBtn}
                  width="18px"
                  style={{ cursor: "pointer" }}
                  alt="themebutton"
                />
              </div>
            </div>
          </ul>
          <img
            src={closeBtn}
            width="16px"
            onClick={handleClose}
            className="nav__close"
            id="nav-close"
            alt="Close"
          />
        </div>

        <div className="nav__toggle" onClick={handleNav} id="nav-toggle">
          <img src={menuBtn} width="16px" alt="Menu" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
