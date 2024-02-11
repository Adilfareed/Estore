import React from "react";
import { createContext } from "react";
import all_products from '../components/Assets/all_product'


export const shopcontext = createContext(null);

const ShopContextProvider= (props)=>{

    const contextvalue ={ all_products};
    return(
    <shopcontext.Provider value={contextvalue}>
            {props.children}
        </shopcontext.Provider>
    )
}
export default ShopContextProvider;