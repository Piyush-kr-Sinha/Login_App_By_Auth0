import "./styles.css";
import { useAuth0 } from "@auth0/auth0-react";
// import MainCont from "./Components/MainCont";
export default function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div className="App">
      <div>
        {isAuthenticated && <h3>Hello {user.name} You are logged in.</h3>}
        {isAuthenticated ? (
          <button
            onDoubleClick={(e) => {
              logout();
            }}>
            Double click to Logout
          </button>
        ) : (
          <button
            onClick={(e) => {
              loginWithRedirect();
            }}>
            Please click me to Login
          </button>
        )}
      </div>

      {/* <MainCont /> */}
    </div>
  );
}
