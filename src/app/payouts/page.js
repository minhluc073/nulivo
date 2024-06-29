"use client";
import Layout from "@/components/layout/Layout"
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import Image from "next/image"
import Link from "next/link"
import Select from "react-select";
import { dataPayoutHistory } from "@/data/data-dashboard";


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

  const region = [
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
      value: "v4",
      label: "HCM",
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

export default function Payouts(){
    return(
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
                        <div className="h7 title">Apply to become an author</div>
                        <div className="d-flex gap-14 flex-wrap">
                            <div className="statements-item flex-grow-1">
                                <div className="box-icon w_52 round"><i className="icon icon-speak"></i></div>
                                <div className="content-right d-flex align-items-center justify-content-between">
                                    <span>Referral earning</span>
                                    <span className="price">$0</span>
                                </div>
                            </div>
                            <div className="statements-item bg-2 flex-grow-1">
                                <div className="box-icon w_52 round"><i className="icon icon-blance"></i></div>
                                <div className="content-right d-flex align-items-center justify-content-between">
                                    <span>Total available balance</span>
                                    <span className="price">$1775.12</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="box box-payment-request">
                        <div className="h7 title">Submit a payment request</div>
                        <div className="sub-box group-ip-3">
                            <div className="card-payment-item text-center">
                                <div className="card-img">
                                    <Image src="/images/card/bank.png" alt="card" width={60} height={60}/>
                                </div>
                                <div className="title-payment title-font fw-semibold">Bank</div>
                            </div>
                            <div className="card-payment-item text-center">
                                <div className="card-img">
                                    <Image src="/images/card/paypal.png" alt="card" width={60} height={60}/>
                                </div>
                                <div className="title-payment title-font fw-semibold">Paypal</div>
                            </div>
                            <div className="card-payment-item text-center">
                                <div className="card-img">
                                    <Image src="/images/card/payoneer.png" alt="card" width={60} height={60}/>
                                </div>
                                <div className="title-payment title-font fw-semibold">Payoneer</div>
                            </div>
                        </div>
                        <div className="sub-box">
                            <p className="d-flex gap-4 mb-6"><span>Processing time:</span><span className="fw-bold">2-3 business days</span></p>
                            <p className="d-flex gap-4"><span>Estimated fees:</span><span className="fw-bold">0.00 USD</span></p>
                        </div>
                        <div className="sub-box">
                            <label className="label">Bank account country</label>
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
                        <div className="sub-box">
                            <p className="mb-12 title-font fw-semibold">Bank account curency</p>
                            <p className="text_black-3">Australian dollar (AUD)</p>
                        </div>
                        <div className="sub-box">
                            <label className="label">SWIFT/BIC</label>
                            <input type="text" placeholder="ABCDEFGHXXX"/>
                        </div>
                        <div className="sub-box">
                            <label className="label">Bank address</label>
                            <input type="text"/>
                        </div>
                        <div className="sub-box">
                            <label className="label">Bank city</label>
                            <input type="text"/>
                        </div>
                        <div className="sub-box">
                            <label className="label">Bank province/Sate (optional)</label>
                                <Select
                                    className="react-select"
                                    placeholder="Select a region"
                                    options={region}
                                    isSearchable={false}
                                    styles={colorStyles}
                                    formatOptionLabel={(region) => (
                                        <div className="react-select-option">
                                        <p>{region.label}</p>
                                        </div>
                                    )}
                                />
                        </div>
                        <div className="sub-box">
                            <label className="label">Account number</label>
                            <input type="number"/>
                        </div>
                        <div className="sub-box">
                            <label className="label">Name of account holder (as shown on bank statement)</label>
                            <input type="text"/>
                        </div>
                        <div className="sub-box">
                            <button className="tf-btn width-1">Send</button>
                        </div>
                    </form>
                    <div className="box">
                        <div className="h7 title-v2">Payout History</div>
                        <div className="table-responsive">
                            <table className="table-default table-payout-history">
                                <thead>
                                    <tr>
                                        <th className="fw-semibold">Amount</th>
                                        <th className="fw-semibold">Payout Method</th>
                                        <th className="fw-semibold">Payment ID</th>
                                        <th className="fw-semibold">Status</th>
                                        <th className="fw-semibold">Submission Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataPayoutHistory.map((item)=>
                                        <tr key={item?.id}>
                                            <td>{item?.amount}</td>
                                            <td>{item?.method}</td>
                                            <td>{item?.paymentID}</td>
                                            <td><span className="status pending">{item?.status}</span></td>
                                            <td>{item?.date}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </LayoutAdmin>
            </Layout>
        </>
    )
}