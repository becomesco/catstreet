import * as React from "react";

import "../styles/index.scss";
import { CartModal } from "./cart";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ className, children }) => {
  return (
    <>
      <div className={className || ""}>
        <main>{children}</main>
      </div>
      <CartModal />
    </>
  );
};

export default Layout;
