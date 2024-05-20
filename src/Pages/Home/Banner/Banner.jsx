import img1 from "../../../assets/banner/image1.jpg"
import img2 from "../../../assets/banner/image2.jpg"
import img3 from "../../../assets/banner/image3.jpg"
import img4 from "../../../assets/banner/image4.jpg"

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={img1}
            className="w-full h-[550px]"
          />
          <div className="absolute flex justify-center gap-4 bottom-0 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full h-[550px]"
          />
          <div className="absolute flex justify-center gap-4 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            className="w-full h-[550px]"
          />
          <div className="absolute flex justify-center gap-4 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4}
            className="w-full h-[550px]"
          />
          <div className="absolute flex justify-center gap-4 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
