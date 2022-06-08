export const ADD = (item) => {
    return {
        type: "ADDITEM",
        payload: item
    }
}
export const DLT = (id) => {
    return {
        type: "DLTITEM",
        payload: id
    }
}