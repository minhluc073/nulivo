"use client";
import Layout from "@/components/layout/Layout"
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import Link from "next/link";
import { dataStatistical } from "@/data/data-dashboard";
import Pagination from "@/components/elements/Pagination";
import DashboardChart from "@/components/sections/DashboardChart";

export default function Earnings(){
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
                        <div className="h7 title">Earnings</div>
                        <div className="flat-earning-wrap">
                            <div className="earning-item">
                                <div className="box-icon">
                                    <span className="icon icon-dollar-1"></span>
                                </div>
                                <div className="content">
                                    <div>
                                        <p>Sales earning this month</p>
                                        <h6 className="title-earning">$12.00</h6>
                                    </div>
                                    <div className="value-earing">
                                        <i className="icon icon-arr-chart"></i>
                                        <span className="value">1.56%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="earning-item bg-1">
                                <div className="box-icon">
                                    <span className="icon icon-dollar-2"></span>
                                </div>
                                <div className="content">
                                    <div>
                                        <p>Your balance</p>
                                        <h6 className="title-earning">$1775.12</h6>
                                    </div>
                                    
                                    <div className="value-earing">
                                        <i className="icon icon-arr-chart"></i>
                                        <span className="value">1.56%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="earning-item bg-2">
                                <div className="box-icon">
                                    <span className="icon icon-blance"></span>
                                </div>
                                <div className="content">
                                    <div>
                                        <p>Total value of your sales</p>
                                        <h6 className="title-earning">$1834.12</h6>
                                    </div>
                                    <div className="value-earing">
                                        <i className="icon icon-arr-chart"></i>
                                        <span className="value">1.56%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box wrap-chart-box">
                        <DashboardChart/>
                    </div>
                    <div className="box">
                        <div className="table-responsive">
                            <table className="table-default table-statistical">
                                <thead>
                                    <tr>
                                        <th className="fw-semibold">Date</th>
                                        <th className="fw-semibold">Item sales count</th>
                                        <th className="fw-semibold">Earnings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataStatistical.map((item)=>
                                        <tr key={item?.id}>
                                            <td>{item?.date}</td>
                                            <td>{item?.sales}</td>
                                            <td>{item?.earnings}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <Pagination/>
                    </div>
                </LayoutAdmin>
            </Layout>
        </>
    )
}