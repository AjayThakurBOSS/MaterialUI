/* 

*/

import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation Speed dial"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction
        icon={<ContentCopyIcon />}
        tooltipTitle="Copy"
        tooltipOpen
      />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
    </SpeedDial>
  )
}

export default MuiSpeedDial
