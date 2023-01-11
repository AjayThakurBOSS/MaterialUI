import React from 'react'
import { Stack, Alert, AlertTitle, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <AlertTitle>Error</AlertTitle>
      <Alert severity="error">This is an Error alert.</Alert>
      <AlertTitle>Warning</AlertTitle>
      <Alert severity="warning">This is an warning alert.</Alert>
      <AlertTitle>Info</AlertTitle>
      <Alert severity="info">This is an info alert.</Alert>
      <AlertTitle>Success</AlertTitle>
      <Alert severity="success">This is an success alert.</Alert>
      <Alert variant="outlined" severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an Error alert.
      </Alert>
      <Alert variant="outlined" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert.
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert.
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon />}
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is an success alert.
      </Alert>
    </Stack>
  )
}

export default MuiAlert
