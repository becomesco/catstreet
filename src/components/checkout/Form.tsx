import * as React from "react";
import { CheckoutSelect, CheckoutTel } from ".";
import PayPalLogo from "../../images/paypal.jpg";
import CardLogo from "../../images/card.jpg";
import CheckoutText from "./Text";
import { Link } from "gatsby";

const CheckoutForm: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [country, setCountry] = React.useState("Australia");
  const [shipping, setShipping] = React.useState("standard");
  const [address, setAddress] = React.useState("");

  return (
    <div className="checkoutForm">
      <h2 className="checkoutForm--title">Your Details</h2>
      <form
        className="checkoutForm--form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <CheckoutText
          label="your email"
          type="email"
          value={email}
          onValueChange={(val) => {
            setEmail(val);
          }}
          className="checkoutForm--email"
        />
        <div className="checkoutForm--tel">
          <CheckoutTel
            label="mobile phone"
            value={tel}
            onValueChange={(val) => {
              setTel(val);
            }}
            className="checkoutForm--tel-input"
          />
          <div className="checkoutForm--tel-info">
            Your phone number is required for delivery & shipping updates.
          </div>
        </div>
        <CheckoutText
          label="first name"
          type="text"
          value={firstName}
          onValueChange={(val) => {
            setFirstName(val);
          }}
          className="checkoutForm--firstName"
        />
        <CheckoutText
          label="last name"
          type="text"
          value={lastName}
          onValueChange={(val) => {
            setLastName(val);
          }}
          className="checkoutForm--lastName"
        />
        <div className="checkoutForm--deliveryDetails">
          <h2 className="checkoutForm--title">Delivery Details</h2>
          <CheckoutSelect
            label="country"
            value={country}
            onValueChange={(val) => {
              setCountry(val);
            }}
          />
          <div className="checkoutForm--deliveryDetails-address">
            <CheckoutText
              label="delivery address"
              type="text"
              value={address}
              onValueChange={(val) => {
                setAddress(val);
              }}
            />
            <button className="checkoutForm--deliveryDetails-address-change">
              change
            </button>
          </div>
          <div className="checkoutForm--deliveryDetails-shippings">
            <label>
              <input
                type="radio"
                name="shippings"
                value="free"
                className="sr-only"
                onChange={() => {
                  setShipping("free");
                }}
              />
              <div className={`check ${shipping === "free" ? "active" : ""}`} />
              <span className="label">Free Shipping</span>
              <span className="price">$0.00</span>
            </label>
            <label>
              <input
                type="radio"
                name="shippings"
                value="standard"
                className="sr-only"
                onChange={() => {
                  setShipping("standard");
                }}
              />
              <div
                className={`check ${shipping === "standard" ? "active" : ""}`}
              />
              <span className="label">Standard Shipping</span>
              <span className="price">$10.00</span>
            </label>
            <label>
              <input
                type="radio"
                name="shippings"
                value="express"
                className="sr-only"
                onChange={() => {
                  setShipping("express");
                }}
              />
              <div
                className={`check ${shipping === "express" ? "active" : ""}`}
              />
              <span className="label">Express Shipping</span>
              <span className="price">$25.30</span>
            </label>
          </div>
          <Link to="/" className="checkoutForm--deliveryDetails-link">
            about shipping
          </Link>
        </div>
        <div className="checkoutForm--paymentDetails">
          <h2 className="checkoutForm--title">Payment Details</h2>
          <div className="checkoutForm--paymentDetails-options">
            <button>
              <img src={PayPalLogo} alt="PayPal" />
            </button>
            <button>
              <img src={CardLogo} alt="Card" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
