import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
      {/* There are 13 variant, we are going to look into 10 variant.
        
        first is header variant from h1 to h6
        Subtitle1 and subtitle 2 smaller version of  h6
        body1 and body2 as para graph.
        body2 is smaller version.
        body1 is default.
        */}
      <Typography variant="h1"> H1 heading</Typography>
      <Typography variant="h2"> H2 heading</Typography>
      <Typography variant="h3"> H3 heading</Typography>
      {/* Suppose we want h4 element as h1 element with h4 styling 
      for this we will make following changes
      gutterBottom - is used to specify the bottom margin as per element. It depends on the element. 
      by default it is false. when you specify as follow it gets applied  */}
      <Typography variant="h4" component="h1" gutterBottom>
        H4 heading
      </Typography>
      <Typography variant="h5"> H5 heading</Typography>
      <Typography variant="h6"> H6 heading</Typography>

      <Typography variant="subtitle1"> sub title 1</Typography>
      <Typography variant="subtitle2"> sub title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus laborum
        est laboriosam labore doloribus provident commodi eveniet voluptatem
        fugit, repellat tenetur ab accusantium modi similique, molestiae
        veritatis maiores aperiam. Quo quos expedita vitae repudiandae, sint
        placeat? Rem rerum vero voluptatem?
      </Typography>
      <Typography variant="body2">
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        voluptate perferendis hic neque enim rem tenetur veritatis laboriosam
        dignissimos magni quasi quia ad, placeat ex quis, minus sapiente earum
        magnam.
      </Typography>
    </div>
  )
}

export default MuiTypography
