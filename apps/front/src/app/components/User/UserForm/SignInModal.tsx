import UserForm from './UserForm';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { CreateUserBody, User } from '../../../api-client';

const SignInModal: React.FC<{ open: boolean; onClose: () => void }> = (
  props,
) => {
  const closeModalHandler = () => {
    props.onClose();
  };

  const formSubmitHandler = (user: CreateUserBody) => {
    console.log('USER', user);
  };
  return (
    <Dialog
      onClose={closeModalHandler}
      maxWidth="sm"
      fullWidth
      open={props.open}
      sx={{ alignItems: 'center' }}
    >
      <DialogTitle>Create an account</DialogTitle>
      <DialogContent>
        <UserForm onFormSubmit={formSubmitHandler} />
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
