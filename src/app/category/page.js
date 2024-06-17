"use client"
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Link from "next/link";
import FilterTemplate from "@/components/elements/FilterTemplate";
import { Dropdown } from 'react-bootstrap';
import { useState } from "react";
export default function Category() {
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
                    <div className="col-md-3">
                        <FilterTemplate/>
                    </div>
                    <div className="col-md-9">
                        <div className="meta-select-filter">
                            <span className="fw-medium title-font text_black-4">Showing 1–16 of 20 results</span>
                            <div className="group-select-filter">
                                <div className="dropdown-select">
                                    <span className="title">Sort:</span>
                                    <Dropdown onSelect={(e)=> handleSelect(e, 'trending')}>
                                        <Dropdown.Toggle id="dropdown-basic">
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
                                        <Dropdown.Toggle id="dropdown-basic">
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
                    </div>
                </div>
            </div>
        </div>
      </Layout>
      
    </>
  );
}
