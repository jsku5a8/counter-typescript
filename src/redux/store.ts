import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./tools/counterSlice";
import { todoReducer } from "./tools/todoSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type useAction = typeof store.dispatch;
