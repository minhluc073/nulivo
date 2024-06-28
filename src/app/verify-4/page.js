"use client";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Image from "next/image";
import Link from "next/link";

export default function VerifyAccount4() {

    return (
        <>
            <Layout loggedIn>
                <PageTitle title="Verify account" />
                <div className="flat-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb">
                            <Link className="item" href="/category">Category</Link>
                            <Link className="item" href="#">Free-Templates</Link>
                            <Link className="item" href="#">Free-Powerpoint-Templates</Link>
                        </div>
                    </div>
                </div>
                <div className="flat-spacing-1">
                    <div className="container">
                        <div className="verify-action-wrap">
                            <div className="verify-step-item success">
                                <div className="box-icon"><i className="icon icon-step-1"></i></div>
                                <div className="content">
                                    <div className="h9 title">Step 1</div>
                                    <span>Let’s get you verified</span>
                                </div>
                            </div>
                            <div className="verify-step-item success">
                                <div className="box-icon"><i className="icon icon-step-2"></i></div>
                                <div className="content">
                                    <div className="h9 title">Step 2</div>
                                    <span>Personal information</span>
                                </div>
                            </div>
                            <div className="verify-step-item success">
                                <div className="box-icon"><i className="icon icon-step-3"></i></div>
                                <div className="content">
                                    <div className="h9 title">Step 3</div>
                                    <span>Home address</span>
                                </div>
                            </div>
                            <div className="verify-step-item success">
                                <div className="box-icon"><i className="icon icon-step-4"></i></div>
                                <div className="content">
                                    <div className="h9 title">Step 4</div>
                                    <span>Selfie upload with id</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flat-spacing-1 pt-0">
                    <div className="container">
                        <div className="card-box-3 card-verify">
                            <div className="flat-title-verify text-center">
                                <h4 className="title text_black-3">Confirm your identity</h4>
                                <p>Your identification documents will help us to validate your identity.</p>
                            </div>
                            <div className="box">
                                <div className="sub-title fw-bold">What i should to do, to confirm my identity?</div>
                                <ul className="list">
                                    <li className="text-2">Take a selfie by holding your ID</li>
                                    <li className="text-2">ED card should match and be clearly visible</li>
                                    <li className="text-2">Your identification document must be next to your face</li>
                                </ul>
                            </div>
                            <div className="box">
                                <div className="sub-title fw-bold">Here’s an example for picture</div>
                                <div className="box-correct-banner">
                                    <div className="correct-item">
                                        <div className="banner">
                                            <Image src="/images/banner/banner-correct.png" alt="flag" width={243} height={228}/>
                                        </div>
                                        <div className="text-center">
                                            <span className="correct-btn">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.9425 6.06729L7.94254 16.0673C7.88449 16.1254 7.81556 16.1715 7.73969 16.203C7.66381 16.2344 7.58248 16.2506 7.50035 16.2506C7.41821 16.2506 7.33688 16.2344 7.26101 16.203C7.18514 16.1715 7.11621 16.1254 7.05816 16.0673L2.68316 11.6923C2.56588 11.575 2.5 11.416 2.5 11.2501C2.5 11.0843 2.56588 10.9252 2.68316 10.8079C2.80044 10.6906 2.9595 10.6248 3.12535 10.6248C3.2912 10.6248 3.45026 10.6906 3.56753 10.8079L7.50035 14.7415L17.0582 5.18292C17.1754 5.06564 17.3345 4.99976 17.5003 4.99976C17.6662 4.99976 17.8253 5.06564 17.9425 5.18292C18.0598 5.30019 18.1257 5.45925 18.1257 5.6251C18.1257 5.79096 18.0598 5.95002 17.9425 6.06729Z" fill="white"/>
                                                </svg>
                                                Correct
                                            </span>
                                        </div>
                                    </div>
                                    <div className="correct-item in-correct">
                                        <div className="banner">
                                            <Image src="/images/banner/banner-incorrect.png" alt="flag" width={220} height={228}/>
                                        </div>
                                        <div className="text-center">
                                            <span className="correct-btn">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.0675 15.1829C16.1256 15.241 16.1717 15.3099 16.2031 15.3858C16.2345 15.4617 16.2507 15.543 16.2507 15.6251C16.2507 15.7072 16.2345 15.7885 16.2031 15.8644C16.1717 15.9403 16.1256 16.0092 16.0675 16.0673C16.0095 16.1254 15.9405 16.1714 15.8647 16.2028C15.7888 16.2343 15.7075 16.2505 15.6253 16.2505C15.5432 16.2505 15.4619 16.2343 15.386 16.2028C15.3102 16.1714 15.2412 16.1254 15.1832 16.0673L10.0003 10.8837L4.81753 16.0673C4.70026 16.1846 4.5412 16.2505 4.37535 16.2505C4.2095 16.2505 4.05044 16.1846 3.93316 16.0673C3.81588 15.95 3.75 15.791 3.75 15.6251C3.75 15.4593 3.81588 15.3002 3.93316 15.1829L9.11675 10.0001L3.93316 4.81729C3.81588 4.70002 3.75 4.54096 3.75 4.3751C3.75 4.20925 3.81588 4.05019 3.93316 3.93292C4.05044 3.81564 4.2095 3.74976 4.37535 3.74976C4.5412 3.74976 4.70026 3.81564 4.81753 3.93292L10.0003 9.11651L15.1832 3.93292C15.3004 3.81564 15.4595 3.74976 15.6253 3.74976C15.7912 3.74976 15.9503 3.81564 16.0675 3.93292C16.1848 4.05019 16.2507 4.20925 16.2507 4.3751C16.2507 4.54096 16.1848 4.70002 16.0675 4.81729L10.8839 10.0001L16.0675 15.1829Z" fill="white"/>
                                                </svg>
                                                In correct
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form className="box">
                                <label className="box-upload">
                                    <span>Choose files to upload</span>
                                    <input type="file" className="ip-file"/>
                                    <button className="tf-btn">Choose file</button>
                                </label>
                            </form>
                            <div className="box">By click agree & continue. I have read and agree to <span className="text_primary">Nulivo User agreement, Privacy Policy</span> and <span className="text_primary">Electronic Communications Delivery Policy.</span></div>
                            <div className="box-btn d-flex gap-10 flex-wrap justify-content-center">
                                <Link className="tf-btn btn-line" href="/verify-3">Back</Link>
                                <Link className="tf-btn" href="/maintenance">Continue</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}


