import React, { useReducer } from "react";

//action type constants
const INCREMENT = "increment";
const USER_INPUT = "user-input";
const DECREMENT = "decrement";
const USER_SUBMIT = 'add-number-to-count'

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case USER_INPUT:
      return {
        ...state,
        number: action.payload,
      };
    case USER_SUBMIT:
        return{
            ...state,
            count: state.count + state.number,
            number: 0
        }
    default:
      return state;
  }

  // if(action.type === INCREMENT){
  //     return {
  //         ...state,
  //         count: state.count + 1

  //     }
  // }

  // if(action.type === USER_INPUT){
  //     return {
  //         ...state,
  //         number: action.payload
  //     }
  // }
  // return state
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    number: 0,
  });

  const incrementHandler = () => {
    dispatch({
      type: INCREMENT,
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: DECREMENT,
    });
  };

  const inputHandler = (e) => {
    const num = parseInt(e.target.value || "");
    dispatch({
      type: USER_INPUT,
      payload: num,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
        type: USER_SUBMIT,
    })
  };

  return (
    <div>
      <h1>Count is {state.count}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <form onSubmit={submitHandler}>
        <label>Add A Number Here</label>
        <input
          type="number"
          value={state.number || ""}
          onChange={inputHandler}
        />
        <button>Add Number!</button>
      </form>
    </div>
  );
};

export default Counter;
