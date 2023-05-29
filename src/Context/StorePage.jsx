import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function CartProvider({children}){
  const [ listCategories , setListCategories] = useState([])

    //for Catogries
    useEffect(()=>{
        const fetchCategories = async() => {
            try{
             const responce = await fetch("/api/categories")
             setListCategories(await responce.json())
             
             
            }
            catch(e){
               console.error(e);
            }
        };
        fetchCategories()
    },[])

  
     return(
        <AppContext.Provider value={{listCategories}}>
            {children}
        </AppContext.Provider>
    )
}

export default function useAppContext(){
    return useContext(AppContext);

}