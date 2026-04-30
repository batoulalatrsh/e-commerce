import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductImagesSlider({ images }) {
  return (
    <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl md:grid-cols-1 [--swiper-navigation-color:#B9BABA] [--swiper-pagination-color:#B9BABA]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: "100%" }}
      >
        {images?.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="aspect-[4/5] lg:aspect-square w-full overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={img}
                alt={`Product image ${i + 1}`}
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
