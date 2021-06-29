import * as React from 'react';
import { useState } from 'react';
// Components
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// Styles
import { FormWrapper } from './ItemForm.styles';
import useStyles from './Modal.styles';
// Interfaces
import { AddItem } from '../interfaces/interface';

interface AddItemFormProps {
  addItem: AddItem;
}

const ItemForm: React.FC<AddItemFormProps> = ({ addItem }) => {
  const [open, setOpen] = useState(false);
  const [newItem, setNewItem] = useState('');
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  // Handle Submit so we can add items to the list
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem('');
  };

  return (
    <FormWrapper>
      <Button className='add-item-button' type='button' onClick={handleOpen}>
        Add Item
      </Button>
      <div>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <form className={classes.paper}>
              <h3 className={classes.addItemTag}>Add Item</h3>
              <input
                className={classes.inputStyle}
                type='text'
                value={newItem}
                onChange={handleChange}
              />
              <div>
                <Button
                  className={classes.buttonX}
                  variant='contained'
                  size='large'
                  onClick={handleClose}
                >
                  ✕
                </Button>
                <Button
                  className={classes.buttonV}
                  variant='contained'
                  size='large'
                  type='submit'
                  onClick={handleSubmit}
                >
                  ✓
                </Button>
              </div>
            </form>
          </Fade>
        </Modal>
      </div>
    </FormWrapper>
  );
};

export default ItemForm;
