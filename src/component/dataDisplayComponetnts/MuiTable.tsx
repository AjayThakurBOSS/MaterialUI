import React from 'react'
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material'
const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label="Simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const tableData = [
  {
    id: 1,
    first_name: 'Bidget',
    last_name: 'Barden',
    email: 'bbarden0@barnesandnoble.com',
    gender: 'Female',
    ip_address: '86.207.210.242',
  },
  {
    id: 2,
    first_name: 'Winne',
    last_name: 'Gurrado',
    email: 'wgurrado1@delicious.com',
    gender: 'Female',
    ip_address: '145.91.55.7',
  },
  {
    id: 3,
    first_name: 'Eudora',
    last_name: 'Castells',
    email: 'ecastells2@nih.gov',
    gender: 'Female',
    ip_address: '126.246.205.219',
  },
  {
    id: 4,
    first_name: 'Edythe',
    last_name: 'Torresi',
    email: 'etorresi3@slashdot.org',
    gender: 'Female',
    ip_address: '66.208.226.150',
  },
  {
    id: 5,
    first_name: 'Doe',
    last_name: 'Largen',
    email: 'dlargen4@wordpress.org',
    gender: 'Female',
    ip_address: '109.71.170.1',
  },
  {
    id: 6,
    first_name: 'Ferd',
    last_name: 'Harvie',
    email: 'fharvie5@clickbank.net',
    gender: 'Male',
    ip_address: '203.17.31.194',
  },
  {
    id: 7,
    first_name: 'Bethanne',
    last_name: 'Baltzar',
    email: 'bbaltzar6@typepad.com',
    gender: 'Female',
    ip_address: '66.216.209.87',
  },
  {
    id: 8,
    first_name: 'Lavinia',
    last_name: 'Thecham',
    email: 'lthecham7@census.gov',
    gender: 'Female',
    ip_address: '117.166.74.241',
  },
  {
    id: 9,
    first_name: 'Egor',
    last_name: 'Slucock',
    email: 'eslucock8@t-online.de',
    gender: 'Male',
    ip_address: '138.63.33.176',
  },
  {
    id: 10,
    first_name: 'Nanete',
    last_name: 'Lanchbury',
    email: 'nlanchbury9@redcross.org',
    gender: 'Non-binary',
    ip_address: '31.88.211.67',
  },
]

export default MuiTable
