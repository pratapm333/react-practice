import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: []
    },
    reducers:{
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state, action) => {
            //RTK - either mutate the existing state or replace a new state
            state.items.length = 0; // orginal state = []
            //or return {items : []}; this new object will be replaced with original state = { items : [] }
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;