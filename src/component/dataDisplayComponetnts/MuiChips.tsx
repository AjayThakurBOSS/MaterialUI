/* Chips alow user to enter Information,make selections, 
filter Content or TRIGGER Action
Ex- Showcasing  tags on blog post */

import React, { useState } from 'react'
import { Stack, Chip, Avatar } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'

const MuiChips = () => {
  const [chips, setChip] = useState(['chip 1', 'chip 2', 'chip 3'])
  const handleDelete = (chipToDelete: string) => {
    setChip((chips) => chips.filter((chip) => chip !== chipToDelete))
  }
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="Chip outlined"
        color="primary"
        size="small"
        variant="outlined"
        // Avatar prop
        avatar={<Avatar>A</Avatar>}
      />
      {/* By default Chip is read only but we can handle click event */}
      <Chip label="Click" color="success" onClick={() => alert('clicked')} />
      <Chip
        label="Delet"
        color="error"
        onClick={() => alert('clicked')}
        onDelete={() => alert('Delete handler called')}
      />
      {chips.map((chip) => {
        return (
          <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
        )
      })}
    </Stack>
  )
}

export default MuiChips
