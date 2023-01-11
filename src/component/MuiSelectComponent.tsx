/* 
Select option is used to collect information from list of options
To select multiple value, we can use SelectProps={{
  multiple:true
}} 
and we have to make changes in useState, from string to array
*/
import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material' // using Box is optional we can use it in-place of div

export const MuiSelectComponent = () => {
  // const [country, setCountry] = useState('')
  const [countries, setCountries] = useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ countries })
    // setCountry(event.target.value as string)
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        // TextField Properties
        size="small"
        color="secondary"
        helperText="Please select your country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  )
}

//Homework is to use json file and link to get datalist
