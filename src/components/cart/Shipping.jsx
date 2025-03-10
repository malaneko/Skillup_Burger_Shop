import React from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>Address</label>
            <input type="text" placeholder="House Number" />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
              {/* Compelte the code for the COUNTRY DROPDOWN*/}
            <label>Country</label>

            <select>
              <option value="">United Kingdom</option>
              {}
            </select>
          </div>
          <div>
            <label>Country</label>
            <select>
              <option value="">Scotland</option>
              {State && State.getStatesOfCountry("UK").map((i) => (
              <option option value={i.isoCode} key={i.isoCode}>
              {i.name}    
                  </option>
                ))}
            </select>
          </div>
          <div>
              {/* Add the code for the STATE DROPDOWN*/}
           
          </div>
          <div>
            <label>Phone Number</label>
            <input type="number" placeholder="Enter Phone Number." />
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div className="d-flex align-items-center justify-content-center" style={{ paddingTop: '20px' }}>
          <a href="/myorders" className="btn btn-danger">
            Checkout
          </a>
          </div>      
          
          <Popup trigger=
                {<button type = "button">Confirm Order</button>}
                position="right center">
                <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Order Placed</div>
               
            </Popup>
        </form>
      </main>
    </section>
  );
};
export default Shipping;
