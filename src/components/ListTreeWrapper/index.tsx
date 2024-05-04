import React, { ReactNode, useCallback, useState } from "react";
import ListTreePopup from "../ListTreePopup";

export interface ListTreeContextProps {
  onClick?: (id: string) => void;
  onCopy?: (id: string) => void;
  onDelete?: (id: string) => void;
  onRename?: (id: string) => void;
  popupPosition?: { x: number; y: number };
  onPopupTriggerClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface IFolderData {
  id: string;
  type: "folder";
  name: string;
  data: IFileOrFolderData[];
}
export interface IFileData {
  id: string;
  type: "file";
  name: string;
  meta: string;
}

export type IFileOrFolderData = IFileData | IFolderData;

export const ListTreeContext = React.createContext<ListTreeContextProps>({});

interface ListTreeWrapperProps extends ListTreeContextProps {
  children: ReactNode;
}

function ListTreeWrapper({
  children,
  onClick,
  onCopy,
  onDelete,
  onRename,
}: ListTreeWrapperProps) {
  const [activePopupItemId, setActivePopupItemId] = useState<string>("-1");
  const [popupPosition, setPopupPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: -1,
    y: -1,
  });

  const showPopup = !(popupPosition.x === -1 && popupPosition.y === -1);

  const onPopupTriggerClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const id = e?.currentTarget?.dataset?.id;
      e.preventDefault();
      setPopupPosition({ x: e.pageX, y: e.pageY });
      setActivePopupItemId(id !== undefined ? id : "-1");
    },
    []
  );

  const handlePopupClose = useCallback(() => {
    setPopupPosition({ x: -1, y: -1 });
    setActivePopupItemId("-1");
  }, []);

  return (
    <ListTreeContext.Provider
      value={{
        onClick,
        onCopy,
        onDelete,
        onRename,
        popupPosition,
        onPopupTriggerClick,
      }}
    >
      {showPopup && (
        <ListTreePopup
          id={activePopupItemId}
          handlePopupClose={handlePopupClose}
        />
      )}
      {children}
    </ListTreeContext.Provider>
  );
}

export default ListTreeWrapper;
