
// import Slide from "../Components/Slide";

import img1 from "../assets/Banner-1.jpg";
import img2 from "../assets/Bannner-2.jpg";
import img3 from "../assets/Banner-3.jpg";
import img4 from "../assets/banner-4.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules"; // import React from 'react';


const Banner = () => {
  // useEffect(() => {
  //   const skideList = ["#slide1", "#slide2", "#slide3", "#slide4"];

  //   let activeSlide = 0;

  //   const interval = setInterval(() => {
  //     if (activeSlide === skideList.length) activeSlide = 0;
  //     window.location.href = skideList[activeSlide++];
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div>
    <Swiper
        className="lg:h-[550px] rounded-lg"
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={80}
        slidesPerView={1}
        navigation={true}
        loop={true}
        autoplay={
            {
                delay: 2000,

            }
        }
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
    >
        
        <SwiperSlide>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img1})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">  Cleveland Clinic</h1>
                        <p className="mb-5"><span>celebrates creativity, ignites inspiration, and explores the beauty of self-expression through diverse mediums, captivating imagery, and artistic vision</span></p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img2})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Cleveland Clinic</h1>
                        <p className="mb-5"><span>celebrates creativity, ignites inspiration, and explores the beauty of self-expression through diverse mediums, captivating imagery, and artistic vision</span></p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img3})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Cleveland Clinic</h1>
                        <p className="mb-5"><span>celebrates creativity, ignites inspiration, and explores the beauty of self-expression through diverse mediums, captivating imagery, and artistic vision</span></p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img4})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Cleveland Clinic</h1>
                        <p className="mb-5"><span>celebrates creativity, ignites inspiration, and explores the beauty of self-expression through diverse mediums, captivating imagery, and artistic vision</span></p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        ...
    </Swiper>

</div>
    // <div>
    //   <Swiper
    //     spaceBetween={30}
    //     centeredSlides={true}
    //     loop={true}
    //     autoplay={{
    //       delay: 5000,
    //       disableOnInteraction: false,
    //     }}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     navigation={true}
    //     modules={[Autoplay, Pagination, Navigation]}
    //     className="mySwiper"
    //   >
    //     <div className="">
    //       <SwiperSlide>
    //         <img src={img1} alt="" />
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         {/* <Slide image={img2}>
    //         <img src={img2} alt="" />
    //       </Slide> */}
    //         <img className="" src={img2} alt="" />
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         {/* <Slide image={img3}></Slide> */}
    //         <img src={img3} alt="" />
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         {/* <Slide image={img4}></Slide> */}
    //         <img src={img4} alt="" />
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         {/* <Slide image={img5}></Slide> */}
    //         <img src={img5} alt="" />
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <img src={img6} alt="" />
    //       </SwiperSlide>
    //     </div>
    //   </Swiper>
    // </div>
  );
};

export default Banner;
