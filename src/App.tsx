import { useState } from "react";
import listTreeData from "./staticdata.js";
import ListTreeRender from "./components/ListTreeRender/index";
import ListTreeWrapper from "./components/ListTreeWrapper";
import { ObjectWithBooleanValues } from "./common-types";

export default function App() {
  const [data] = useState<any>(listTreeData);
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

  const onCopy = (id: string, type: string) => {
    console.log("onCopy", type, id);
  };

  const onDelete = (id: string, type: string) => {
    console.log("onDelete", type, id);
  };

  const onRename = (id: string, type: string) => {
    console.log("onDelete", type, id);
  };

  return (
    <ListTreeWrapper
      onClick={onClick}
      onCopy={onCopy}
      onDelete={onDelete}
      onRename={onRename}
    >
      <ListTreeRender data={[data]} openItems={openItems} />
    </ListTreeWrapper>
  );
}
