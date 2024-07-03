"use client";
import Layout from "@/components/layout/Layout"
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import Link from "next/link";
import { dataStatements } from "@/data/data-dashboard";
import Image from "next/image";
import Pagination from "@/components/elements/Pagination";
export default function Statements(){

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
                    <div className="h7 title">Statements</div>
                    <div className="table-responsive">
                        <table className="table-public-file table-statements">
                            <thead>
                                <tr>
                                    <th>Product details</th>
                                    <th>Status</th>
                                    <th>Buyer</th>
                                    <th>Price</th>
                                    <th>Earnings</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataStatements.map((item)=>(
                                        <tr key={item?.id} className="item">
                                            <td>
                                                <div className="item-product d-flex gap-20">
                                                    <Link href={item?.link} className="banner-img">
                                                        <Image src={item?.img} alt="img-template" width={80} height={50}/>
                                                    </Link>
                                                    <div className="content">
                                                        <Link href={item?.link} className="title-template">{item?.name}</Link>
                                                        <p className="mt-6 text-3">Order ID:<span>{item?.orderID}</span></p>
                                                        <p className="mt-6 text-3">Date: <span>{item?.date}</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="status-1 complete">{item?.status}</span></td>
                                            <td>{item?.buyer}</td>
                                            <td>{item?.price}</td>
                                            <td>{item?.earnings}</td>
                                            <td><Link href={item?.link} className="tf-btn btn-line-primary btn-view">View</Link></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <Pagination />
                </LayoutAdmin>
            </Layout>
        </>
    )

}