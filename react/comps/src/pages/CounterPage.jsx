import React, { useReducer } from "react";

import { produce } from "immer";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change_value_to_add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return state;
  }
};

const CounterPage = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(null);

  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  console.log(state);

  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: INCREMENT_COUNT });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (e) => {
    // setValueToAdd(parseInt(e.target.value) || 0);
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: parseInt(e.target.value) || 0,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({ type: ADD_VALUE_TO_COUNT });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <div className="flex items-center gap-3">
        <button onClick={increment} className="border border-gray-300">
          Increment
        </button>
        <button onClick={decrement} className="border border-gray-300">
          Decrement
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={state.valueToAdd || ""}
          onChange={handleChange}
        />
        <button type="submit" className="border border-gray-300">
          Add it!
        </button>
      </form>
    </div>
  );
};

export default CounterPage;
