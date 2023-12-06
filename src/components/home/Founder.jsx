import React from "react";
import {motion} from "framer-motion";
import me from "../../assets/MKO.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={250} width={250} />
        <h3>
          Hello!
        </h3>
        <p>
          My name is MKO and I am the founder of Burger Shop.
          <br />
          Our aim is to create the most tasty burger on planet.
        </p>
      </motion.div>
    </section>
  );
};
export default Founder;
