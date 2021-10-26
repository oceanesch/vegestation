import Welcome from '../pages/Welcome';
import { Route } from 'react-router-dom';

export function App() {

  fetch('/api/user')
  .then(r => r.json()).then(user => console.log(user));
  
  return (
    <Route path="/">
      <Welcome />
    </Route>
  );
}

export default App;
