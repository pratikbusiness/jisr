import { FC, ReactNode, useContext } from "react";
import { ArrowDownIcon, ArrowRightIcon } from "../../icons/index";
import { ListTreeContext } from "../ListTreeWrapper/index";
import "./index.css";

interface ListTreeTriggerProps {
  name: string;
  isOpen: boolean;
  children: ReactNode;
  id: string;
}

const ListTreeTrigger: FC<ListTreeTriggerProps> = ({
  name,
  isOpen,
  children,
  id,
}) => {
  const { onClick } = useContext(ListTreeContext);

  return (
    <>
      <div className="flex listtree">
        <div
          className="listtree__toggle-icon"
          role="button"
          tabIndex={0}
          onClick={() => onClick?.(id)}
          id={id}
        >
          {isOpen ? <ArrowDownIcon /> : <ArrowRightIcon />}
        </div>
        {name}
      </div>
      {isOpen ? children : null}
    </>
  );
};

export default ListTreeTrigger;
