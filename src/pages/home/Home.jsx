import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";

const Home = () => {
  return (
    <div className="h-full
    ">
      <div className="flex">
        <Sidebar />
        <div className="ml-28 md:ml-64 mt-6 max-w-[700px] pr-4">
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Home;
