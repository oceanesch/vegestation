import styles from './Input.module.css';

import { TextField, TextFieldProps } from '@mui/material';

const EmailInput: React.FC<{ emailInputRef: TextFieldProps }> = (props) => {
  return (
    <TextField
      id="email-address-input"
      variant="outlined"
      label="E-Mail Address"
      required
      type="email"
      margin="normal"
      inputRef={props.emailInputRef}
      className={styles.formInput}
    />
  );
};

export default EmailInput;
