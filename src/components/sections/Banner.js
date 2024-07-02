"use client";
import Image from "next/image";
import imgBanner from "/public/images/banner/banner.jpg";

const title = "Premium and Free PowerPoint, Vectors, Print and PSD downloads";
const desc = [
  {
    id: 1,
    text: "Nulivo Market is an online marketplace provider of the highest quality ready-to-use Presentation, Print and PSD downloads",
  },
  {
    id: 2,
    text: "Business template, Finance template, Education template, Google slide map, Google slide Diagrams, Keynote diagrams",
    icon: "icon-flash",
  },
];

export default function Banner() {
  return (
    <section className="flat-banner banner-v1">
      <Image src={imgBanner} alt="img-banner" />
      <div className="banner-content">
        <div className="box-content">
            <h2 className="title wow fadeIn" data-wow-delay=".2s" data-wow-duration="2000ms">{title}</h2>
            <p className="subtitle wow fadeIn" data-wow-delay=".4s" data-wow-duration="2000ms">{desc[0]?.text}</p>
            <p className="subtitle wow fadeIn" data-wow-delay=".4s" data-wow-duration="2000ms">
              <i className={`icon ${desc[1]?.icon}`}></i>
              {desc[1]?.text}
            </p>
        </div>
        
      </div>
    </section>
  );
}
