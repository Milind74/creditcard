import React from 'react'
import "./footer.css";
const Footer = () => {
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="red"
            fill-opacity="1"
            d="M0,32L40,58.7C80,85,160,139,240,138.7C320,139,400,85,480,58.7C560,32,640,32,720,80C800,128,880,224,960,240C1040,256,1120,192,1200,149.3C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>

        <div className="footer">
          <div className="footerFirst">
            <div>
              <p>COMPANY</p>
              <br />
              <br />
              <p>Home</p>
              <br />
              <p>AboutUs</p>
              <br />
              <p>ContactUs</p>
              <br />
            </div>
            <div>
              <p>INFORMATION</p>
              <br />
              <p>Blog</p>
              <br />
              <p>Privacy</p>
            </div>
            <div>
              <p>OTHER PORTALS</p>
              <br />
             
            </div>
            <div>
              <p>ENQUIRIES</p>
              <br />
              <p>
             
                <i class="fas fa-phone-alt"></i>1800-103-7344
              </p>
              <br />
              
              <br />
              <p>Customer Support</p>
              <br />
              <p>
                <i class="far fa-envelope"></i>nfo@getloan.com
              </p>
              <br />
            </div>
          </div>
          <div className="footerSecond">
            <span style={{ marginLeft: "20px", fontSize: "50px" }}>
              <i class="fab fa-facebook"></i>
            </span>
            <span style={{ marginLeft: "20px", fontSize: "50px" }}>
            
              <i class="fab fa-twitter"></i>
            </span>
            <span style={{ marginLeft: "20px", fontSize: "50px" }}>
           
              <i class="fab fa-linkedin-in"></i>
            </span>

            <p>getloan.com © 2021. All rights reserved..</p>
          </div>
        </div>
      </div>
    );
}

export default Footer
