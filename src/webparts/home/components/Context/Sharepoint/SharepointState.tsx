import * as React from 'react';
import {useReducer} from 'react';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import {
    READ_MENU,
    CREATE_MENU,
    UPDATE_MENU,
    DELETE_MENU,
    SETLOADING
} from '../Type/Types'

import SharepointContext from './SharepointContext';
import SharepointReducer from './sharepointReducer';

const SharepointState = (props: any) => {
    
    const initialState = {
        label: '',
        loadingInitial: false
    }
    const [state, dispatch] = useReducer(SharepointReducer, initialState);

    const read = () => {

        setLoading();

        sp.web.lists.getByTitle("Menu").items.get()
        .then((item: any) => {
            dispatch({
                type: READ_MENU,
                payload: item
            })
        })

    }
    const setLoading = () => dispatch( {type: SETLOADING} );

    return ( 
          <SharepointContext.Provider
        value = {{
            loading: state.loading, 
            read,
            initialState:state.initialState
        }}
    >
        {props.children}
    </SharepointContext.Provider>
     );
}
 
export default SharepointState;