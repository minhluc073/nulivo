"use client";
import Accordion from "react-bootstrap/Accordion";

export default function FilterTemplate(){
    return(
        <aside className="filter-wrap">
            <div className="box-title">
                <div className="h7">Filter</div>
                <div className="box-clear">
                    <span className="icon icon-close"></span>
                    <span>Clear All Filters</span>
                </div>
            </div>
            <Accordion className="filter-content" flush alwaysOpen>
                <Accordion.Item className="box-filter" eventKey="1"></Accordion.Item>
            </Accordion>
        </aside>
    )
}