import { createSlice } from "@reduxjs/toolkit";

const cartCourseSlice = createSlice({
    name: "cartCourse",
    initialState: {
        products: [],
        quantity:0,
        total: 0,
    },
    reducers: {
        addCourseProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;        },
    },
});

export const { addCourseProduct } = cartCourseSlice.actions;
export default cartCourseSlice.reducer;