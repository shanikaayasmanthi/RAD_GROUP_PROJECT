import React from "react";
import "./Footer.css";
// import facebook from "../Assets/facebook.png";


// export default function Footer() {
//     return (

//         <div className="footer">
        
//             <p>Copyright @2023</p>
//             <div className="social">
//                 <ul>
//                     <li>
//                     <i className="fa fa-facebook"><a href="https://www.facebook.com/profile.php?id=100084394195537&mibextid=9R9pXO">facebook</a></i><br></br>
//                     </li>
//                     <li><i className="fa fa-instagram">instagram</i></li>
//                 </ul>
                
//             </div>
//         </div>
//     );
// }


function Footer () {
  return (
    <div className="footer">
      <h1>shift as a unique way so choose us</h1>

      <div>
        <h2>Products</h2>
        {/* <a href="#">Writing</a>
        <a href="#">Internships</a>
        <a href="#">Coding</a>
        <a href="#">Teaching</a> */}
      </div>
      <div>
        <h2>Contact Us</h2>
        <div className="footerLink">
        <a href="#">0715187674</a></div>
        
      </div>
      <div>
        <h2>Social Media</h2>
        <a href="https://www.facebook.com/profile.php?id=100084394195537&mibextid=9R9pXO">
          <i class="fab fa-facebook-f">
            <span>Facebook</span><br></br>
          </i>
        </a>
        <a href="https://instagram.com/amoral_00?igshid=NTc4MTIwNjQ2YQ==">
          <i class="fab fa-instagram">
            <span>Instagram</span><br></br>
          </i>
        </a>
        <a href="https://www.tiktok.com/@amoral_22?_t=8femJ9fojVh&_r=1">
          <i class="fab fa-tiktok">
            <span>Tiktok</span><br></br>
          </i>
        </a>
        <a href="amoral0411@gmail.com">
          <i class="fab fa-email">
            <span>Email</span><br></br>
          </i>
        </a>
      </div>
    </div>
  );
};

export default Footer;

