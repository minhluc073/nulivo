
import Image from "next/image";
import avt from "/public/images/avatar/avt-1.jpg";
import Link from "next/link";

export default function SidebarSingle(){
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
                    <span className="icon icon-heart-line"></span>
                </div>
            </div>
            <div className="box-price">
                <div className="price">$12</div>
                <ul className="meta-list">
                    <li className="item">
                        <div className="title">Sale</div>
                        <div className="d-flex align-items-center gap-2">
                            <i className="icon icon-wallet"></i>
                            <span className="text">209</span>
                        </div>
                    </li>
                    <li className="item">
                        <div className="title">Like</div>
                        <div className="d-flex align-items-center gap-2">
                            <i className="icon icon-heart-line"></i>
                            <span className="text">3.801</span>
                        </div>
                    </li>
                    <li className="item">
                        <div className="title">Rating</div>
                        <div className="d-flex align-items-center gap-2">
                            <i className="icon icon-star"></i>
                            <span className="text">4.5</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="card-box-1">
                <div className="top">
                    <fieldset className="box-check d-flex align-items-center gap-8">
                        <input type="radio" name="check1" id="cb-1" className="tf-check" defaultChecked/>
                        <label htmlFor="cb-1" className="flex-grown-1 text_black-1">Regular license</label>
                    </fieldset>
                    <fieldset className="box-check d-flex align-items-center gap-8">
                        <input type="radio" name="check1" id="cb-2" className="tf-check"/>
                        <label htmlFor="cb-2" className="flex-grown-1 text_black-1">Extended license</label>
                    </fieldset>
                </div>
                <div className="bottom d-flex align-items-center gap-8">
                    <span className="icon icon-think"></span>
                    <div className="text_black-1">License policy</div>
                </div>
            </div>
            <div className="box-btn">
                <Link href="#" className="tf-btn w-100">Buy now</Link>
                <Link href="/add-cart" className="tf-btn w-100 btn-line">Add to cart</Link>
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
        </aside>
    )
}