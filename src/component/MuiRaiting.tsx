// star rating things
/* 
Some Useful Props:
1. Precision - we can select in the multiple of precision value.
2. size-
3. icon
4. readOnly - we can set read only value, by passing the rating in initial props in setState
5. highlightSelectedOnly - only that rating will we selected whose value is passed in useState. useful when collecting feedback using emogy 
*/
import React, { useState } from 'react'
import { Box, Stack, Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
const MuiRaiting = () => {
  const [value, setValue] = useState<number | null>(null)
  console.log({ value })
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null,
  ) => {
    setValue(newValue)
  }
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderOutlinedIcon fontSize="inherit" />}
        highlightSelectedOnly
      />
    </Stack>
  )
}

export default MuiRaiting
