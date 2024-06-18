"use client";
import Link from "next/link";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import ReactSlider from "react-slider"


export default function FilterTemplate(){

    const [value, setValue] = useState(["0", "10.000"])

	const renderThumb = (props, state) => (
		<div {...props}>{state.valueNow}</div>
	)

	const handleChange = (newValue) => {
		setValue(newValue)
	}


    return(
        <aside className="filter-wrap fixed-sidebar">
            <div className="box-title">
                <div className="h7">Filter</div>
                <div className="box-clear">
                    <span className="icon icon-close"></span>
                    <span>Clear All Filters</span>
                </div>
            </div>
            <Accordion className="filter-content"  defaultActiveKey={['0','1','2','3']}  flush alwaysOpen>
                <Accordion.Item className="box-filter" eventKey="0">
                    <Accordion.Header className="card-header">
                        <div className="h9">Item</div>
                        <span className="icon icon-arr-up"></span>
                    </Accordion.Header>
                    <Accordion.Body className="not-bg">
                        <div className="d-flex gap-10 flex-wrap">
                            <div className="tag-check">
                                <span className="icon icon-check"></span>
                                <span className="text">New items</span>
                            </div>
                            <div className="tag-check active">
                                <span className="icon icon-check"></span>
                                <span className="text">Popular items</span>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="box-filter" eventKey="1">
                    <Accordion.Header className="card-header">
                        <div className="h9">Categories</div>
                        <span className="icon icon-arr-up"></span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <fieldset className="box-check d-flex align-items-center gap-8">
                            <input type="checkbox" id="cb-1" className="tf-check"/>
                            <label htmlFor="cb-1" className="flex-grown-1">Google Slides Diagrams</label>
                        </fieldset>
                        <fieldset className="box-check d-flex align-items-center gap-8">
                            <input type="checkbox" id="cb-2" className="tf-check"/>
                            <label htmlFor="cb-2" className="flex-grown-1">Google Slides Infographics</label>
                        </fieldset>
                        <fieldset className="box-check d-flex align-items-center gap-8">
                            <input type="checkbox" id="cb-3" className="tf-check"/>
                            <label htmlFor="cb-3" className="flex-grown-1">Google Slides Maps</label>
                        </fieldset>
                        <fieldset className="box-check d-flex align-items-center gap-8">
                            <input type="checkbox" id="cb-4" className="tf-check"/>
                            <label htmlFor="cb-4" className="flex-grown-1">Google Slides Shapes</label>
                        </fieldset>
                        <fieldset className="box-check d-flex gap-8">
                            <input type="checkbox" id="cb-5" className="tf-check"/>
                            <label htmlFor="cb-5" className="flex-grown-1">Multipurpose Google Slides Templates</label>
                        </fieldset>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="box-filter" eventKey="2">
                    <Accordion.Header className="card-header">
                        <div className="h9">Software</div>
                        <span className="icon icon-arr-up"></span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <fieldset className="box-check d-flex align-items-center gap-8">
                            <input type="checkbox" id="sw-1" className="tf-check"/>
                            <label htmlFor="sw-1" className="flex-grown-1">Google Slides Diagrams</label>
                        </fieldset>
                        <fieldset className="box-check d-flex align-items-center gap-8">
                            <input type="checkbox" id="sw-2" className="tf-check"/>
                            <label htmlFor="sw-2" className="flex-grown-1">Photoshop</label>
                        </fieldset>
                        <fieldset className="box-check d-flex align-items-center gap-8">
                            <input type="checkbox" id="sw-3" className="tf-check"/>
                            <label htmlFor="sw-3" className="flex-grown-1">Keynote</label>
                        </fieldset>
                        <fieldset className="box-check d-flex align-items-center gap-8">
                            <input type="checkbox" id="sw-4" className="tf-check"/>
                            <label htmlFor="sw-4" className="flex-grown-1">Google slides</label>
                        </fieldset>
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="box-filter" eventKey="3">
                    <Accordion.Header className="card-header">
                        <div className="h9">Price</div>
                        <span className="icon icon-arr-up"></span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="box-price">
                            <fieldset className="box-check d-flex align-items-center gap-8">
                                <input type="checkbox" id="check-price-1" className="tf-check"/>
                                <label htmlFor="check-price-1" className="flex-grown-1">$2 - $9</label>
                            </fieldset>
                            <fieldset className="box-check d-flex align-items-center gap-8">
                                <input type="checkbox" id="check-price-2" className="tf-check"/>
                                <label htmlFor="check-price-2" className="flex-grown-1">$9 - $12</label>
                            </fieldset>
                            <fieldset className="box-check d-flex align-items-center gap-8">
                                <input type="checkbox" id="check-price-3" className="tf-check"/>
                                <label htmlFor="check-price-3" className="flex-grown-1">$12 - $20</label>
                            </fieldset>
                            <fieldset className="box-check d-flex align-items-center gap-8">
                                <input type="checkbox" id="check-price-4" className="tf-check"/>
                                <label htmlFor="check-price-4" className="flex-grown-1">On sale</label>
                            </fieldset>
                        </div>
                        <div className="box-range-price">
                            <div className="box-top">
                                <div className="price-item">
                                    <div className="title-price">Min price</div>
                                    <input type="text" defaultValue={value[0]}/>
                                </div>
                                <span className=""></span>
                                <div className="price-item">
                                    <div className="title-price">Max price</div>
                                    <input type="text" defaultValue={value[1]}/>
                                </div>
                            </div>
                            <div className="box-price">
                                <ReactSlider
                                    ariaLabelledby="slider-label"
                                    className="horizontal-slider st2"
                                    min={0}
                                    max={10000}
                                    defaultValue={[0, 7000]}
                                    thumbClassName="example-thumb"
                                    trackClassName="example-track"
                                    renderThumb={renderThumb}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="box-value d-flex justify-content-between align-items-center">
                                <div className="value-price d-flex align-items-center gap-8">
                                    <span>Price:</span>
                                    <div className="d-flex align-items-center gap-4">
                                        <span>$0</span>
                                        <span>-</span>
                                        <span>$10.000</span>
                                    </div>
                                </div>
                                <Link href="#" className="btn-filter">Filter</Link>
                            </div>
                        </div>
                        
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </aside>
    )
}