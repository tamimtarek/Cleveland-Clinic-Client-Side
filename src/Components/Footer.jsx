import logo from "../assets/2.png";

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm mt-5">
      <hr />
      <div className="container px-4 sm:px-6 py-4 mx-auto">
        <div className="flex flex-col sm:flex-row items-center text-center">
          <div className="flex gap-2 items-center">
            <img className="w-auto h-16 sm:h-32" src={logo} alt="" />
            <div className="bg-white dark:bg-gray-800 flex justify-center items-center p-5">
              <div className="border border-gray-200 p-2 rounded-md shadow-lg shadow-orange-300">
                <div className="flex items-end gap-1">
                  <span className="text-4xl sm:text-6xl font-semibold dark:text-white">
                    D
                  </span>
                  {/* SVGs and other elements remain the same */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            {/* Links remain the same */}
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright 2021. All Rights Reserved.
          </p>

          <div className="flex -mx-2">{/* Social icons remain the same */}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
