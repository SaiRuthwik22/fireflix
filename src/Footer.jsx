import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
      <>
      <footer className="footer">
         <div className="main-content">
            <div className="left box">
               <h2>About us</h2>
               <div className="contentfoo">
                  <p>
                     FireFlixer is a free video downloader ,where you can just download
                     movies and web series for free without annoying 'ADS'
                  </p>
                  <div className="social">
                     <a href=""
                        ><span className="fa-brands fa-square-facebook"></span
                        ></a>
                     <a href=""
                        ><span className="fab fa-twitter"></span
                        ></a>
                     <a href=""
                        ><span className="fab fa-instagram"></span
                        ></a>
                     <a href="https://www.youtube.com"
                        ><span className="fab fa-youtube"></span
                        ></a>
                  </div>
               </div>
            </div>
            <div className="center box">
               <h2>Address</h2>
               <div className="contentfoo">
                  <div className="place">
                     <span className="fas fa-map-marker-alt"></span>
                     <span className="text">Hyderabad, Telangana </span>
                  </div>
                  <div className="phone">
                     <span className="fas fa-phone-alt"></span>
                     <span className="text">+91 9390494435</span>
                  </div>
                  <div className="email">
                     <span className="fas fa-envelope"></span>
                     <span className="text">fireflixer@gmail.com</span>
                  </div>
               </div>
            </div>
            <div className="right box">
               <h2>Contact us</h2>
               <div className="contentfoo">
                  <form action="#">
                     <div className="email">
                        <div className="text">Email *</div>
                        <input type="email" required  style={{color: 'white'}}/>
                     </div>
                     <div className="msg">
                        <div className="text">Message *</div>
                     </div>
                     <div className="btn">
                        <button type="submit">Send</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div className="bottom">
            <center>
               <span className="credit">Created By <a href="">Sai Ruthwik</a> | </span>
               <span className="far fa-copyright"></span
                  ><span> 2023 All rights reserved.</span>
            </center>
         </div>
      </footer>
      </>
      
  )
}

export default Footer