// Write all the code here
import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  const addToCartHandler = (itemNum) => {};
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={13.50}
          title="Double Cheese"
          handler={addToCartHandler}
          delay={0.3}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={16.50}
          title="Classic Cheese"
          delay={0.7}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3} 
          price={22.5}
          title="Cheese & Bacon"
          delay={1}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};
export default Menu;
