"use client";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Link from "next/link";
import Select from "react-select";
import { useState } from "react";
import Image from "next/image";

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
export default function VerifyAccount2() {

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
            <Layout>
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
                                <h4 className="title text_black-3">Personal information</h4>
                                <p>Please provide the following information as shown on your passport or ID card.</p>
                            </div>
                            <div className="box">
                                <fieldset>
                                    <label>Nationality</label>
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
                                <div className="text-sub d-flex align-items-center gap-12"><p>You may want to choose</p><span className="fw-bold d-flex align-items-center gap-8"><Image src="/images/card/flag-1.png" alt="flag" width={20} height={20}/>Ausria</span></div>
                            </div>
                            <div className="box">
                                <label>Legal name</label>
                                <div className="group-box-ip">
                                    <div className="flex-grow-1">
                                        <input placeholder="First name" type="text"/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input placeholder="Last name" type="text"/>
                                    </div>
                                </div>
                                <p className="text-sub">As shown on your passport or ID card. Please use the same language as on your document</p>
                            </div>
                            <div className="box">
                                <label>Legal name</label>
                                <div className="group-box-ip">
                                    <div className="flex-grow-1">
                                        <input placeholder="YYYY" type="text"/>   
                                    </div>
                                    <div className="flex-grow-1">
                                        <input placeholder="MM" type="text"/>   
                                    </div>
                                    <div className="flex-grow-1">
                                        <input placeholder="DD" type="text"/>   
                                    </div>
                                </div>
                            </div>
                            <div className="box-btn d-flex gap-10 flex-wrap justify-content-center">
                                <Link className="tf-btn btn-line" href="/verify-1">Back</Link>
                                <Link className="tf-btn" href="/verify-3">Continue</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

