import { createAction, props } from "@ngrx/store";

export const increment =createAction('increment');
export const decrement =createAction('decrement');
export const reset =createAction('reset')
export const customInput =createAction('customInput',props<{value:number}>());
export const changeText =createAction('changeText');


