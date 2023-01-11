/* Switches are used yo toggle yje state such as on-off, day-night etc
Toggle Dark mode
*/

import React, { useState } from 'react'
import { Box, FormControlLabel, Switch } from '@mui/material'

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false)
  console.log({ checked })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    if (checked) {
      console.log('hi')
    }
  }
  return (
    <Box>
      <FormControlLabel
        label="dark mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="primary"
          />
        }
      />
    </Box>
  )
}
