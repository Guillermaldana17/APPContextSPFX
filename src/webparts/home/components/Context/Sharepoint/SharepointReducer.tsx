import {
    READ_MENU,
    SETLOADING,
    UPDATE_MENU,
    CREATE_MENU,
    DELETE_MENU
} from '../Type/Types'

// recibimos el initial state de la app y las action representan lo que pasamos por parametro en el dispatch
export default (state, action) => {
    // ...state lo que hace es hacer una copia exacta del state de la app para no modificar la original
    // y poder cambiarle los valores que queremos
    switch (action.type) {
        case READ_MENU:
            return {
                ...state,
                loading: false,
                label: action.payload,
            }
        
        case SETLOADING:
            return {
                ...state,
                loading: true,
                label: '...Cargando'
            }

        default:
            return state;
    }
}