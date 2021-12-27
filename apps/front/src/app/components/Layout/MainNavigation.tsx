import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material';
import theme from '../../../theme/ThemeProvider';
import SignInModal from '../User/UserForm/SignInModal';
import { useState } from 'react';

const MainNavigation = () => {
  const [openModal, setOpenModal] = useState(false);

  const openSignInModalHandler = () => {
    setOpenModal(true);
  };

  const closeSignInModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            VegeStation
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Login</Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={openSignInModalHandler}
            >
              Sign in
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      {openModal && (
        <SignInModal open={openModal} onClose={closeSignInModalHandler} />
      )}
    </ThemeProvider>
  );
};

export default MainNavigation;
