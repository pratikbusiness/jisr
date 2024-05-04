import React, { ReactNode } from "react";

export interface ListTreeContextProps {
  onClick?: (id: string) => void;
  onCopy?: (id: string, type: string) => void;
  onDelete?: (id: string, type: string) => void;
  onRename?: (id: string, type: string) => void;
}

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
  return (
    <ListTreeContext.Provider
      value={{
        onClick,
        onCopy,
        onDelete,
        onRename,
      }}
    >
      {children}
    </ListTreeContext.Provider>
  );
}

export default ListTreeWrapper;
