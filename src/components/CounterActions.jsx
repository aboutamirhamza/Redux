import React from 'react'
import { useDispatch } from 'react-redux'
import { increment,decrement,incrementByAmount } from '../store/features/counterSlice';

function CounterActions() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(incrementByAmount(5))}>IncrementByAmount:5</button>
    </div>
  )
}

export default CounterActions