import { useState, useEffect } from 'react';
import { getUsers, countUsers } from '../../app/api-client';

const UsersList: React.FC = () => {
  const users__dummies: { name: string }[] = [
    { name: 'Océane' },
    { name: 'Maxim Baby Louve' },
  ];

  const [userCount, setUserCount] = useState(0);
  const [users, setUsers] = useState(users__dummies);
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.log('ERROR', error)
        setHttpError(error)
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    countUsers()
      .then((userCount) => {
        setUserCount(userCount);
      })
      .catch((error) => {
        console.log('ERROR', error)
        setHttpError(error)
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>There is {userCount} users</h2>
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
