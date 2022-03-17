import React from "react";
import ResponsiveAppBar from "@components/AppBarComponent";
import LabelBottomNavigation from "@components/LabelBottomNavigationComponent";
import SimpleContainer from "@components/SimpleContainerComponent";

 export default function MainWorkspace() {
     return (
 <div>
 < ResponsiveAppBar />
 <SimpleContainer >
<div>
<h2 className="App-header">React 17 and TypeScript 4 App!🚀 </h2>
</div>
</SimpleContainer>
< LabelBottomNavigation />
</div>
     );
 }