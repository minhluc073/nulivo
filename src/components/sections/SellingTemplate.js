
'use client'
import TemplateItem from "../elements/TemplateItem";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 15,
	navigation: {
		clickable: true,
		nextEl: ".nav-prev-selling",
		prevEl: ".nav-next-selling",
	},
	pagination: {
		el: ".sw-pagination-selling",
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
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
}

export default function SellingTemplate({title,data}) {
  return (
    <>
        <div className="h7 title">{title}</div>
        <div className="wrap-swiper">
            <Swiper {...swiperOptions} className="swiper tf-sw-feature">
                <div className="swiper-wrapper">
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <TemplateItem item={item} />	
                        </SwiperSlide>
                    ))}
                </div>
                
            </Swiper>
            <div className="box-navigation">
                <div className="navigation-circle-arrow swiper-nav-next nav-next-selling">
                    <span className="icon icon-arr-left" />
                </div>
                <div className="navigation-circle-arrow swiper-nav-prev nav-prev-selling">
                    <span className="icon icon-arr-right" />
                </div>
            </div>
        </div>
    </>
        
  );
}
