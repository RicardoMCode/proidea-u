import React, { useState } from "react";

const userState = {
    userId: null ,
    userEmail: null ,
    userName: "Nombre del Usuario desde el Hook",
}

const useUserState = () => {
    const [state, setState] = useState(userState);

    const addToUser = (id, mail, name) => {
        setState({
            userId: id ,
            userEmail: mail ,
            userName: name
        });
    };

    return {
        state,
        addToUser,    
    }
}

export default useUserState;