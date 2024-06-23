"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import TemplateItem from "@/components/elements/TemplateItem";
import SidebarSingle from "@/components/elements/SidebarSingle";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Select from "react-select";
import { dataRecent1 } from "@/data/data-template-recent";

const categorySelect = [
  {
    value: "v1",
    label: "PowerPoint",
  },
  {
    value: "v2",
    label: "Google slides",
  },
  {
    value: "v3",
    label: "Keynote",
  },
  {
    value: "v3",
    label: "Mockups",
  },
];

export default function SingleItem() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectCategory, setSelectCategory] = useState();

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      borderColor: "#EFEFEF",
      borderRadius: "999px",
      height: "54px",
      boxShadow: "none",
      ":hover": {
        borderColor: "#EFEFEF",
      },
    }),
    option: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      transition: "all 0.3s ease-out 0s",
      ":hover": {
        backgroundColor: "transparent",
        color: "#450d87",
      },
      ":active": {
        backgroundColor: "transparent",
      },
      padding: "6px",
      color: "#303538",
      cursor: "pointer",
    }),

    menu: (base) => ({
      ...base,
      padding: "0px",
      borderRadius: "14px",
      width: "100%",
      border: "1px solid #EFEFEF",
      backgroundColor: "#fff",
      boxShadow: "none",
    }),
  };

  // Swiper options for the main slider
  const mainSwiperOptions = {
    thumbs: {
      swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
    },
    modules: [FreeMode, Navigation, Thumbs, EffectFade],
    spaceBetween: 15,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 500,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-single",
      prevEl: ".nav-next-single",
    },
  };

  // Swiper options for the thumbnail slider
  const thumbnailSwiperOptions = {
    modules: [FreeMode, Navigation, Thumbs],
    spaceBetween: 8,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      575: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 5,
      },
      991: {
        slidesPerView: 6,
      },
    },
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
              <Link className="item" href="/single-item">
                Item
              </Link>
            </div>
          </div>
        </div>
        <div className="flat-spacing-1">
          <div className="container">
            <div className="row flat-single-wrapper">
              <div className="col-lg-8">
                <div className="single-gallery-wrapper">
                  <div className="swiper sw-single">
                    <Swiper {...mainSwiperOptions} className="swiper-wrapper">
                      <SwiperSlide>
                        <div className="image-sw-single">
                          <Image
                            src="/images/banner/banner-single-1.jpg"
                            alt="images"
                            width={850}
                            height={529}
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="image-sw-single">
                          <Image
                            src="/images/banner/banner-single-3.jpg"
                            alt="images"
                            width={850}
                            height={529}
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="image-sw-single">
                          <Image
                            src="/images/banner/banner-single-4.jpg"
                            alt="images"
                            width={850}
                            height={529}
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="image-sw-single">
                          <Image
                            src="/images/banner/banner-single-5.jpg"
                            alt="images"
                            width={850}
                            height={529}
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="image-sw-single">
                          <Image
                            src="/images/banner/banner-single-6.jpg"
                            alt="images"
                            width={850}
                            height={529}
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="image-sw-single">
                          <Image
                            src="/images/banner/banner-single-2.jpg"
                            alt="images"
                            width={850}
                            height={529}
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="swiper thumbs-sw-pagination">
                    <Swiper
                      {...thumbnailSwiperOptions}
                      onSwiper={setThumbsSwiper}
                      className="swiper-wrapper"
                    >
                      <SwiperSlide>
                        <div className="img-thumb-pagination">
                          <Image
                            src="/images/banner/banner-single-2.jpg"
                            alt="images"
                            width={135}
                            height={84}
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="img-thumb-pagination">
                          <Image
                            src="/images/banner/banner-single-3.jpg"
                            alt="images"
                            width={135}
                            height={84}
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="img-thumb-pagination">
                          <Image
                            src="/images/banner/banner-single-4.jpg"
                            alt="images"
                            width={135}
                            height={84}
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="img-thumb-pagination">
                          <Image
                            src="/images/banner/banner-single-5.jpg"
                            alt="images"
                            width={135}
                            height={84}
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="img-thumb-pagination">
                          <Image
                            src="/images/banner/banner-single-6.jpg"
                            alt="images"
                            width={135}
                            height={84}
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="img-thumb-pagination">
                          <Image
                            src="/images/banner/banner-single-7.jpg"
                            alt="images"
                            width={135}
                            height={84}
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="card-box-2 single-wrap-content">
                  <Tab.Container defaultActiveKey="details">
                    <Nav className="nav-tab-template st2">
                      <Nav.Item>
                        <Nav.Link eventKey="details">Item details</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="comments">Comments</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="report">Report</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="details">
                        <div className="wrap-single-detail">
                          <div className="box">
                            <div className="h9 text_black-5">
                              Product Management Tools PowerPoint Template
                            </div>
                            <p className="text_black-1">
                              Product Management Tools PowerPoint Template is a
                              modern template that you can download and use for
                              any type of business presentation, The template
                              contains 40 unique slides designed by
                              professionals that you can easily edit and fill
                              out with your personal content, All objects are
                              vectors objects, and they are fully editable, all
                              icons used are smart object and vector which means
                              you can easily change their size and colors to any
                              size you want without losing resolution.
                            </p>
                          </div>
                          <div className="box">
                            <div className="h9 text_black-5">Key Features</div>
                            <ul>
                              <li>40 Clean & Creative slides</li>
                              <li>2 Aspect Ratio ( 4:3 & 16:9 )</li>
                              <li>90 Color Themes included</li>
                              <li>
                                Just One Click to change the colors and auto
                                recolored
                              </li>
                              <li>Free Fonts and Icons</li>
                              <li>Fully and Easily editable content</li>
                              <li>3000+ Icons! easily change size & color</li>
                            </ul>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="comments">
                        <div className="wrap-single-comment">
                          <div className="wrap-comment">
                            <div className="box">
                              <div className="comment-item">
                                <div className="avatar avt-50 round">
                                  <Image
                                    src="/images/avatar/avt-9.jpg"
                                    alt="avatar"
                                    width={50}
                                    height={50}
                                  />
                                </div>
                                <div className="content-right">
                                  <div className="info">
                                    <div className="box-author">
                                      <div className="h9 name">
                                        Annette Black
                                      </div>
                                      <span className="tag author">Author</span>
                                    </div>
                                    <span className="date-time">
                                      Nov 9, 2023 at 5:20 p.m
                                    </span>
                                  </div>
                                  <p className="cmt-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus quis ultrices
                                    metus, at egestas orci. Aenean vitae feugiat
                                    metus. Fusce dictum lectus sit amet tempor
                                    cursus. Etiam vel bibendum tortor
                                  </p>
                                  <div className="action">
                                    <div className="action-item">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12.375 6.75H10.6875M4.66949 14.0625C4.66124 14.025 4.64849 13.9875 4.63049 13.9515C4.18724 13.0515 3.93749 12.039 3.93749 10.9687C3.93587 9.89238 4.19282 8.83136 4.68674 7.875M4.66949 14.0625C4.72649 14.3362 4.53224 14.625 4.23824 14.625H3.55724C2.89049 14.625 2.27249 14.2365 2.07824 13.599C1.82399 12.7665 1.68749 11.8837 1.68749 10.9687C1.68749 9.804 1.90874 8.69175 2.31074 7.67025C2.54024 7.08975 3.12524 6.75 3.74999 6.75H4.53974C4.89374 6.75 5.09849 7.167 4.91474 7.47C4.83434 7.60234 4.7578 7.73742 4.68674 7.875M4.66949 14.0625H5.63999C6.0027 14.0623 6.36307 14.1205 6.70724 14.235L9.04274 15.015C9.38691 15.1295 9.74728 15.1877 10.11 15.1875H13.122C13.5855 15.1875 14.0347 15.0022 14.3257 14.6407C15.6143 13.0434 16.3156 11.0523 16.3125 9C16.3125 8.6745 16.2952 8.35275 16.2615 8.03625C16.1797 7.2705 15.4905 6.75 14.721 6.75H12.3765C11.913 6.75 11.6332 6.207 11.8327 5.7885C12.191 5.03444 12.3763 4.20985 12.375 3.375C12.375 2.92745 12.1972 2.49823 11.8807 2.18176C11.5643 1.86529 11.135 1.6875 10.6875 1.6875C10.5383 1.6875 10.3952 1.74676 10.2897 1.85225C10.1843 1.95774 10.125 2.10082 10.125 2.25V2.72475C10.125 3.1545 10.0425 3.57975 9.88349 3.97875C9.65549 4.54875 9.18599 4.97625 8.64374 5.265C7.81128 5.7092 7.0807 6.32228 6.49874 7.065C6.12524 7.5405 5.57924 7.875 4.97474 7.875H4.68674"
                                          stroke="#7C818B"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <span className="text">Useful</span>
                                    </div>
                                    <div className="action-item">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M5.62501 11.25H7.31251M13.3305 3.9375C13.3388 3.975 13.3515 4.0125 13.3695 4.0485C13.8128 4.9485 14.0625 5.961 14.0625 7.03125C14.0641 8.10762 13.8072 9.16864 13.3133 10.125M13.3305 3.9375C13.2735 3.66375 13.4678 3.375 13.7618 3.375H14.4428C15.1095 3.375 15.7275 3.7635 15.9218 4.401C16.176 5.2335 16.3125 6.11625 16.3125 7.03125C16.3125 8.196 16.0913 9.30825 15.6893 10.3298C15.4598 10.9103 14.8748 11.25 14.25 11.25H13.4603C13.1063 11.25 12.9015 10.833 13.0853 10.53C13.1657 10.3977 13.2422 10.2626 13.3133 10.125M13.3305 3.9375H12.36C11.9973 3.93772 11.6369 3.87948 11.2928 3.765L8.95726 2.985C8.61309 2.87053 8.25272 2.81228 7.89001 2.8125H4.87801C4.41451 2.8125 3.96526 2.99775 3.67426 3.35925C2.38572 4.95658 1.68441 6.94774 1.68751 9C1.68751 9.3255 1.70476 9.64725 1.73851 9.96375C1.82026 10.7295 2.50951 11.25 3.27901 11.25H5.62351C6.08701 11.25 6.36676 11.793 6.16726 12.2115C5.80897 12.9656 5.6237 13.7902 5.62501 14.625C5.62501 15.0726 5.8028 15.5018 6.11927 15.8182C6.43574 16.1347 6.86496 16.3125 7.31251 16.3125C7.46169 16.3125 7.60477 16.2532 7.71026 16.1477C7.81575 16.0423 7.87501 15.8992 7.87501 15.75V15.2753C7.87501 14.8455 7.95751 14.4203 8.11651 14.0213C8.34451 13.4513 8.81401 13.0238 9.35626 12.735C10.1887 12.2908 10.9193 11.6777 11.5013 10.935C11.8748 10.4595 12.4208 10.125 13.0253 10.125H13.3133"
                                          stroke="#7C818B"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>

                                      <span className="text">Not helpful</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="comment-item reply">
                                <div className="avatar avt-50 round">
                                  <Image
                                    src="/images/avatar/avt-10.jpg"
                                    alt="avatar"
                                    width={50}
                                    height={50}
                                  />
                                </div>
                                <div className="content-right">
                                  <div className="info">
                                    <div className="box-author">
                                      <div className="h9 name">
                                        Darrell Steward
                                      </div>
                                      <span className="tag purchased">
                                        Purchased
                                      </span>
                                    </div>
                                    <span className="date-time">
                                      Nov 9, 2023 at 5:20 p.m
                                    </span>
                                  </div>
                                  <p className="cmt-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus quis ultrices
                                    metus, at egestas orci. Aenean vitae feugiat
                                    metus. Fusce dictum lectus sit amet tempor
                                    cursus. Etiam vel bibendum tortor
                                  </p>
                                  <div className="action">
                                    <div className="action-item">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12.375 6.75H10.6875M4.66949 14.0625C4.66124 14.025 4.64849 13.9875 4.63049 13.9515C4.18724 13.0515 3.93749 12.039 3.93749 10.9687C3.93587 9.89238 4.19282 8.83136 4.68674 7.875M4.66949 14.0625C4.72649 14.3362 4.53224 14.625 4.23824 14.625H3.55724C2.89049 14.625 2.27249 14.2365 2.07824 13.599C1.82399 12.7665 1.68749 11.8837 1.68749 10.9687C1.68749 9.804 1.90874 8.69175 2.31074 7.67025C2.54024 7.08975 3.12524 6.75 3.74999 6.75H4.53974C4.89374 6.75 5.09849 7.167 4.91474 7.47C4.83434 7.60234 4.7578 7.73742 4.68674 7.875M4.66949 14.0625H5.63999C6.0027 14.0623 6.36307 14.1205 6.70724 14.235L9.04274 15.015C9.38691 15.1295 9.74728 15.1877 10.11 15.1875H13.122C13.5855 15.1875 14.0347 15.0022 14.3257 14.6407C15.6143 13.0434 16.3156 11.0523 16.3125 9C16.3125 8.6745 16.2952 8.35275 16.2615 8.03625C16.1797 7.2705 15.4905 6.75 14.721 6.75H12.3765C11.913 6.75 11.6332 6.207 11.8327 5.7885C12.191 5.03444 12.3763 4.20985 12.375 3.375C12.375 2.92745 12.1972 2.49823 11.8807 2.18176C11.5643 1.86529 11.135 1.6875 10.6875 1.6875C10.5383 1.6875 10.3952 1.74676 10.2897 1.85225C10.1843 1.95774 10.125 2.10082 10.125 2.25V2.72475C10.125 3.1545 10.0425 3.57975 9.88349 3.97875C9.65549 4.54875 9.18599 4.97625 8.64374 5.265C7.81128 5.7092 7.0807 6.32228 6.49874 7.065C6.12524 7.5405 5.57924 7.875 4.97474 7.875H4.68674"
                                          stroke="#7C818B"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <span className="text">Useful</span>
                                    </div>
                                    <div className="action-item">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M5.62501 11.25H7.31251M13.3305 3.9375C13.3388 3.975 13.3515 4.0125 13.3695 4.0485C13.8128 4.9485 14.0625 5.961 14.0625 7.03125C14.0641 8.10762 13.8072 9.16864 13.3133 10.125M13.3305 3.9375C13.2735 3.66375 13.4678 3.375 13.7618 3.375H14.4428C15.1095 3.375 15.7275 3.7635 15.9218 4.401C16.176 5.2335 16.3125 6.11625 16.3125 7.03125C16.3125 8.196 16.0913 9.30825 15.6893 10.3298C15.4598 10.9103 14.8748 11.25 14.25 11.25H13.4603C13.1063 11.25 12.9015 10.833 13.0853 10.53C13.1657 10.3977 13.2422 10.2626 13.3133 10.125M13.3305 3.9375H12.36C11.9973 3.93772 11.6369 3.87948 11.2928 3.765L8.95726 2.985C8.61309 2.87053 8.25272 2.81228 7.89001 2.8125H4.87801C4.41451 2.8125 3.96526 2.99775 3.67426 3.35925C2.38572 4.95658 1.68441 6.94774 1.68751 9C1.68751 9.3255 1.70476 9.64725 1.73851 9.96375C1.82026 10.7295 2.50951 11.25 3.27901 11.25H5.62351C6.08701 11.25 6.36676 11.793 6.16726 12.2115C5.80897 12.9656 5.6237 13.7902 5.62501 14.625C5.62501 15.0726 5.8028 15.5018 6.11927 15.8182C6.43574 16.1347 6.86496 16.3125 7.31251 16.3125C7.46169 16.3125 7.60477 16.2532 7.71026 16.1477C7.81575 16.0423 7.87501 15.8992 7.87501 15.75V15.2753C7.87501 14.8455 7.95751 14.4203 8.11651 14.0213C8.34451 13.4513 8.81401 13.0238 9.35626 12.735C10.1887 12.2908 10.9193 11.6777 11.5013 10.935C11.8748 10.4595 12.4208 10.125 13.0253 10.125H13.3133"
                                          stroke="#7C818B"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>

                                      <span className="text">Not helpful</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="box">
                              <div className="comment-item">
                                <div className="avatar avt-50 round">
                                  <Image
                                    src="/images/avatar/avt-11.jpg"
                                    alt="avatar"
                                    width={50}
                                    height={50}
                                  />
                                </div>
                                <div className="content-right">
                                  <div className="info">
                                    <div className="box-author">
                                      <div className="h9 name">Floyd Miles</div>
                                    </div>
                                    <span className="date-time">
                                      Nov 9, 2023 at 5:20 p.m
                                    </span>
                                  </div>
                                  <p className="cmt-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus quis ultrices
                                    metus, at egestas orci. Aenean vitae feugiat
                                    metus. Fusce dictum lectus sit amet tempor
                                    cursus. Etiam vel bibendum tortor
                                  </p>
                                  <div className="action">
                                    <div className="action-item">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12.375 6.75H10.6875M4.66949 14.0625C4.66124 14.025 4.64849 13.9875 4.63049 13.9515C4.18724 13.0515 3.93749 12.039 3.93749 10.9687C3.93587 9.89238 4.19282 8.83136 4.68674 7.875M4.66949 14.0625C4.72649 14.3362 4.53224 14.625 4.23824 14.625H3.55724C2.89049 14.625 2.27249 14.2365 2.07824 13.599C1.82399 12.7665 1.68749 11.8837 1.68749 10.9687C1.68749 9.804 1.90874 8.69175 2.31074 7.67025C2.54024 7.08975 3.12524 6.75 3.74999 6.75H4.53974C4.89374 6.75 5.09849 7.167 4.91474 7.47C4.83434 7.60234 4.7578 7.73742 4.68674 7.875M4.66949 14.0625H5.63999C6.0027 14.0623 6.36307 14.1205 6.70724 14.235L9.04274 15.015C9.38691 15.1295 9.74728 15.1877 10.11 15.1875H13.122C13.5855 15.1875 14.0347 15.0022 14.3257 14.6407C15.6143 13.0434 16.3156 11.0523 16.3125 9C16.3125 8.6745 16.2952 8.35275 16.2615 8.03625C16.1797 7.2705 15.4905 6.75 14.721 6.75H12.3765C11.913 6.75 11.6332 6.207 11.8327 5.7885C12.191 5.03444 12.3763 4.20985 12.375 3.375C12.375 2.92745 12.1972 2.49823 11.8807 2.18176C11.5643 1.86529 11.135 1.6875 10.6875 1.6875C10.5383 1.6875 10.3952 1.74676 10.2897 1.85225C10.1843 1.95774 10.125 2.10082 10.125 2.25V2.72475C10.125 3.1545 10.0425 3.57975 9.88349 3.97875C9.65549 4.54875 9.18599 4.97625 8.64374 5.265C7.81128 5.7092 7.0807 6.32228 6.49874 7.065C6.12524 7.5405 5.57924 7.875 4.97474 7.875H4.68674"
                                          stroke="#7C818B"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <span className="text">Useful</span>
                                    </div>
                                    <div className="action-item">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M5.62501 11.25H7.31251M13.3305 3.9375C13.3388 3.975 13.3515 4.0125 13.3695 4.0485C13.8128 4.9485 14.0625 5.961 14.0625 7.03125C14.0641 8.10762 13.8072 9.16864 13.3133 10.125M13.3305 3.9375C13.2735 3.66375 13.4678 3.375 13.7618 3.375H14.4428C15.1095 3.375 15.7275 3.7635 15.9218 4.401C16.176 5.2335 16.3125 6.11625 16.3125 7.03125C16.3125 8.196 16.0913 9.30825 15.6893 10.3298C15.4598 10.9103 14.8748 11.25 14.25 11.25H13.4603C13.1063 11.25 12.9015 10.833 13.0853 10.53C13.1657 10.3977 13.2422 10.2626 13.3133 10.125M13.3305 3.9375H12.36C11.9973 3.93772 11.6369 3.87948 11.2928 3.765L8.95726 2.985C8.61309 2.87053 8.25272 2.81228 7.89001 2.8125H4.87801C4.41451 2.8125 3.96526 2.99775 3.67426 3.35925C2.38572 4.95658 1.68441 6.94774 1.68751 9C1.68751 9.3255 1.70476 9.64725 1.73851 9.96375C1.82026 10.7295 2.50951 11.25 3.27901 11.25H5.62351C6.08701 11.25 6.36676 11.793 6.16726 12.2115C5.80897 12.9656 5.6237 13.7902 5.62501 14.625C5.62501 15.0726 5.8028 15.5018 6.11927 15.8182C6.43574 16.1347 6.86496 16.3125 7.31251 16.3125C7.46169 16.3125 7.60477 16.2532 7.71026 16.1477C7.81575 16.0423 7.87501 15.8992 7.87501 15.75V15.2753C7.87501 14.8455 7.95751 14.4203 8.11651 14.0213C8.34451 13.4513 8.81401 13.0238 9.35626 12.735C10.1887 12.2908 10.9193 11.6777 11.5013 10.935C11.8748 10.4595 12.4208 10.125 13.0253 10.125H13.3133"
                                          stroke="#7C818B"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>

                                      <span className="text">Not helpful</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="box">
                              <div className="comment-item">
                                <div className="avatar avt-50 round">
                                  <Image
                                    src="/images/avatar/avt-12.jpg"
                                    alt="avatar"
                                    width={50}
                                    height={50}
                                  />
                                </div>
                                <div className="content-right">
                                  <div className="info">
                                    <div className="box-author">
                                      <div className="h9 name">
                                        Cameron Williamson
                                      </div>
                                    </div>
                                    <span className="date-time">
                                      Nov 9, 2023 at 5:20 p.m
                                    </span>
                                  </div>
                                  <p className="cmt-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus quis ultrices
                                    metus, at egestas orci. Aenean vitae feugiat
                                    metus. Fusce dictum lectus sit amet tempor
                                    cursus. Etiam vel bibendum tortor
                                  </p>
                                  <div className="action">
                                    <div className="action-item">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12.375 6.75H10.6875M4.66949 14.0625C4.66124 14.025 4.64849 13.9875 4.63049 13.9515C4.18724 13.0515 3.93749 12.039 3.93749 10.9687C3.93587 9.89238 4.19282 8.83136 4.68674 7.875M4.66949 14.0625C4.72649 14.3362 4.53224 14.625 4.23824 14.625H3.55724C2.89049 14.625 2.27249 14.2365 2.07824 13.599C1.82399 12.7665 1.68749 11.8837 1.68749 10.9687C1.68749 9.804 1.90874 8.69175 2.31074 7.67025C2.54024 7.08975 3.12524 6.75 3.74999 6.75H4.53974C4.89374 6.75 5.09849 7.167 4.91474 7.47C4.83434 7.60234 4.7578 7.73742 4.68674 7.875M4.66949 14.0625H5.63999C6.0027 14.0623 6.36307 14.1205 6.70724 14.235L9.04274 15.015C9.38691 15.1295 9.74728 15.1877 10.11 15.1875H13.122C13.5855 15.1875 14.0347 15.0022 14.3257 14.6407C15.6143 13.0434 16.3156 11.0523 16.3125 9C16.3125 8.6745 16.2952 8.35275 16.2615 8.03625C16.1797 7.2705 15.4905 6.75 14.721 6.75H12.3765C11.913 6.75 11.6332 6.207 11.8327 5.7885C12.191 5.03444 12.3763 4.20985 12.375 3.375C12.375 2.92745 12.1972 2.49823 11.8807 2.18176C11.5643 1.86529 11.135 1.6875 10.6875 1.6875C10.5383 1.6875 10.3952 1.74676 10.2897 1.85225C10.1843 1.95774 10.125 2.10082 10.125 2.25V2.72475C10.125 3.1545 10.0425 3.57975 9.88349 3.97875C9.65549 4.54875 9.18599 4.97625 8.64374 5.265C7.81128 5.7092 7.0807 6.32228 6.49874 7.065C6.12524 7.5405 5.57924 7.875 4.97474 7.875H4.68674"
                                          stroke="#7C818B"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <span className="text">Useful</span>
                                    </div>
                                    <div className="action-item">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M5.62501 11.25H7.31251M13.3305 3.9375C13.3388 3.975 13.3515 4.0125 13.3695 4.0485C13.8128 4.9485 14.0625 5.961 14.0625 7.03125C14.0641 8.10762 13.8072 9.16864 13.3133 10.125M13.3305 3.9375C13.2735 3.66375 13.4678 3.375 13.7618 3.375H14.4428C15.1095 3.375 15.7275 3.7635 15.9218 4.401C16.176 5.2335 16.3125 6.11625 16.3125 7.03125C16.3125 8.196 16.0913 9.30825 15.6893 10.3298C15.4598 10.9103 14.8748 11.25 14.25 11.25H13.4603C13.1063 11.25 12.9015 10.833 13.0853 10.53C13.1657 10.3977 13.2422 10.2626 13.3133 10.125M13.3305 3.9375H12.36C11.9973 3.93772 11.6369 3.87948 11.2928 3.765L8.95726 2.985C8.61309 2.87053 8.25272 2.81228 7.89001 2.8125H4.87801C4.41451 2.8125 3.96526 2.99775 3.67426 3.35925C2.38572 4.95658 1.68441 6.94774 1.68751 9C1.68751 9.3255 1.70476 9.64725 1.73851 9.96375C1.82026 10.7295 2.50951 11.25 3.27901 11.25H5.62351C6.08701 11.25 6.36676 11.793 6.16726 12.2115C5.80897 12.9656 5.6237 13.7902 5.62501 14.625C5.62501 15.0726 5.8028 15.5018 6.11927 15.8182C6.43574 16.1347 6.86496 16.3125 7.31251 16.3125C7.46169 16.3125 7.60477 16.2532 7.71026 16.1477C7.81575 16.0423 7.87501 15.8992 7.87501 15.75V15.2753C7.87501 14.8455 7.95751 14.4203 8.11651 14.0213C8.34451 13.4513 8.81401 13.0238 9.35626 12.735C10.1887 12.2908 10.9193 11.6777 11.5013 10.935C11.8748 10.4595 12.4208 10.125 13.0253 10.125H13.3133"
                                          stroke="#7C818B"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>

                                      <span className="text">Not helpful</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <form className="submit-comment-form">
                            <textarea placeholder="Your Comment"></textarea>
                            <button className="tf-btn w-100">
                              Post comment
                            </button>
                          </form>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="report">
                        <form className="wrap-single-report">
                          <div className="h9 title">Report This Item</div>
                          <div className="box">
                            <div className="title-font fw-semibold">
                              Report Category
                            </div>
                            <Select
                              className="react-select"
                              defaultValue={categorySelect[0]}
                              value={selectCategory}
                              // onChange={handleSelectCountry}
                              options={categorySelect}
                              isSearchable={false}
                              styles={colorStyles}
                              formatOptionLabel={(categorySelect) => (
                                <div className="react-select-option">
                                  <p>{categorySelect.label}</p>
                                </div>
                              )}
                            />
                          </div>
                          <div className="box">
                            <div className="title-font fw-semibold">
                              Report Category
                            </div>
                            <textarea placeholder="Your Comment"></textarea>
                          </div>
                          <button className="tf-btn w-100">Post comment</button>
                        </form>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
                <div className="single-wrap-creator">
                  <h6>Meet the Shop</h6>
                  <div className="creator-item">
                    <div className="archive-top">
                      <Link href="/user-profile" className="box-profile">
                        <div className="avatar-check">
                          <div className="avatar avt-70 round">
                            <Image
                              src="/images/avatar/avt-2.jpg"
                              width={70}
                              height={70}
                              alt="avatar"
                            />
                          </div>
                          <div className="check">
                            <span className="icon icon-check"></span>
                          </div>
                        </div>
                        <div className="info">
                          <div className="h8 name fw-bold">Themesflat</div>
                          <span className="sub-name">@Themesflat</span>
                        </div>
                      </Link>
                      <div className="box-right">
                        <div className="count-item">
                          <div className="h8 name fw-bold count">172</div>
                          <span>Total Items</span>
                        </div>
                        <div className="count-item sale">
                          <div className="h8 name fw-bold count">13.7K</div>
                          <span>Total Items</span>
                        </div>
                        <div className="count-item rate">
                          <div className="h8 name fw-bold count">4.8/5</div>
                          <span>Avg Rating</span>
                        </div>
                      </div>
                      <Link href="/user-profile" className="tf-btn btn-sm">
                        Follow
                      </Link>
                    </div>
                    <div className="archive-bottom">
                      <div className="banner-img">
                        <Link href="/user-profile" className="image">
                          <Image
                            src="/images/banner/creator-1.jpg"
                            width={154}
                            height={95}
                            alt="img-creator"
                          />
                        </Link>
                        <Link href="/user-profile" className="image">
                          <Image
                            src="/images/banner/creator-2.jpg"
                            width={154}
                            height={95}
                            alt="img-creator"
                          />
                        </Link>
                        <Link href="/user-profile" className="image">
                          <Image
                            src="/images/banner/creator-3.jpg"
                            width={154}
                            height={95}
                            alt="img-creator"
                          />
                        </Link>
                        <Link href="/user-profile" className="image">
                          <Image
                            src="/images/banner/creator-4.jpg"
                            width={154}
                            height={95}
                            alt="img-creator"
                          />
                        </Link>
                      </div>
                      <Link className="btn-more" href="#">
                        <span className="icon icon-more"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <SidebarSingle />
              </div>
            </div>
          </div>
        </div>
        <div className="flat-template flat-spacing-2 pt-0">
          <div className="container">
            <h6 className="title-v2">You May Also Like</h6>
            <div className="row">
              {dataRecent1.map((item) => (
                <div className="col-xl-3 col-lg-4 col-sm-6 box" key={item.id}>
                  <TemplateItem item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
