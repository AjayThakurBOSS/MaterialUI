/* 
it Allows user to enter text in the browser.Ex- Text field in user registration field, Checkout page etc
*/
import React from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'
import { useState } from 'react'

const MuiTextField = () => {
  const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
      {/* Text Variant 
      outlined
      filled
      standard
      */}
      <Stack spacing={4} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      {/* Size and Color Pallet
       */}
      <Stack spacing={4} direction="row">
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      {/* props of field: 
      1. required
      2. helperText
      3. type
      4. disabled - this field will be disabled/ freezed
      5. for readonly field - label="Read - only" InputProps = {{readOnly: true}}
      6. for prefixes and suffixes. We use InputAdornment props for this purpose. 
        We can use icons also in-place of prefix and suffixes
      */}
      <Stack spacing={4} direction="row">
        <TextField label="Form Input" required />
        <TextField label="Read - only" InputProps={{ readOnly: true }} />
        <TextField
          label="Password"
          required
          helperText="Do not share your password with anyone"
        />
        <TextField
          label="Password"
          type="password"
          required
          helperText="Do not share your password with anyone"
        />
        <TextField
          label="Password"
          type="password"
          required
          disabled
          helperText="Do not share your password with anyone"
        />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
      {/* Error toggle state - we achieve this with the help useState hook
      
      */}
      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? 'required' : 'Do not share your password with anyone'
          }
        />
      </Stack>
    </Stack>
  )
}

export default MuiTextField
