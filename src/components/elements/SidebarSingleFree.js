
import Image from "next/image";
import avt from "/public/images/avatar/avt-1.jpg";
import Link from "next/link";
import { useState } from "react";
 
export default function SidebarSingleFree(){

    const [isActive, setIsActive] = useState(false)
    const handleActive= (()=> setIsActive(!isActive))

    return(
        <aside className="sidebar-single-wrap fixed-sidebar">
            <div className="box-title">
                <h6>Product Management Tools PowerPoint Template</h6>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="author-box d-flex align-items-center gap-4">
                        <div className="avatar avt-26 round">
                            <Image
                            src={avt}
                            alt="avatar"
                            width="100%"
                            height="100%"
                            />
                        </div>
                        <span className="name">Themesflat</span>
                    </div>
                    <span className={`icon ${isActive ? 'active icon-heart': "icon-heart-line"}`} onClick={handleActive}></span>
                </div>
            </div>
            <div className="card-box-1">
                <div className="h7 text-center title-free">Free Download</div>
                <Link href="/licenses" className="label-license"><i className="icon icon-think"></i> License Policy</Link>
                <Link href="#" className="tf-btn w-100">Download now</Link>
            </div>
            <div className="box-social d-flex align-items-center gap-10">
                <span className="text_black-1">Share this file:</span>
                <ul className="d-flex align-items-center gap-16">
                    <li>
                        <Link href="#" className="icon icon-pinstes"></Link>
                    </li>
                    <li>
                        <Link href="#" className="icon icon-fb"></Link>
                    </li>
                    <li>
                        <Link href="#" className="icon icon-tw"></Link>
                    </li>
                </ul>
            </div>
            <div className="box-need-more">
                <div className="h7">Need more slides</div>
                <p className="text_black-1">Purchase the full template and get free updates forever!</p>
                <Link href="#" className="tf-btn w-100 btn-line">Get it now</Link>
            </div>
            <div className="wrap-information">
                <div className="h7 title">Item Information</div>
                <ul className="box-info">
                    <li className="item-info">
                        <div className="title-item-info fw-bold text_black-1">Item Released</div>
                        <span className="text text_black-1">16 January 23</span>
                    </li>
                    <li className="item-info">
                        <div className="title-item-info fw-bold text_black-1">Last Update</div>
                        <span className="text text_black-1">17 November 23</span>
                    </li>
                    <li className="item-info">
                        <div className="title-item-info fw-bold text_black-1">Category</div>
                        <div className="breadcrumb">
                            <Link className="item" href="/category">powerpoint-templates</Link>
                            <Link className="item" href="#">powerpoint-diagrams</Link>
                        </div>
                    </li>
                    <li className="item-info">
                        <div className="title-item-info fw-bold text_black-1">Software</div>
                        <span className="text text_black-1">PowerPoint</span>
                    </li>
                    <li className="item-info">
                        <div className="title-item-info fw-bold text_black-1">Layered</div>
                        <span className="text text_black-1">yes</span>
                    </li>
                    <li className="item-info">
                        <div className="title-item-info fw-bold text_black-1">Pixel Dimensions</div>
                        <span className="text text_black-1">16 January 23</span>
                    </li>
                    <li className="item-info">
                        <div className="title-item-info fw-bold text_black-1">Tags</div>
                        <ul className="d-flex align-items-center flex-wrap gap-10">
                            <li><Link href="#" className="tag">powerpoint</Link></li>
                            <li><Link href="#" className="tag">ppt</Link></li>
                            <li><Link href="#" className="tag">diagram</Link></li>
                            <li><Link href="#" className="tag">diagrams</Link></li>
                            <li><Link href="#" className="tag">diagrams</Link></li>
                            <li><Link href="#" className="tag">diagrams</Link></li>
                            <li><Link href="#" className="tag">model</Link></li>
                            <li><Link href="#" className="tag">product-development</Link></li>
                            <li><Link href="#" className="tag">product-development</Link></li>
                            <li><Link href="#" className="tag">process</Link></li>
                            <li><Link href="#" className="tag">process</Link></li>
                            <li><Link href="#" className="tag">development-process</Link></li>
                            <li><Link href="#" className="tag">diagrams</Link></li>
                            <li><Link href="#" className="tag">product-policy</Link></li>
                            <li><Link href="#" className="tag">product-success</Link></li>
                            <li><Link href="#" className="tag">goals</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    )
}