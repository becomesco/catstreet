import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Logo from "../images/logo.svg";
import { Layout } from "../components/";
import SecureCheckout1 from "../images/secure-checkout-1.svg";
import SecureCheckout2 from "../images/secure-checkout-2.svg";
import { CheckoutAside, CheckoutForm } from "../components/checkout";

const CheckoutPage: React.FC<PageProps> = () => {
  return (
    <Layout className="checkoutPage">
      <Link to="/" className="checkoutPage--logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <h1 className="checkoutPage--title">Checkout</h1>
      <div className="checkoutPage--grid">
        <CheckoutForm />
        <CheckoutAside />
      </div>
      <footer className="checkoutPage--footer">
        <div className="checkoutPage--footer-title">
          Secured & Encrypted Checkout
        </div>
        <div className="checkoutPage--footer-logos">
          <img src={SecureCheckout1} alt="Secure Checkout" />
          <img src={SecureCheckout2} alt="Secure Checkout" />
        </div>
      </footer>
    </Layout>
  );
};

export default CheckoutPage;

export const Head: HeadFC = () => <title>Checkout Page</title>;
