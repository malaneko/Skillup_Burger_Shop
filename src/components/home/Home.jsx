// Write all the code here
//importing necessary packages
import React from "react";
import {motion} from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
const Home = () => {
  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...options}>Burger Shop</motion.h1>
          <motion.p
            {...options}
            transition={{
              delay: 1,
            }}
          >
            Try our amazing burgers!!!
          </motion.p>
        </div>
        <motion.a
          href="#menu"
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
        >
          Menu
        </motion.a>
      </section>
      <Menu />
      <Founder />
    </>
  );
};
export default Home;
