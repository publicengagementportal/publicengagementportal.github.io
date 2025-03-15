export interface CounterState {
  value: number
  isLoading: boolean
  error: string | null
}

export class Counter {
  private _value: number

  constructor(initialValue: number = 0) {
    this._value = initialValue
  }

  get value(): number {
    return this._value
  }

  increment(): void {
    this._value += 1
  }

  decrement(): void {
    this._value -= 1
  }

  reset(): void {
    this._value = 0
  }
} 