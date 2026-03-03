import { useState } from "react";

interface User {
    id : number;
    firstname : string;
    lastname : string;
}

export const Skills2 = ({user } : { user : User}) => {
 
    const [count, setCount] = useState<number>(0)
    const [counts, setCounts] = useState<number[]>([])

    const inc = () => {
        setCount(5)
        
    }
    
    return (
        <>
         {user.firstname}
        </>
    )

}