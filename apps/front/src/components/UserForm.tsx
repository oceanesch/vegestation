import { Fragment, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UserForm: React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const submitUserFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredName = nameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;

    console.log(enteredName, enteredEmail);
  };

  return (
    <Fragment>
      <h1>USER FORM</h1>
      <form onSubmit={submitUserFormHandler}>
        <TextField
          required
          id="name"
          label="Name"
          variant="outlined"
          inputRef={nameInputRef}
        />
        <TextField
          required
          id="emailAddress"
          label="Email"
          variant="outlined"
          type="email"
          inputRef={emailInputRef}
        />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </Fragment>
  );
};

export default UserForm;
