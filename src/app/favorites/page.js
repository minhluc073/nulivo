"use client"
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Dropdown } from 'react-bootstrap';
import { useState } from "react";
import TemplateItem from "@/components/elements/TemplateItem";
import Pagination from "@/components/elements/Pagination";
import { dataRecent3 } from "@/data/data-template-recent";
import SidebarFavorites from "@/components/elements/SidebarFavorites";


export default function Favorites(){

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
                <div className="flat-spacing-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3"><SidebarFavorites/></div>
                            <div className="col-lg-9">
                                <div className="meta-select-filter style-2">
                                    <div className="d-flex gap-10 flex-wrap">
                                        <span className="tag">All Templates (1.247)</span>
                                        <span className="tag active">Favorites list (442)</span>
                                    </div>
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
                                        {dataRecent3.map((item) => (
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
    )
}