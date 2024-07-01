import Layout from "@/components/layout/Layout";
import Link from "next/link";


export default function UserProfile(){
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
                
            </Layout>
        </>

    )
}