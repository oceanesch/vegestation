import { ChangeEvent, Fragment, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { CreateUserBody, User } from '../../../api-client';

export type UserFormPropsWithoutUser = {
  user: undefined;
  onFormSubmit: (user: CreateUserBody) => any;
};

export type UserFormPropsWithUser = {
  user: User;
  onFormSubmit: (user: User) => any;
};

export type UserFormProps<T extends User | undefined> = T extends undefined
  ? UserFormPropsWithoutUser
  : UserFormPropsWithUser;

const UserForm = <T extends User | undefined>(
  props: UserFormProps<T>,
): React.FunctionComponent<UserFormProps<T>> => {
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
    props.onFormSubmit({ id: props.user?.id, ...userInputs});
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
