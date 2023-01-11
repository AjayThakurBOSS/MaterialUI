/* Badge component generate a badge at top right corner of its child 
for number of mail or notifications
*/
import React from 'react'
import { Stack, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={10} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="primary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary" max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary">
        <MailIcon />
      </Badge>
      {/* to hide badge use, invisible={true} */}
      <Badge variant="dot" color="primary" invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  )
}

export default MuiBadge
