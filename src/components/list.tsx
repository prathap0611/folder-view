import { ListItemDataInterface } from "../services/data.service";
import { ListItem } from "./list-item";

export function List({items}: {items: ListItemDataInterface[]}) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
