'use client'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import TemplateItem from "../elements/TemplateItem";
import dataTemplate2 from "@/data/data-template2";


const dataNav = [
    {
        id: 1,
        text: "All",
        navKey:"all"
    },
    {
        id: 2,
        text: "PowerPoint Templates",
        navKey:"powerPoint"
    },
    {
        id: 3,
        text: "Google Slides Templates",
        navKey:"googleSlides"
    },
    {
        id: 4,
        text: "Free Templates",
        navKey:"free"
    },
    {
        id: 5,
        text: "Mockups",
        navKey:"mockup"
    },
    {
        id: 6,
        text: "Fonts",
        navKey:"fonts"
    },
  
  ];


export default function Template(){
    return (
        <section className="flat-template flat-spacing-2 pt-0">
            <div className="container">
                <div className="flat-title-v2 text-center">
                    <h2>
                        <span className="fw-light text_black-1">Explore all of our latest</span> <br/>
                        <span className="text-gradient-1">Slide templates, Fonts, and Mockups</span>
                    </h2>
                    <p className="sub-title text_black-1">We carefully review each new submission from our community to ensure they meet our design standards.</p>
                </div>
                <div className="flat-tab wow fadeInUpSmall" data-wow-delay=".2s" data-wow-duration="2000ms">
                    <Tab.Container defaultActiveKey={dataNav[0]?.navKey}>
                        <Nav className="nav-tab-template">
                            {
                                dataNav.map((item) => {
                                    return (
                                        <Nav.Item key={item?.id}>
                                            <Nav.Link eventKey={item?.navKey}>{item?.text}</Nav.Link>
                                        </Nav.Item>
                                    )
                                })
                            }
                        </Nav>
                        <Tab.Content>
                           <Tab.Pane eventKey={dataNav[0]?.navKey}>
                                <div className="row">
                                {dataTemplate2.map((item)=>(
                                    <div className="col-xl-3 col-lg-4 col-sm-6 box" key={item.id}>
                                        <TemplateItem item={item} />
                                    </div>
                                   ))} 
                                </div>
                           </Tab.Pane>
                           <Tab.Pane eventKey={dataNav[1]?.navKey}>
                                <div className="row">
                                {dataTemplate2.map((item)=>(
                                    <div className="col-xl-3 col-lg-4 col-sm-6 box" key={item.id}>
                                        <TemplateItem item={item} />
                                    </div>
                                   ))} 
                                </div>
                           </Tab.Pane>
                           <Tab.Pane eventKey={dataNav[2]?.navKey}>
                                <div className="row">
                                {dataTemplate2.map((item)=>(
                                    <div className="col-xl-3 col-lg-4 col-sm-6 box" key={item.id}>
                                        <TemplateItem item={item} />
                                    </div>
                                   ))} 
                                </div>
                           </Tab.Pane>
                           <Tab.Pane eventKey={dataNav[3]?.navKey}>
                                <div className="row">
                                {dataTemplate2.map((item)=>(
                                    <div className="col-xl-3 col-lg-4 col-sm-6 box" key={item.id}>
                                        <TemplateItem item={item} />
                                    </div>
                                   ))} 
                                </div>
                           </Tab.Pane>
                           <Tab.Pane eventKey={dataNav[4]?.navKey}>
                                <div className="row">
                                {dataTemplate2.map((item)=>(
                                    <div className="col-xl-3 col-lg-4 col-sm-6 box" key={item.id}>
                                        <TemplateItem item={item} />
                                    </div>
                                   ))} 
                                </div>
                           </Tab.Pane>
                           <Tab.Pane eventKey={dataNav[5]?.navKey}>
                                <div className="row">
                                   {dataTemplate2.map((item)=>(
                                    <div className="col-xl-3 col-lg-4 col-sm-6 box" key={item.id}>
                                        <TemplateItem item={item} />
                                    </div>
                                   ))} 
                                </div>
                           </Tab.Pane>
                        </Tab.Content>
                        
                    </Tab.Container>
                </div>
            </div>
        </section>
    )
}