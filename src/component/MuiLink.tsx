import React from 'react'

import { Stack, Link, Typography } from '@mui/material'
export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant="body2">
        Link
      </Link>
      <Link href="#" color="secondary" underline="hover">
        Link secondary
      </Link>
      {/* We can use link with typography also */}
      <Typography variant="h6">
        <Link href="#" underline="none">
          Link
        </Link>
      </Typography>
    </Stack>
  )
}
