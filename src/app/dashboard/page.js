import Layout from "@/components/layout/Layout"
import Link from "next/link"
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import Overview from "@/components/sections/Overview"
import PublicFiles from "@/components/sections/PublicFiles"
import { dataPublishedFiles, dataSelling } from "@/data/data-dashboard"
import SellingTemplate from "@/components/sections/SellingTemplate"
import BannerImprove from "@/components/sections/Banner-improve"

export default function Dashboard (){
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
                        <Overview title="Performance overview"/>
                    </div>
                    <div className="box">
                        <PublicFiles title="Published files" data={dataPublishedFiles}/>
                    </div>
                    <div className="box">
                        <SellingTemplate title="Best Selling PowerPoint Presentation Templates 2023" data={dataSelling}/>
                    </div>
                    <div className="box">
                        <BannerImprove/>
                    </div>
                </LayoutAdmin>
            </Layout>
        </>
    )
}