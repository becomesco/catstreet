import * as React from "react";
import { connect } from "react-redux";
import { workingCoupons } from "../../data/coupons";
import { CartCoupon } from "../../types";

interface Props {
  coupons: CartCoupon[];
  dispatch: any;
}

const CartPromoCode: React.FC<Props> = ({ coupons, dispatch }) => {
  const [showCoupons, setShowCoupons] = React.useState(false);
  const [couponValue, setCouponValue] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  const handleAddCoupon = () => {
    const isCouponAdded = coupons.find(
      (e) => e.code.toLowerCase() === couponValue.toLowerCase()
    );

    if (isCouponAdded) {
      setIsError(true);
    } else {
      const workingCoupon = workingCoupons.find(
        (e) => e.code.toLowerCase() === couponValue.toLowerCase()
      );
      if (workingCoupon) {
        dispatch({
          type: "ADD_COUPON",
          coupon: workingCoupon,
        });
        setIsError(false);
        setCouponValue("");
      } else {
        setIsError(true);
      }
    }
  };

  const handleRemoveCoupon = (coupon: CartCoupon) => {
    dispatch({
      type: "REMOVE_COUPON",
      coupon,
    });
  };

  return (
    <div className="cartPromoCode">
      {!showCoupons ? (
        <div className="cartPromoCode--enter">
          <span>Promo Code?</span>{" "}
          <button
            onClick={() => {
              setShowCoupons(true);
            }}
          >
            Enter Code
          </button>
        </div>
      ) : (
        <div className="cartPromoCode--main">
          <form
            onSubmit={(event) => {
              event.preventDefault();

              handleAddCoupon();
            }}
            className="cartPromoCode--form"
          >
            <label>
              <input
                className={isError ? "error" : ""}
                type="text"
                value={couponValue}
                placeholder="Coupon Code"
                onChange={(event) => {
                  const target = event.target as HTMLInputElement;

                  setCouponValue(target.value);
                }}
              />
              {isError && (
                <div className="cartPromoCode--form-error">
                  Incorrect coupon code
                </div>
              )}
            </label>
            <button type="submit">Apply</button>
          </form>
          {coupons.length > 0 && (
            <ul className="cartPromoCode--coupons">
              {coupons.map((item, index) => {
                return (
                  <button
                    key={index}
                    className="cartPromoCode--coupon"
                    onClick={() => handleRemoveCoupon(item)}
                  >
                    <span>{item.code}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                      <path
                        fill="#000"
                        d="m7.65 6.854 2.56-2.56-.792-.792-2.56 2.56L4.3 3.502l-.806.806 2.56 2.56-2.546 2.546.792.792L6.845 7.66l2.56 2.56.805-.806-2.56-2.56Z"
                      />
                    </svg>
                  </button>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    coupons: state.coupons,
  };
};

export default connect(mapStateToProps)(CartPromoCode);
