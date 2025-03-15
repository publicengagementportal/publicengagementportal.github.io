import { FC } from 'react'
import Button from '@shared/components/Button/Button'
import { useCounterStore } from '../application/counterStore'
import './Counter.css'

const Counter: FC = () => {
  const { value, increment, decrement, reset } = useCounterStore()

  return (
    <div className="counter">
      <h2>Counter Example</h2>
      <div className="counter__value">{value}</div>
      <div className="counter__controls">
        <Button onClick={decrement} variant="secondary">
          Decrement
        </Button>
        <Button onClick={increment} variant="primary">
          Increment
        </Button>
        <Button onClick={reset} variant="outline">
          Reset
        </Button>
      </div>
    </div>
  )
}

export default Counter 