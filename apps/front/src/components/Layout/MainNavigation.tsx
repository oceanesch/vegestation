import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';

const MainNavigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          VegeStation
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Login</Button>
          <Button variant="outlined" color="inherit">
            Sign in
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
