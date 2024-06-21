import Pagination from "@/components/elements/Pagination";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Link from "next/link";
import dataBlog from "@/data/data-blog";
import BlogItem from "@/components/elements/BlogItem";

export default function Blogs() {
  return (
    <>
        <Layout>
            <PageTitle title="Latest News & Insights" />
            <div className="flat-breadcrumb">
                <div className="container">
                    <div className="breadcrumb">
                        <Link className="item" href="/">Category</Link>
                        <Link className="item" href="/category-free">Free-Templates</Link>
                        <Link className="item" href="#">Free-Powerpoint-Templates</Link>
                    </div>
                </div>
            </div>
            <div className="flat-spacing-1 flat-section-blog">
                <div className="container">
                    <div className="row">
                        {dataBlog.map((item)=>(
                            <div className="col-lg-4 col-sm-6 box" key={item.id}>
                                <BlogItem item={item} />
                            </div>
                        ))}
                        <div className="col-12">
                            <Pagination center/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>
  );
}
