import React from 'react'; 
import SideNav from '../components/sideNav/SideNav';
import Overview from '../components/overview/Overview';
function Home (){
    return (
       <div className="container">
            <div className="row align-items-start">
                <div className="col">
                   <SideNav/>
                </div>
                <div className="col">
                    <Overview/>
                </div>
            </div> 
      </div>

    )
}
export default Home; 