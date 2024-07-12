import UserFinder from './components/UserFinder';
import { UserContextProvider } from './store.js/users-context';

function App() {
  return (
    <UserContextProvider>
      <div>
        {/* <Users /> */}
        <UserFinder />
      </div>
    </UserContextProvider>
  );
}

export default App;
