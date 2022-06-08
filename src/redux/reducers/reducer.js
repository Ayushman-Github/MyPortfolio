const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADDITEM":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }

        case "DLTITEM":
            const data = state.carts.filter((ele) => ele.id !== action.payload);

            return {
                ...state,
                carts: data
            }

        case "CLEAR_CART":
            if (action.type === "CLEAR_CART") {
                return {
                    ...state, carts: []
                }
            }
            break;
        default:
            return state
    }
}









// const INIT_STATE = {
//     carts: []
// };

// export const cartreducer = (state = INIT_STATE, action) => {
//     switch (action.type) {
//         case "ADDITEM":
//             const ItemIndex = state.carts.findIndex((Item) => Item.id === action.payload.id);
//             if (ItemIndex >= 0) {
//                 state.carts[ItemIndex].qnty += 1
//             }
//             else {
//                 const temp = { ...action.payload, qnty: 1 }
//                 return {
//                     ...state,
//                     carts: [...state.carts, temp]
//                 }
//             }
//             break;
//         case "DLTITEM":
//             const data = state.carts.filter((ele) => ele.id !== action.payload);

//             return {
//                 ...state,
//                 carts: data
//             }

//         default:
//             return state
//     }
// }
