'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import avt1 from "/public/images/avatar/avt-2.jpg";
import avt2 from "/public/images/avatar/avt-3.jpg";
import img1 from "/public/images/templates/item-17.jpg";
import img2 from "/public/images/templates/item-18.jpg";
import img3 from "/public/images/templates/item-19.jpg";
import img4 from "/public/images/templates/item-20.jpg";
import img5 from "/public/images/templates/item-21.jpg";
import img6 from "/public/images/templates/item-22.jpg";




import Link from "next/link";
import Image from "next/image";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 15,
	navigation: {
		clickable: true,
		nextEl: ".nav-prev-feature",
		prevEl: ".nav-next-feature",
	},
	pagination: {
		el: ".sw-pagination-feature",
		clickable: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		991: {
			slidesPerView: 2,
			spaceBetween: 15,
		},

		1440: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},
}

export default function Featured2() {

	

  return (
    <section className="flat-feature-v2 flat-spacing-1">
      	<div className="container">
	  	<div className="flat-title-v2 text-center">
            <h2 className="text-gradient-1">Featured creator</h2>
            <p className="sub-title text_black-1">Every week, we will select and honor one author with the highest sales volume and the highest quality.</p>
        </div>
		<Swiper {...swiperOptions} className="swiper tf-sw-feature-v2">
			<div className="swiper-wrapper">
				<SwiperSlide>
					<div className="creator-item">
						<div className="archive-top">
							<Link href="/user-profile" className="box-profile">
								<div className="avatar-check">
									<div className="avatar avt-70 round">
										<Image src={avt1} width="100%" height="100%" alt="avatar"/>
									</div>
									<div className="check"><span className="icon icon-check"></span></div>
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
						</div>
						<div className="archive-bottom">
							<div className="banner-img">
								<Link href="/user-profile" className="image">
									<Image src={img1} alt="img-creator"/>
								</Link>
								<Link href="/user-profile" className="image">
									<Image src={img2} alt="img-creator"/>
								</Link>
								<Link href="/user-profile" className="image">
									<Image src={img3} alt="img-creator"/>
								</Link>
							</div>
							<Link className="btn-more" href="#"><span className="icon icon-more"></span></Link>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="creator-item">
						<div className="archive-top">
							<Link href="/user-profile" className="box-profile">
								<div className="avatar-check">
									<div className="avatar avt-70 round">
										<Image src={avt2} width="100%" height="100%" alt="avatar"/>
									</div>
									<div className="check"><span className="icon icon-check"></span></div>
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
						</div>
						<div className="archive-bottom">
							<div className="banner-img">
								<Link href="/user-profile" className="image">
									<Image src={img4} alt="img-creator"/>
								</Link>
								<Link href="/user-profile" className="image">
									<Image src={img5} alt="img-creator"/>
								</Link>
								<Link href="/user-profile" className="image">
									<Image src={img6} alt="img-creator"/>
								</Link>
							</div>
							<Link className="btn-more" href="#"><span className="icon icon-more"></span></Link>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="creator-item">
						<div className="archive-top">
							<Link href="/user-profile" className="box-profile">
								<div className="avatar-check">
									<div className="avatar avt-70 round">
										<Image src={avt1} width="100%" height="100%" alt="avatar"/>
									</div>
									<div className="check"><span className="icon icon-check"></span></div>
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
						</div>
						<div className="archive-bottom">
							<div className="banner-img">
								<Link href="/user-profile" className="image">
									<Image src={img1} alt="img-creator"/>
								</Link>
								<Link href="/user-profile" className="image">
									<Image src={img2} alt="img-creator"/>
								</Link>
								<Link href="/user-profile" className="image">
									<Image src={img3} alt="img-creator"/>
								</Link>
							</div>
							<Link className="btn-more" href="#"><span className="icon icon-more"></span></Link>
						</div>
					</div>
				</SwiperSlide>
				
			</div>
			<div className="d-flex justify-content-center sw-pagination sw-pagination-feature" />
		</Swiper>
      </div>
    </section>
  );
}
