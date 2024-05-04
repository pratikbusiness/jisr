import React, { ReactElement, useContext } from "react";
import "./index.css";
import { FileIcon } from "../../icons/index";
import {
  ListTreeContext,
  ListTreeContextProps,
  MetaTypes,
} from "../ListTreeWrapper";

interface Props {
  meta: MetaTypes;
  name: string;
  id: string;
}

function ListTreeFile({ meta, name, id }: Props) {
  const { onPopupTriggerClick }: ListTreeContextProps =
    useContext(ListTreeContext);
  /* Based on meta you can load different icons */
  const customFileIcons: { [k: string]: ReactElement } = {
    img: <FileIcon />,
    svg: <FileIcon />,
    css: <FileIcon />,
    html: <FileIcon />,
    ts: <FileIcon />,
    js: <FileIcon />,
    jsx: <FileIcon />,
  };

  return (
    <div className="listtree__file-item">
      <div className="listtree__file-icon">
        {Object.hasOwn(customFileIcons, meta) ? (
          customFileIcons[meta]
        ) : (
          <FileIcon />
        )}
      </div>
      <div
        className="listtree__clickable-filename"
        onContextMenu={onPopupTriggerClick}
        data-id={id}
      >
        {name}
      </div>
    </div>
  );
}

export default ListTreeFile;
