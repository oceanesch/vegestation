import { useState, useEffect } from 'react';
import { getUsers } from '../../app/api-client';

const UsersList: React.FC = () => {
  const users__dummies: { name: string }[] = [
    { name: 'Océane' },
    { name: 'Maxim Baby Louve' },
  ];

  const [users, setUsers] = useState(users__dummies);
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => setHttpError(error))
      .finally(() => setIsLoading(false));
  }, [setIsLoading]);

  return (
    <div>
      {isLoading && <div>Loading</div>}
      {httpError && <div>Error</div>}
      {!isLoading && (
        <div>
          Users
          <ul>
            {users.map((user) => {
              return <li>{user.name}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UsersList;
