import React from 'react'

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material'

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/random"
          alt="inspalshimage"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text-secondary">
            It's used for building interactive user interfaces and web
            applications quickly and efficiently with significantly less code
            than you would with vanilla JavaScript.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard
