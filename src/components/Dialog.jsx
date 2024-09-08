import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import "../css/components/Dialog.css";

const DialogComponent = ({ open, handleClose, forgetpassword, setProgessOpen}) => {
  const [inputValue, setInputValue] = useState('');
  

  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const hendleSubmit =()=>{
    console.log(inputValue);
    console.log(forgetpassword);
    setInputValue('')
    setProgessOpen(true)
    handleClose()
  }


  return (
    <>
        <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Enter the email addess</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Email"
          type="text"
          fullWidth
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
            <button className='button-dialog' onClick={handleClose}>Cancel</button>
            <button className='button-dialog' onClick={hendleSubmit}>Submit</button>
      </DialogActions>
    </Dialog>
    
    </>
  );
};

export default DialogComponent;
