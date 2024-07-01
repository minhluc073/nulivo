"use client"
import Image from "next/image";
import logo from "/public/images/logo/logo-favicon-2.png";
import banner from "/public/images/banner/banner-sign-in.jpg";
import Link from "next/link";
import { useState } from "react";

export default function Login(){
    const [showPass, setShowPass] = useState(false);

    return (
        <div className="flat-account-wrapper">
            <div className="banner-left">
                <div className="logo">
                    <Image src={logo} width={54} height={35} alt="logo"/>
                </div>
                <Image className="banner" src={banner} width="100%" height="100%" alt="banner"/>
            </div>
            <div className="content-right">
                <form className="flat-form-account" action="/">
                    <div className="box">
                        <div className="title mb-4">Welcome back!</div>
                        <span>Log in to your account</span>
                    </div>
                    <div className="box">
                        <fieldset className="group-ip">
                            <label className="label">Email or Username</label>
                            <div className="tf-input ip-icon">
                                <i className="icon-left icon-email"></i>
                                <input type="text" placeholder="Your email"/>
                            </div>
                        </fieldset>
                        <fieldset className="group-ip">
                            <label className="label">Password</label>
                            <div className="tf-input ip-icon">
                                <i className="icon-left icon-lock"></i>
                                <input type={showPass ? "text" : "password"} placeholder="Password"/>
                                <span className={`icon-right ${showPass ? "icon-view" : "icon-hide"}`} onClick={() => setShowPass(!showPass)}></span>
                            </div>
                            <p className="text-label">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                        </fieldset>
                    </div>
                    <div className="box">
                        <button className="tf-btn w-100">Sign In</button>
                        <div className="author-line">
                            <span className="line"></span>
                            <span>Or continue with</span>
                            <span className="line"></span>
                        </div>
                        <Link className="tf-btn btn-social w-100" href="/">
                            <div className="icon">
                                <Image src="/images/box-icon/google.png" width={22} height={22} alt="social"/>
                            </div>
                            Sign in with Google
                        </Link>
                    </div>
                    <div className="box">
                        <div>Don’t have an count? <Link href="/sign-up" className="fw-bold">Sign up</Link></div>
                    </div>
                </form>
            </div>
        </div>
    )
}