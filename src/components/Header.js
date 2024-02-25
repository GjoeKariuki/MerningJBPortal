import { Box, styled } from '@mui/material'
import React from 'react'
import headerImage from "../images/jobimago.jpg"

const Header = () => {

    const StyledHeader = styled(Box) (({theme}) => ({
        // padding: "10px", backgroundColor: "red", minHeight: "400px"
        display: "flex",
        justifyContent: "center",
        minHeight: 400,
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: theme.palette.secondary.main
    }))
  return (
    <>
        <StyledHeader>

        </StyledHeader>
    </>
  )
}

export default Header