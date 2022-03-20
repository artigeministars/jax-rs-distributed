import IUser from "@models/user";
import { isUserAvailableAsync } from "@services/user";
import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

interface AuthContextType {
    user: Pick<IUser,"username" | "password" >,
    signin: (user: Pick<IUser,"username" | "password" >, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const AuthContext = React.createContext<AuthContextType>(null!);

export function useAuth(){
  return React.useContext(AuthContext);
}

export const AuthStatus = function AuthStatusFunction(){
const auth = useAuth();
const navigate = useNavigate();

if(!auth.user.username){
    return <p>You are not logged in.</p>
}

return (
    <p>
        welcome {auth.user.username} ! {" "}
        <button onClick={() => { auth.signout(() => navigate("/")); }} >
            Sign out
        </button>
    </p>

);

}

export function RequireAuth({children} : {children: JSX.Element}){
       const auth = useAuth();
       const location = useLocation();

       if(!auth.user.username){
           return <Navigate to="/login" state={{ from: location}} replace />;
       }

       return children;
   }

export function AuthProvider({children} : { children: React.ReactNode }) {
       const [user, setUser] = React.useState<Pick<IUser,"username" | "password" >>(null!);
       const navigate = useNavigate();

       const signin = (newUser: Pick<IUser,"username" | "password" >, callback: VoidFunction) => {
        if(isUserAvailableAsync(user)){
           return () => {setUser(newUser); callback()};
        }
           return () => navigate("/");
       }

       const signout = (callback: VoidFunction) => {
           return () => { 
               // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
               setUser(null!);
               callback();
           }
       }

       const value = {user, signin, signout};

       return <AuthContext.Provider value={value} >{ children }</AuthContext.Provider>

   }


   // taken from : https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx