import { createSlice } from "@reduxjs/toolkit";

const Teamslice = createSlice({
    name: 'team',
    initialState: {
        items: [],
    },

    reducers: {
        addItem: (state,action) => {
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            state.items.pop();
        },
        clearItem: (state,action) => {
            state.items.length = 0;
        }
    }
})

export const{addItem,removeItem,clearItem} = Teamslice.actions;
export default Teamslice.reducer;