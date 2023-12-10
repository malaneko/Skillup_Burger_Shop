// Write all the code here
import React from "react";

const OrderDetails = () => {
  const date = "10.12.2023"
  const deliverydate = "10.12.2023"
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b> {"Street address"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b> {"Hannah"}
          </p>
          <p>
            <b>Phone</b> {'+44 123456789'}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b> {"Processing"}
          </p>
          <p>
            <b>Placed At</b> {date}
          </p>
          <p>
            <b>Delivered At</b> {deliverydate}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b> {"card"}
          </p>
          <p>
            <b>Payment Reference</b> 123{/*"asdasdsadsad"*/}{" "}
          </p>
          <p>
            <b>Paid At</b> {date}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b> £{22.5}
          </p>
          <p>
            <b>Shipping Charges</b> £{2}
          </p>
          <p>
            <b>Tax</b> %{15}
          </p>
          <p>
            <b>Total Amount</b> £{22.5 + 2 + 0.15}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese & Bacon</h4>
            <div>
              <span>{1}</span> x <span>{22.5}</span>
            </div>
          </div>
          <div style={{ fontWeight: 800 }}>
            <h4>Sub Total</h4>
            <div>£{22.5}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;