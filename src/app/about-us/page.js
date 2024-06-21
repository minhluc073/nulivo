'use client'
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo/logo@2x.png";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"


const swiperOptions = {
	modules: [Pagination],
	slidesPerView: 1,
	spaceBetween: 15,
	navigation: {
		clickable: true,
		nextEl: ".nav-prev-about",
		prevEl: ".nav-next-about",
	},
	pagination: {
		el: ".sw-pagination-about",
		clickable: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},

	},
}


export default function AboutUs() {
  return (
    <>
        <Layout>
            <PageTitle
            title="About Nulivo"
            subtitle="Browse The Best Free PowerPoint Presentations Templates and select the most suitable for your business"
            />
            <div className="flat-breadcrumb">
                <div className="container">
                    <div className="breadcrumb">
                        <Link className="item" href="/">Home</Link>
                        <Link className="item" href="/category-free">Free-Templates</Link>
                        <Link className="item" href="#">Free-Powerpoint-Templates</Link>
                    </div>
                </div>
            </div>
            <div className="flat-spacing-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-5">
                            <h2>Who are we?</h2>
                        </div>
                        <div className="col-lg-6 col-md-7">
                            <div className="box-about-text">
                                <p className="text-1 text_black-1">Nulivo Market is an online marketplace provider of the highest quality ready-to-use Presentation, Print and PSD downloads.</p>
                                <p className="text_black-1">Nulivo Market’s number one aim is to provide state-of-the-art creative service in creating a high-level quality service by professional designers around the world. A specialized marketplace contains highly developments that are accomplished by a team of skilled technicians and creative designers, such as PowerPoint, Google Slides, and Keynote Presentation Templates, and more that you won’t find anywhere else.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flat-banner-about">
                <div className="box-img-gallery-1 flex-grow-1">
                    <Link className="item-1" href="#">
                        <Image src="/images/banner/item-about1.jpg" width={315} height={250} className="img" alt="avt-banner"/>
                    </Link>
                    <Link className="item-2" href="#">
                        <Image src="/images/banner/item-about2.jpg" width={315} height={250} className="img" alt="avt-banner"/>
                    </Link>
                    <Link className="item-3" href="#">
                        <Image src="/images/banner/item-about3.jpg" width={630} height={500} className="img" alt="avt-banner"/>
                    </Link>
                </div>
                <div className="box-img-gallery-2 flex-grow-1">
                    <Link className="item-1" href="#">
                        <Image src="/images/banner/item-about4.jpg" width={220} height={261} className="img" alt="avt-banner"/>
                    </Link>
                    <Link className="item-2" href="#">
                        <Image src="/images/banner/item-about5.jpg" width={220} height={261} className="img" alt="avt-banner"/>
                    </Link>
                    <Link className="item-3" href="#">
                        <Image src="/images/banner/item-about6.jpg" width={440} height={239} className="img" alt="avt-banner"/>
                    </Link>
                    <Link className="item-4" href="#">
                        <Image src="/images/banner/item-about7.jpg" width={315} height={500} className="img" alt="avt-banner"/>
                    </Link>
                    <Link className="item-5" href="#">
                        <Image src="/images/banner/item-about8.jpg" width={220} height={250} className="img" alt="avt-banner"/>
                    </Link>
                    <Link className="item-6" href="#">
                        <Image src="/images/banner/item-about2.jpg" width={220} height={250} className="img" alt="avt-banner"/>
                    </Link>
                </div>
            </div>
            <div className="flat-spacing-1">
                <div className="container">
                    <div className="box-about-text-v2">
                        <div className="content">
                            <div className="logo d-flex justify-content-center">
                                <Link href="/">
                                <Image src={logo} alt="logo" width={114} height={35} />
                                </Link>
                            </div>
                            <p className="text-1 text_black-1">We aim to continually improve our products and services to provide the best user experience</p>
                            <p className="text_black-1">There are many paths to success, many routes businesses may take to reach their goals, and thousands of independent creators around the world are looking for the freedom to work from anywhere in the world. Our mission is to chart those unknown paths and helping millions of people around the world to buy and sell easy-to-use Professional PowerPoint templates</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flat-spacing-1 pt-0">
                <div className="container">
                    <Swiper {...swiperOptions} className="swiper tf-sw-about">
                        <div className="swiper-wrapper">
                            <SwiperSlide>
                                <Link href="#" className="our-item hover-img">
                                    <h2 className="text-center title">Our mission</h2>
                                    <div className="box-img">
                                        <Image src="/images/banner/item-about9.jpg" width={630} height={354} className="img" alt="banner"/>
                                    </div>
                                    <div className="box-content">
                                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_4276_10812)">
                                            <path d="M27.0898 18.8392C27.833 18.8392 28.4349 18.237 28.4349 17.4941C28.4349 16.7513 27.833 16.1489 27.0898 16.1489C21.1469 16.1489 16.3291 20.9667 16.3291 26.91C16.3291 32.853 21.1469 37.6708 27.0898 37.6708C33.0331 37.6708 37.8509 32.853 37.8509 26.91C37.8509 26.1669 37.2486 25.565 36.5058 25.565C35.763 25.565 35.1607 26.1669 35.1607 26.91C35.1607 31.3673 31.5475 34.9809 27.0898 34.9809C22.6325 34.9809 19.019 31.3673 19.019 26.91C19.019 22.4524 22.6325 18.8392 27.0898 18.8392Z" fill="#EFEFEF"/>
                                            <path d="M52.7553 18.9205C52.5216 18.2147 51.7604 17.8321 51.0541 18.0656C50.3645 18.2938 49.9805 19.028 50.1861 19.7246C54.2087 32.5346 47.0855 46.1799 34.2756 50.2026C21.4661 54.2252 7.82068 47.102 3.79811 34.2922C-0.224984 21.4823 6.89868 7.83685 19.7081 3.81417C24.4498 2.32525 29.5339 2.32525 34.2756 3.81417C34.9875 4.0288 35.7385 3.62591 35.9533 2.914C36.1646 2.21274 35.7769 1.47161 35.0802 1.24506C20.8564 -3.21763 5.70762 4.69547 1.24504 18.9197C-3.21765 33.1435 4.69575 48.2923 18.9197 52.7548C33.1439 57.2175 48.2922 49.3044 52.7548 35.0802C54.4052 29.8201 54.4053 24.1808 52.7552 18.9205H52.7553Z" fill="#EFEFEF"/>
                                            <path d="M29.6521 9.61009C29.659 8.84418 29.0707 8.20398 28.3069 8.14671C27.9052 8.11254 27.5031 8.07837 27.0907 8.07837C16.6901 8.07837 8.25879 16.5096 8.25879 26.9102C8.25879 37.3105 16.6901 45.7418 27.0907 45.7418C37.4909 45.7418 45.9222 37.3105 45.9222 26.9103C45.9222 26.4237 45.8926 25.9376 45.8329 25.4548C45.7253 24.7165 45.0397 24.2052 44.3015 24.3128C43.5632 24.4198 43.0519 25.1059 43.159 25.8442C43.1631 25.8721 43.1681 25.8996 43.1738 25.9277C43.2031 26.2536 43.2319 26.5765 43.2319 26.9095C43.2323 35.8245 36.0057 43.0511 27.0911 43.0519C18.1761 43.0523 10.9494 35.8252 10.9491 26.9107C10.9487 17.9961 18.1749 10.769 27.0899 10.7687H27.0902C27.424 10.7687 27.7473 10.7975 28.0725 10.8263L28.3245 10.8473C29.0275 10.8774 29.6215 10.3319 29.6512 9.62908C29.6516 9.62243 29.6516 9.61631 29.6521 9.61009Z" fill="#EFEFEF"/>
                                            <path d="M35.1609 12.1135V16.9371L26.1391 25.9588C25.6048 26.475 25.59 27.3266 26.1062 27.8609C26.6225 28.3952 27.4741 28.4101 28.0083 27.894C28.0195 27.8832 28.0306 27.8721 28.0413 27.8609L37.0631 18.8393H41.8865C42.2433 18.8393 42.5853 18.6975 42.8379 18.445L50.9083 10.3741C51.4336 9.84888 51.4336 8.99733 50.9083 8.47199C50.7835 8.34712 50.6352 8.24807 50.472 8.1805C50.3089 8.11292 50.134 8.07815 49.9574 8.07817H45.922V4.04272C45.922 3.29991 45.3197 2.69758 44.5764 2.698C44.2199 2.69808 43.8781 2.83974 43.626 3.09182L35.5551 11.1627C35.4301 11.2875 35.331 11.4357 35.2633 11.5988C35.1957 11.762 35.1609 11.9369 35.1609 12.1135ZM37.8512 12.6706L43.2317 7.29V9.42332C43.2317 10.1661 43.834 10.7685 44.5768 10.7685H46.7101L41.3296 16.149H37.8512V12.6706Z" fill="#EFEFEF"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_4276_10812">
                                            <rect width="54" height="54" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        <p className="text_black-1">Provide value to our customers, employees via products, and services of high standards which will continuously enhance the user experience. </p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href="#" className="our-item hover-img">
                                    <h2 className="text-center title">Our vision</h2>
                                    <div className="box-img">
                                        <Image src="/images/banner/item-about10.jpg" width={630} height={354} className="img" alt="banner"/>
                                    </div>
                                    <div className="box-content">
                                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_4276_10824)">
                                            <path d="M53.6857 26.1394C50.1051 21.7685 45.9304 18.38 41.2774 16.0638C36.7958 13.8333 32.0612 12.688 27.2026 12.6575C27.1351 12.6563 27.0676 12.6562 27 12.6562C26.9324 12.6562 26.8649 12.6563 26.7973 12.6575C21.9388 12.688 17.2042 13.8333 12.7225 16.0638C8.06964 18.3799 3.89498 21.7686 0.314314 26.1382C0.214064 26.2369 0.134602 26.3547 0.0806199 26.4846C0.0266382 26.6145 -0.000768825 26.7539 1.70242e-05 26.8945C-0.000782938 27.0352 0.0266173 27.1746 0.0805993 27.3046C0.134581 27.4345 0.214051 27.5523 0.314314 27.651C3.89498 32.0205 8.06964 35.409 12.7226 37.7253C17.2042 39.9558 21.9388 41.1011 26.7974 41.1315C26.8649 41.1328 26.9324 41.1328 27 41.1328C27.0676 41.1328 27.1351 41.1328 27.2027 41.1315C32.0612 41.1011 36.7958 39.9558 41.2775 37.7252C45.9453 35.4028 50.1314 31.999 53.7195 27.6086C53.8996 27.4127 53.9997 27.1564 54 26.8903C54.0002 26.7505 53.9725 26.6121 53.9185 26.4832C53.8646 26.3542 53.7854 26.2374 53.6857 26.1394ZM13.6624 35.8372C9.48588 33.7581 5.71009 30.7523 2.43107 26.8945C5.71009 23.0367 9.48598 20.0308 13.6624 17.9518C14.8758 17.3472 16.1272 16.8219 17.4086 16.3793C14.5547 18.9857 12.7617 22.7348 12.7617 26.8945C12.7617 31.0542 14.5547 34.8034 17.4086 37.4098C16.1272 36.9671 14.8759 36.4418 13.6624 35.8372ZM27 39.0234C20.3122 39.0234 14.8711 33.5823 14.8711 26.8945C14.8711 20.2068 20.3122 14.7656 27 14.7656C33.6878 14.7656 39.1289 20.2068 39.1289 26.8945C39.1289 33.5823 33.6878 39.0234 27 39.0234ZM40.3376 35.8372C39.1242 36.4418 37.8728 36.9671 36.5914 37.4098C39.4453 34.8033 41.2383 31.0542 41.2383 26.8945C41.2383 22.7348 39.4453 18.9856 36.5914 16.3793C37.8729 16.8219 39.1243 17.3472 40.3377 17.9518C44.514 20.0308 48.2898 23.0367 51.5689 26.8945C48.2898 30.7524 44.514 33.7582 40.3377 35.8372H40.3376Z" fill="#EFEFEF"/>
                                            <path d="M27.0003 32.6953C23.8016 32.6953 21.1995 30.0932 21.1995 26.8945C21.1995 23.6959 23.8016 21.0938 27.0003 21.0938C30.1989 21.0938 32.8011 23.6959 32.8011 26.8945C32.8011 30.0932 30.1989 32.6953 27.0003 32.6953ZM27.0003 23.2031C24.9647 23.2031 23.3089 24.859 23.3089 26.8945C23.3089 28.9301 24.9647 30.5859 27.0003 30.5859C29.0358 30.5859 30.6917 28.9301 30.6917 26.8945C30.6917 24.859 29.0358 23.2031 27.0003 23.2031ZM27.0003 49.5654C26.4178 49.5654 25.9456 49.0933 25.9456 48.5107V44.2919C25.9456 43.7097 26.4178 43.2372 27.0003 43.2372C27.5828 43.2372 28.055 43.7097 28.055 44.2919V48.5107C28.055 49.0933 27.5828 49.5654 27.0003 49.5654ZM34.8203 48.3298C34.6816 48.33 34.5444 48.3028 34.4163 48.2498C34.2882 48.1967 34.1719 48.1189 34.0741 48.0208L31.0909 45.0381C30.6793 44.626 30.6793 43.9582 31.0909 43.5463C31.5028 43.1346 32.1707 43.1343 32.5827 43.5463L35.5659 46.5294C35.9779 46.9414 35.9779 47.6092 35.5659 48.0208C35.4681 48.1189 35.3519 48.1967 35.2239 48.2497C35.096 48.3027 34.9588 48.3299 34.8203 48.3298ZM19.1803 48.3298C19.0418 48.3299 18.9046 48.3027 18.7766 48.2497C18.6487 48.1967 18.5324 48.1189 18.4346 48.0208C18.0231 47.6092 18.0231 46.9414 18.4346 46.5294L21.4178 43.5463C21.8302 43.1346 22.4977 43.1346 22.9097 43.5463C23.3212 43.9582 23.3212 44.626 22.9097 45.038L19.9265 48.021C19.8286 48.1191 19.7123 48.197 19.5842 48.25C19.4562 48.303 19.3189 48.3302 19.1803 48.33V48.3298ZM27.0003 10.5419C26.4178 10.5419 25.9456 10.0698 25.9456 9.48723V5.26848C25.9456 4.68629 26.4178 4.21379 27.0003 4.21379C27.5828 4.21379 28.055 4.68629 28.055 5.26848V9.48723C28.055 10.0698 27.5828 10.5419 27.0003 10.5419ZM22.164 10.5419C22.0254 10.5422 21.8882 10.5151 21.7601 10.4621C21.632 10.4092 21.5157 10.3314 21.4178 10.2333L18.4346 7.25013C18.0231 6.83817 18.0231 6.17034 18.4346 5.7588C18.8466 5.34674 19.5144 5.34674 19.9265 5.7588L22.9097 8.74146C23.3216 9.15353 23.3216 9.82146 22.9097 10.2333C22.8118 10.3313 22.6955 10.409 22.5676 10.4619C22.4396 10.5149 22.3025 10.5421 22.164 10.5419ZM31.8365 10.5419C31.698 10.5422 31.5609 10.515 31.4329 10.4621C31.3049 10.4091 31.1887 10.3314 31.0909 10.2333C30.6793 9.82136 30.6793 9.15353 31.0909 8.74157L34.0741 5.7588C34.4861 5.34674 35.154 5.34674 35.5659 5.7588C35.9779 6.17034 35.9775 6.83817 35.5659 7.25013L32.5827 10.2333C32.4848 10.3313 32.3685 10.409 32.2404 10.462C32.1124 10.515 31.9751 10.5421 31.8365 10.5419ZM27.0024 2.10938C26.4202 2.10938 25.9473 1.63719 25.9473 1.05469C25.9473 0.472184 26.4189 0 27.0015 0H27.0024C27.5849 0 28.0571 0.472184 28.0571 1.05469C28.0571 1.63719 27.5849 2.10938 27.0024 2.10938ZM27.0024 53.7891C26.4202 53.7891 25.9473 53.3169 25.9473 52.7344C25.9473 52.1519 26.4189 51.6797 27.0015 51.6797H27.0024C27.5849 51.6797 28.0571 52.1519 28.0571 52.7344C28.0571 53.3169 27.5849 53.7891 27.0024 53.7891Z" fill="#EFEFEF"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_4276_10824">
                                            <rect width="54" height="54" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>

                                        <p className="text_black-1">Convey a unique style and leveraging cutting edge technology in order to offer the optimum experience to those who trust our products and services. </p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </div>
                        <div className="d-flex justify-content-center sw-pagination style-2 sw-pagination-about" />
                    </Swiper>
                </div>
            </div>
        </Layout>
    </>
  );
}
