"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo/logo@2x.png";
import imgSrc from "/public/images/banner/banner-footer.png";
import dataFooter from "@/data/data-footer";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-inner-left">
              <div className="card-box-logo">
                <div className="top">
                  <div className="logo">
                    <Link href="/">
                      <Image src={logo} alt="logo" width={120} height={37} />
                    </Link>
                  </div>
                  <div className="title text-gradient-2">
                    Become a creator and join our team
                  </div>
                </div>
                <div className="bottom box-img">
                  <Image src={imgSrc} alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="footer-inner-right">
              <div className="top">
                {dataFooter.map((item) => (
                  <div className="footer-item" key={item.id}>
                    <div className="title title-font">{item.title}</div>
                    <ul>
                      {item.list.map((child) => (
                        <li key={child.id}>
                          <Link className="nav-link-item hover-nav-line" href={child.link}>{child.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="footer-item">
					<div className="title title-font">Payments</div>
					<ul className="d-flex gap-10 list-card">
						<li>
							<Image src="/images/card/card-1.png" width={40} height={40} alt="img-card"/>
						</li>
						<li>
							<Image src="/images/card/card-2.png" width={40} height={40} alt="img-card"/>
						</li>
						<li>
							<Image src="/images/card/card-3.png" width={40} height={40} alt="img-card"/>
						</li>
						<li>
							<Image src="/images/card/card-4.png" width={40} height={40} alt="img-card"/>
						</li>
					</ul>
				</div>
              </div>
              <div className="bottom d-flex justify-content-between gap-20 align-items-center flex-wrap">
                <p>© 2024 Nulivo Market. All rights reserved.</p>
                <ul className="list-social">
                  <li>
                    <Link href="#" className="icon link">
                      <span className="icon-pinstes"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="icon link">
                      <span className="icon-fb"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="icon link">
                      <span className="icon-youtube"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="icon link">
                      <span className="icon-tw"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="icon link">
                      <span className="icon-instagram"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
