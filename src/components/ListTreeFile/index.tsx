import React, { useContext } from "react";
import "./index.css";
import { FileIcon } from "../../icons/index";
import { ListTreeContext, ListTreeContextProps } from "../ListTreeWrapper";

interface Props {
  meta: string;
  name: string;
  id: string;
}

function ListTreeFile({ meta, name, id }: Props) {
  const { onPopupTriggerClick }: ListTreeContextProps =
    useContext(ListTreeContext);

  return (
    <div className="listtree__file-item">
      <div className="listtree__file-icon">
        <FileIcon />
        {/* Based on meta you can load different icons */}
      </div>
      <div
        className="listtree__clickable-filename"
        onContextMenu={onPopupTriggerClick}
      >
        {name}
      </div>
    </div>
  );
}

export default ListTreeFile;
