import {} from "react";
import { Link } from "react-router-dom";

const HomePage = (): JSX.Element => {
  return (
    <div className="md:p-10 p-5 bg-gray h-screen">
      <div className="pt-16 pl-20">
        <h1 className="md:text-4xl text-2xl font-extrabold text-purple text-start ">
          Illustrate which you can use
        </h1>
      </div>
      <div className="md:grid grid-cols-2 grid-rows-2 md:pl-36">
        <div className="mt-16">
          <Link
            to={"/signup"}
            className="md:text-3xl text-2xl font-extrabold text-purple md:text-end text-start mb-5"
          >
            Sign<span className="text-red">Up</span>
          </Link>
        </div>
        <div className="mt-16">
          <Link
            to={"/signin"}
            className="md:text-3xl text-2xl font-extrabold text-purple md:text-end text-start mb-5"
          >
            Sign<span className="text-red">In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
