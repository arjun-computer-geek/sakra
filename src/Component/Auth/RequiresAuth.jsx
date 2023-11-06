import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

const RequiresAuth = ({ children }) => {
  const { authState } = useContext(AuthContext);
  const location = useLocation();
  return authState.token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
export { RequiresAuth };
