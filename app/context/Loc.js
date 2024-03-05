import React,{createContext,useState} from 'react'

export const  userTrain = createContext(undefined)
export const  userLocation = createContext(undefined)



export default function Provider({children}){
    const [Tnum, setTnum] = useState({});
    const [Tlocation,setLocation] = useState('');

    return(
        <userTrain.Provider value={{Tnum,setTnum}}>
            <userLocation.Provider value={{Tlocation,setLocation}}>
                {children}
            </userLocation.Provider>
        </userTrain.Provider>
    )

}