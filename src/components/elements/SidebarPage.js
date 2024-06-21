/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";


export default function SidebarPage(){
    return(
        <aside className="sidebar-page-wrap fixed-sidebar">
            <div className="box-categories">
                <div className="h9 title">Categories</div>
                <ul className="list-categories">
                    <li>
                        <Link href="/imprint" className="categories-item btn-hover-icon">
                            <span className="text">Imprint</span>
                            <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9375 6.1875L15.75 9M15.75 9L12.9375 11.8125M15.75 9H2.25" stroke="#303538" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </Link>
                    </li>
                    <li>
                        <Link href="/terms-of-use" className="categories-item btn-hover-icon">
                            <span className="text">Terms Of Use</span>
                            <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9375 6.1875L15.75 9M15.75 9L12.9375 11.8125M15.75 9H2.25" stroke="#303538" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy-policy" className="categories-item btn-hover-icon">
                            <span className="text">Privacy Policy</span>
                            <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9375 6.1875L15.75 9M15.75 9L12.9375 11.8125M15.75 9H2.25" stroke="#303538" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </Link>
                    </li>
                    <li>
                        <Link href="/refund-policy" className="categories-item btn-hover-icon">
                            <span className="text">Refund Policy</span>
                            <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9375 6.1875L15.75 9M15.75 9L12.9375 11.8125M15.75 9H2.25" stroke="#303538" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </Link>
                    </li>
                    <li>
                        <Link href="/licenses" className="categories-item btn-hover-icon">
                            <span className="text">Licenses</span>
                            <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9375 6.1875L15.75 9M15.75 9L12.9375 11.8125M15.75 9H2.25" stroke="#303538" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </Link>
                    </li>
                </ul>
            </div>
            <div className="box-contact">
                <div className="box-top">
                    <div className="h9 title">Contact us</div>
                    <p className="text_black-1">We're here to support you! Check out our help centre for further assistance.</p>
                    <Link className="tf-btn btn-icon w-100" href="#">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.75 6.75C2.75 15.034 9.466 21.75 17.75 21.75H20C20.5967 21.75 21.169 21.5129 21.591 21.091C22.0129 20.669 22.25 20.0967 22.25 19.5V18.128C22.25 17.612 21.899 17.162 21.398 17.037L16.975 15.931C16.535 15.821 16.073 15.986 15.802 16.348L14.832 17.641C14.55 18.017 14.063 18.183 13.622 18.021C11.9849 17.4191 10.4982 16.4686 9.26478 15.2352C8.03141 14.0018 7.08087 12.5151 6.479 10.878C6.317 10.437 6.483 9.95 6.859 9.668L8.152 8.698C8.515 8.427 8.679 7.964 8.569 7.525L7.463 3.102C7.40214 2.85869 7.26172 2.6427 7.06405 2.48834C6.86638 2.33397 6.6228 2.25008 6.372 2.25H5C4.40326 2.25 3.83097 2.48705 3.40901 2.90901C2.98705 3.33097 2.75 3.90326 2.75 4.5V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text">Visit Help Centre</span>
                    </Link>
                </div>
                <div className="box-bottom">
                    <div className="h9 title">You can also email</div>
                    <p className="text_black-1">support@nulivo.com</p>
                </div>

            </div>
        </aside>
    )
}
