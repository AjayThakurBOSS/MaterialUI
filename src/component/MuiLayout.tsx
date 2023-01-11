/* 
Box accepts component="" to specify different semantic elements available in HTML
use Box because it has a sx=" ", that has access to the custom theme
Box uses- MUI system property - with the help of this we can access many properties of styling
*/
/* 
Stack Component is used to manage layout in one dimension
either along horizontal or vertical direction
We can change direction with direction="roe/column/row-reverse/column-reverse"
for spacing- spacing={2/3/4/5}
padding margin etc is supported by Stack 
*/
/* 
GRID- grid is used to define 2 dimensional responsive layout.
Grid uses flexbox module under the hood
consist of 12 columns
Each item in the grid can take up one or more column as its width
Each are five breakpoints each corresponding to a certain device width.
xs for mobile device size, sm for tablet, md for laptop, lg ans xl for larger monitor.
-We can assign integer values to each breakpoint which indicates how many of the 12 available
  columns are occupied by that item when the viewport satisfies that breakpoint constraints. 
*/
/* 
Paper is used for layout design
we can control shadow by elevation, elevation={4}
*/

import React from 'react'
import { Box, Stack, Divider, Grid, Paper } from '@mui/material'

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: '32px' }} elevation={5}>
      <Stack
        sx={{ border: '1px solid' }}
        direction="row"
        spacing={3}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            // for hover effect
            '&:hover': {
              backgroundColor: 'primary.light',
            },
          }}
        >
          MuiLayout
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          // shortcut for background
          bgcolor="success.light"
          // shortcut for padding in multiple of 8px
          p={2}
        >
          Mui2
        </Box>
      </Stack>
      {/* for spacing  spacing={2}, */}
      <Grid container rowSpacing={2} columnSpacing={3}>
        {/* xs={6} - assigns 6 out of 12 columns to every larger device than mobile. 
        since 6 is half of 12, each items takes half of width available. and so on
        If we only specify xs no value assigned. then it will distribute space evenly to all.
        xs="auto" space taken only as width
        */}
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default MuiLayout
// janardhan@gdrdtechnology.com
// 9963452341
