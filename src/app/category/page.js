"use client"
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Link from "next/link";
import FilterTemplate from "@/components/elements/FilterTemplate";
import { Dropdown } from 'react-bootstrap';
import { useState } from "react";
import { dataTemplateCate1 } from "@/data/data-template-category";
import TemplateItem from "@/components/elements/TemplateItem";
import Pagination from "@/components/elements/Pagination";
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
                    <Link className="item" href="/category">Categories</Link>
                    <Link className="item" href="#">Google Slides Templates</Link>
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
                                {dataTemplateCate1.map((item) => (
                                    <div className="col-lg-4 col-sm-6 box" key={item.id}>
                                    <TemplateItem item={item} />
                                </div>
                                ))}
                                <div className="col-12">
                                    <Pagination/>
                                </div>
                            </div>
                        </div>
                        <div className="box-text-notification">
                            <div className="box-p">
                                <h6>Best Google Slides Presentation Templates to Download in 2024</h6>
                                <p>You are a Google fan and actually prefer its tool to create your next presentation but you have something specific and a bit complicated on your mind? Worry not, we have you covered. Best G-Slides that you will defiantly like in one place!</p>
                            </div>
                            <div className="box-p">
                                <div className="h9">Best Google Slides Themes from Nulivo Market</div>
                                <p>Discover some of our best professional Google Slides templates that’ll work perfectly with your next presentation! With these templates, you won’t need to spend hours structuring or gathering presentation slides. You can just edit the ready slides that are made by expert designers, as well as customize charts and change color themes with a click! That simple, you will have your own excellent and unique G-Slide’s presentations.</p>
                                <p>Although PowerPoint is the worldwide most used presentation software for almost over 30 years now, Google Slides was introduced not a long time ago (started gaining reputation mid-2015) and has been steadily gaining fame and gratitude until today. Nowadays, both software is widely used and almost equally popular among users across the globe. However, and despite having a serious competitor, the new product is not losing ground and is being improved every day and many people prefer it better.</p>
                            </div>
                            <div className="box-p">
                                <div className="h9">Where can I get Best Google Slides templates?</div>
                                <p>There are a huge number of premium templates, but which one to choose? There is no doubt that a premade template will spare you long periods of time preparing and creating. That’s why we have secured you this high-quality collection of Google slides templates to start working and finishing your work as fast and as elegant as possible.</p>
                                <p>Every single slide in your showcase is an important part of your success. Why? Because if you are a businessman or just a marker for a major presentation, your clients or attendees will be staring at each slide all time and you’ll be using those to visualize your speech and hopes. That’s why you should pay attention when designing or choosing any template for your presentations.</p>
                                <p>To help you start with the right foot septs with your design, we handpicked the best Google slides templates you can find on the net for your business or personal presentation needs. Scheme your presentation right now with our wonderful premade Google Slides templates that will capture and keep the attention of everyone in the room!</p>
                            </div>
                            <div className="box-p">
                                <div className="h9">Google Slides Benefits</div>
                                <p>In addition to its attractive slide designs, these templates also come with tons of editable charts, infographics, icons, fonts, and illustrations that feature a neat, eye-catching design, with the ready-made template so you can use them to create more persuasive and wonderful presentations.</p>
                                <p>Convincing your audience of the benefits of your thoughts or project is not as easy a task as it seems. Your presentation is the key to impress potential customers, investors, staff, and supervisors about your project or idea. With bright colors combination in your slides and well structure content for comprehensibility, you can defiantly make a powerful presentation for any purpose at any meeting. we have you covered and guarantee your success.</p>
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
