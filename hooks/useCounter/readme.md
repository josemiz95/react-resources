# useCounter
This is a custom hook, that return a state with his own methods to modify it
```
export const MultipleCustomHooks = () => {
    const {counter, increment, decrement} = useCounter(1);

  return (
    <div>
        <h1>Contador: {counter}</h1>
        <hr/>
        <button className='btn btn-primary' onClick={() => decrement()} disabled={counter<=1}>Anterior</button>
        
        <button className='btn btn-primary' onClick={() => increment()}>Siguiente</button>
    </div>
  )
}

```