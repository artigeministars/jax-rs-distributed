import * as React from "react";
import { Outlet } from "react-router-dom";
import { AuthStatus } from "./Auth";

export default function Layout(){

   return (
       <><AuthStatus /><Outlet /></>
   )

}