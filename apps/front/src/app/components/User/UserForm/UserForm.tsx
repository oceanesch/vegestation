import { ChangeEvent, Fragment, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { CreateUserBody, User } from '../../../api-client';

export type UserFormPropsWithUser = {
  user?: User;
  onFormSubmit: (user: User) => any;
};

const UserForm: React.FC<UserFormPropsWithUser> = (props) => {
  const [userInputs, setUserInputs] = useState({
    name: props.user?.name || '',
    email: props.user?.email || '',
  });

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInputs((previousState) => ({
      ...previousState,
      name: event.target.value,
    }));
  };

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInputs((previousState) => ({
      ...previousState,
      email: event.target.value,
    }));
  };

  const submitUserFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(userInputs);
    props.onFormSubmit(userInputs as any as User);
  };

  return (
    <form onSubmit={submitUserFormHandler}>
      <Stack spacing={4} justifyContent="space-around">
        <TextField
          autoFocus
          margin="dense"
          fullWidth
          required
          id="name"
          label="Name"
          variant="outlined"
          value={userInputs.name}
          onChange={nameChangeHandler}
        />
        <TextField
          required
          fullWidth
          autoFocus
          margin="dense"
          id="emailAddress"
          label="Email"
          variant="outlined"
          type="email"
          value={userInputs.email}
          onChange={emailChangeHandler}
        />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default UserForm;
