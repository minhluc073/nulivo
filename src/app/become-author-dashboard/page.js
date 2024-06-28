
import Layout from "@/components/layout/Layout"
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import Link from "next/link"


export default function BecomeAuthorDashboard(){
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
                    <div className="h7 title-v2">Apply to become an author</div>
                    <div className="sub-box group-ip-2">
                        <fieldset>
                            <label className="label">First Name *</label>
                            <input className="ip-fill" type="text" placeholder="First Name" required/>
                        </fieldset>
                        <fieldset>
                            <label className="label">Last Name *</label>
                            <input className="ip-fill" type="text" placeholder="Last Name" required/>
                        </fieldset>
                    </div>
                    <fieldset className="sub-box">
                        <label className="label mb-10">Share a URL where we can view your work *</label>
                        <textarea placeholder="URL" className="textarea-3"></textarea>
                    </fieldset>
                    <fieldset className="sub-box">
                        <label className="label mb-10">Tell us why you would like to sell on Nulivo Market</label>
                        <textarea placeholder="Your message" className="textarea-3"></textarea>
                    </fieldset>
                    <fieldset className="sub-box d-flex gap-8 align-items-center">
                        <input type="checkbox" className="tf-check" defaultChecked id="check"/>
                        <label htmlFor="check">I have read and agree to Nulivo Market <span className="text_primary">author terms</span> </label>
                    </fieldset>
                    <div className="d-flex gap-20 flex-wrap">
                        <Link href="#" className="tf-btn btn-line-primary width-1">Back</Link>
                        <Link href="#" className="tf-btn width-1">Submit</Link>
                    </div>
                </LayoutAdmin>
            </Layout> 
        </>
    )
}