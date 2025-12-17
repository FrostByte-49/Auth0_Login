import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) return <div className="app-container">Loading…</div>;
  if (error) return <div className="app-container">Error: {error.message}</div>;

  return (
    <div className="app-container">
      <h1>Authentication</h1>

      {isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;
