'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

interface Slide {
  image: string
  title?: string
  description?: string
}

interface SlideshowProps {
  slides: Slide[]
}

export default function Slideshow({ slides }: SlideshowProps) {
  return (
    <div className="w-full h-[400px] md:h-[450px] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title || `Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {(slide.title || slide.description) && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    {slide.title && (
                      <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        {slide.title}
                      </h2>
                    )}
                    {slide.description && (
                      <p className="text-lg md:text-2xl max-w-3xl">
                        {slide.description}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

