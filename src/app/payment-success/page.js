import Layout from "@/components/layout/Layout"
import Image from "next/image"
import Link from "next/link"
import img from "/public/images/banner/banner-payment.png"
export default function PaymentSuccess(){
    return(
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
                        <div className="flat-wrap-payment">
                            <div className="banner-img text-center">
                                <Image
                                    src={img}
                                    width={372}
                                    height={372}
                                    alt="banner-payment"
                                />
                            </div>
                            <div className="box-content text-center">
                                <h2 className="title">Payment Success</h2>
                                <div className="box-check-code">
                                    <p className="text_black-3">Your purchase is been confirmed. Check your email for details</p>
                                    <span className="order-code">Order no: 1e22824e5e06767ea1</span>
                                </div>
                                <p className="text_black-3">The  ordered item is now available to your <span className="fw-semibold text_primary">Downloads</span> page</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}