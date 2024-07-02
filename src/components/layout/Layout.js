"use client";
import BackToTop from "../elements/BackToTop";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

export default function Layout({ breadcrumbTitle, children, loggedIn }) {
  const [showMb, setShowMb] = useState(false);
  const handleCloseMb = () => setShowMb(false);
  const handleShowMb = () => setShowMb(true);

  useEffect(() => {
		const WOW = require('wowjs')
		window.wow = new WOW.WOW({
			live: false
		})
		window.wow.init()

	}, [])


  return (
    <>
      <div id="wrapper" className="clearfix">
        <Header loggedIn={loggedIn} handleShowMb={handleShowMb}/>
        {children}
        <Footer />
      </div>
      <BackToTop />
      <MobileMenu showMb={showMb} handleCloseMb={handleCloseMb}/>
    </>
  );
}
