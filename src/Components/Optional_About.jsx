// import React from 'react';

const Optional_About = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl font-bold">
                Plant<span className="text-green-700">.</span>
              </div>
              <div>
                <img
                  src="https://image.flaticon.com/icons/svg/497/497348.svg"
                  alt=""
                  className="w-8"
                />
              </div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Find your <span className="text-green-700">Exploring </span>{" "}
                  Your Options
                </h1>
                <div className="w-20 h-2 bg-green-700 my-4"></div>
                <p className="text-xl mb-10">
                  When faced with decisions, it's essential to have a clear
                  understanding of your options. Whether it's choosing a career
                  path, making financial investments, or deciding on the next
                  step in your education, each choice branches into a multitude
                  of possibilities.
                </p>
                <button className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                  Learn More
                </button>
              </div>
            </header>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="Leafs"
          className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
    </div>
  );
};

export default Optional_About;
