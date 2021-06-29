import React from 'react';
import shortid from 'shortid';
// Components
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import { initialItems } from './components/initialItems';
// Styles
import { Wrapper, GlobalStyle } from './App.styles';
// Interfaces
import { ItemInterface } from './interfaces/interface';

const App: React.FC = () => {
  const [items, setItems] = React.useState<ItemInterface[]>(initialItems);

  // Create item
  const addItem = (newItem: string) => {
    newItem.trim() !== '' &&
      setItems([...items, { id: shortid.generate(), text: newItem }]);
  };

  // Delete Item
  const handleItemRemove = (id: string) => {
    const newItemsState: ItemInterface[] = items.filter(
      (item: ItemInterface) => item.id !== id
    );
    setItems(newItemsState);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div>
          <React.Fragment>
            <h2>Shopping List</h2>
            <ItemList items={items} handleItemRemove={handleItemRemove} />
            <ItemForm addItem={addItem} />
          </React.Fragment>
        </div>
      </Wrapper>
    </>
  );
};

export default App;
