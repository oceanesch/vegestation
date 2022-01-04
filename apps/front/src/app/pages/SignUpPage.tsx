import styles from './SignUpPage.module.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import MainNavigation from '../components/Layout/MainNavigation';
import SignUpForm from '../components/SignUp/SignUpForm';

const SignUp = () => {
  return (
    <StyledEngineProvider injectFirst>
      <MainNavigation />
      <div>
        <Typography component="h1" className={styles.mainTitle}>
          SIGN UP
        </Typography>
        <SignUpForm />
      </div>
    </StyledEngineProvider>
  );
};

export default SignUp;
