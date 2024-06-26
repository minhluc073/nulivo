import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import img from "/public/images/banner/banner-404.png"

export default function Custom404() {
    return (
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
                        <div className="flat-wrap-404">
                            <div className="banner-img text-center">
                                <Image
                                    src={img}
                                    width={430}
                                    height={372}
                                    alt="banner-404"
                                />
                            </div>
                            <div className="box-content text-center">
                                <h2 className="title">Page Not Found</h2>
                                <p className="text_black-3">The page you are looking for is moved or does not exist any more</p>
                                <Link href="/" className="tf-btn btn-md">Back to home page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
