import React from "react";
import "../../Styles/Header.css";
import Logo from "../../Assets/logo.png";

const Header = () => {
  return (
    <div className="header py-4">
      <div className="container lg:w-5/6 mx-auto w-full">
        <div className="navbar bg-transparent">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl" href="/">
              <img src={Logo} className="logo" alt="" />
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/" className="font-bold text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="font-bold text-white">
                  Investi
                </a>
              </li>
              <li>
                <a href="/" className="font-bold text-white">
                  Guadagna
                </a>
              </li>
              <li>
                <a href="/" className="font-bold text-white">
                  Impara
                </a>
              </li>
              <li tabIndex={0}>
                <a href="/" className="text-white font-bold">
                  Community
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a href="/">Submenu 1</a>
                  </li>
                  <li>
                    <a href="/">Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/" className="font-bold text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
