import UserForm from './UserForm';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const SignInModal: React.FC<{ open: boolean; onClose: () => void }> = (
  props,
) => {
  const closeModalHandler = () => {
    props.onClose();
  };

  return (
    <Dialog onClose={closeModalHandler} open={props.open}>
      <DialogTitle>Create an account</DialogTitle>
      <UserForm />
    </Dialog>
  );
};

export default SignInModal;
