import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  createUser,
  CreateUserBody,
  getUsers,
  User,
} from '../../../api-client';
import UserList from '../UserList/UserList';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import UserForm from '../UserForm/UserForm';

const UserCrud: React.FC = () => {
  /**
   * Component states
   */
  const [users, setUsers] = useState<User[]>([]);
  const [userToUpdate, setUserToUpdate] = useState<User>();
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [createModalDisplay, setCreateModalDisplay] = useState(false);
  const [updateModalDisplay, setUpdateModalDisplay] = useState(false);

  useEffect(() => {
    listUsers();
  }, []);

  const listUsers = async () => {
    const result = await getUsers();
    setUsers(result);
  };

  /**
   * Events handlers
   */
  const openCreateModalHandler = () => setCreateModalDisplay(true);
  const closeCreateModalHandler = () => setCreateModalDisplay(false);
  const openUpdateModalHandler = () => setUpdateModalDisplay(true);
  const closeUpdateModalHandler = () => setUpdateModalDisplay(false);
  const userCreateHandler = async (user: CreateUserBody) => {
    const result = await createUser(user);
    closeCreateModalHandler();
    listUsers();
    console.log('CREATE RESULT', result);
  };
  const onUserClickHandler = (user: User) => {
    console.log('CLICKED USER', user);
    setUserToUpdate(user);
    openUpdateModalHandler();
  };

  /**
   * html
   */
  return (
    <div>
      <Typography variant="h2" gutterBottom component="div">
        Users list
      </Typography>
      <Button onClick={openCreateModalHandler}>Create user</Button>
      <div>
        <UserList users={users} onUserClick={onUserClickHandler}></UserList>
      </div>

      <Dialog
        onClose={closeCreateModalHandler}
        maxWidth="sm"
        fullWidth
        open={createModalDisplay}
        sx={{ alignItems: 'center' }}
      >
        <DialogTitle>Create a user</DialogTitle>
        <DialogContent>
          <UserForm onFormSubmit={userCreateHandler} />
        </DialogContent>
      </Dialog>

      <Dialog
        onClose={closeUpdateModalHandler}
        maxWidth="sm"
        fullWidth
        open={updateModalDisplay}
        sx={{ alignItems: 'center' }}
      >
        <DialogTitle>Update a user</DialogTitle>
        <DialogContent>
          <UserForm user={userToUpdate} onFormSubmit={userCreateHandler} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserCrud;
