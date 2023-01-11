/* 
Breadcrumbs is a secondary navigation scheme in a website
by default / comes in between to links 
to change above / we can use separator props and we can specify the value
2. maxItem - how many of breadcrumbs you want to show(default is 8)

3. itemsAfterCollapse - it specifies how many item will be visible after collapse
4. itemsBeforeCollapse - it specifies how many item will be visible before collapse
*/
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon />}
        maxItems={2}
        itemsAfterCollapse={2}
        itemsBeforeCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text-primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs
