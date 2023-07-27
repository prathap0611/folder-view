import { useState } from "react";
import { FaFile, FaFolder, FaFolderOpen } from "react-icons/fa";
import { ListItemDataInterface } from "../services/data.service";
import { List } from "./list";
import "./list-item.css";

export function ListItem({ item }: { item: ListItemDataInterface }) {
  const [isFolderOpen, setIsFolderOpen] = useState(true);

  return (
    <>
      <li>
        <section className={`group ${!item.children && 'no-cursor'}`}
          onClick={() => {
            setIsFolderOpen(!isFolderOpen);
          }}
        >
          <div className="icon">
            {item.children ? (
              isFolderOpen ? (
                <FaFolderOpen />
              ) : (
                <FaFolder />
              )
            ) : (
              <FaFile />
            )}
          </div>
          <div>{item.name}</div>
        </section>
        {item.children && isFolderOpen && <List items={item.children} />}
      </li>
    </>
  );
}
