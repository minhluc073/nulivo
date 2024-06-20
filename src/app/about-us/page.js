import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo/logo@2x.png";




export default function AboutUs() {
  return (
    <>
        <Layout>
            <PageTitle
            title="About Nulivo"
            subtitle="Browse The Best Free PowerPoint Presentations Templates and select the most suitable for your business"
            />
            <div className="flat-breadcrumb">
                <div className="container">
                    <div className="breadcrumb">
                        <Link className="item" href="/">Home</Link>
                        <Link className="item" href="/category-free">Free-Templates</Link>
                        <Link className="item" href="#">Free-Powerpoint-Templates</Link>
                    </div>
                </div>
            </div>
            <div className="flat-spacing-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-5">
                            <h2>Who are we?</h2>
                        </div>
                        <div className="col-lg-6 col-md-7">
                            <div className="box-about-text">
                                <p className="text-1 text_black-1">Nulivo Market is an online marketplace provider of the highest quality ready-to-use Presentation, Print and PSD downloads.</p>
                                <p className="text_black-1">Nulivo Market’s number one aim is to provide state-of-the-art creative service in creating a high-level quality service by professional designers around the world. A specialized marketplace contains highly developments that are accomplished by a team of skilled technicians and creative designers, such as PowerPoint, Google Slides, and Keynote Presentation Templates, and more that you won’t find anywhere else.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flat-banner-about">
                <div className="box-img-gallery-1 flex-grow-1">
                    <Link className="item-1" href="#">
                        <Image src="/images/banner/item-about1.jpg" width={315} height={250} className="img" alt="avt-banner"/>
                    </Link>
                    <Link className="item-2" href="#">
                        <Image src="/images/banner/item-about2.jpg" width={315} height={250} className="img" alt="avt-banner"/>
                    </Link>
                    <Link className="item-3" href="#">
                        <Image src="/images/banner/item-about3.jpg" width={630} height={500} className="img" alt="avt-banner"/>
                    </Link>
                </div>
                <div className="box-img-gallery-2 flex-grow-1">
                    <Link className="item-1" href="#">
                        <Image src="/images/banner/item-about4.jpg" width={220} height={261} className="img" alt="avt-banner"/>
                    </Link>
                    <Link className="item-2" href="#">
                        <Image src="/images/banner/item-about5.jpg" width={220} height={261} className="img" alt="avt-banner"/>
                    </Link>
                    <Link className="item-3" href="#">
                        <Image src="/images/banner/item-about6.jpg" width={440} height={239} className="img" alt="avt-banner"/>
                    </Link>
                    <Link className="item-4" href="#">
                        <Image src="/images/banner/item-about7.jpg" width={315} height={500} className="img" alt="avt-banner"/>
                    </Link>
                    <Link className="item-5" href="#">
                        <Image src="/images/banner/item-about8.jpg" width={220} height={250} className="img" alt="avt-banner"/>
                    </Link>
                    <Link className="item-6" href="#">
                        <Image src="/images/banner/item-about2.jpg" width={220} height={250} className="img" alt="avt-banner"/>
                    </Link>
                </div>
            </div>
            <div className="flat-spacing-1">
                <div className="container">
                    <div className="box-about-text-v2">
                        <div className="content">
                            <div className="logo d-flex justify-content-center">
                                <Link href="/">
                                <Image src={logo} alt="logo" width={114} height={35} />
                                </Link>
                            </div>
                            <p className="text-1 text_black-1">We aim to continually improve our products and services to provide the best user experience</p>
                            <p className="text_black-1">There are many paths to success, many routes businesses may take to reach their goals, and thousands of independent creators around the world are looking for the freedom to work from anywhere in the world. Our mission is to chart those unknown paths and helping millions of people around the world to buy and sell easy-to-use Professional PowerPoint templates</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>
  );
}
