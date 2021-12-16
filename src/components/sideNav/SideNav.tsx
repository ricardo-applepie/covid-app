import React from 'react'; 
import {Link} from 'react-router-dom';
import './sideNav.scss';
import { useSelector } from "react-redux";

import Button from '../button/Button';
function SideNav (){
  let covidDates :any= useSelector((state:any)=>state.covid.options);  

    return (
       <div className="sideNavigator">
            <nav>
              <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/users">Users</Link>
                </li>
                                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>

              </ul>
        </nav>
         
         <div className='form'>
           <h1>From</h1>
           <Button name="from" data={covidDates}/>
           <h1>To</h1>
           <Button name="to" data={covidDates}/>
          </div>
      </div>

    )
}
export default SideNav; 