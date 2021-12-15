import React from 'react'; 
import {Link} from 'react-router-dom';
 
function SideNav (){
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
              </ul>
        </nav>
      </div>

    )
}
export default SideNav; 