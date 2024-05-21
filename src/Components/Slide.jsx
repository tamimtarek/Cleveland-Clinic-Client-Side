import { Link } from "react-router-dom";
// import img1 from "../assets/Banner-1.jpg";
// import img2 from "../assets/Bannner-2.jpg";
// import img3 from "../assets/Banner-3.jpg";
// import img4 from "../assets/banner-4.jpg";
// import img5 from "../assets/Baner-5.jpg";
// import img6 from "../assets/banner-6.jpg";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${(image, text)})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            {text}
            <span className="text-blue-400">Saas</span> Project
          </h1>
          <br />
          <Link className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
            Post Job & Hire Expert
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
