import * as React from "react";
import { CheckoutSelect, CheckoutTel } from ".";
import PayPalLogo from "../../images/paypal.jpg";
import CardLogo from "../../images/card.jpg";
import CheckoutText from "./Text";
import { Link } from "gatsby";
import { connect } from "react-redux";
import { CartShipping } from "../../types";

interface Props {
  shippingMethod: CartShipping;
  dispatch: any;
}

const CheckoutForm: React.FC<Props> = ({ shippingMethod, dispatch }) => {
  const [email, setEmail] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [country, setCountry] = React.useState("Australia");
  const [address, setAddress] = React.useState("");

  const shippings: CartShipping[] = [
    {
      label: "Free Shipping",
      value: 0,
    },
    {
      label: "Standard Shipping",
      value: 10,
    },
    {
      label: "Express Shipping",
      value: 25.3,
    },
  ];

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
            {shippings.map((e, index) => {
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="shippings"
                    value={e.label}
                    className="sr-only"
                    onChange={() => {
                      dispatch({
                        type: "SET_SHIPPING",
                        shippingMethod: e,
                      });
                    }}
                  />
                  <div
                    className={`check ${
                      shippingMethod.label === e.label ? "active" : ""
                    }`}
                  />
                  <span className="label">{e.label}</span>
                  <span className="price">${e.value.toFixed(2)}</span>
                </label>
              );
            })}
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

const mapStateToProps = (state: any) => {
  return {
    shippingMethod: state.shippingMethod,
  };
};

export default connect(mapStateToProps)(CheckoutForm);
