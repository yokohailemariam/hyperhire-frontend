import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import type { Item2 } from "../types"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

interface CardProp {
  items: Item2
}

export const ProductCardList = ({ items }: CardProp) => {
  const options = { style: "decimal" }
  const numberFormat = new Intl.NumberFormat("en-US", options)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8  ">
      <div className="flex mt-[56px]">
        <div className="w-[240px] h-[326px]">
          <p className="text-[24px] leading-[32px] text-[#333333]">
            {items && items.title}
          </p>
          <p className="mt-[8px] text-[12px] text-grayTextColor font-[400px]">
            {items && items.subtitle}
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperCustomNavButtons />
          {items &&
            items.items.map(item => {
              return (
                <SwiperSlide>
                  <div
                    key={item.uuid}
                    className="flex items-center justify-cente hover:cursor-pointer gap-2"
                  >
                    <div className="text-start">
                      <div className="relative ">
                        <img
                          src={item.publication.media[0].uri}
                          alt={item.name}
                          className="object-cover rounded-[8px]"
                        />
                        <div className="absolute bottom-1 left-1 bg-greenBg px-2 rounded-sm">
                          <p className="text-sm text-white">
                            {item.publication.tagsOnImage[0]}
                          </p>
                        </div>
                      </div>
                      <p className="text-[11px] md:text-[15px] text-grayTextColor line-clamp-2 text-ellipsis font-normal leading-[21px] mt-[4px]">
                        {item.publication.title}
                      </p>
                      <div className="flex">
                        <p className="text-textRed">
                          {item.publication.priceInfo.discountRate}%
                        </p>
                        <div>
                          <p className="text-md">
                            {numberFormat.format(
                              item.publication.priceInfo.price,
                            )}
                          </p>
                        </div>
                      </div>
                      <p className="text-textRed">
                        {item.publication.tagsOnDesc[0]}
                      </p>
                      <div className="flex">
                        <img
                          src="https://www.testvalley.kr/star/star-darkgray.svg"
                          alt="star"
                        />
                        <p className="text-[12px]">{item.publication.rating}</p>
                      </div>
                      {item.publication.prefaceIconUrl && (
                        <div className="flex">
                          <div className="flex items-center gap-1 border px-2">
                            <img
                              src={item.publication.prefaceIconUrl}
                              alt="preface"
                              className="h-[14px] w-[14px]"
                            />
                            <p className="text-[12px]">
                              {item.publication.preface}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  )
}

export const SwiperCustomNavButtons = () => {
  const swiper = useSwiper()

  return (
    <div className="flex">
      <button onClick={() => swiper.slidePrev()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  )
}
