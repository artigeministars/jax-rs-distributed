import Layout from "@components/LayoutComponent";
import React from "react";
import RouteComponent from "./routes";
import { AuthProvider } from "@components/Auth";

function App() {
return (
  <>
  <AuthProvider>
  <RouteComponent />
  <Layout />
  </AuthProvider>
  </>
  );
}

export default App;
