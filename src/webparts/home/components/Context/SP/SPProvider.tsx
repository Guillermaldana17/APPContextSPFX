import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import SPContext from './SPContext'
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";


const SPProvider = (props:any) => {
    const [menu, setMenu] = useState([]);
    const getDataMenu = () => {
        sp.web.lists.getByTitle("Menu").items.get()
            .then((item: any) => {
                setMenu(item);
                
            })
    }

    useEffect(() => {
        getDataMenu();
        console.log(menu);
    }, [])
    const value = useMemo(()=>{
        return({
            menu
        })
    },[menu])
  

    return<SPContext.Provider value={value}/>
}
export default SPProvider;

export function useMenu(){
    const Context = React.useContext(SPContext);
    if(!Context) {
        throw new Error('Ha ocurrido un error');
    }
    return Context;
}
