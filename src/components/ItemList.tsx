// Interfaces
import { ItemListInterface } from '../interfaces/interface';
// Components
import Item from './Item';

const ItemList = (props: ItemListInterface) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleItemRemove={props.handleItemRemove}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
