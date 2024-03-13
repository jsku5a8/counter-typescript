import { createSlice } from "@reduxjs/toolkit";

interface createSliceType {
	id: number;
	name: string;
	age: number;
}

const initialState: { data: createSliceType[] } = {
	data: [],
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const newData = {
				id: Date.now(),
				name: action.payload.name,
				age: action.payload.age,
			};
			state.data.push(newData);
		},
	},
});

export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
