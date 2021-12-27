import Welcome from './pages/Welcome';
import { Route } from 'react-router-dom';

export function App() {
  return (
    <Route path="/">
      <Welcome />
    </Route>
  );
}

export default App;
