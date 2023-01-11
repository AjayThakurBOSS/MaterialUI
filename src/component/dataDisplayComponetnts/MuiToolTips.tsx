/* ToolTips displays information after hover on any text or Icons */
import React from 'react'
import { Tooltip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const MuiToolTips = () => {
  return (
    // we can control of display of Tooltip title with placement
    <Tooltip
      title="Delete"
      placement="right"
      arrow
      enterDelay={500}
      leaveDelay={200}
    >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  )
}

export default MuiToolTips
