import { Fragment, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const UserForm: React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const submitUserFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredName = nameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;

    console.log(enteredName, enteredEmail);

    fetch('http://localhost:3333/api/user', {
      method: 'POST', 
      body: JSON.stringify({
        name: enteredName, 
        email: enteredEmail
      })
    })

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
          inputRef={nameInputRef}
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
          inputRef={emailInputRef}
        />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default UserForm;
