import * as React from "react";

import "../styles/index.scss";

interface Props {
  className?: string;
  children?: React.ReactNode | React.ReactNodeArray;
}

const Layout: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={className || ""}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
