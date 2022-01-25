import { INC_COUNT,DEC_COUNT } from "./actionTypes";

export const incCount=(data)=>{
    return {type:INC_COUNT , payload:data}
}