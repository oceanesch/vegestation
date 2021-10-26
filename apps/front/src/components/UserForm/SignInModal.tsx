import UserForm from './UserForm';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

const SignInModal: React.FC<{ open: boolean; onClose: () => void }> = (
  props,
) => {
  const closeModalHandler = () => {
    props.onClose();
  };

  return (
    <Dialog
      onClose={closeModalHandler}
      maxWidth='sm'
      fullWidth
      open={props.open}
      sx={{alignItems: 'center'}}
    >
      <DialogTitle>Create an account</DialogTitle>
      <DialogContent>
        <UserForm />
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
