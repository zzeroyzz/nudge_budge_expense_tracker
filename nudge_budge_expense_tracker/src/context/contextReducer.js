
const transaction =[
    {
        id:1,
    }
]

const contextReducer = (state,action) =>{
    let transaction;
    switch (key) {
        case 'DELETE_TRANSACTION':
            const transaction = state.filter((t) => t.id !=== action.payload);
            return transaction
            
        case 'ADD_TRANSACTION':
            const transaction = [action.payload, ...state]
            return transaction
        default:
            return state;
    }
}

export default contextReducer