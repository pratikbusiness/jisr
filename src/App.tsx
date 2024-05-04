import { useState } from "react";
import listTreeData from "./staticdata";
import ListTreeRender from "./components/ListTreeRender/index";
import ListTreeWrapper, {
  IFileOrFolderData,
} from "./components/ListTreeWrapper";
import { ObjectWithBooleanValues } from "./common-types";

export default function App() {
  const [data] = useState<IFileOrFolderData[]>([listTreeData]);
  const [openItems, setOpenItems] = useState<ObjectWithBooleanValues>({});

  const onClick = (id: string) => {
    setOpenItems((prev) => {
      const newItemList = { ...prev };
      if (newItemList[id] === true) {
        newItemList[id] = false;
      } else {
        newItemList[id] = true;
      }
      return newItemList;
    });
  };

  const onCopy = (id: string) => {
    console.log("onCopy", id);
  };

  const onDelete = (id: string) => {
    console.log("onDelete", id);
  };

  const onRename = (id: string) => {
    console.log("onDelete", id);
  };

  return (
    <ListTreeWrapper
      onClick={onClick}
      onCopy={onCopy}
      onDelete={onDelete}
      onRename={onRename}
    >
      <ListTreeRender data={data} openItems={openItems} />
    </ListTreeWrapper>
  );
}
