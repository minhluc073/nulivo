/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";


export default function BannerImprove (){
    return (
        <div className="banner-improve">
            <div className="banner-content">
                <h3 className="title text_black-1">Help us Improve your User Experience</h3>
                <p className="desc text_black-1">Your opinion matters! Share your feedback to help us improve and understand what we're doing right. If you haven't used or downloaded our product, no need to evaluate.</p>
                <Link className="tf-btn btn-icon style-2" href="#">
                    <span className="text">Let's Get Started!</span>
                    <i className="icon icon-arr-right-4"></i>
                </Link>
            </div>
            <div className="banner-img">
                <Image src="/images/banner/img-improve.png" alt="img" width={256} height={243}/>
            </div>        
        </div>
    )
}