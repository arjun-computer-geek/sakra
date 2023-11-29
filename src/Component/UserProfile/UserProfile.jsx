import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import "./UserProfileStyle.css";

const UserProfile = () => {
  const { userLogout, authState } = useContext(AuthContext);
  const { name, email, role } = authState.user
  return (
    <div className="user-profile-container">
      <div className="user-profile-body">
        <p>
          <span>Name: </span> {name}
        </p>
        <p>
          <span>Email: </span>
          {email}
        </p>
        <p>
          <span>Role: </span>
          {role}
        </p>
        <button onClick={userLogout}>LogOut</button>
      </div>
    </div>
  );
};
export { UserProfile };
