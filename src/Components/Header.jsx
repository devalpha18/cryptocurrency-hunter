import { AppBar, Container, makeStyles, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react'
import { useHistory } from 'react-router-dom'
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authentication/AuthModal';

const useStyles = makeStyles(() => ({
    title: {
        flex: "1",
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    }
}));

const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const { currency, setCurrency } = CryptoState();
    console.log(currency);

  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography onClick={() => history.push("/")} className={classes.title} variant='h6'>
                        Crypto Hunter
                    </Typography>
                    <Select variant='outlined' style={
                        {width: 100, height: 40, marginRight: 15}
                    }
                    onChange={(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'INR'}>INR</MenuItem>
                    </Select>
                    <AuthModal />
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
    
  )
}

export default Header