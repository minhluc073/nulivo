"use client";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import img from "/public/images/banner/banner-maintenance.png"
import Countdown, { zeroPad } from "react-countdown";

export default function Maintenance() {
    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <span className="fw-bold text_black-3">
            {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
          </span>
        );
      };

    return (
        <>
            <Layout>
                <div className="flat-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb">
                        <Link className="item" href="/">
                            Home
                        </Link>
                        <Link className="item" href="#">
                            Item
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="flat-spacing-1">
                    <div className="container">
                        <div className="flat-wrap-maintenance">
                            <div className="banner-img text-center">
                                <Image
                                    src={img}
                                    width={362}
                                    height={372}
                                    alt="maintenance"
                                />
                            </div>
                            <div className="box-content text-center">
                                <h2 className="title">We are tidying up!</h2>
                                <p className="text_black-3">Sory for the inconvinience! currently undating servers to improve service, thanh you for your patience!<br/>
                                Your beloved site will be available in <Countdown date={Date.now() + 6000000} renderer={renderer} /> </p>
                                <div className="box-social">
                                    <span className="text_black-3">Visit us on social:</span>
                                    <ul className="list-social d-flex gap-16 align-items-center justify-content-center">
                                        <li>
                                            <Link href="#" className="link icon icon-pinstes"></Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="link icon icon-fb"></Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="link icon icon-youtube"></Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="link icon icon-tw"></Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="link icon icon-instagram"></Link>
                                        </li>
                                    </ul>
                                </div>
                                <Link href="/" className="tf-btn btn-md">Back to home page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
