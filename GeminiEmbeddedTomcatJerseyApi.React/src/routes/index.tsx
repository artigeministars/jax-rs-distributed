
import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "@components/WelcomeComponent";
import NoMatchPage from "@components/NoMatchComponent";
import Layout from "@components/LayoutComponent";
import loadable from '@loadable/component';
import { RequireAuth } from "@components/Auth";

const LoginPage = React.lazy(()=> import("@components/LoginComponent"));
const LogoutPage = loadable(()=> import("@components/LogoutComponent"));

export default function RouteComponent(){
    
    return (
    <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<WelcomePage />} />
          <Route path="/login" element={ <RequireAuth><React.Suspense fallback={<>...</>}> <LoginPage/> </React.Suspense></RequireAuth> }> </Route>
          <Route path="/logout" element={ <React.Suspense fallback={<>.....</>}> <LogoutPage /> </React.Suspense>}></Route>
          <Route path="*" element={<NoMatchPage />} />
        </Route>
    </Routes>
  
    );
}
