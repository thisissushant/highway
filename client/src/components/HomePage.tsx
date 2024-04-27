import {} from "react";
import { Link } from "react-router-dom";

const HomePage = (): JSX.Element => {
  return (
    <div className="bg-gray md:h-full ">
      <div className="">
        <h1 className=" flex md:text-4xl font-bold md:justify-start md:ml-40 pt-20 justify-center text-2xl p-5">
          Welcome to the Home Page
        </h1>
        <div className="grid md:grid-cols-2 grid-rows-2 gap-6 ">
          <div className=" md:min-h-96 max-w-3xl pt-24">
            <Link to={"/signup"}>
              <h1 className="text-purple text-2xl font-bold">
                Log<span className="text-red">In</span>
              </h1>
            </Link>
          </div>
          <div className=" pt-24">
            <Link to={"/signup"}>
              <h1 className="text-purple text-2xl font-bold ">
                Sign<span className="text-red">Up</span>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
