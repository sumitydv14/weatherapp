import React from 'react'
import logo from '../images/logo.png';

function Footer() {
    return (
      <footer>
          <div className="container">
               <div className="row">
                   <div className="col-md-12">
                       <div className="foooter-logo d-flex align-items-center">
                           <span><img src={logo} alt="" className="img-fluid" /></span>
                           <span className="ms-3 inline-block " > &copy; 2021 | Privacy Policy </span>
                       </div>
                   </div>
               </div>
          </div>
      </footer>
    )
}

export default Footer;
