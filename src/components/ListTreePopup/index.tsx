import React, { useRef, useContext, useEffect } from "react";
import { ListTreeContext } from "../ListTreeWrapper";
import "./index.css";

interface ListTreePopupProps {
  id: string;
  handlePopupClose: () => void;
}

const ListTreePopup: React.FC<ListTreePopupProps> = ({
  id,
  handlePopupClose,
}) => {
  const { onCopy, onRename, onDelete, popupPosition } =
    useContext(ListTreeContext);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popupRef.current) {
      popupRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        handlePopupClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handlePopupClose]);

  return (
    <div
      role="menu"
      ref={popupRef}
      aria-labelledby="right-click-menu"
      style={{
        top: popupPosition?.y,
        left: popupPosition?.x,
      }}
      className="listtree__manage-popup"
      tabIndex={-1}
    >
      <button className="listtree__manage-button" onClick={() => onCopy?.(id)}>
        Copy
      </button>
      <button
        className="listtree__manage-button"
        onClick={() => onRename?.(id)}
      >
        Rename
      </button>
      <button
        className="listtree__manage-button"
        onClick={() => onDelete?.(id)}
      >
        Delete
      </button>
      <button className="listtree__manage-button" onClick={handlePopupClose}>
        Cancel
      </button>
    </div>
  );
};

export default ListTreePopup;
