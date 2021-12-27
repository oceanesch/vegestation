import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { User } from '../../../api-client';
import PersonIcon from '@mui/icons-material/Person';

export type UserListItemProps = { user: User; onClick?: (user: User) => any };

const UserListItem: React.FC<UserListItemProps> = (props) => {
  const onClickHandler = () => {
    if (props.onClick) props.onClick(props.user);
  };

  return (
    <ListItem onClick={onClickHandler}>
      <ListItemAvatar>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText>{props.user.name}</ListItemText>
    </ListItem>
  );
};

export default UserListItem;
