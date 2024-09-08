
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import "../css/components/ProgressDialog.css"
import CircularProgress from './CircleProgress';

const ProgressDialog = ({open}) => {

  return (
    <div>
      <Dialog open={open}  disableAutoFocus={true} disableEscapeKeyDown={true} disableBackdropClick = {true}>
        <DialogTitle>Loading...</DialogTitle>
        <DialogContent>
            <div className="prog-con">
                <CircularProgress/>
            </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProgressDialog;
