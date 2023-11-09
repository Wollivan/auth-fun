import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const admins = [
    "tim.smith@techeducators.co.uk",
    "rick.astley@techeducators.co.uk",
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isAuthenticated && (
        <div>
          <Profile />
          <LogoutButton />
        </div>
      )}
      {!isAuthenticated && <LoginButton />}

      <h1>Auth0 Demo</h1>
      <p>Wanna login?</p>

      {admins.includes(user?.email) && (
        <a href="https://tinyurl.com/4px9b9rb">Super secret admin page</a>
      )}
    </>
  );
}

export default App;
