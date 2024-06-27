"use client";
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import Image from "next/image"
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
      value: "v3",
      label: "Viet Nam",
    },
  ];

  const city = [
    {
      value: "v1",
      label: "New York",
    },
    {
      value: "v2",
      label: "London",
    },
    {
      value: "v3",
      label: "Tokyo",
    },
    {
      value: "v3",
      label: "Manchester",
    },
  ];

  const showNoti = [
    {
      value: "v1",
      label: "Off",
    },
    {
      value: "v2",
      label: "On",
    },
  ];

  const showCountry = [
    {
      value: 1,
      label: "Off",
    },
    {
      value: 2,
      label: "On",
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

export default function ProfileSetting (){


    return (
        <>
            <Layout loggedIn>
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
                <LayoutAdmin>
                    <div className="box">
                        <div className="h7 title-v2">Profile Setting</div>
                        <div className="box-upload-profile sub-box">
                            <div className="avatar avt-128 round">
                                <Image src="/images/avatar/avt-16.jpg" width={128} height={128} alt="avatar"/>
                            </div>
                            <div className="content-right">
                                <div className="fw-semibold title-font">Upload a new avatar</div>
                                <form className="box-upload">
                                    <input type="file" className="ip-file"/>
                                    <button className="tf-btn">Choose file</button>
                                    <span>No files selected</span>
                                </form>
                                <span className="text-5">Profile Photo must be 200*200px</span>
                            </div>
                        </div>
                        <fieldset className="sub-box">
                            <label className="label">About</label>
                            <textarea placeholder="Your message" className="textarea-3"></textarea>
                        </fieldset>
                        <div className="sub-box group-ip-2">
                            <fieldset>
                                <label className="label">Username</label>
                                <input className="ip-fill" type="text" placeholder="Themesflat" required/>
                            </fieldset>
                            <fieldset>
                                <label className="label">Email address *</label>
                                <input className="ip-fill" type="text" placeholder="Your email" required/>
                            </fieldset>
                        </div>
                        <div className="sub-box group-ip-2">
                            <fieldset>
                                <label className="label">Password</label>
                                <input className="ip-fill" type="password" placeholder="Password" required/>
                            </fieldset>
                            <fieldset>
                                <label className="label">Repeat Password</label>
                                <input className="ip-fill" type="password" placeholder="Repeat Password" required/>
                            </fieldset>
                        </div>
                    </div>
                    <div className="box">
                        <div className="h7 title-v2">Billing Information</div>
                        <div className="sub-box group-ip-2">
                            <fieldset>
                                <label className="label">First Name *</label>
                                <input className="ip-fill" type="text" placeholder="First Name" required/>
                            </fieldset>
                            <fieldset>
                                <label className="label">Last Name *</label>
                                <input className="ip-fill" type="text" placeholder="Last Name" required/>
                            </fieldset>
                        </div>
                        <div className="sub-box group-ip-2">
                            <fieldset>
                                <label className="label">Country *</label>
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
                            </fieldset>
                            <fieldset>
                                <label className="label">Address Line 1  *</label>
                                <input className="ip-fill" type="text" placeholder="Address Line 1" required/>
                            </fieldset>
                        </div>
                        <div className="sub-box group-ip-2">
                            <fieldset>
                                <label className="label">City / State</label>
                                <Select
                                    className="react-select"
                                    placeholder="Choose"
                                    options={city}
                                    isSearchable={false}
                                    styles={colorStyles}
                                    formatOptionLabel={(city) => (
                                        <div className="react-select-option">
                                        <p>{city.label}</p>
                                        </div>
                                    )}
                                />
                            </fieldset>
                            <fieldset>
                                <label className="label">Zip / Postal Code *</label>
                                <input className="ip-fill" type="text" placeholder="Zip / Postal Code" required/>
                            </fieldset>
                        </div>
                    </div>
                    <div className="box">
                        <div className="h7 title-v2">Related information</div>
                        <fieldset className="sub-box">
                            <label className="label">Send a notification to buyers when item update is approved</label>
                            <Select
                                    className="react-select"
                                    placeholder="Off"
                                    options={showNoti}
                                    isSearchable={false}
                                    styles={colorStyles}
                                    formatOptionLabel={(showNoti) => (
                                        <div className="react-select-option">
                                        <p>{showNoti.label}</p>
                                        </div>
                                    )}
                                />
                        </fieldset>
                        <fieldset className="sub-box">
                            <label className="label">Show country on your profile and badges</label>
                            <Select
                                    className="react-select"
                                    placeholder="Off"
                                    options={showCountry}
                                    isSearchable={false}
                                    styles={colorStyles}
                                    formatOptionLabel={(showCountry) => (
                                        <div className="react-select-option">
                                        <p>{showCountry.label}</p>
                                        </div>
                                    )}
                                />
                        </fieldset>
                        <fieldset>
                            <label className="label">Your Referral Url</label>
                            <input className="ip-fill" type="text" required defaultValue="https://www.nulivo.com/?ref=NVHung"/>
                        </fieldset>
                    </div>
                    <div className="box">
                        <div className="h7 title-v2">Social profiles (Optional)</div>
                        <div className="sub-box group-ip-3">
                            <fieldset>
                                <label className="label">Facebook</label>
                                <input className="ip-fill" required placeholder="Your Url"/>
                            </fieldset>
                            <fieldset>
                                <label className="label">Twitter</label>
                                <input className="ip-fill" required placeholder="Your Url"/>
                            </fieldset>
                            <fieldset>
                                <label className="label">Pinterest</label>
                                <input className="ip-fill" required placeholder="Your Url"/>
                            </fieldset>
                        </div>
                        <div className="sub-box group-ip-3">
                            <fieldset>
                                <label className="label">Instagram</label>
                                <input className="ip-fill" required placeholder="Your Url"/>
                            </fieldset>
                            <fieldset>
                                <label className="label">Dribbble</label>
                                <input className="ip-fill" required placeholder="Your Url"/>
                            </fieldset>
                            <fieldset>
                                <label className="label">Behance</label>
                                <input className="ip-fill" required placeholder="Your Url"/>
                            </fieldset>
                        </div>
                        <Link href="#" className="tf-btn width-1">Save changes</Link>
                    </div>
                    
                </LayoutAdmin>
            </Layout>
        </>
    )
}