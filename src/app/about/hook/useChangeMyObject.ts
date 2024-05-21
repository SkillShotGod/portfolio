import { useEffect } from "react"

export const useChangeMyObject =(obj: any)=>{

    useEffect(()=>{

    },[])

    return {
        ...obj,
       game: 'Albion'
    }
}