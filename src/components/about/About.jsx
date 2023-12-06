// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/MKO.jpg";
const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Burger Shop</h4>
          <p>This is our Burger Shop with the most tasty burgers on the entire earth.</p>
          <p>Explore the various types of food and burgers. </p>
          <p> Click below to see the menu.</p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>MKO</h3>
            </div>
            <p>Hi there! My name is MKO and I am the founder of Burger Shop.</p>
            <p>My road to success has been based only on serving you the best burgers in the world.</p>
          </article>
        </div>
      </main>
    </section>
  );
};
export default About;