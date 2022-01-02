import React from "react";
import SideNav from "../components/sideNav/SideNav";
import Overview from "../components/overview/Overview";

// homepage
function Home() {
  return (
    <div className="homepage">
      <div className="row align-items-start">
        <div className="col-lg-2">
          <SideNav />
        </div>
        <div className="col-lg-10">
          <Overview />
        </div>
      </div>
    </div>
  );
}

export default Home;
