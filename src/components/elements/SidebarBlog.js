import Image from "next/image";
import Link from "next/link";




export default function SidebarBlog(){
    return (
        <aside className="sidebar-blog-wrap fixed-sidebar">
            <div className="box">
                <div className="h9 title">Search blog</div>
                <div className="search-box-v2">
                    <i className="icon icon-search"></i>
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className="box">
                <div className="h9 title">Categories</div>
                <ul className="categories-blog">
                    <li>
                        <Link className="item d-flex align-items-center justify-content-between" href="#">
                            <span className="text_black-1 fw-semibold">PowerPoint</span>
                            <span className="text_grey-1">(50)</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="item d-flex align-items-center justify-content-between" href="#">
                            <span className="text_black-1 fw-semibold">Google Slides</span>
                            <span className="text_grey-1">(34)</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="item d-flex align-items-center justify-content-between" href="#">
                            <span className="text_black-1 fw-semibold">Keynote</span>
                            <span className="text_grey-1">(69)</span>

                        </Link>
                    </li>
                    <li>
                        <Link className="item d-flex align-items-center justify-content-between" href="#">
                            <span className="text_black-1 fw-semibold">Mockups</span>
                            <span className="text_grey-1">(25)</span>

                        </Link>
                    </li>
                    <li>
                        <Link className="item d-flex align-items-center justify-content-between" href="#">
                            <span className="text_black-1 fw-semibold">Fonts</span>
                            <span className="text_grey-1">(12)</span>

                        </Link>
                    </li>
                </ul>
            </div>
            <div className="box">
                <div className="h9 title">Featured listings</div>
                <div className="featured-blog">
                    <Link href="#" className="featured-blog-item">
                        <div className="box-img">
                            <Image src="/images/blog/item-recent-1.jpg" width={112} height={74} className="img" alt="avt-banner"/>
                        </div>
                        <div className="content">
                            <div className="title-font fw-semibold text_black-1">Lorem ipsum dolor sit amet, consectetur</div>
                            <div className="meta d-flex align-items-center gap-4">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 2.5V4M11.5 2.5V4M2 13V5.5C2 5.10218 2.15804 4.72064 2.43934 4.43934C2.72064 4.15804 3.10218 4 3.5 4H12.5C12.8978 4 13.2794 4.15804 13.5607 4.43934C13.842 4.72064 14 5.10218 14 5.5V13M2 13C2 13.3978 2.15804 13.7794 2.43934 14.0607C2.72064 14.342 3.10218 14.5 3.5 14.5H12.5C12.8978 14.5 13.2794 14.342 13.5607 14.0607C13.842 13.7794 14 13.3978 14 13M2 13V8C2 7.60218 2.15804 7.22064 2.43934 6.93934C2.72064 6.65804 3.10218 6.5 3.5 6.5H12.5C12.8978 6.5 13.2794 6.65804 13.5607 6.93934C13.842 7.22064 14 7.60218 14 8V13" stroke="#7C818B" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>October 17</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="#" className="featured-blog-item">
                        <div className="box-img">
                            <Image src="/images/blog/item-recent-2.jpg" width={112} height={74} className="img" alt="avt-banner"/>
                        </div>
                        <div className="content">
                            <div className="title-font fw-semibold text_black-1">Lorem ipsum dolor sit amet, consectetur</div>
                            <div className="meta d-flex align-items-center gap-4">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 2.5V4M11.5 2.5V4M2 13V5.5C2 5.10218 2.15804 4.72064 2.43934 4.43934C2.72064 4.15804 3.10218 4 3.5 4H12.5C12.8978 4 13.2794 4.15804 13.5607 4.43934C13.842 4.72064 14 5.10218 14 5.5V13M2 13C2 13.3978 2.15804 13.7794 2.43934 14.0607C2.72064 14.342 3.10218 14.5 3.5 14.5H12.5C12.8978 14.5 13.2794 14.342 13.5607 14.0607C13.842 13.7794 14 13.3978 14 13M2 13V8C2 7.60218 2.15804 7.22064 2.43934 6.93934C2.72064 6.65804 3.10218 6.5 3.5 6.5H12.5C12.8978 6.5 13.2794 6.65804 13.5607 6.93934C13.842 7.22064 14 7.60218 14 8V13" stroke="#7C818B" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>October 17</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="#" className="featured-blog-item">
                        <div className="box-img">
                            <Image src="/images/blog/item-recent-3.jpg" width={112} height={74} className="img" alt="avt-banner"/>
                        </div>
                        <div className="content">
                            <div className="title-font fw-semibold text_black-1">Lorem ipsum dolor sit amet, consectetur</div>
                            <div className="meta d-flex align-items-center gap-4">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 2.5V4M11.5 2.5V4M2 13V5.5C2 5.10218 2.15804 4.72064 2.43934 4.43934C2.72064 4.15804 3.10218 4 3.5 4H12.5C12.8978 4 13.2794 4.15804 13.5607 4.43934C13.842 4.72064 14 5.10218 14 5.5V13M2 13C2 13.3978 2.15804 13.7794 2.43934 14.0607C2.72064 14.342 3.10218 14.5 3.5 14.5H12.5C12.8978 14.5 13.2794 14.342 13.5607 14.0607C13.842 13.7794 14 13.3978 14 13M2 13V8C2 7.60218 2.15804 7.22064 2.43934 6.93934C2.72064 6.65804 3.10218 6.5 3.5 6.5H12.5C12.8978 6.5 13.2794 6.65804 13.5607 6.93934C13.842 7.22064 14 7.60218 14 8V13" stroke="#7C818B" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>October 17</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="box">
                <div className="h9 title">Join our newsletter</div>
                <p className="text-3">Signup to be the first to hear about exclusive deals, special offers and upcoming collections</p>
                <div className="box-subscribe">
                    <input type="text" placeholder="Enter your email"/>
                    <span className="icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.00035 7.99998L2.17969 2.08398C6.53489 3.35043 10.6419 5.35118 14.3237 7.99998C10.6422 10.6492 6.53541 12.6504 2.18035 13.9173L4.00035 7.99998ZM4.00035 7.99998H9.00035" stroke="#450D87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="box">
                <div className="h9 title">Popular tags</div>
                <ul className="list-tag">
                    <li><Link href="#" className="tag-item">PowerPoint</Link></li>
                    <li><Link href="#" className="tag-item">Vorlage</Link></li>
                    <li><Link href="#" className="tag-item">Business</Link></li>
                    <li><Link href="#" className="tag-item">Template</Link></li>
                    <li><Link href="#" className="tag-item">Nulivo</Link></li>
                </ul>
            </div>
        </aside>
    )
}