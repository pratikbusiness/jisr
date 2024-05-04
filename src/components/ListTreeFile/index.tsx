import "./index.css";
import { FileIcon } from "../../icons/index";

interface Props {
  meta: string;
  name: string;
  id: string;
}

function ListTreeFile({ meta, name, id }: Props) {
  return (
    <div className="listtree__file-item">
      <div className="listtree__file-icon">
        <FileIcon />
        {/* Based on meta you can load different icons */}
      </div>
      {name}
    </div>
  );
}

export default ListTreeFile;
