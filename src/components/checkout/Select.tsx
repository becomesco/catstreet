import * as React from "react";

interface Props {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

const CheckoutSelect: React.FC<Props> = ({
  label,
  value,
  onValueChange,
  className,
}) => {
  const [showOptions, setShowOptions] = React.useState(false);

  return (
    <div className={`selectInput ${className || ""}`}>
      <div className="selectInput--select">
        <button
          className="selectInput--toggler"
          onClick={() => setShowOptions(!showOptions)}
        >
          <span className="selectInput--toggler-val">{value}</span>
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
          <div className="selectInput--dropdown">
            <button
              onClick={() => {
                setShowOptions(false);
                onValueChange("Australia");
              }}
            >
              Australia
            </button>
            <button
              onClick={() => {
                setShowOptions(false);
                onValueChange("Australia");
              }}
            >
              Australia
            </button>
          </div>
        )}
      </div>
      <div className="selectInput--label">{label}</div>
    </div>
  );
};

export default CheckoutSelect;
