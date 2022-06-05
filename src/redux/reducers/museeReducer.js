
export const getAllMuseesReducer = (state = { musee: [] }, action) => {

    switch (action.type) {
        case 'GET_MUSEE_REQUEST': return {
            loading: true
        }

        case 'GET_MUSEES_SUCCESS': return {
            MUSEEs: action.payload,
            loading: false
        }
        case 'GET_MUSEES_FAILED': return {
            error: action.payload,
            loading: false
        }

        default: return state
    }

}

export const getMuseeByIdReducer=(state ={musee : []} , action)=>{

    switch (action.type) {
        case 'GET_MUSEEBYID_REQUEST': return {
            loading: true
        }

        case 'GET_MUSEEBYID_SUCCESS': return {
            MUSEE: action.payload,
            loading: false
        }
        case 'GET_MUSEEBYID_FAILED': return {
            error: action.payload,
            loading: false
        }

        default: return state
    }

}

export const addMuseeReviewReducer=(state ={} , action)=>{

    switch (action.type) {
        case 'ADD_MUSEE_REVIEW_REQUEST': return {
            loading: true
        }

        case 'ADD_MUSEE_REVIEW_SUCCESS': return {
            loading: false,
            success: true
        }
        case 'ADD_MUSEE_REVIEW_FAILED': return {
            loading: false,
            error: true
        }

        default: return state
    }

}

export const deleteMuseeReducer = (state = {musee:[]}, action) => {

    switch (action.type) 
    {

        case 'DELETE_MUSEE_REQUEST': return {
            ...state,
            loading : true
        }
        case 'DELETE_MUSEE_SUCCESS': return {
            ...state,
            loading : false,
            success : true
        }
        case 'DELETE_MUSEE_FAILED': return {
            ...state,
            loading :false,
            error : action.payload
        }

       
        default: return state;
    }};

    export const addMuseeReducer = (state = {musee:[]}, action) => {

        switch (action.type) 
        {
    
            case 'ADD_PRODUCT_REQUEST': return {
                ...state,
                loading : true
            }
            case 'ADD_PRODUCT_SUCCESS': return {
                ...state,
                loading : false,
                success : true
            }
            case 'ADD_PRODUCT_FAILED': return {
                ...state,
                loading :false,
                error : action.payload
            }
    
           
            default: return state;
        }};

        export const updateMuseeReducer = (state = {musee:[]}, action) => {

            switch (action.type) 
            {
        
                case 'UPDATE_MUSEE_REQUEST': return {
                    ...state,
                    updateloading : true
                }
                case 'UPDATE_MUSEE_SUCCESS': return {
                    ...state,
                    updateloading : false,
                    success : true
                }
                case 'UPDATE_MUSEE_FAILED': return {
                    ...state,
                    updateloading :false,
                    updateerror : action.payload
                }
        
               
                default: return state;
            }};
    