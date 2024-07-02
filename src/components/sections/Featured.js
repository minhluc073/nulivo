'use client'
import dataTemplate from "@/data/data-template";
import TemplateItem from "../elements/TemplateItem";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
			slidesPerView: 3,
			spaceBetween: 15,
		},

		1440: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
}

export default function Featured() {
  return (
    <section className="flat-feature flat-spacing-1 wow fadeInUpSmall" data-wow-delay=".2s" data-wow-duration="2000ms">
      <div className="container">
        <div className="flat-title d-flex align-items-center justify-content-between">
          <h4>Featured Items</h4>
          <div className="box-navigation">
            <div className="navigation-arrow swiper-nav-next nav-next-feature">
              <span className="icon icon-arr-left" />
            </div>
            <div className="navigation-arrow swiper-nav-prev nav-prev-feature">
              <span className="icon icon-arr-right" />
            </div>
          </div>
        </div>
		<Swiper {...swiperOptions} className="swiper tf-sw-feature">
			<div className="swiper-wrapper">
				{dataTemplate.map((item) => (
					<SwiperSlide key={item.id}>
						<TemplateItem item={item} />	
					</SwiperSlide>
				))}
			</div>
		</Swiper>
      </div>
    </section>
  );
}
