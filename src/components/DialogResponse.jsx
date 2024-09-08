import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import '../css/components/DialogResponse.css'


const DialogResponse =({open, onCloseDialog, title, content})=>{
    return(
            <div className="dia-res-main-con">
                <Dialog open={open} onClose={onCloseDialog}>
                    <div className="dia-res-title">
                        <DialogTitle>{title}</DialogTitle>
                    </div>
                    <div className="dia-res-main-con">
                        <DialogContent>{content}</DialogContent>
                    </div>
                </Dialog>
            </div>

    )
}

export default DialogResponse;