import { IFileData, IFolderData } from "./components/ListTreeWrapper";

const ListTreeData: IFileData | IFolderData = {
  id: "0",
  type: "folder",
  name: "parent",
  data: [
    {
      id: "0-0",
      type: "folder",
      name: "root",
      data: [
        {
          id: "0-0-0",
          type: "folder",
          name: "src",
          data: [
            {
              id: "0-0-0-1",
              type: "file",
              meta: "js",
              name: "index.js",
            },
          ],
        },
        {
          id: "0-0-1",
          type: "folder",
          name: "public",
          data: [
            {
              id: "0-0-1-0",
              type: "file",
              meta: "ts",
              name: "index.ts",
            },
          ],
        },
        {
          id: "0-0-2",
          type: "file",
          meta: "html",
          name: "index.html",
        },
        {
          id: "0-0-3",
          type: "folder",
          name: "data",
          data: [
            {
              id: "0-0-3-0",
              type: "folder",
              name: "images",
              data: [
                {
                  id: "0-0-3-0-0",
                  type: "file",
                  meta: "img",
                  name: "image.png",
                },
                {
                  id: "0-0-3-0-1",
                  type: "file",
                  meta: "img",
                  name: "image2.webp",
                },
              ],
            },
            {
              id: "0-0-3-1",
              type: "file",
              meta: "svg",
              name: "logo.svg",
            },
          ],
        },
        {
          id: "0-0-4",
          type: "file",
          meta: "css",
          name: "style.css",
        },
      ],
    },
  ],
};

export default ListTreeData;
