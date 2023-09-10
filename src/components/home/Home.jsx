import React, { useState } from "react";
import "./home.css";
import Social from "../social/Social";
import { AiOutlineArrowDown } from 'react-icons/ai';

const Home = () => {
  const [tree, setTree] = useState(false);
  const changeOpacity = () => {
    if (window.scrollY >= 60) {
      setTree(true);
    } else {
      setTree(false);
    }
  };
  window.addEventListener("scroll", changeOpacity);
  return (
    <div className="container">
      <div className={tree ? "tree scrolled" : "tree"}>
        <img src="./images/BAMBOO.png" alt="" />
      </div>
      <div className="logo">
        <img src="./images/venu.png" alt="" />
        <h3>Organic Scented Candles</h3>
        <h2>- By Aishwarya</h2>
      </div>
      {/* "abt-scroll" */}
      <h4 className={tree ? "abt-scroll  abt-scrolled" : "abt-scroll"}>About <AiOutlineArrowDown/></h4>
      <div className="about">
        <h1>About Me</h1>
        <div className="info">
          <img src="images\random.jpg" alt="profile" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            earum facilis quae, harum labore illum, nobis explicabo laudantium
            ea quo deleniti commodi quisquam molestiae nam mollitia asperiores?
            Rerum consequatur at enim error molestias delectus voluptatibus
            quibusdam expedita, nam officiis. Dolorem repellat cum expedita
            assumenda voluptatem iste, quasi sunt esse ipsam doloremque fugiat
            nostrum dicta voluptates vel nisi iusto velit voluptatum, qui
            cupiditate facere. Dolorem tenetur voluptates molestiae officia
            inventore? Quibusdam illo debitis libero itaque! Vitae distinctio
            exercitationem dolores officia suscipit, blanditiis commodi
            repellendus necessitatibus nam? Ullam, in repellendus aliquam
            delectus sequi, nemo incidunt, aliquid atque esse modi quia quasi
            provident! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis velit est reiciendis n
          </p>

          
        </div><br /><br />
        <Social />
        <br /><br />
      </div>
    </div>
  );
};

export default Home;
