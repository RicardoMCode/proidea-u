import { useState } from "react";

const useProjectState = () => {
    const [select, setSelect] = useState(null);
    return { 
        select,
        setSelect
    }
}

export default useProjectState;