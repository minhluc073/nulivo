"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo/logo@2x.png";
import { Dropdown, DropdownItem } from "react-bootstrap";
import { useState } from "react";
import { Sora } from "next/font/google";
import menuLogged from "./menuLogged";
import HeaderSub from "./HeaderSub";

const sora = Sora({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--sora",
  display: "swap",
});

export default function Header({ scroll, loggedIn, handleShowMb }) {
  const [selectCategories, setSelectCategories] = useState("");
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="logo">
            <Link href="/">
              <Image src={logo} alt="logo" width={114} height={35} />
            </Link>
          </div>
          <div className="header-inner">
            <div className="search-box-dropdown">
              <Dropdown className="box-dropdown">
                <Dropdown.Toggle>
                  {selectCategories || "All Category"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>PowerPoint Diagrams</Dropdown.Item>
                  <Dropdown.Item>Google slides</Dropdown.Item>
                  <Dropdown.Item>Keynote</Dropdown.Item>
                  <Dropdown.Item>Mockups</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <form className="box-search" action="/search-result">
                <input type="text" placeholder="Search for assets..." />
                <button type="submit" className="icon icon-search"></button>
              </form>
            </div>
            <Link href="#" className="tf-btn btn-icon">
              <i className="icon icon-upload"></i>
              <span className="text">Sell Content</span>
            </Link>
          </div>

          <div className={`header-box-icon ${sora.variable}`}>
            <Link
              href="/favorites"
              className="box-icon w_50 position-relative round bg_rgba-primary-2"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.75 8.9375C22.75 6.24542 20.4761 4.0625 17.6713 4.0625C15.5751 4.0625 13.7746 5.28233 13 7.02325C12.2254 5.28233 10.4249 4.0625 8.32758 4.0625C5.525 4.0625 3.25 6.24542 3.25 8.9375C3.25 16.7592 13 21.9375 13 21.9375C13 21.9375 22.75 16.7592 22.75 8.9375Z"
                  stroke="#450D87"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="badge">3</span>
            </Link>
            <Link
              href="/cart"
              className="box-icon w_50 position-relative round bg_rgba-primary-2"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0627 11.375V6.5C17.0627 5.42256 16.6347 4.38925 15.8728 3.62738C15.1109 2.86551 14.0776 2.4375 13.0002 2.4375C11.9227 2.4375 10.8894 2.86551 10.1275 3.62738C9.36568 4.38925 8.93767 5.42256 8.93767 6.5V11.375M21.24 9.21592L22.6083 22.2159C22.6841 22.9363 22.1208 23.5625 21.396 23.5625H4.60433C4.43339 23.5627 4.26432 23.5269 4.10811 23.4575C3.9519 23.3881 3.81204 23.2866 3.69761 23.1596C3.58318 23.0326 3.49675 22.8829 3.44393 22.7204C3.3911 22.5578 3.37307 22.3859 3.391 22.2159L4.76033 9.21592C4.79192 8.91644 4.93326 8.63926 5.15711 8.43782C5.38095 8.23638 5.67145 8.12495 5.97258 8.125H20.0277C20.6517 8.125 21.175 8.59625 21.24 9.21592ZM9.34392 11.375C9.34392 11.4827 9.30112 11.5861 9.22493 11.6623C9.14874 11.7384 9.04541 11.7813 8.93767 11.7813C8.82992 11.7813 8.72659 11.7384 8.6504 11.6623C8.57422 11.5861 8.53142 11.4827 8.53142 11.375C8.53142 11.2673 8.57422 11.1639 8.6504 11.0877C8.72659 11.0116 8.82992 10.9688 8.93767 10.9688C9.04541 10.9688 9.14874 11.0116 9.22493 11.0877C9.30112 11.1639 9.34392 11.2673 9.34392 11.375ZM17.4689 11.375C17.4689 11.4827 17.4261 11.5861 17.3499 11.6623C17.2737 11.7384 17.1704 11.7813 17.0627 11.7813C16.9549 11.7813 16.8516 11.7384 16.7754 11.6623C16.6992 11.5861 16.6564 11.4827 16.6564 11.375C16.6564 11.2673 16.6992 11.1639 16.7754 11.0877C16.8516 11.0116 16.9549 10.9688 17.0627 10.9688C17.1704 10.9688 17.2737 11.0116 17.3499 11.0877C17.4261 11.1639 17.4689 11.2673 17.4689 11.375Z"
                  stroke="#450D87"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="badge">7</span>
            </Link>
            {loggedIn ? (
              <Dropdown>
                <Dropdown.Toggle className="box-account">
                  <div className="avt">
                    <Image
                      src="/images/avatar/avt-logged.jpg"
                      alt="avatar"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="user-info">
                    <div className="text-title-1 name">
                      Themesflat <i className="icon icon-arr-down"></i>
                    </div>
                    <div className="price text-start">$314.25</div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {menuLogged.map((item) => (
                    <Dropdown.Item key={item.id} href={item.link}>
                      <i className={`icon ${item.icon}`}></i>
                      <span className="text-title-2">{item.text}</span>
                    </Dropdown.Item>
                  ))}
                  <div className="item-logout">
                    <Dropdown.Item href="/">
                      <i className="icon icon-sign-out"></i>
                      <span className="text-title-2">Logout</span>
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <div className="box-account">
                <Link
                  href="#"
                  className="box-icon w_50 position-relative round bg_rgba-primary-2"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.0624 6.5C17.0624 7.57744 16.6344 8.61075 15.8725 9.37262C15.1106 10.1345 14.0773 10.5625 12.9999 10.5625C11.9225 10.5625 10.8891 10.1345 10.1273 9.37262C9.36541 8.61075 8.93739 7.57744 8.93739 6.5C8.93739 5.42256 9.36541 4.38925 10.1273 3.62738C10.8891 2.86551 11.9225 2.4375 12.9999 2.4375C14.0773 2.4375 15.1106 2.86551 15.8725 3.62738C16.6344 4.38925 17.0624 5.42256 17.0624 6.5ZM4.87598 21.7945C4.91079 19.6629 5.78201 17.6303 7.30175 16.1352C8.82149 14.6401 10.868 13.8022 12.9999 13.8022C15.1318 13.8022 17.1783 14.6401 18.698 16.1352C20.2178 17.6303 21.089 19.6629 21.1238 21.7945C18.5751 22.9632 15.8037 23.5663 12.9999 23.5625C10.1009 23.5625 7.34923 22.9298 4.87598 21.7945Z"
                      stroke="#450D87"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <div className="text-not-login">
                  <Link href="/login">Login</Link>
                  <span> | </span>
                  <Link href="/sign-up">Sign up</Link>
                </div>
              </div>
            )}
            <div
              className="mobile-nav-toggler mobile-button"
              onClick={handleShowMb}
            >
              <span></span>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <HeaderSub />
        </div>
      </div>
    </header>
  );
}
