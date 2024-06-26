import Layout from "@/components/layout/Layout"
import Link from "next/link"
import LayoutAdmin from "@/components/layout/LayoutAdmin"

export default function Profile (){
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
                    <div>PROFILE</div>
                </LayoutAdmin>
            </Layout>
        </>
    )
}