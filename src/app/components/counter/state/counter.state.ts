export interface counterState{
    counter: number
    learning: string
}

export const initialState:counterState = {
    counter: 0,
    learning: 'ngrxStore'
}