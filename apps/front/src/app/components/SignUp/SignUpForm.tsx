import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './SignUpForm.module.css';
import { StyledEngineProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';

import PasswordInput from '../SharedFormInputs/PasswordInput';
// import FirstNameInput from '../Shared/FirstNameInput';
// import LastNameInput from '../Shared/LastNameInput';
import EmailInput from '../SharedFormInputs/EmailInput';
import { TextFieldProps } from '@mui/material';

const SignUpForm = () => {
  const history = useHistory();

  // const firstNameInputRef = useRef();
  // const lastNameInputRef = useRef();
  const emailInputRef = useRef<TextFieldProps>();
  const passwordInputRef = useRef<TextFieldProps>();

  const signUpSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // const enteredFirstName = firstNameInputRef.current.value;
    // const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef?.current.value;
    const enteredPassword = passwordInputRef?.current.value;

    // add validation after here

    // fetch(
    //   'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDe2VlLrzxhf8f_PW46fjEuMfYRy6yDvSY',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       // firstName: enteredFirstName,
    //       // lastName: enteredLastName,
    //       email: enteredEmail,
    //       password: enteredPassword,
    //       returnSecureToken: true,
    //     }),
    //     headers: { 'Content-Type': 'application/json' },
    //   },
    // ).then((responsePayLoad) => {
    //   if (responsePayLoad.ok) {
    //     history.push('/myshelf');
    //   } else {
    //     return responsePayLoad.json().then((responseData) => {
    //       console.log(responseData);
    //       if (
    //         responseData &&
    //         responseData.error &&
    //         responseData.error.message
    //       ) {
    //         const errorMessage = responseData.error.message;
    //         alert(errorMessage);
    //       }
    //     });
    //   }
    // });

    console.log(
      // enteredFirstName,
      // enteredLastName,
      enteredEmail,
      enteredPassword,
    );
  };

  return (
    <StyledEngineProvider injectFirst>
      <form onSubmit={signUpSubmitHandler} className={styles.signUpForm}>
        {/* <Grid item>
                    <FirstNameInput firstNameInputRef={firstNameInputRef} />
                </Grid>
                <Grid item>
                    <LastNameInput lastNameInputRef={lastNameInputRef} />
                </Grid> */}

        <EmailInput emailInputRef={emailInputRef} />
        <PasswordInput passwordInputRef={passwordInputRef} />
        <Button
          variant="outlined"
          margin="normal"
          type="submit"
          className={styles.button}
        >
          Sign Up
        </Button>
      </form>
    </StyledEngineProvider>
  );
};

export default SignUpForm;
