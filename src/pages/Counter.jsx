import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../counter/counterSlice';


function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const [incrementByValue, setIncrementByValue] = useState(0);

    useEffect(() => {
        dispatch(incrementByAmount(incrementByValue))
    }, [incrementByValue]);

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>

                <input 
                    value={incrementByValue} 
                    onChange={(e) => setIncrementByValue(Number.parseInt(e.target.value))}
                />
            </div>
        </div>
    );
}

export default Counter;