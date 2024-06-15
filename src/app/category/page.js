import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Link from "next/link";
import FilterTemplate from "@/components/elements/FilterTemplate";

export default function Category() {
  return (
    <>
      <Layout>
        <PageTitle title="Google Slides Templates"  subtitle="Create a professional Google Slides presentation in minutes with the following ready-to-use templates" />
        <div className="flat-breadcrumb">
            <div className="container">
                <div className="breadcrumb">
					<Link className="item" href="/">Home</Link>
                    <Link className="item" href="/category">Free-Templates</Link>
                    <Link className="item" href="#">Free-Powerpoint-Templates</Link>
			    </div>
            </div>
        </div>
        <div className="flat-spacing-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <FilterTemplate/>
                    </div>
                    <div className="col-lg-9"></div>
                </div>
            </div>
        </div>
      </Layout>
      
    </>
  );
}
