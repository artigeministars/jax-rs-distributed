import React from "react";
import LabelBottomNavigation from "@components/LabelBottomNavigationComponent";
import SimpleContainer from "@components/SimpleContainerComponent";
import BasicAppBar from "@components/BasicAppBarComponent";

 export default function WelcomePage() {
     return (
 <div>
 < BasicAppBar />
 <SimpleContainer >
<div>
<h2 className="App-header">Welcome React 17 and TypeScript 4 App!🚀 </h2>
</div>
</SimpleContainer>
< LabelBottomNavigation />
</div>
 
     );

 }