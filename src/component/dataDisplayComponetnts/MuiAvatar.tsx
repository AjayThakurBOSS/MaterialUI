// Used for data Display
import React from 'react'
import { Stack, Avatar, AvatarGroup } from '@mui/material'

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
        <Avatar sx={{ bgcolor: 'secondary.light' }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
        <Avatar sx={{ bgcolor: 'secondary.light' }}>CK</Avatar>
        <Avatar
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="Jane Doe"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/51.jpg"
          alt="JaneDoe"
        />

        {/* To  Group Avatars use AvatarGroup
        to restrict max avatar display use max={3}
        */}
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
          <Avatar sx={{ bgcolor: 'secondary.light' }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="JaneDoe"
          />
        </AvatarGroup>
      </Stack>
      {/* To make change in height width of avatar,
            use height, width in sx props
            if you want square shaped Avatar use variant='square' */}
      <Stack direction="row" spacing={2}>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}
        >
          BW
        </Avatar>
        <Avatar variant="square" sx={{ bgcolor: 'secondary.light' }}>
          CK
        </Avatar>
      </Stack>
    </Stack>
  )
}

export default MuiAvatar
