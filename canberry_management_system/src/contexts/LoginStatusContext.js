import{useState,createContext,useEffect} from 'react';

export const LoginStatusContext = createContext();

export const LoginProvider = props =>{


    const[token,setToken]=useState('');


    return(
        <LoginStatusContext.Provider value = {[token,setToken]}>
            {props.children}
        </LoginStatusContext.Provider>
    )
}