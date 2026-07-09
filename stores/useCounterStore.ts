import {create} from 'zustand'

// Step 1:  Describe the shape of the store (Typescirpt only - no run effect)
type CounterStore = {

    // State -- The data
    count: number

    // Actions (functions that change the data)
    increment: () => void
    decrement: () => void
    reset: () => void
}


// STEP 2:  Create the store 

export const useCounterStore = create<CounterStore>()((set)=>({
    count: 0,
    increment: ()=> set((state)=>({count: state.count + 1})),
    decrement:()=> set((state)=>({count:state.count - 1})),
    reset:()=> set({count:0})
}))