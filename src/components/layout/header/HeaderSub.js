import Link from "next/link";
import Image from "next/image";
import menuCategories from "./menuCategories";
import menuSoftware from "./menuSoftware";

export default function HeaderSub() {
  return (
    <ul className="navigation-menu">
      <li className="menu-item">
        <Link className="nav-link-item" href="#">
          <span className="icon icon-categories"></span>
          <span className="text text-title-1">Categories</span>
          <i className="icon icon-arr-down1"></i>
        </Link>
        <div className="mega-menu">
          {menuCategories.map((item) => (
            <div key={item.id} className="box-menu-categories">
              <div className="icon-box">
                <Image src={item.icon} alt="icon" width="auto" height="auto" />
              </div>
              <div className="box-right">
                <div className="h9 title">PowerPoint</div>
                <span className="desc">13,738+ Template</span>
                <ul className="sub-categories-menu">
                  {item.list.map((child) => (
                    <li key={child.id} className="sub-menu-item">
                      <Link href={child.link} className="sub-nav-link link">
                        {child.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={item.link} className="view-more-link">
                  <span className="text">View more template</span>
                  <i className="icon icon-arrow-right-circle"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </li>
      <li className="menu-item">
        <Link className="nav-link-item" href="#">
          <span className="icon icon-browser"></span>
          <span className="text text-title-1">Browse By Softwares</span>
          <i className="icon icon-arr-down1"></i>
        </Link>
        <div className="mega-menu">
          {menuSoftware.map((item) => (
            <Link href={item.link} key={item.id} className="tf-iconbox">
              <div className="iconbox">
                <Image
                  src={item.icon}
                  alt="logo-software"
                  width="auto"
                  height="auto"
                />
              </div>
              <div className="content">
                <div className="title">{item.title}</div>
                <span className="desc">{item.text}</span>
              </div>
            </Link>
          ))}
        </div>
      </li>
      <li className="menu-item">
        <Link className="nav-link-item" href="#">
          <span className="icon icon-cup"></span>
          <span className="text text-title-1">Bestsellers</span>
        </Link>
      </li>
      <li className="menu-item">
        <Link className="nav-link-item" href="#">
          <span className="icon icon-top"></span>
          <span className="text text-title-1">Top Authors</span>
        </Link>
      </li>
    </ul>
  );
}
