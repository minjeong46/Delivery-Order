import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            const existsCart = state.find(
                (item) => item.name === action.payload.name
            );
            if (existsCart) {
                existsCart.quantity += action.payload.quantity;
            } else {
                state.push(action.payload);
            }
        },
        change: (state, action) => {
            const existsCart = state.find(
                (item) => item.name === action.payload.name
            );
            if (existsCart) {
                existsCart.quantity = action.payload.quantity;
            }
        },
        remove: (state, action) => {
            return state.filter((item) => item.name !== action.payload.name);
        },
    },
});

export const { add, change, remove } = cartSlice.actions;
export default cartSlice.reducer;
