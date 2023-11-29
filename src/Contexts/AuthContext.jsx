import { createContext, useEffect, useReducer, useState } from "react";
import { authReducer } from "../Reducer/AuthReducer.jsx";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { loadUser, register } from "../actions/userActions.js";

export const AuthContext = createContext();
export const AuthProivider = ({ children }) => {
  const initialAuthState = {
    user: {},
    loading: false,
    isAuthenticated: false
  };

  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const userLogged = async (loginData) => {
    if (loginData.email && loginData.password !== "") {
      try {
        const config = {
          method: "POST",
          body: JSON.stringify(loginData),
        };
        const res = await fetch("/api/auth/login", config);
        const resJson = await res.json();
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(resJson?.foundUser));
          localStorage.setItem("token", resJson?.encodedToken);
          localStorage.setItem(
            "address",
            JSON.stringify(resJson?.foundUser?.address)
          );
          authDispatch({ type: "setUser", payload: resJson?.foundUser });
          authDispatch({ type: "setToken", payload: resJson?.encodedToken });
          authDispatch({
            type: "setAddress",
            payload: resJson?.foundUser?.address,
          });
          toast.success("Login Successfully!");
          navigate(
            location?.state?.from?.pathname
              ? location?.state?.from?.pathname
              : "/"
          );
        } else {
          console.log(resJson?.errors[0]);
          toast.error(resJson?.errors[0]);
        }
      } catch (err) {
        userLogout();
        console.log(err.message);
        toast.error(err.message);
      }
    } else {
      toast.error("Please enter valid input!");
    }
  };

  const userLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("address");
    authDispatch({ type: "setUser", payload: {} });
    authDispatch({ type: "setToken", payload: "" });
    authDispatch({ type: "setAddress", payload: [] });
    toast.success("You're logged out!");
  };

  const userSignup = async (signupData) => {
    register(authDispatch, signupData)
  };

  useEffect(() => {
    if (authState?.isAuthenticated) {
      navigate("/");
    }
    if (authState.error) toast.error(authState.error);
  }, [authState?.isAuthenticated]);

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
