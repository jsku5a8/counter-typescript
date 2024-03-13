import { createSlice } from "@reduxjs/toolkit";

interface counterSliceType {
	value: number;
}

const initialState: counterSliceType = {
	value: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		handleAdd: (state) => {
			state.value += 1;
		},

		handleAddByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { handleAdd, handleAddByAmount } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
