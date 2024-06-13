"use client";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Layout({ breadcrumbTitle, children, loggedIn }) {
  const [showMb, setShowMb] = useState(false);
  const handleCloseMb = () => setShowMb(false);
  const handleShowMb = () => setShowMb(true);

  return (
    <>
      <div id="wrapper" className="clearfix">
        <Header loggedIn={loggedIn} handleShowMb={handleShowMb}/>
        {children}
        <Footer />
      </div>
      <MobileMenu showMb={showMb} handleCloseMb={handleCloseMb}/>
    </>
  );
}
