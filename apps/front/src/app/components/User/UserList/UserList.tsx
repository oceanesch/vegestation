import { List } from '@mui/material';
import { useState, useEffect } from 'react';
import { getUsers, countUsers, User } from '../../../api-client';
import UserListItem from '../UserListItem/UserListItem';

export type UsersListProps = {
  users: User[];
  onUserClick?: (user: User) => any;
};

const UsersList: React.FC<UsersListProps> = (props) => {
  const onClickHandler = (user: User) => {
    if (props.onUserClick)
      props.onUserClick(user);
  }

  return (
    <List>
      {props.users.map((user) => {
        return <UserListItem user={user} onClick={onClickHandler} />;
      })}
    </List>
  );
};

export default UsersList;
