import React from "react";
import ListTreeTrigger from "../ListTreeTrigger/index";
import ListTreeContent from "../ListTreeContent/index";
import { ObjectWithBooleanValues } from "../../common-types";

interface Props {
  openItems: ObjectWithBooleanValues;
  data: any[];
}

const RenderListTree: React.FC<Props> = ({ openItems, data }) => {
  const folderItems: any[] = [];
  const fileItems: any[] = [];
  data.forEach((el) => {
    if (el.type === "folder") {
      folderItems.push(el);
    } else {
      fileItems.push(el);
    }
  });

  return (
    <>
      {folderItems?.map((item) => {
        return (
          <ListTreeTrigger
            id={item.id}
            key={item.id}
            name={item.name}
            isOpen={openItems[item.id] ? openItems[item.id] : false}
          >
            <ListTreeContent>
              {item.type === "folder" ? (
                <RenderListTree data={item.data || []} openItems={openItems} />
              ) : (
                // <p>TODO: RENDER FILES LATER</p>
                <p></p>
              )}
            </ListTreeContent>
          </ListTreeTrigger>
        );
      })}
      {/* <p>TODO: RENDER FILES LATER</p> */}
    </>
  );
};

export default RenderListTree;
