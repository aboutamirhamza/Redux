# React-Redux and useContext
<h1>Simple Counter System,</h1>
<h2>React-Redux Install Use This Command</h2>

<h3>Redux Toolkit Install</h3>

```js
npm install @reduxjs/toolkit react-redux
```

```
src
    components
              Counter.jsx
```

```js
import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {
    const count = useSelector((state) => state.counter.value);
  return (
    <div><h1>Counter {count}</h1></div>
  )
}

export default Counter
```

```
src
    components
              CounterActions.jsx
```

```js
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
```

```
src
    store
          store.js
```

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice.js";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
    }
})
```

```
src
    store
          features
                  counterSlice.js
```

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState: {value: 0},

    reducers:{
        increment:(state) =>{
            state.value += 1;
        },
        decrement:(state) =>{
            state.value -= 1;
        },
        incrementByAmount:(state, action) =>{
            state.value += action.payload;
        },
    }
});


export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
```

main.jsx import this
```js
import { Provider } from 'react-redux'
import {store} from './store/store.js'
```

main.jsx
```js
<Provider store={store}>
    <App />
</Provider>
```

