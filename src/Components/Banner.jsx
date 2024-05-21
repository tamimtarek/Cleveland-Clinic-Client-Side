import { Swiper, SwiperSlide } from "swiper/react";
// import Slide from "../Components/Slide";

import img1 from "../assets/Banner-1.jpg";
import img2 from "../assets/Bannner-2.jpg";
import img3 from "../assets/Banner-3.jpg";
import img4 from "../assets/banner-4.jpg";
import img5 from "../assets/Baner-5.jpg";
import img6 from "../assets/banner-6.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules"; // import React from 'react';
import { useEffect } from "react";

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
    <div className="carousel w-full  h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute rounded-xl h-full pt-8 pl-12 flex item-center justify-center  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-4">
            <h2 className="text-6xl animate_animated animate_fedInRight">
              Hospital Services: Your Health, Our Priority
            </h2>
            <p>
              At [Hospital Name], we are dedicated to providing top-notch
              healthcare services that cater to the needs of our community.
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn btn-circle mr-20  text-white m bg-black  hover:bg-orange-700"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-black  text-white mr-20 hover:bg-orange-700"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute  rounded-xl h-full pt-8 pl-12 flex item-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-4">
            <h2 className="text-6xl ">Our Commitment to Excellence</h2>
            <p>
              Our commitment to excellence is unwavering. We strive to exceed
              expectations by delivering compassionate, personalized care that
              is tailored to the unique needs of each patient.
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn btn-circle bg-black text-white mr-20 hover:bg-orange-700"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-black  text-white mr-20 hover:bg-orange-700"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="absolute  h-full pt-8 pl-12 flex item-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-4">
            <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
            <p>
              Whether you're seeking a routine check-up, require specialized
              treatment, or need emergency care, our hospital is equipped to
              handle it all. We offer a comprehensive range of services,
              including but not limited to:
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
            </div>
          </div>
        </div>
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute rounded-xl  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn btn-circle mr-20  text-white bg-black hover:bg-orange-700"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle text-white mr-20 bg-black hover:bg-orange-700"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="absolute h-full pt-8 pl-12 flex item-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-4">
            <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
            </div>
          </div>
        </div>
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn btn-circle bg-black text-white mr-20 hover:bg-orange-700"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-black  text-white mr-20 hover:bg-orange-700"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="absolute h-full pt-8 pl-12 flex item-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-4">
            <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
            </div>
          </div>
        </div>
        <img src={img5} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide6"
            className="btn btn-circle bg-black text-white mr-20 hover:bg-orange-700"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle bg-black  text-white mr-20 hover:bg-orange-700"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <div className="absolute h-full pt-8 pl-12 flex item-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/2 pl-4">
            <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
            </div>
          </div>
        </div>
        <img src={img6} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide6"
            className="btn btn-circle bg-black text-white mr-20 hover:bg-orange-700"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-black  text-white mr-20 hover:bg-orange-700"
          >
            ❯
          </a>
        </div>
      </div>
      <h2>This is home</h2>
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
