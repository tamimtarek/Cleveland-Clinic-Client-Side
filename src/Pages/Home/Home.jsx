import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Cards></Cards>
      <div>
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Our Teachers</h2>
              <p className="font-serif text-sm dark:text-gray-600">
                Qualisque erroribus usu at, duo te agam soluta mucius.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              <article className="flex flex-col dark:bg-gray-50">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src="https://thumbs.dreamstime.com/b/portrait-young-male-teacher-background-school-blackboard-teacher-s-day-knowledge-day-back-to-school-study-159722312.jpg"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                  >
                    Science Tutoring
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Dr. Emily Carter
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                    <span>June 1, 2020</span>
                    <span>2.1K views</span>
                  </div>
                </div>
              </article>
              <article className="flex flex-col dark:bg-gray-50">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src="data:image/jpeg;base64,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"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                  >
                    Convenire
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Ms. Rachel Nguyen
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                    <span>June 2, 2020</span>
                    <span>2.2K views</span>
                  </div>
                </div>
              </article>
              <article className="flex flex-col dark:bg-gray-50">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_AAegWTKr1jzX83tjBwTqf1bNH1SmSxG5RihCLt78uh1jtIlQzifDSXJew&s"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                  >
                    Math Tutoring
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Mrs. Laura Simmons
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                    <span>June 3, 2020</span>
                    <span>2.3K views</span>
                  </div>
                </div>
              </article>
              <article className="flex flex-col dark:bg-gray-50">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src="data:image/jpeg;base64,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"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                  >
                    Teacher
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Ms. Sarah Blake
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                    <span>June 4, 2020</span>
                    <span>2.4K views</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
