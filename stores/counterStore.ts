// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'
import { createJSONStorage, persist } from 'zustand/middleware'
import { create } from 'zustand'

export type CounterState = {
  count: number
}

export type CounterActions = {
  decrementCount: () => void
  incrementCount: () => void
}

export type CounterStore = CounterState & CounterActions

export const defaultInitState: CounterState = {
  count: 100
}

export const initCounterStore = (): CounterState => {
  return { count: new Date().getFullYear() }
}

export const createCounterStore = (initState: CounterState = defaultInitState) => {
  return createStore<CounterStore>()(
    persist(
      (set) => ({
        ...initState,
        decrementCount: () => set((state) => ({ count: state.count - 1 })),
        incrementCount: () => set((state) => ({ count: state.count + 1 }))
      }),
      {
        name: 'counter-store1',
        storage: createJSONStorage(() => localStorage)
      }
    )
  )
}

export const useCounterStore = create<CounterStore>()(
  persist(
    (set) => ({
      ...defaultInitState,
      decrementCount: () => set((state) => ({ count: state.count - 1 })),
      incrementCount: () => set((state) => ({ count: state.count + 1 }))
    }),
    {
      name: 'counter-store',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
