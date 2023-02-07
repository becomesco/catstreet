import * as React from "react";
import AusFlag from "../../images/aus-flag.jpg";

interface Props {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

const CheckoutText: React.FC<Props> = ({
  label,
  value,
  onValueChange,
  className,
}) => {
  const [showOptions, setShowOptions] = React.useState(false);

  return (
    <div
      className={`textInput textInput_tel ${value ? "textInput_hasVal" : ""} ${
        className || ""
      }`}
    >
      <div className="textInput--select">
        <button
          className="textInput--select-toggler"
          onClick={() => setShowOptions(!showOptions)}
        >
          <img src={AusFlag} alt="Australian flag" />
          <span className="textInput--select-toggler-val">+61</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="11"
            fill="none"
          >
            <g clip-path="url(#a)">
              <path
                stroke="#231F20"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="m1.218 1.108 5.735 7.888c.283.39.905.39 1.188 0l5.746-7.888"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M.4.358h14.305v9.687H.4z" />
              </clipPath>
            </defs>
          </svg>
        </button>
        {showOptions && (
          <div className="textInput--select-dropdown">
            <button onClick={() => setShowOptions(false)}>
              <img src={AusFlag} alt="Australian flag" />
              <span>+61</span>
            </button>
            <button onClick={() => setShowOptions(false)}>
              <img src={AusFlag} alt="Australian flag" />
              <span>+61</span>
            </button>
          </div>
        )}
      </div>
      <label>
        <input
          className="textInput--input"
          type="tel"
          value={value}
          onChange={(event) => {
            const target = event.target as HTMLInputElement;

            onValueChange(target.value);
          }}
        />
        <div className="textInput--label">{label}</div>
      </label>
    </div>
  );
};

export default CheckoutText;
