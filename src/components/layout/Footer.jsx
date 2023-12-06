// Write all the code here
import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>
        <p>The best taste possible.</p>
      <strong>@burgershop</strong>
      </div>
      <aside>
        <h4>Our Social Media</h4>
        <a href="https://facebook.com/">
          <AiFillFacebook />
        </a>
        <a href="https://instagram.com/">
          <AiFillInstagram />
        </a>
        <a href="https://youtube.com/">
          <AiFillYoutube />
        </a>
      </aside>
    </footer>
  );
};
export default Footer;
