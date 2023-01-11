/* 
SnackBar provides brief notifications  
It provides information about the task an app has perform or will perform a
It doesn't require user interaction or user permission to disappear 
*/

import React, { useState, forwardRef } from 'react'
import { Snackbar, Button, Alert, AlertProps } from '@mui/material'

// const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>{
//     function SnackbarAlert(props, ref){
//         return <Alert elevation={6} ref={ref} {...props}></Alert>
//     }
// }

const MuiSnackBar = () => {
  const [open, setOpen] = useState(false)
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        message="Form Submitted Successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        // for placement of popup
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      />
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}> 
      < SnackbarAlert onClose={handleClose} severity='success'>
        Form submitted successfully!
      </SnackbarAlert>
      </Snackbar> */}
    </>
  )
}

export default MuiSnackBar
