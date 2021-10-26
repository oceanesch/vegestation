import Welcome from '../pages/Welcome';
import { Route } from 'react-router-dom';

export function App() {
  // fetch('http://localhost:3333/api/user')
  //   .then(res => res.json())
  //   .then(users => console.log('USERS', users));

  return (
    <Route path="/">
      <Welcome />
    </Route>
  );
}

export default App;
