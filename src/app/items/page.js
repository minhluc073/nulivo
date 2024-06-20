"use client"
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import imgPageTitle from "/public/images/banner/banner-page-title.jpg";
import WidgetCount from "@/components/sections/WidgetCount";
import { Dropdown } from 'react-bootstrap';
import { useState } from "react";
import TemplateItem from "@/components/elements/TemplateItem";
import { dataItemTemplate1 } from "@/data/data-item-template";
import Pagination from "@/components/elements/Pagination";



export default function Items(){
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
                <section className="flat-banner banner-v2">
                    <Image src={imgPageTitle} alt="banner-page-title" />
                    <div className="banner-content">
                        <div className="box-left">
                        <h2 className="title">Premium and Free PowerPoint, <br/> Vectors, Print and PSD downloads</h2>
                        <p className="subtitle">Nulivo Market is an online marketplace provider of the highest quality ready-to-use Presentation, Print and PSD downloads.</p>
                        </div>
                    </div>
                </section>
                <WidgetCount cls="flat-counter-2" />
                <section className="flat-template flat-spacing-2">
                    <div className="container">
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
                        <div className="row">
                            {dataItemTemplate1.map((item)=>(
                                <div className="col-xl-3 col-lg-4 col-sm-6 box" key={item.id}>
                                    <TemplateItem item={item} />
                                </div>
                            ))}
                            <div className="col-12">
                                <Pagination center/>
                            </div> 
                        </div>
                    </div>
                </section>
            </Layout>
        </>
      );
}