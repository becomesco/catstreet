import * as React from "react";

interface Props {
  label: string;
  value: string;
  type: "text" | "email";
  onValueChange: (value: string) => void;
  className?: string;
}

const CheckoutText: React.FC<Props> = ({
  label,
  type,
  value,
  onValueChange,
  className,
}) => {
  return (
    <label className={`textInput ${value ? 'textInput_hasVal' : ''} ${className || ""}`}>
      <input
        className="textInput--input"
        type={type}
        value={value}
        onChange={(event) => {
          const target = event.target as HTMLInputElement;

          onValueChange(target.value);
        }}
      />
      <div className="textInput--label">{label}</div>
    </label>
  );
};

export default CheckoutText;
