import React from 'react'
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import { useState } from 'react'

const MuiButtons = () => {
  const [formats, setFormats] = useState<string[]>([])

  console.log({ formats })

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[],
  ) => {
    setFormats(updatedFormats)
  }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        {/* MUI button is of three types 
      text- it is used when you have to grab list attention in UI
      contained - when you have to grab maximum attention Ex- register, login button
      outlined  -  when you have to grab mideocre attention Ex- Cancel, Go back buttons
      */}
        Mui Button
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained"> Contained</Button>
        <Button variant="outlined"> Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>

        <Button variant="contained" color="error">
          Error
        </Button>

        <Button variant="contained" color="info">
          Info
        </Button>

        <Button variant="contained" color="warning">
          Warning
        </Button>

        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={() => alert('clicked')}
        >
          Large
        </Button>
      </Stack>

      {/* Using Icons with in button and Using Icon without text */}
      <Stack spacing={2} direction="row">
        {/* If you dont want elevation in your button use disableElevation prop
        
        If you dont want ripple effect use disableRipple
        To handle onClick={() => alert('clicked')}
        */}
        <Button variant="contained" startIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <IconButton color="success" size="medium">
          <SendIcon />
        </IconButton>
      </Stack>

      {/* Allowing the user to align item left, center or right */}
      {/* Button Group
      When we use button group we have to use props on ButtonGroup  not on individual button.
      onClick prop has to be specified on individual button.
      */}
      <Stack direction="row">
        {/* For Vertical orientation- pass prop orientation ="vertical" as bellow  */}
        <ButtonGroup variant="contained" color="success" orientation="vertical">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained" color="success">
          <Button onClick={() => alert('Left Click')}>Left</Button>
          <Button onClick={() => alert('Center Click')}>Center</Button>
          <Button onClick={() => alert('Right Click')}>Right</Button>
        </ButtonGroup>
      </Stack>
      {/* Toggle Button Groups - It can be used to display related */}
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text-formating"
          value={formats}
          onChange={handleFormatChange}
        >
          <ToggleButton value="Bold" aria-label="Bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="Italic" aria-label="Italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="Underline" aria-label="Underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      {/* To handle over all selected state of the button group as the change event.
      For that we need to import useState from react. */}
    </Stack>
  )
}

export default MuiButtons
