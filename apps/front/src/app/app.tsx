import UserForm from '../components/UserForm';

export function App() {
  fetch('/api/user')
  .then(r => r.json()).then(user => console.log(user));
  return <UserForm />;
}

export default App;
