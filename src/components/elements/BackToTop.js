'use client'
import { useEffect, useState } from "react"

export default function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return <>{isVisible && <div className="back-top" onClick={scrollToTop} id="scroll-top"><span className="icon icon-arr-down"></span></div>}</>;
}
