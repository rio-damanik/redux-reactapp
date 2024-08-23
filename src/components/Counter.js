// src/components/Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";
import "./Counter.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="title">Simple Redux Counter</h1>
      <h2>Counter: {count}</h2>
      <div className="button-container">
        <button onClick={() => dispatch(increment())} className="btn increment-btn">
          +
        </button>
        <button
          onClick={() => count > 0 && dispatch(decrement())} // Cek jika count > 0 sebelum mengurangi
          className="btn decrement-btn">
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
