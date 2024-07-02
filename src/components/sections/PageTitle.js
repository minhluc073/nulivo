"use client";
import Image from "next/image";
import imgPageTitle from "/public/images/banner/banner-page-title.jpg";
import img2 from "/public/images/banner/img-page-title.png";
import Link from "next/link";

export default function PageTitle({ title, subtitle, cls, btn, img }) {
  return (
    <section className={`flat-banner banner-page-title ${cls ? cls : ""}`}>
      <Image src={imgPageTitle} alt="banner-page-title" />
      <div className="banner-content">
        <div className="box-left">
          {title && <h2 className="title wow fadeIn" data-wow-delay=".2s" data-wow-duration="2000ms">{title}</h2>}
          {subtitle && <p className="subtitle wow fadeIn" data-wow-delay=".4s" data-wow-duration="2000ms">{subtitle}</p>}
          {btn && (
            <Link href="#" className="tf-btn btn-icon style-2">
              <span className="text">Become an author today</span>
              <i className="icon icon-arr-right-4"></i>
            </Link>
          )}
        </div>
        {img && (
          <div className="box-right">
            <Image src={img2} alt="img" />
          </div>
        )}
      </div>
    </section>
  );
}
