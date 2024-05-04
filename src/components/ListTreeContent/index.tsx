import React, { FC, ReactNode } from "react";
import "./index.css";

interface ListTreeContentProps {
  children: ReactNode;
}

const ListTreeContent: FC<ListTreeContentProps> = ({ children }) => {
  return <div className="listtree__child-wrapper">{children}</div>;
};

export default ListTreeContent;
