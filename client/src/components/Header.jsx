import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setvalue] = useState()
  return (
    <div><AppBar sx={{backgroundColor:'#232F3D'}} position='sticky'>
        <Toolbar>
            <Typography><VolunteerActivismIcon/></Typography>
        </Toolbar>
        <Tabs
         sx={{ml:'auto'}}
         textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=> setvalue(val)}>
            <Tab LinkComponent={NavLink} to= "/" label = "Home"/>
            <Tab LinkComponent={NavLink} to= "/add" label = "Add Item"/>
            <Tab LinkComponent={NavLink} to ="/items" label = "Items"/>
            <Tab LinkedComponent={NavLink} to="/about"  label = "About Us"/>
        </Tabs>
        </AppBar>
    </div>
  )
}

export default Header