import React from "react";
import LabelBottomNavigation from "@components/LabelBottomNavigationComponent";
import SimpleContainer from "@components/SimpleContainerComponent";
import OnLoginAppBar from "@components/OnLoginAppBarComponent";
import LoginForm from '@components/forms/LoginFormComponent';

 export default function LoginPage() {
     return (

    <div>
    <OnLoginAppBar />
    <SimpleContainer >
    <div>
    <h2 className="App-header">Loggin Form! </h2>
    <LoginForm />
    </div>
    </SimpleContainer>
    < LabelBottomNavigation />
    </div>
 
     );

 }