import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

import './navbar.scss'

const Navbar = () => {
  return (
    <AppBar position="static" className="block">
      <Toolbar>
        <Typography variant="h2" className="navbar__title">
          Star Wars
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
