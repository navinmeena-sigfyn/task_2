import React from "react";
import UserContext from "./userContext";

const UserContextProvidor = (props: any) => {
    const [user, setUser] = React.useState<any>({});
    return (
        <UserContext.Provider 
            value={{user,setUser }}>{props.children}
        </UserContext.Provider>
    );
}; 
export default UserContextProvidor;