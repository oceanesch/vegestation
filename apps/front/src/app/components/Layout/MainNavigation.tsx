import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from './logo/logo.png';
import styles from './MainNavigation.module.css';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
// import { useContext } from 'react';
// import AuthContext from '../../store/auth-context';

const MainNavigation = () => {
    // const authCtx = useContext(AuthContext);

    // const isLoggedIn = authCtx.isLoggedIn;

    return (
        <AppBar position="static">
            <ToolBar className={styles.mainNav}>
                <RouterLink to="/">
                    <img
                        alt="logo of the app"
                        src={logo}
                        className={styles.logo}
                    />
                </RouterLink>
                <Typography component="div" sx={{ flexGrow: 1 }} />
                { <Button
                    className={styles.mainNavBtn}
                    variant="contained"
                    disableElevation
                    component={RouterLink}
                    to="/login"
                >
                    Login
                </Button>}
                {/* {isLoggedIn && <Button
                    className={styles.mainNavBtn}
                    variant="contained"
                    disableElevation
                    component={RouterLink}
                    to="/login"
                >
                    Log Out
                </Button>} */}
            </ToolBar>
        </AppBar>
    );
};

export default MainNavigation;
