// Shopping List Interface
export interface ItemInterface {
  id: string;
  text: string;
}
// Item Form Interface
export interface ItemFormInterface {
  items: ItemInterface[];
}
// Item List Interface
export interface ItemListInterface {
  handleItemRemove: (id: string) => void;
  items: ItemInterface[];
}
// Item Props Interface
export interface ItemPropsInterface {
  handleItemRemove: (id: string) => void;
  item: ItemInterface;
}

export type AddItem = (newItem: string) => void;
