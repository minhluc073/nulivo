"use client"
import Image from "next/image";
import logo from "/public/images/logo/logo-favicon-2.png";
import banner from "/public/images/banner/banner-sign-up.jpg";
import Link from "next/link";
import { useState } from "react";
import Select from "react-select";

const countrySelect = [
    {
      value: "v1",
      label: "USA",
    },
    {
      value: "v2",
      label: "England",
    },
    {
      value: "v3",
      label: "Japan",
    },
    {
      value: "v4",
      label: "Viet Nam",
    },
  ];

  const colorStyles = {
    control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    borderColor: "#EFEFEF",
    borderRadius: "999px",
    height: "50px",
    boxShadow: "none",
    ":hover": {
        borderColor: "#EFEFEF",
    },
    }),
    option: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    transition: "all 0.3s ease-out 0s",
    ":hover": {
        backgroundColor: "transparent",
        color: "#450d87",
    },
    ":active": {
        backgroundColor: "transparent",
    },
    padding: "6px",
    color: "#303538",
    cursor: "pointer",
    }),

    menu: (base) => ({
    ...base,
    padding: "0px",
    borderRadius: "14px",
    width: "100%",
    border: "1px solid #EFEFEF",
    backgroundColor: "#fff",
    boxShadow: "none",
    }),
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            paddingLeft: "12px",
            color: '#303538',
        }
    }
};



export default function SignUp(){
    const [showPass, setShowPass] = useState(false);
    const [confirmPass, setConfirmPass] = useState(false);

    return (
        <div className="flat-account-wrapper flat-account-signup">
            <div className="banner-left">
                <Link href="/" className="logo">
                    <Image src={logo} width={54} height={35} alt="logo"/>
                </Link>
                <Image className="banner" src={banner} width="100%" height="100%" alt="banner"/>
            </div>
            <div className="content-right">
                <form className="flat-form-account flat-form-signup" action="/">
                    <div className="box">
                        <div className="title mb-4">Register to Nulivo</div>
                        <span>Sign up for free to access to in any of our products </span>
                    </div>
                    <div className="box">
                        <div className="group-2 group-ip">
                            <fieldset className="flex-grow-1">
                                <label className="label">First name</label>
                                <div className="tf-input ip-icon">
                                    <i className="icon-left icon-accountline"></i>
                                    <input type="text" placeholder="First name"/>
                                </div>
                            </fieldset>
                            <fieldset className="flex-grow-1">
                                <label className="label">Last name</label>
                                <div className="tf-input ip-icon">
                                    <i className="icon-left icon-accountline"></i>
                                    <input type="text" placeholder="Last name"/>
                                </div>
                            </fieldset>
                        </div>
                        <fieldset className="group-ip">
                            <label className="label">Username</label>
                            <div className="tf-input ip-icon">
                                <i className="icon-left icon-accountline"></i>
                                <input type="text" placeholder="Username"/>
                            </div>
                        </fieldset>
                        <fieldset className="group-ip">
                            <label className="label">Email address</label>
                            <div className="tf-input ip-icon">
                                <i className="icon-left icon-accountline"></i>
                                <input type="text" placeholder="Email address"/>
                            </div>
                        </fieldset>
                        <div className="group-ip">
                            <div className="group-2">
                                <fieldset className="flex-grow-1">
                                    <label className="label">Password</label>
                                    <div className="tf-input ip-icon">
                                        <i className="icon-left icon-lock"></i>
                                        <input type={showPass ? "text" : "password"} placeholder="Password"/>
                                        <span className={`icon-right ${showPass ? "icon-view" : "icon-hide"}`} onClick={() => setShowPass(!showPass)}></span>
                                    </div>
                                </fieldset>
                                <fieldset className="flex-grow-1">
                                    <label className="label">Confirm password</label>
                                    <div className="tf-input ip-icon">
                                        <i className="icon-left icon-lock"></i>
                                        <input type={confirmPass ? "text" : "password"} placeholder="Password"/>
                                        <span className={`icon-right ${confirmPass ? "icon-view" : "icon-hide"}`} onClick={() => setConfirmPass(!confirmPass)}></span>
                                    </div>
                                </fieldset>
                            </div>
                            <p className="text-label">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                        </div>
                        
                        <div className="group-ip">
                            <label className="label">Country</label>
                            <Select
                                className="react-select"
                                placeholder="Choose"
                                options={countrySelect}
                                isSearchable={false}
                                styles={colorStyles}
                                formatOptionLabel={(countrySelect) => (
                                    <div className="react-select-option">
                                    <p>{countrySelect.label}</p>
                                    </div>
                                )}
                                />
                        </div>
                    </div>
                    <div className="box">
                        <div className="d-flex gap-8 align-items-center mb-10">
                            <input type="checkbox" id="cb-1" className="tf-check style-2"/>
                            <label htmlFor="cb-1" className="flex-grown-1">Agree to our Terms of use and Privacy Policy </label>
                        </div>
                        <div className="d-flex gap-8 align-items-center">
                            <input type="checkbox" id="cb-2" className="tf-check style-2" defaultChecked/>
                            <label htmlFor="cb-2" className="flex-grown-1">Subscribe to our monthly newsletter</label>
                        </div>
                    </div>
                    <div className="box">
                        <button className="tf-btn w-100">Register</button>
                        <div className="author-line">
                            <span className="line"></span>
                            <span>Or continue with</span>
                            <span className="line"></span>
                        </div>
                        <Link className="tf-btn btn-social w-100" href="/">
                            <div className="icon">
                                <Image src="/images/box-icon/google.png" width={22} height={22} alt="social"/>
                            </div>
                            Sign up with Google
                        </Link>
                    </div>
                    <div className="box">
                        <div>Don’t have an count? <Link href="/login" className="fw-bold">Log In</Link></div>
                    </div>
                </form>
            </div>
        </div>
    )
}