

import "./Styles/homepage.css";
// Example import in HomePage.js
import { Image, Container } from "react-bootstrap";
import bannerimg from './assets/bannerimg.png';
import chair1 from './assets/Chair/chair1.png';
import chair5 from './assets/Chair/chair5.png';
import chair7 from './assets/Chair/chair7.png';
import chair6 from './assets/Chair/chair6.png';
// import sofa1 from './assets/Sofaimg/sofa1.png';
import StudyLogos from './assets/StudyLogo.png';
import SofaLogo from './assets/SofaLogo.png';
import ChairLogo from './assets/ChairLogo.png';
import Card from './component/Card';
import Footer from './component/Footer';
import { NavLink } from "react-router-dom";


function HomePage() {
  return (
    <>
    <div className="OuterContainer">
      <div className="btop">
        <section className="bannersec">
          <Container className="banner">
            <div className="headingtext">
              <p> Trending Product in 2024 </p>
              <h2>Make Your Interior More Minimalistic & Modern</h2>
              <h5>Elevate your space with our stylish and comfortable furniture pieces</h5>
              <button className="clickb">Shop Now</button>
            </div>

            <div className="imgsec">
              <Image src={bannerimg} alt="banner" className="imgsec" />
            </div>

          </Container>

        </section>
      </div>
    

      {/* 
         Making Card for homepage using props file name Card and HomeCard.css
         */}

      <h3 className="TrendingProductClass">Trending Product</h3>

      <div className="AllCards">
        <Card ImageSrc={chair1} title="Chair1" price="₹3000" />
        <Card ImageSrc={chair5} title="Chair2" price="₹4000" />
        <Card ImageSrc={chair7} title="Chair3" price="₹5000" />
        <Card ImageSrc={chair6} title="Chair4" price="₹6000" />
      </div>
      <h3 className="BestSalesClass"> Best Sales</h3>

      <div className="BestSalespdContainer">
      <div className="BestSalespd">
        <Card ImageSrc={chair1} title="sofa1" price="₹3000" />
        <Card ImageSrc={chair5} title="sofa2" price="₹4000" />
        <Card ImageSrc={chair7} title="sofa3" price="₹5000" />
        <Card ImageSrc={chair6} title="sofa4" price="₹6000" />
      </div>
      </div>

      <div className="OurProductClass">
      <h3 className="OurProduct">Our Product</h3>
      </div>
      <div className="OurProductsImage">
        
        <NavLink to="/Studytable" style={{ textDecoration: "none" }}>
          <div className="imgContainer">
            <div className="imglogo">
              <Image src={StudyLogos} alt="studylogo" className="imglogo" />
            </div>
            <div className="textHeading">
              <p className="text-black ">Study Table</p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/Sofapage" style={{ textDecoration: "none" }}>
          <div className="imgContainer">
            <div className="imglogo2">
              <Image src={SofaLogo} alt="SofaLogo" className="imglogo" />
            </div>
            <div className="textHeading">
              <p className="text-black no-underline">Sofa</p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/ChairPage" style={{ textDecoration: "none" }}>
          <div className="imgContainer">
            <div className="imglogo3">
              <Image src={ChairLogo} alt="ChairLogo" className="imglogo" />
            </div>
            <div className="textHeading">
              <p className="text-black no-underline">Chair</p>
            </div>
          </div>
        </NavLink>
      </div>

      <div className="footer">
        <Footer></Footer>
      </div>
 
      </div>
    </>
  );
}

export default HomePage;
