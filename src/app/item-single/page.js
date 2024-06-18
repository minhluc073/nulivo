"use client"
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { dataTemplateCate1 } from "@/data/data-template-category";
import TemplateItem from "@/components/elements/TemplateItem";
import SidebarSingle from "@/components/elements/SidebarSingle";


export default function SingleItem() {
   

  return (
    <>
      <Layout>
        <div className="flat-breadcrumb">
            <div className="container">
                <div className="breadcrumb">
					<Link className="item" href="/">Home</Link>
                    <Link className="item" href="/single-item">Item</Link>
			    </div>
            </div>
        </div>
        <div className="flat-spacing-1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">123</div>
                    <div className="col-xl-4"><SidebarSingle/></div>
                </div>
            </div>
        </div>
      </Layout>
      
    </>
  );
}
