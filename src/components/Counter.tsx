import { RootState } from "../redux/store";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAdd, handleAddByAmount } from "../redux/tools/counterSlice";

const Counter: FC = () => {
	const count = useSelector<RootState>((state) => state.counter.value);
	const dispatch = useDispatch();
	console.log(count);

	const handleIncrement = () => {
		dispatch(handleAdd());
	};

	const handleIncrementByAmount = () => {
		dispatch(handleAddByAmount(10));
	};

	return (
		<div>
			<>{count}</>
			<button onClick={handleIncrement}>add</button>
			<button onClick={handleIncrementByAmount}>plus</button>
		</div>
	);
};

export default Counter;
