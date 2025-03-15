import { create } from 'zustand'
import { Counter, CounterState } from '../domain/counterModel'

interface CounterStore extends CounterState {
  increment: () => void
  decrement: () => void
  reset: () => void
}

const counter = new Counter()

export const useCounterStore = create<CounterStore>((set) => ({
  value: counter.value,
  isLoading: false,
  error: null,
  increment: () => {
    counter.increment()
    set({ value: counter.value })
  },
  decrement: () => {
    counter.decrement()
    set({ value: counter.value })
  },
  reset: () => {
    counter.reset()
    set({ value: counter.value })
  },
})) 