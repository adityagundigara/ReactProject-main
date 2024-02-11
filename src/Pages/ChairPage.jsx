import React from "react";
import "../Styles/OurProduct.css";
import Card from "../component/Card";
import chair1 from "../assets/Chair/chair1.png";
import chair2 from "../assets/Chair/chair2.png";
import chair3 from "../assets/Chair/chair3.png";
import chair4 from "../assets/Chair/chair4.png";
import chair5 from "../assets/Chair/chair5.png";
import chair6 from "../assets/Chair/chair6.png";
import chair7 from "../assets/Chair/chair7.png";
import chair8 from "../assets/Chair/chair8.png";

import Footer from "../component/Footer";
const ChairPage = () => {
  return (
    <>
        <div className="OuterClass">
      <div className="Container">

        <p className="chair">Chair</p>
        <p className="des">
          Upgrade your study space with our stylish and practical chair
        </p>
    
      </div>
      </div>
      {/* Card Section */}
      <div className="FirstThree">
        <Card ImageSrc={chair1} title="Chair" price="₹3000" />
        <Card ImageSrc={chair2} title="Chair" price="₹4000" />
        <Card ImageSrc={chair3} title="Chair" price="₹5000" />
        <Card ImageSrc={chair4} title="Chair" price="₹6000" />

      </div>
      <div className="SecondThree">
        <Card ImageSrc={chair5} title="Chair" price="₹7000" />
        <Card ImageSrc={chair6} title="Chair" price="₹8000" />
        <Card ImageSrc={chair7} title="Chair" price="₹9000" />
        <Card ImageSrc={chair8} title="Chair" price="₹10000" />
      </div>
      <Footer/>
    </>
  );
};
export default ChairPage;
