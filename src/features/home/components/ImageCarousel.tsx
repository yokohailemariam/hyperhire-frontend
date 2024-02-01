import { useEffect } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getMainBannerAsync } from "../homeAsync"

export default function MainBanner() {
  const dispatch = useAppDispatch()
  const { mainBanner } = useAppSelector(state => state.home)
  useEffect(() => {
    dispatch(getMainBannerAsync())
  }, [dispatch])
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      freeMode={true}
      centerInsufficientSlides
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      className="h-[323px] mySwiper "
    >
      {mainBanner.map(banner => {
        return (
          <SwiperSlide key={banner.mainBannerId}>
            <img
              src={banner.pcImageUrl}
              alt={banner.title}
              className="h-full object-cover"
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
