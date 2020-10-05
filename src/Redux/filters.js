
const initialState = {
    category: null,
    sortBy: {name: "популярности", type: "rating", order: 'desc'}
}


export const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }

        default:
            return state
    }
}



export const setSortBy = (item) => {

    return {
        type: 'SET_SORT_BY',
        payload: item
    }
}

export const setCategory = (name) => {
    return {
        type: 'SET_CATEGORY',
        payload: name
    }
}