import React from "react";
import { styled } from '@mui/system'; // allows us to style on the page rather than through a css file
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import comic_image from '../../assets/images/comic_image.jpg'
import { ResponsiveAppBar } from '../../components'


// interface to allow variable use with specified type into our component
interface Props {
    title: string
}

// Create Styled Components from mui system - Root, NavbarContainer etc are variables
// just ensure they are classified as a particular element as below 
const Root = styled("div")({
    padding: 0,
    margin: 0,
})

const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})
const LogoA = styled(Link)( {
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})
const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})
const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${comic_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    lineHeight: '40px',
})



// the actual component here that renders the page

export const Home = (props: Props) => {
    return(
        <Root>
            <NavbarContainer>
                <ResponsiveAppBar />
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>Enter the Universe</p>
                    <Button color="primary" variant = "contained" component={Link} to='/dashboard'>See Characters</Button>
                </MainText>
            </Main>
        </Root>
    )
}