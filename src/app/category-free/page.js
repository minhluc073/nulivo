"use client"
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Link from "next/link";
import FilterTemplate from "@/components/elements/FilterTemplate";
import { Dropdown } from 'react-bootstrap';
import { useState } from "react";
import { dataTemplateCate2 } from "@/data/data-template-category";
import TemplateItem from "@/components/elements/TemplateItem";
import Pagination from "@/components/elements/Pagination";

export default function CategoryFree() {
    const [selectSort, setSelectSortby] = useState('');
    const [selectShow, setSelectShow] = useState('');

    const handleSelect = (option,key) => {
        if( key === "trending" ){
            setSelectSortby(option);
        }else{
            setSelectShow(option);
        }
      };
    return (
        <>
        <Layout>
            <PageTitle
            title="Download Free PowerPoint Presentations Templates"
            subtitle="Create a professional Google Slides presentation in minutes with the following ready-to-use templates"
            cls="style-2"
            />
            <div className="flat-breadcrumb">
                <div className="container">
                    <div className="breadcrumb">
                        <Link className="item" href="/category-free">Category</Link>
                        <Link className="item" href="#">Free-Templates</Link>
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
                        <div className="col-lg-9">
                            <div className="meta-select-filter">
                                <span className="fw-medium title-font text_black-4">Showing 1–16 of 20 results</span>
                                <div className="group-select-filter">
                                    <div className="dropdown-select">
                                        <span className="title">Sort:</span>
                                        <Dropdown onSelect={(e)=> handleSelect(e, 'trending')}>
                                            <Dropdown.Toggle className="sortby-select">
                                                {selectSort || 'Trending'}      
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item eventKey="Trending">Trending</Dropdown.Item>
                                                <Dropdown.Item eventKey="Seller">Seller</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="dropdown-select">
                                        <span className="title">Show:</span>
                                        <Dropdown onSelect={(e)=> handleSelect(e, 'show-item')}>
                                            <Dropdown.Toggle>
                                                {selectShow || '15 item'}      
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item eventKey="10 item">10 item</Dropdown.Item>
                                                <Dropdown.Item eventKey="15 item">15 item</Dropdown.Item>
                                                <Dropdown.Item eventKey="20 item">20 item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className="flat-template-category">
                                <div className="row">
                                    {dataTemplateCate2.map((item) => (
                                        <div className="col-lg-4 col-sm-6 box" key={item.id}>
                                        <TemplateItem item={item} />
                                    </div>
                                    ))}
                                    <div className="col-12">
                                        <Pagination/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    );
}
