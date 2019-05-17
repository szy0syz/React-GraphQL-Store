import React from 'react'
import { Box, Text, Heading, Image } from 'gestalt'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <Box 
    height={70} 
    color="midnight" 
    padding={1}
    shape="roundedBottom"
    display="flex"
    alignItems="center"
    justifyContent="around"
  >
    {/* Sign in link */}
    <NavLink activeClassName="active" to="/signin">
      <Text size="xl" color="white">Sign In</Text>
    </NavLink>

    {/* title and logo */}
    <NavLink activeClassName="active" exact to="/">
      <Box display="flex" alignItems="center">
        <Box marginRight={3} height={50} width={50}>
          <Image naturalHeight={1} naturalWidth={1} alt="logo" src="./icons/logo.svg"></Image>
        </Box>
        <Heading size="xs" color="orange">
          Jerry Store
        </Heading> 
      </Box>
    </NavLink>

     {/* Sign up link */}
     <NavLink activeClassName="active"  to="/signup">
      <Text size="xl" color="white">Sign Up</Text>
    </NavLink> 
  </Box>
)

export default Navbar
