import { createContext, useEffect, useReducer, useState } from "react";
import { authReducer } from "../Reducer/AuthReducer.jsx";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loadUser, login, logout, register } from "../actions/userActions.js";

export const AuthContext = createContext();
export const AuthProivider = ({ children }) => {
  const initialAuthState = {
    user: typeof localStorage.getItem('user') === 'string' && localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : {},
    loading: false,
    isAuthenticated: false
  };


  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const userLogged = async (loginData) => {

    if (loginData.email && loginData.password !== "") {

      login(authDispatch, loginData, navigate)
    } else {
      toast.error("Please enter valid input!");
    }
  };

  const userLogout = () => {
    logout(authDispatch, navigate)
  };

  const userSignup = async (signupData) => {
    register(authDispatch, signupData, navigate)
  };

  useEffect(() => {
    // if (authState?.isAuthenticated) {
    //   navigate("/");
    // }
    if (authState.error) toast.error(authState.error);
  }, [authState.error]);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(authState?.user))
  }, [authState?.user])
  useEffect(() => {
    loadUser(authDispatch)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        userLogged,
        userLogout,
        userSignup,
        loader,
        setLoader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
