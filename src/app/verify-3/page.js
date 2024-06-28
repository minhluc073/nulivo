"use client";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Link from "next/link";
import Image from "next/image";


export default function VerifyAccount3() {

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
                            <div className="verify-step-item">
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
                                <h4 className="title text_black-3">Home address</h4>
                                <p>Fill in your current residential address exactly as mentioned on your ID card.</p>
                            </div>
                            <fieldset className="box">
                                <label>Full address</label>
                                <input type="text" placeholder="Enter residential address"/>
                            </fieldset>
                            <fieldset className="box">
                                <label>Postal code</label>
                                <input type="text" placeholder="Postal code"/>
                            </fieldset>
                            <div className="box group-box-ip">
                                <fieldset className="flex-grow-1">
                                    <label>City</label>
                                    <input placeholder="YYYY" type="text"/>   
                                </fieldset>
                                <fieldset className="flex-grow-1">
                                    <label>Country / Region</label>
                                    <input placeholder="Austria" type="text"/>   
                                </fieldset>
                            </div>
                            <div className="box-btn d-flex gap-10 flex-wrap justify-content-center">
                                <Link className="tf-btn btn-line" href="/verify-2">Back</Link>
                                <Link className="tf-btn" href="/verify-4">Continue</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}


