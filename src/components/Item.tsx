// Components
import { RiDeleteBinLine } from 'react-icons/ri';
// Interfaces
import { ItemPropsInterface } from '../interfaces/interface';
// Styles
import { ItemWrapper } from './Item.styles';

const Item = (props: ItemPropsInterface) => {
  return (
    <ItemWrapper>
      <div>
        <label>{props.item.text}</label>
        <RiDeleteBinLine
          className='delete-button-style'
          onClick={() => props.handleItemRemove(props.item.id)}
        />
      </div>
    </ItemWrapper>
  );
};

export default Item;
