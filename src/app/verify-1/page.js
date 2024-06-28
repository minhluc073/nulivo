"use client";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Link from "next/link";
import Select from "react-select";
import { useState } from "react";


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
export default function VerifyAccount1() {

    const [selectCountry, setselectCountry] = useState();

    const colorStyles = {
        control: (styles) => ({
        ...styles,
        backgroundColor: "transparent",
        borderColor: "#EFEFEF",
        borderRadius: "999px",
        height: "54px",
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
                            <div className="verify-step-item">
                                <div className="box-icon"><i className="icon icon-step-2"></i></div>
                                <div className="content">
                                    <div className="h9 title">Step 2</div>
                                    <span>Personal information</span>
                                </div>
                            </div>
                            <div className="verify-step-item">
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
                                <h4 className="title text_black-3">Billing Information</h4>
                                <p>Select your residency and follow the steps</p>
                            </div>
                            <div className="box">
                                <fieldset>
                                    <label>First Name *</label>
                                    <Select
                                    className="react-select"
                                    placeholder="Country / Region"
                                    value={selectCountry}
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
                                <p className="text-sub">Please ensure your country of residence is correct, your product services could change based on the selection.</p>
                            </div>
                            <div className="text-center">
                                <Link className="tf-btn" href="/verify-2">Continue</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
